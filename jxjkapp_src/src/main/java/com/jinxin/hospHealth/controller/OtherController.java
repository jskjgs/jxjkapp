package com.jinxin.hospHealth.controller;

import com.alibaba.fastjson.JSONObject;
import com.doraemon.base.guava.DPreconditions;
import com.doraemon.base.language.Language;
import com.doraemon.base.util.RandomUtil;
import com.jinxin.hospHealth.controller.protocol.PO.AdminInfoPO;
import com.jinxin.hospHealth.controller.protocol.PO.DoctorUserInfoPO;
import com.jinxin.hospHealth.controller.protocol.PO.UserInfoPO;
import com.jinxin.hospHealth.controller.protocol.VO.AdminInfoVO;
import com.jinxin.hospHealth.controller.protocol.VO.LoginInfoVO;
import com.jinxin.hospHealth.dao.models.HospAdminUserInfo;
import com.jinxin.hospHealth.dao.models.HospDoctorUserInfo;
import com.jinxin.hospHealth.dao.models.HospUserInfo;
import com.jinxin.hospHealth.dao.modelsEnum.DynamicTypeEnum;
import com.jinxin.hospHealth.service.AdminUserInfoService;
import com.jinxin.hospHealth.service.DoctorUserInfoService;
import com.jinxin.hospHealth.service.UserInfoService;
import com.jinxin.hospHealth.utils.sms.AlidayuSms;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;


/**
 * Created by zbs on 2017/12/24.
 */

@RestController
@RequestMapping("/other")
@Slf4j
@Api(description = "登陆登出注册相关接口")
public class OtherController extends MyBaseController {

    @Autowired
    UserInfoService userInfoService;
    @Autowired
    AdminUserInfoService adminUserInfoService;
    @Autowired
    DoctorUserInfoService doctorUserInfoService;
    @Autowired
    AlidayuSms alidayuSms;

    @ApiOperation(value = "发送验证码", response = LoginInfoVO.class)
    @RequestMapping(value = "/sendCode", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject sendCode(
            @ApiParam(value = "电话号码", required = true) @RequestParam(value = "phone", required = true) String phone,
            @ApiParam(value = "验证码类型(0-登陆/注册 1-换绑手机号)", required = true) @RequestParam(value = "type", required = true) Integer type) throws Exception {
        String dynamicCode = RandomUtil.getRandomIntByLength(4);
        redisOperation.usePool().set(DynamicTypeEnum.getByCode(type).getDesc() + "_" + phone, dynamicCode);
        redisOperation.usePool().expire(DynamicTypeEnum.getByCode(type).getDesc() + "_" + phone, Integer.valueOf(effectiveTime));
        alidayuSms.sendynamicCode(phone, dynamicCode, DynamicTypeEnum.getByCode(type).getDesc());
        return ResponseWrapperSuccess(dynamicCode);
    }

    @ApiOperation(value = "user用户通过手机-验证码登陆或注册", response = LoginInfoVO.class)
    @RequestMapping(value = "/loginByCode", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject loginAndRegisterByCode(
            @ApiParam(value = "电话号码", required = true) @RequestParam(value = "phone", required = true) String phone,
            @ApiParam(value = "验证码", required = true) @RequestParam(value = "code", required = true) String code) throws Exception {
        String dynamicCode = redisOperation.usePool().get(DynamicTypeEnum.LOGIN.getDesc() + "_" + phone);
        DPreconditions.checkState(
                code.equals(dynamicCode),
                Language.get("login.dynamic-code-error"),
                true);
        UserInfoPO userInfoPO = new UserInfoPO();
        userInfoPO.setPhone(phone);
        HospUserInfo respUserInfo = userInfoService.selectOne(userInfoPO);
        boolean isEmpty = true;
        //用户是否存在
        if (respUserInfo == null) {
            respUserInfo = userInfoService.add(userInfoPO);
            isEmpty = false;
        }
        LoginInfoVO loginInfoVO = new LoginInfoVO();
        loginInfoVO.setToken(
                createToken(
                        respUserInfo.getId(), userTokenPrefix));
        loginInfoVO.setUserInfo(respUserInfo.transform());
        loginInfoVO.setEmpty(isEmpty);
        return ResponseWrapperSuccess(loginInfoVO);
    }

    @ApiOperation(value = "admin用户登录", response = AdminInfoVO.class)
    @RequestMapping(value = "/adminLogin", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject adminLogin(
            @ApiParam(value = "手机号码", required = true) @RequestParam(value = "account", required = true) String account,
            @ApiParam(value = "密码", required = true) @RequestParam(value = "password", required = true) String password) throws Exception {
        AdminInfoPO select = new AdminInfoPO();
        select.setPhone(account);
        select.setPassword(password);
        HospAdminUserInfo hospAdminUserInfo =
                DPreconditions.checkNotNull(
                        adminUserInfoService.selectOne(select),
                        Language.get("admin-user.login-failure"),
                        true);
        LoginInfoVO loginInfoVO = new LoginInfoVO();
        loginInfoVO.setToken(
                createToken(hospAdminUserInfo.getId(),
                        adminTokenPrefix));
        return ResponseWrapperSuccess(loginInfoVO);
    }

    @ApiOperation(value = "doctor用户登录")
    @RequestMapping(value = "/doctorLogin", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject doctorLogin(
            @ApiParam(value = "手机号码", required = true) @RequestParam(value = "account", required = true) String account,
            @ApiParam(value = "密码", required = true) @RequestParam(value = "password", required = true) String password) throws Exception {
        DoctorUserInfoPO select = new DoctorUserInfoPO();
        select.setPhone(account);
        select.setPassword(password);
        HospDoctorUserInfo hospDoctorUserInfo =
                DPreconditions.checkNotNull(
                        doctorUserInfoService.selectOne(select),
                        Language.get("admin-user.login-failure"),
                        true);
        LoginInfoVO loginInfoVO = new LoginInfoVO();
        loginInfoVO.setToken(
                createToken(
                        hospDoctorUserInfo.getId(),
                        doctorTokenPrefix));
        return ResponseWrapperSuccess(loginInfoVO);
    }
}
