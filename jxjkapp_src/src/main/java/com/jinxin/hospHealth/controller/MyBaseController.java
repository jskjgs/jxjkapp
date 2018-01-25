package com.jinxin.hospHealth.controller;

import com.alibaba.fastjson.JSONObject;
import com.doraemon.base.controller.BaseController;
import com.doraemon.base.controller.CodeEnum;
import com.doraemon.base.redis.RedisOperation;
import com.doraemon.base.util.UUidGenerate;
import com.jinxin.hospHealth.utils.Constant;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Configurable;
import org.springframework.beans.factory.annotation.Value;

import javax.servlet.http.HttpServletRequest;

/**
 * Created by zbs on 2017/12/12.
 */
@Configurable
public class MyBaseController extends BaseController {


    @Autowired
    RedisOperation redisOperation;

    @Value("${token.adminToken-prefix}")
    String adminTokenPrefix;
    @Value("${token.userToken-prefix}")
    String userTokenPrefix;
    @Value("${token.doctorToken-prefix}")
    String doctorTokenPrefix;
    @Value("${token.effectiveTime}")
    String effectiveTime;

    public String createToken(Long id, String tokerPrefix) throws Exception {
        String token = UUidGenerate.create();
        //放token到redis,单登
        redisOperation.usePool().set(
                tokerPrefix+token,
                String.valueOf(id));
        redisOperation.usePool().expire(
                tokerPrefix+token,
                Integer.valueOf(effectiveTime));
        redisOperation.usePool().set(
                tokerPrefix + String.valueOf(id),
                token);
        redisOperation.usePool().expire(
                tokerPrefix + String.valueOf(id),
                Integer.valueOf(effectiveTime));
        return token;
    }

    @Override
    public Long getCurrentUserId() {
        return getId(userTokenPrefix);
    }

    public Long getAdminUserId() {
        return getId(adminTokenPrefix);
    }

    private Long getId(String tokenPrefix) {
        try {
            HttpServletRequest request = getCurrentRequest();
            String token = request.getHeader(Constant.HEADER_PERMISSIONS);
            String id = redisOperation.usePool().get(tokenPrefix + token);
            return id == null
                    ? null
                    : Long.valueOf(id);
        }catch (Exception e){
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public String getToken() {
        HttpServletRequest request = getCurrentRequest();
        return request.getHeader("Authorization");
    }

    // 响应包装---成功
    public JSONObject ResponseWrapperSuccess(Object data) {
        return this.ResponseWrapper().addData(data).addMessage("ok").ExeSuccess(CodeEnum.SUCCESS.getCode());
    }

    // 响应包装---没有权限
    public JSONObject ResponseWrapperNotPermissions(String message) {
        return this.ResponseWrapper().addMessage(message).ExeFaild(CodeEnum.FAILURE_NO_PERMISSIONS.getCode());
    }

    // 响应包装---400 异常报错
    public JSONObject ResponseWrapperError(Exception e, String message) {
        return this.ResponseWrapper().addError(e).addMessage(message).ExeFaild(CodeEnum.FAILURE_ERROR.getCode());
    }

    // 响应包装---406 异常报错,显示在界面上
    public JSONObject ResponseWrapperShowError(Exception e, String message) {
        return this.ResponseWrapper().addError(e).addMessage(message).ExeFaild(CodeEnum.FAILURE_SHOW_MSG.getCode());
    }
}
