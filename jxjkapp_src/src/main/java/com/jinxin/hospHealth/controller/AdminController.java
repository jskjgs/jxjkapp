package com.jinxin.hospHealth.controller;

import com.alibaba.fastjson.JSONObject;
import com.doraemon.base.controller.bean.PageBean;
import com.doraemon.base.guava.DPreconditions;
import com.doraemon.base.language.Language;
import com.doraemon.base.redis.RedisOperation;
import com.doraemon.base.util.UUidGenerate;
import com.github.pagehelper.PageInfo;
import com.jinxin.hospHealth.controller.protocol.PO.AdminInfoPO;
import com.jinxin.hospHealth.controller.protocol.VO.AdminInfoVO;
import com.jinxin.hospHealth.dao.models.HospAdminUserInfo;
import com.jinxin.hospHealth.service.AdminUserInfoService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by zbs on 2018/1/15.
 */
@RestController
@RequestMapping("/admin")
@Slf4j
@Api(description = "admin相关接口")
public class AdminController extends TransformController {

    @Autowired
    AdminUserInfoService adminUserInfoService;
    @Autowired
    RedisOperation redisOperation;
    @Value("${token.adminToken-prefix}")
    String adminTokenPrefix;

    @ApiOperation(value = "新增admin用户")
    @RequestMapping(value = "/add", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject add(
            @ApiParam(value = "管理员用户信息", required = true) @RequestBody AdminInfoPO adminInfo) throws Exception {
        HospAdminUserInfo hospAdminUserInfo = adminUserInfoService.add(adminInfo);
        return ResponseWrapperSuccess(
                hospAdminUserInfo != null
                        ? hospAdminUserInfo
                        : null);
    }

    @ApiOperation(value = "查询当前admin用户自己的信息", response = AdminInfoVO.class)
    @RequestMapping(value = "/", method = RequestMethod.GET)
    @ResponseBody
    public JSONObject selectOne() throws Exception {
        HospAdminUserInfo hospAdminUserInfo = adminUserInfoService.selectOne(getAdminUserId());
        return ResponseWrapperSuccess(transform(hospAdminUserInfo));
    }

    @ApiOperation(value = "查询全部用户信息", response = AdminInfoVO.class)
    @RequestMapping(value = "/all", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject selectAll(
            @ApiParam(value = "分页信息", required = false) @RequestBody(required = false) PageBean pageBean) throws Exception {
        PageInfo<HospAdminUserInfo> pageInfo = adminUserInfoService.selectAll(pageBean);
        return ResponseWrapperSuccess(transformByHospAdminUserInfo(pageInfo));
    }

    @ApiOperation(value = "更新本登陆账号信息(包含权限)", response = AdminInfoVO.class)
    @RequestMapping(value = "/update", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject update(
            @ApiParam(value = "管理员用户信息", required = true) @RequestBody AdminInfoPO adminInfo) throws Exception {
        //不能用更新方法更新用户的密码
        DPreconditions.checkState(
                adminInfo.getPassword() != null,
                Language.get("admin-user.change-password-wrong"),
                true);
        adminInfo.setId(getAdminUserId());
        adminUserInfoService.update(adminInfo);
        return ResponseWrapperSuccess(null);
    }

    @ApiOperation(value = "更改密码", response = AdminInfoVO.class)
    @RequestMapping(value = "/update/password", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject permissions(
            @ApiParam(value = "新密码", required = true) @RequestParam(value = "passwordNew", required = true) String passwordNew,
            @ApiParam(value = "旧密码", required = true) @RequestParam(value = "passwordOld", required = true) String passwordOld) throws Exception {
        AdminInfoPO select = new AdminInfoPO();
        select.setId(getAdminUserId());
        select.setPassword(passwordOld);
        DPreconditions.checkNotNull(
                adminUserInfoService.selectOne(select),
                Language.get("admin-user.password-not-correct"),
                true);
        AdminInfoPO adminInfoPO = new AdminInfoPO();
        adminInfoPO.setId(getAdminUserId());
        adminInfoPO.setPassword(passwordNew);
        adminUserInfoService.update(adminInfoPO);
        return ResponseWrapperSuccess(null);
    }


    @ApiOperation(value = "软删除Doctor用户")
    @RequestMapping(value = "/setStateAsInvalid", method = RequestMethod.DELETE)
    @ResponseBody
    public JSONObject setStateAsInvalid(
            @ApiParam(value = "admin用户Id", required = true) @RequestParam(value = "id", required = true) Long id) throws Exception {
        DPreconditions.checkNotNull(
                getAdminUserId(),
                "adminId 为空",
                true);
        adminUserInfoService.setStateAsInvalid(id);
        return ResponseWrapperSuccess(null);
    }

    @ApiOperation(value = "登出")
    @RequestMapping(value = "/logout", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject logout() throws Exception {
        Long id = getAdminUserId();
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
