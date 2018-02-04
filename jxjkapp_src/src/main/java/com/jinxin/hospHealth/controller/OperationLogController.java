package com.jinxin.hospHealth.controller;

import com.alibaba.fastjson.JSONObject;
import com.doraemon.base.controller.bean.PageBean;
import com.doraemon.base.guava.DPreconditions;
import com.github.pagehelper.PageInfo;
import com.jinxin.hospHealth.dao.models.HospAdminUserInfo;
import com.jinxin.hospHealth.dao.models.HospOperationLog;
import com.jinxin.hospHealth.dao.modelsEnum.ModuleEnum;
import com.jinxin.hospHealth.dao.modelsEnum.OperationType;
import com.jinxin.hospHealth.service.AdminUserInfoService;
import com.jinxin.hospHealth.service.OperationLogService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/log")
@Slf4j
@Api(description = "日志相关接口")
public class OperationLogController extends TransformController {

    @Autowired
    OperationLogService operationLogService;
    @Autowired
    AdminUserInfoService adminUserInfoService;

    @ApiOperation(value = "本用户充值日志查询")
    @RequestMapping(value = "/all/topUp", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject selectTopUp(
            @ApiParam(value = "分页信息", required = false) @RequestBody(required = false) PageBean pageBean) throws Exception {
        Long userId = DPreconditions.checkNotNull(
                getCurrentUserId(),
                "用户ID不能为空.",
                true);
        PageInfo<HospOperationLog> pageInfo =
                operationLogService.selectByModule(
                        pageBean,
                        userId,
                        null,
                        OperationType.USER.getCode(),
                        null,
                        ModuleEnum.PAY_ORDER.getCode());
        return ResponseWrapperSuccess(pageInfo);
    }

    @ApiOperation(value = "全部本院区用户充值日志查询")
    @RequestMapping(value = "/admin/all/topUp", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject selectAdminAllTopUp(
            @ApiParam(value = "分页信息", required = false) @RequestBody(required = false) PageBean pageBean) throws Exception {
        HospAdminUserInfo adminUserInfo = DPreconditions.checkNotNull(
                adminUserInfoService.selectOne(getAdminUserId()),
                "admin用户ID不能为空.",
                true);
        PageInfo<HospOperationLog> pageInfo =
                operationLogService.selectByModule(
                        pageBean,
                        null,
                        null,
                        OperationType.USER.getCode(),
                        adminUserInfo.getAreaId(),
                        ModuleEnum.PAY_ORDER.getCode());
        return ResponseWrapperSuccess(pageInfo);
    }


    @ApiOperation(value = "本院区全部订单支付日志查询")
    @RequestMapping(value = "/admin/all/payLog", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject selectAdminAllPayLog(
            @ApiParam(value = "分页信息", required = false) @RequestBody(required = false) PageBean pageBean
            ) throws Exception {
        HospAdminUserInfo adminUserInfo = DPreconditions.checkNotNull(
                adminUserInfoService.selectOne(getAdminUserId()),
                "admin用户ID不能为空.",
                true);
        PageInfo<HospOperationLog> pageInfo =
                operationLogService.selectByModule(
                        pageBean,
                        null,
                        null,
                        OperationType.USER.getCode(),
                        adminUserInfo.getAreaId(),
                        ModuleEnum.PAY_ORDER.getCode());
        return ResponseWrapperSuccess(pageInfo);
    }
}
