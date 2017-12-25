package com.jinxin.hospHealth.controller;

import com.alibaba.fastjson.JSONObject;
import com.doraemon.base.guava.DPreconditions;
import com.doraemon.base.util.RandomUtil;
import com.jinxin.hospHealth.controller.protocol.LoginInfoVO;
import com.jinxin.hospHealth.controller.protocol.UserInfoVO;
import com.jinxin.hospHealth.dao.models.HospUserInfo;
import com.jinxin.hospHealth.service.OtherService;
import com.jinxin.hospHealth.service.UserInfoService;
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

    @ApiOperation(value = "发送验证码",response = LoginInfoVO.class)
    @RequestMapping(value="/sendCode", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject sendCode(
            @ApiParam(value = "电话号码", required = true) @RequestParam(value = "phone", required = true) String phone,
            @ApiParam(value = "验证码类型(0-登陆 1-注册)", required = true) @RequestParam(value = "type", required = true) String type) throws Exception {
        String dynamicCode = RandomUtil.getRandomIntByLength(4);
        otherService.saveDynamicCode(phone,type,dynamicCode);
        //todo zhoubinshan 通过阿里大鱼发送验证码 --待做--
        LoginInfoVO loginInfoVO = new LoginInfoVO();
        loginInfoVO.setCode(dynamicCode);
        return ResponseWrapperSuccess(loginInfoVO);
    }

    @ApiOperation(value = "通过手机-验证码登陆或注册",response = LoginInfoVO.class)
    @RequestMapping(value="/loginByCode", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject loginAndRegisterByCode(
            @ApiParam(value = "电话号码", required = true) @RequestParam(value = "phone", required = true) String phone,
            @ApiParam(value = "验证码", required = true) @RequestParam(value = "code", required = true) String code) throws Exception {
        DPreconditions.checkState(code.equals(otherService.getDynamicCode(phone,otherService.loginType)),"验证码信息不对.");
        HospUserInfo userInfo = new HospUserInfo();
        userInfo.setPhone(phone);
        HospUserInfo respUserInfo =  userInfoService.selectOne(userInfo);
        boolean isEmpty = true;
        //用户是否存在
        if (respUserInfo == null){
            userInfoService.add(userInfo);
            respUserInfo = userInfo;
            isEmpty = false;
        }
        String tokenCode = RandomUtil.getRandomLetterAndNum(16);
        otherService.saveToker(phone,tokenCode,respUserInfo.getId());
        LoginInfoVO loginInfoVO = new LoginInfoVO();
        loginInfoVO.setToken(tokenCode);
        loginInfoVO.setUserInfo(new UserInfoVO(respUserInfo));
        loginInfoVO.setEmpty(isEmpty);
        return ResponseWrapperSuccess(loginInfoVO);
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
