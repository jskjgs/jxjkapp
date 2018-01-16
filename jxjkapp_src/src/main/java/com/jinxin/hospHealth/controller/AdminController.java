package com.jinxin.hospHealth.controller;

import com.alibaba.fastjson.JSONObject;
import com.doraemon.base.guava.DPreconditions;
import com.doraemon.base.language.Language;
import com.doraemon.base.redis.RedisOperation;
import com.doraemon.base.util.UUidGenerate;
import com.jinxin.hospHealth.controller.protocol.VO.AdminInfoVO;
import com.jinxin.hospHealth.dao.models.HospAdminUserInfo;
import com.jinxin.hospHealth.service.AdminUserInfoService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by zbs on 2018/1/15.
 */
@RestController
@RequestMapping("/admin")
@Slf4j
@Api(description = "admin相关接口")
public class AdminController extends MyBaseController{

    @Autowired
    AdminUserInfoService adminUserInfoService;
    @Autowired
    RedisOperation redisOperation;
    @Value("${token.userToken-effectiveTime}")
    String userTokenEffectiveTime;


    @ApiOperation(value = "admin用户登录",response = AdminInfoVO.class)
    @RequestMapping(value="/login", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject login(
            @ApiParam(value = "手机号码", required = true) @RequestParam(value = "account", required = true) String account,
            @ApiParam(value = "密码", required = true) @RequestParam(value = "password", required = true) String password) throws Exception {
        AdminInfoVO adminInfoVO = DPreconditions.checkNotNull(
                adminUserInfoService.selectOneByPhoneAndPassword(account,password),
                "用户不存在,请检查账号密码.",
                true);
        String token = UUidGenerate.create();
        //放token到session
        getCurrentRequest().getSession().setAttribute(token,adminInfoVO.getId());
        getCurrentRequest().getSession().setMaxInactiveInterval(Integer.valueOf(userTokenEffectiveTime)/1000);
        adminInfoVO.setToken(token);
        return ResponseWrapperSuccess(adminInfoVO);
    }

    @ApiOperation(value = "新增admin用户")
    @RequestMapping(value="/add", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject add(
            @ApiParam(value = "手机号码", required = true) @RequestParam(value = "account", required = true) String account,
            @ApiParam(value = "密码", required = true) @RequestParam(value = "password", required = true) String password,
            @ApiParam(value = "权限", required = true) @RequestParam(value = "permissions", required = true) String permissions) throws Exception {
        HospAdminUserInfo hospAdminUserInfo = new HospAdminUserInfo();
        hospAdminUserInfo.setPhone(account);
        hospAdminUserInfo.setPassword(password);
        hospAdminUserInfo.setPermissions(permissions);
        AdminInfoVO adminInfoVO = adminUserInfoService.add(hospAdminUserInfo);
        return ResponseWrapperSuccess(adminInfoVO);
    }

    @ApiOperation(value = "查询当前admin用户",response = AdminInfoVO.class)
    @RequestMapping(value="/", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject add(
            @ApiParam(value = "admin user id", required = true) @RequestParam(value = "userId", required = true) String userId) throws Exception {
        return ResponseWrapperSuccess(null);
    }
}
