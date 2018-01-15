package com.jinxin.hospHealth.controller;

import com.alibaba.fastjson.JSONObject;
import com.doraemon.base.controller.BaseController;
import com.doraemon.base.controller.CodeEnum;
import com.jinxin.hospHealth.service.OtherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Configurable;

import javax.servlet.http.HttpServletRequest;

/**
 * Created by zbs on 2017/12/12.
 */
@Configurable
public class MyBaseController extends BaseController {

    @Autowired
    OtherService otherService;

    @Override
    public Long getCurrentUserId() {
        HttpServletRequest request = getCurrentRequest();
        return request.getAttribute("userId") == null ? null : Long.valueOf(String.valueOf(request.getAttribute("userId")));
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
    public JSONObject ResponseWrapperError(Exception e,String message) {
        return this.ResponseWrapper().addError(e).addMessage(message).ExeFaild(CodeEnum.FAILURE_ERROR.getCode());
    }

    // 响应包装---406 异常报错,显示在界面上
    public JSONObject ResponseWrapperShowError(Exception e,String message) {
        return this.ResponseWrapper().addError(e).addMessage(message).ExeFaild(CodeEnum.FAILURE_SHOW_MSG.getCode());
    }
}
