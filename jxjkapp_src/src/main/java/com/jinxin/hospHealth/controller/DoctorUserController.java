package com.jinxin.hospHealth.controller;

import com.alibaba.fastjson.JSONObject;
import com.doraemon.base.controller.bean.PageBean;
import com.doraemon.base.guava.DPreconditions;
import com.doraemon.base.language.Language;
import com.doraemon.base.redis.RedisOperation;
import com.doraemon.base.util.UUidGenerate;
import com.github.pagehelper.PageInfo;
import com.jinxin.hospHealth.controller.protocol.PO.DoctorUserInfoPO;
import com.jinxin.hospHealth.controller.protocol.VO.DoctorUserInfoVO;
import com.jinxin.hospHealth.controller.protocol.VO.LoginInfoVO;
import com.jinxin.hospHealth.dao.models.HospDoctorUserInfo;
import com.jinxin.hospHealth.service.DoctorInfoService;
import com.jinxin.hospHealth.service.DoctorUserInfoService;
import com.jinxin.hospHealth.service.OtherService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;

/**
 * Created by zbs on 2018/1/18.
 */
@RestController
@RequestMapping("/doctorUser")
@Slf4j
@Api(description = "医生端用户相关接口")
public class DoctorUserController extends TransformController{

    @Autowired
    DoctorUserInfoService doctorUserInfoService;
    @Autowired
    RedisOperation redisOperation;
    @Value("${token.userToken-effectiveTime}")
    String userTokenEffectiveTime;
    @Autowired
    OtherService otherService;


    @ApiOperation(value = "admin用户登录")
    @RequestMapping(value = "/login", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject login(
            @ApiParam(value = "手机号码", required = true) @RequestParam(value = "account", required = true) String account,
            @ApiParam(value = "密码", required = true) @RequestParam(value = "password", required = true) String password) throws Exception {
        DoctorUserInfoPO select = new DoctorUserInfoPO();
        select.setPhone(account);
        select.setPassword(password);
        HospDoctorUserInfo hospDoctorUserInfo = DPreconditions.checkNotNull(
                doctorUserInfoService.selectOne(select),
                Language.get("admin-user.login-failure"),
                true);
        String token = UUidGenerate.create();
        //放token到session
        otherService.saveToker(account,token,hospDoctorUserInfo.getId());
        return ResponseWrapperSuccess(token);
    }

    @ApiOperation(value = "新增admin用户")
    @RequestMapping(value = "/add", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject add(
            @ApiParam(value = "管理员用户信息", required = true) @RequestBody DoctorUserInfoPO doctorUserInfoPO) throws Exception {
        HospDoctorUserInfo hospDoctorUserInfo = doctorUserInfoService.add(doctorUserInfoPO);
        return ResponseWrapperSuccess(transform(hospDoctorUserInfo));
    }

    @ApiOperation(value = "查询当前admin用户自己的信息", response = DoctorUserInfoVO.class)
    @RequestMapping(value = "/", method = RequestMethod.GET)
    @ResponseBody
    public JSONObject selectOne() throws Exception {
        HospDoctorUserInfo hospDoctorUserInfo = doctorUserInfoService.selectOne(getAdminUserId());
        return ResponseWrapperSuccess(transform(hospDoctorUserInfo));
    }

    @ApiOperation(value = "查询全部用户信息", response = DoctorUserInfoVO.class)
    @RequestMapping(value = "/all", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject selectAll(
            @ApiParam(value = "分页信息", required = false)  @RequestBody(required = false) PageBean pageBean) throws Exception {
        PageInfo<HospDoctorUserInfo> pageInfo = doctorUserInfoService.selectAll(pageBean);
        return ResponseWrapperSuccess(transformByHospDoctorUserInfo(pageInfo));
    }

    @ApiOperation(value = "更新本登陆账号信息", response = DoctorUserInfoVO.class)
    @RequestMapping(value = "/update", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject update(
            @ApiParam(value = "管理员用户信息", required = true) @RequestBody DoctorUserInfoPO doctorUserInfoPO) throws Exception {
        //不能用更新方法更新用户的密码
        DPreconditions.checkState(
                doctorUserInfoPO.getPassword() != null,
                Language.get("admin-user.change-password-wrong"),
                true);
        doctorUserInfoPO.setId(getAdminUserId());
        doctorUserInfoService.update(doctorUserInfoPO);
        return ResponseWrapperSuccess(null);
    }

    @ApiOperation(value = "更改密码", response = DoctorUserInfoVO.class)
    @RequestMapping(value = "/update/password", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject permissions(
            @ApiParam(value = "新密码", required = true) @RequestParam(value = "passwordNew", required = true) String passwordNew,
            @ApiParam(value = "旧密码", required = true) @RequestParam(value = "passwordOld", required = true) String passwordOld) throws Exception {
        DoctorUserInfoPO select = new DoctorUserInfoPO();
        select.setId(getAdminUserId());
        select.setPassword(passwordOld);
        DPreconditions.checkNotNull(
                doctorUserInfoService.selectOne(select),
                Language.get("admin-user.password-not-correct"),
                true);
        DoctorUserInfoPO update = new DoctorUserInfoPO();
        update.setId(getAdminUserId());
        update.setPassword(passwordNew);
        doctorUserInfoService.update(update);
        return ResponseWrapperSuccess(null);
    }
}
