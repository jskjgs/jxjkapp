package com.jinxin.hospHealth.controller;

import com.alibaba.fastjson.JSONObject;
import com.doraemon.base.guava.DPreconditions;
import com.doraemon.base.language.Language;
import com.doraemon.base.util.RandomUtil;
import com.jinxin.hospHealth.controller.protocol.PO.UserInfoPO;
import com.jinxin.hospHealth.controller.protocol.VO.LoginInfoVO;
import com.jinxin.hospHealth.dao.models.HospUserInfo;
import com.jinxin.hospHealth.dao.modelsEnum.DynamicTypeEnum;
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
    AlidayuSms alidayuSms;
    @Value("${token.userToken-prefix}")
    String userTokenPrefix;
    @Value("${dynamic.effectiveTime}")
    String effectiveTime;

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

    @ApiOperation(value = "通过手机-验证码登陆或注册", response = LoginInfoVO.class)
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

    @ApiOperation(value = "换绑手机号")
    @RequestMapping(value = "/updatePhone", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject updatePhone(
            @ApiParam(value = "新手机号码", required = false) @RequestParam(value = "phone", required = true) String phone,
            @ApiParam(value = "新手机验证码", required = true) @RequestParam(value = "code", required = true) String code) throws Exception {
        Long userId = DPreconditions.checkNotNull(
                getCurrentUserId(),
                "用户ID不能为空.",
                true);
        String dynamicCode = redisOperation.usePool().get(DynamicTypeEnum.UPDATE_PHONE.getDesc() + "_"+phone);
        DPreconditions.checkState(
                code.equals(dynamicCode),
                Language.get("login.dynamic-code-error"),
                true);
        UserInfoPO userInfoPO = new UserInfoPO();
        userInfoPO.setId(userId);
        userInfoPO.setPhone(phone);
        userInfoService.update(userInfoPO);
        return ResponseWrapperSuccess(null);
    }

    @ApiOperation(value = "登出")
    @RequestMapping(value = "/logout", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject logout() throws Exception {
        Long id = getCurrentUserId();
        String toker = DPreconditions.checkNotNullAndEmpty(
                getToken(),
                "toker不能为空.",
                true);
        DPreconditions.checkNotNull(
                userInfoService.selectOne(id),
                "用户没有查询到.",
                true);
        redisOperation.usePool().del(userTokenPrefix+toker);
        redisOperation.usePool().del(userTokenPrefix+id);
        return ResponseWrapperSuccess(null);
    }

}
