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
public class AdminController extends MyBaseController {

    @Autowired
    AdminUserInfoService adminUserInfoService;
    @Autowired
    RedisOperation redisOperation;
    @Value("${token.userToken-effectiveTime}")
    String userTokenEffectiveTime;


    @ApiOperation(value = "admin用户登录", response = AdminInfoVO.class)
    @RequestMapping(value = "/login", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject login(
            @ApiParam(value = "手机号码", required = true) @RequestParam(value = "account", required = true) String account,
            @ApiParam(value = "密码", required = true) @RequestParam(value = "password", required = true) String password) throws Exception {
        AdminInfoPO select = new AdminInfoPO();
        select.setPhone(account);
        select.setPassword(password);
        HospAdminUserInfo hospAdminUserInfo = DPreconditions.checkNotNull(
                adminUserInfoService.selectOne(select),
                Language.get("admin-user.login-failure"),
                true);
        String token = UUidGenerate.create();
        //放token到session
        getCurrentRequest().getSession().setAttribute(token, hospAdminUserInfo.getId());
        getCurrentRequest().getSession().setMaxInactiveInterval(Integer.valueOf(userTokenEffectiveTime) / 1000);
        AdminInfoVO adminInfoVO = hospAdminUserInfo.transform();
        adminInfoVO.setToken(token);
        return ResponseWrapperSuccess(adminInfoVO);
    }

    @ApiOperation(value = "新增admin用户")
    @RequestMapping(value = "/add", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject add(
            @ApiParam(value = "管理员用户信息", required = true) @RequestBody AdminInfoPO adminInfo) throws Exception {
        HospAdminUserInfo hospAdminUserInfo = adminUserInfoService.add(adminInfo);
        return ResponseWrapperSuccess(
                hospAdminUserInfo != null
                        ? hospAdminUserInfo.transform()
                        : null);
    }

    @ApiOperation(value = "查询当前admin用户自己的信息", response = AdminInfoVO.class)
    @RequestMapping(value = "/", method = RequestMethod.GET)
    @ResponseBody
    public JSONObject selectOne() throws Exception {
        HospAdminUserInfo hospAdminUserInfo = adminUserInfoService.selectOne(getAdminUserId());
        return ResponseWrapperSuccess(
                hospAdminUserInfo != null
                        ? hospAdminUserInfo.transform()
                        : null);
    }

    @ApiOperation(value = "查询全部用户信息", response = AdminInfoVO.class)
    @RequestMapping(value = "/all", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject selectAll(
            @ApiParam(value = "分页信息", required = false)  @RequestBody(required = false) PageBean pageBean) throws Exception {
        PageInfo<HospAdminUserInfo> pageInfo = adminUserInfoService.selectAll(pageBean);
        return ResponseWrapperSuccess(transform(pageInfo));
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
        return ResponseWrapperSuccess(transform(null));
    }


    private PageInfo<AdminInfoVO> transform(PageInfo pageInfo){
        if(pageInfo == null || pageInfo.getList() == null || pageInfo.getList().size() < 1)
            return pageInfo;
        List<AdminInfoVO> adminInfoVOList = new ArrayList<>();
        for(Object object : pageInfo.getList()){
            HospAdminUserInfo hospAdminUserInfo = (HospAdminUserInfo)object;
            adminInfoVOList.add(hospAdminUserInfo.transform());
        }
        pageInfo.setList(adminInfoVOList);
        return pageInfo;
    }
}
