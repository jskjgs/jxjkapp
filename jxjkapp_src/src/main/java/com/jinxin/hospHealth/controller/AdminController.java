package com.jinxin.hospHealth.controller;

import com.alibaba.fastjson.JSONObject;
import com.doraemon.base.guava.DPreconditions;
import com.doraemon.base.language.Language;
import com.jinxin.hospHealth.dao.models.HospAdminUserInfo;
import com.jinxin.hospHealth.service.AdminUserInfoService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

    @ApiOperation(value = "admin用户登录")
    @RequestMapping(value="/login", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject login(
            @ApiParam(value = "手机号码", required = true) @RequestParam(value = "account", required = true) String account,
            @ApiParam(value = "密码", required = true) @RequestParam(value = "password", required = true) String password) throws Exception {
        DPreconditions.checkNotNull(adminUserInfoService.selectOneByPhoneAndPassword(account,password),
                "用户不存在,请检查账号密码.",
                true);
        return ResponseWrapperSuccess(null);
    }

    @ApiOperation(value = "新增admin用户")
    @RequestMapping(value="/add", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject add(
            @ApiParam(value = "手机号码", required = true) @RequestParam(value = "account", required = true) String account,
            @ApiParam(value = "密码", required = true) @RequestParam(value = "password", required = true) String password) throws Exception {
        HospAdminUserInfo hospAdminUserInfo = new HospAdminUserInfo();
        hospAdminUserInfo.setPhone(account);
        hospAdminUserInfo.setPassword(password);
        adminUserInfoService.add(hospAdminUserInfo);
        return ResponseWrapperSuccess(null);
    }
}
