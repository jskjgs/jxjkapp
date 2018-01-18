package com.jinxin.hospHealth.controller;

import com.alibaba.fastjson.JSONObject;
import com.doraemon.base.exceptions.ShowExceptions;
import com.doraemon.base.guava.DPreconditions;
import com.doraemon.base.language.Language;
import com.doraemon.base.util.MD5Encryption;
import com.doraemon.base.util.RandomUtil;
import com.github.pagehelper.PageInfo;
import com.jinxin.hospHealth.controller.protocol.PO.UserInfoPO;
import com.jinxin.hospHealth.controller.protocol.VO.LoginInfoVO;
import com.jinxin.hospHealth.dao.models.HospUserInfo;
import com.jinxin.hospHealth.service.OtherService;
import com.jinxin.hospHealth.service.UserInfoService;
import com.jinxin.hospHealth.utils.sms.AlidayuSms;
import com.jinxin.hospHealth.utils.sms.SmsEnum;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


/**
 * Created by zbs on 2017/12/24.
 */

@RestController
@RequestMapping("/other")
@Slf4j
@Api(description = "登陆登出注册相关接口")
public class OtherController extends MyBaseController{


    @Autowired
    UserInfoService userInfoService;
    @Autowired
    OtherService otherService;
    @Autowired
    AlidayuSms alidayuSms;

    @ApiOperation(value = "发送验证码",response = LoginInfoVO.class)
    @RequestMapping(value="/sendCode", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject sendCode(
            @ApiParam(value = "电话号码", required = true) @RequestParam(value = "phone", required = true) String phone,
            @ApiParam(value = "验证码类型(0-登陆 1-注册 2-换绑手机号)", required = true) @RequestParam(value = "type", required = true) String type,
            @ApiParam(value = "新手机号码", required = false) @RequestParam(value = "newPhone", required = false) String newPhone) throws Exception {
        String dynamicCode = RandomUtil.getRandomIntByLength(6);
        String newDynamicCode = null;
        switch (type){
            case "0":
                otherService.saveDynamicCode(phone,type,dynamicCode,null,null);
                alidayuSms.sendynamicCode(phone,dynamicCode, SmsEnum.LOGIN_REGISTER.getTemplateCode());
                break;
            case "1":
                otherService.saveDynamicCode(phone,type,dynamicCode,null,null);
                alidayuSms.sendynamicCode(phone,dynamicCode, SmsEnum.LOGIN_REGISTER.getTemplateCode());
                break;
            case "2":
                newDynamicCode = RandomUtil.getRandomIntByLength(4);
                otherService.saveDynamicCode(phone,type,dynamicCode,newPhone,newDynamicCode);
                alidayuSms.sendynamicCode(phone,dynamicCode, SmsEnum.CHANGE_BUNDLE_TELEPHONE_OLD.getTemplateCode());
                alidayuSms.sendynamicCode(newPhone,newDynamicCode, SmsEnum.CHANGE_BUNDLE_TELEPHONE_NEW.getTemplateCode());
                break;
            default:
                throw new ShowExceptions(Language.get("dynamic.type-invalid"));
        }
        LoginInfoVO loginInfoVO = new LoginInfoVO();
        loginInfoVO.setCode(dynamicCode);
        loginInfoVO.setCode(newDynamicCode);
        return ResponseWrapperSuccess(loginInfoVO);
    }

    @ApiOperation(value = "通过手机-验证码登陆或注册",response = LoginInfoVO.class)
    @RequestMapping(value="/loginByCode", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject loginAndRegisterByCode(
            @ApiParam(value = "电话号码", required = true) @RequestParam(value = "phone", required = true) String phone,
            @ApiParam(value = "验证码", required = true) @RequestParam(value = "code", required = true) String code) throws Exception {
        DPreconditions.checkState(
                code.equals(otherService.getDynamicCode(phone,otherService.loginType)),
                Language.get("login.dynamic-code-error"),
                true);
        UserInfoPO userInfoPO = new UserInfoPO();
        userInfoPO.setPhone(phone);
        HospUserInfo respUserInfo =  userInfoService.selectOne(userInfoPO);
        boolean isEmpty = true;
        //用户是否存在
        if (respUserInfo == null){
            respUserInfo =  userInfoService.add(userInfoPO);;
            isEmpty = false;
        }
        String tokenCode = RandomUtil.getRandomLetterAndNum(16);
        otherService.saveToker(phone,tokenCode,respUserInfo.getId());
        LoginInfoVO loginInfoVO = new LoginInfoVO();
        loginInfoVO.setToken(tokenCode);
        loginInfoVO.setUserInfo(respUserInfo.transform());
        loginInfoVO.setEmpty(isEmpty);
        return ResponseWrapperSuccess(loginInfoVO);
    }


    @ApiOperation(value = "通过手机-密码登陆",response = LoginInfoVO.class)
    @RequestMapping(value="/loginByPasswd", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject loginAndByPasswd(
            @ApiParam(value = "电话号码", required = true) @RequestParam(value = "phone", required = true) String phone,
            @ApiParam(value = "密码", required = true) @RequestParam(value = "passwd", required = true) String passwd) throws Exception {
        UserInfoPO userInfoPO = new UserInfoPO();
        userInfoPO.setPhone(phone);
        userInfoPO.setPassword(MD5Encryption.getMD5(passwd));
        PageInfo<HospUserInfo> pageInfo = userInfoService.select(userInfoPO);
        DPreconditions.checkState(pageInfo != null && pageInfo.getList() != null && pageInfo.getList().size()>0,Language.get("login.passwd-error"),true);
        //进行登陆
        HospUserInfo respUserInfo = pageInfo.getList().get(0);
        String tokenCode = RandomUtil.getRandomLetterAndNum(16);
        otherService.saveToker(phone,tokenCode,respUserInfo.getId());
        LoginInfoVO loginInfoVO = new LoginInfoVO();
        loginInfoVO.setToken(tokenCode);
        loginInfoVO.setUserInfo(respUserInfo.transform());
        loginInfoVO.setEmpty(true);
        return ResponseWrapperSuccess(loginInfoVO);
    }

    @ApiOperation(value = "换绑手机号")
    @RequestMapping(value="/updatePhone", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject updatePhone(
            @ApiParam(value = "电话号码", required = true) @RequestParam(value = "phone", required = true) String phone,
            @ApiParam(value = "新手机号码", required = false) @RequestParam(value = "newPhone", required = true) String newPhone,
            @ApiParam(value = "原手机验证码", required = true) @RequestParam(value = "phoneCode", required = true) String phoneCode,
            @ApiParam(value = "新手机验证码", required = false) @RequestParam(value = "newPhoneCode", required = false) String newPhoneCode) throws Exception {
       // DPreconditions.checkState(code.equals(otherService.getDynamicCode(phone,otherService.loginType)),Language.get("login.dynamic-code-error"),true);

        return ResponseWrapperSuccess(null);
    }


    @ApiOperation(value = "登出")
    @RequestMapping(value="/logout", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject logout() throws Exception {
        Long id = getCurrentUserId();
        HospUserInfo hospUserInfo = userInfoService.selectOne(id);
        if(hospUserInfo != null && hospUserInfo.getPhone()!=null)
            otherService.deleteToken(hospUserInfo.getPhone());
        return ResponseWrapperSuccess(null);
    }

}
