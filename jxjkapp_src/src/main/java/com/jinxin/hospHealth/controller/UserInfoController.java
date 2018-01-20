package com.jinxin.hospHealth.controller;

import com.alibaba.fastjson.JSONObject;
import com.doraemon.base.controller.bean.PageBean;
import com.doraemon.base.guava.DPreconditions;
import com.doraemon.base.language.Language;
import com.doraemon.base.util.MD5Encryption;
import com.jinxin.hospHealth.controller.protocol.PO.UserInfoPO;
import com.jinxin.hospHealth.controller.protocol.VO.UserInfoVO;
import com.jinxin.hospHealth.dao.models.HospUserInfo;
import com.jinxin.hospHealth.dao.modelsEnum.DynamicTypeEnum;
import com.jinxin.hospHealth.service.UserInfoService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by zbs on 2017/12/25.
 */
@RestController
@RequestMapping("/userInfo")
@Slf4j
@Api(description = "用户信息相关接口")
public class UserInfoController extends TransformController{

    @Autowired
    UserInfoService userInfoService;

    @ApiOperation(value = "新增用户信息---admin")
    @RequestMapping(value="/admin", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject add(
            @ApiParam(value = "用户信息", required = true) @RequestBody UserInfoPO userInfoPO) throws Exception {
        Map<String,Long> map = new HashMap<>();
        HospUserInfo hospUserInfo = userInfoService.add(userInfoPO);
        map.put("id",hospUserInfo.getId());
        return ResponseWrapperSuccess(null);
    }

    @ApiOperation(value = "更新用户信息")
    @RequestMapping(value="/", method = RequestMethod.PUT)
    @ResponseBody
    public JSONObject update(
            @ApiParam(value = "用户信息", required = true)  @RequestBody UserInfoPO userInfoPO) throws Exception {
        userInfoService.update(userInfoPO);
        return ResponseWrapperSuccess(null);
    }

    @ApiOperation(value = "更新用户VIP信息 升级/降级")
    @RequestMapping(value="/vip", method = RequestMethod.PUT)
    @ResponseBody
    public JSONObject updateVIP(
            @ApiParam(value = "用户ID", required = true) @RequestParam(value = "id", required = true) Long id) throws Exception {
        userInfoService.updateVip(id);
        return ResponseWrapperSuccess(null);
    }

    @ApiOperation(value = "查询单个用户信息",response = UserInfoVO.class)
    @RequestMapping(value="/", method = RequestMethod.GET)
    @ResponseBody
    public JSONObject selectOne(
            @ApiParam(value = "用户ID", required = true) @RequestParam(value = "id", required = true) Long id) throws Exception {
        return ResponseWrapperSuccess(transform(userInfoService.selectOne(id)));
    }

    @ApiOperation(value = "查询全部用户信息",response = UserInfoVO.class)
    @RequestMapping(value="/all", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject selectAll(
            @ApiParam(value = "分页信息", required = false)  @RequestBody(required = false) PageBean pageBean) throws Exception {
        return ResponseWrapperSuccess(transformByHospUserInfo(userInfoService.selectAll(pageBean)));
    }

    @ApiOperation(value = "根据条件查询用户信息",response = UserInfoVO.class)
    @RequestMapping(value="/query", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject select(
            @ApiParam(value = "商品信息", required = true)  @RequestBody UserInfoPO userInfoPO) throws Exception {
        return ResponseWrapperSuccess(transformByHospUserInfo(userInfoService.select(userInfoPO)));
    }

    @ApiOperation(value = "查询单个用户信息---admin",response = UserInfoVO.class)
    @RequestMapping(value="/admin/", method = RequestMethod.GET)
    @ResponseBody
    public JSONObject selectOneAdmin(
            @ApiParam(value = "用户ID", required = true) @RequestParam(value = "id", required = true) Long id) throws Exception {
        return ResponseWrapperSuccess(transform(userInfoService.selectOneAdmin(id)));
    }

    @ApiOperation(value = "查询全部用户信息---admin",response = UserInfoVO.class)
    @RequestMapping(value="/admin/all", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject selectAllAdmin(
            @ApiParam(value = "分页信息", required = false)  @RequestBody(required = false) PageBean pageBean) throws Exception {
        return ResponseWrapperSuccess(transformByHospUserInfo(userInfoService.selectAllAdmin(pageBean)));
    }

    @ApiOperation(value = "根据条件查询用户信息---admin",response = UserInfoVO.class)
    @RequestMapping(value="/admin/query", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject selectAdmin(
            @ApiParam(value = "商品信息", required = true)  @RequestBody UserInfoPO userInfoPO) throws Exception {
        return ResponseWrapperSuccess(transformByHospUserInfo(userInfoService.selectAdmin(userInfoPO)));
    }

    @ApiOperation(value = "删除单个用户信息")
    @RequestMapping(value="/", method = RequestMethod.DELETE)
    @ResponseBody
    public JSONObject deleteOne(
            @ApiParam(value = "用户ID", required = true) @RequestParam(value = "id", required = true) Long id) throws Exception {
        userInfoService.deleteOne(id);
        return ResponseWrapperSuccess(null);
    }
    
    @ApiOperation(value = "换绑手机号",response = UserInfoVO.class)
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
        userInfoPO.setName(phone);
        userInfoPO.setPassword(MD5Encryption.getMD5(phone));
        userInfoService.update(userInfoPO);
        return ResponseWrapperSuccess(transform(userInfoService.selectOne(userId)));
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
