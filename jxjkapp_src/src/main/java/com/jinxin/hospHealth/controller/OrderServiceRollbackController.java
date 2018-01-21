package com.jinxin.hospHealth.controller;

import com.alibaba.fastjson.JSONObject;
import com.doraemon.base.controller.bean.PageBean;
import com.doraemon.base.guava.DPreconditions;
import com.jinxin.hospHealth.controller.protocol.VO.OrderServiceDetailsVO;
import com.jinxin.hospHealth.controller.protocol.VO.OrderServiceRollbackVO;
import com.jinxin.hospHealth.dao.models.HospOrder;
import com.jinxin.hospHealth.dao.models.HospOrderProduct;
import com.jinxin.hospHealth.dao.models.HospOrderServiceDetails;
import com.jinxin.hospHealth.service.OrderServiceRollbackService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * Created by zbs on 2018/1/21.
 */
@RestController
@RequestMapping("/orderServiceRollback")
@Slf4j
@Api(description = "订单服务回退详情相关接口")
public class OrderServiceRollbackController extends TransformController {

    @Autowired
    OrderServiceRollbackService orderServiceRollbackService;

    @ApiOperation(value = "查询单个订单服务回退相关详情", response = OrderServiceRollbackVO.class)
    @RequestMapping(value = "/", method = RequestMethod.GET)
    @ResponseBody
    public JSONObject selectOne(
            @ApiParam(value = "订单服务 ID", required = true) @RequestParam(value = "id", required = true) Long orderServiceId) throws Exception {
        Long userId = getCurrentUserId();
        HospOrderServiceDetails hospOrderServiceDetails =
                DPreconditions.checkNotNull(
                        orderServiceDetailsService.selectOne(orderServiceId),
                        "该服务订单详情未查询到.",
                        true);
        HospOrderProduct hospOrderProduct =
                DPreconditions.checkNotNull(
                        orderProductService.selectOne(hospOrderServiceDetails.getOrderProductId()),
                        "该服务商品详情未查询到",
                        true);
        HospOrder hospOrder =
                DPreconditions.checkNotNull(
                        orderService.selectOne(hospOrderProduct.getOrderId()),
                        "该订单详情未查询到",
                        true);
        DPreconditions.checkState(hospOrder.getUserId() == userId,
                "只能查询自己的订单服务回退相关详情",
                true);
        return ResponseWrapperSuccess(transform(orderServiceRollbackService.selectOne(orderServiceId)));
    }

    @ApiOperation(value = "查询单个订单服务回退相关详情 ---admin", response = OrderServiceRollbackVO.class)
    @RequestMapping(value = "/admin", method = RequestMethod.GET)
    @ResponseBody
    public JSONObject selectOneAdmin(
            @ApiParam(value = "订单服务 ID", required = true) @RequestParam(value = "id", required = true) Long orderServiceId) throws Exception {
        return ResponseWrapperSuccess(transform(orderServiceRollbackService.selectOneAdmin(orderServiceId)));
    }

    @ApiOperation(value = "查询全部订单服务回退相关详情 --admin", response = OrderServiceRollbackVO.class)
    @RequestMapping(value = "/admin/all", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject selectAllAdmin(
            @ApiParam(value = "分页信息", required = false) @RequestBody(required = false) PageBean pageBean) throws Exception {
        return ResponseWrapperSuccess(transformByHospOrderServiceRollback(orderServiceRollbackService.selectAllAdmin(pageBean)));
    }
}
