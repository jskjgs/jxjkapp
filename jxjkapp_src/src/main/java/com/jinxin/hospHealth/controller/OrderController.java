package com.jinxin.hospHealth.controller;

import com.alibaba.fastjson.JSONObject;
import com.doraemon.base.controller.bean.PageBean;
import com.jinxin.hospHealth.controller.protocol.PO.OrderInfoPO;
import com.jinxin.hospHealth.dao.models.HospOrder;
import com.jinxin.hospHealth.dao.modelsEnum.OrderPayTypeEnum;
import com.jinxin.hospHealth.service.OrderProductService;
import com.jinxin.hospHealth.service.OrderService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.HashMap;
import java.util.Map;

/**
 * Created by zbs on 2018/1/10.
 */
@RestController
@RequestMapping("/order")
@Slf4j
@Api(description = "订单相关接口")
public class OrderController extends MyBaseController {

    @Autowired
    OrderService orderService;
    @Autowired
    OrderProductService orderProductService;

    @ApiOperation(value = "新增订单信息")
    @RequestMapping(value="/", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject add(
            @ApiParam(value = "订单信息", required = true) @RequestBody OrderInfoPO orderInfoPO) throws Exception {
        return ResponseWrapperSuccess(orderService.add(orderInfoPO));
    }

    @ApiOperation(value = "查询单个订单信息",response = HospOrder.class)
    @RequestMapping(value="/", method = RequestMethod.GET)
    @ResponseBody
    public JSONObject selectOne(
            @ApiParam(value = "订单ID", required = true) @RequestParam(value = "id", required = true) Long id) throws Exception {
        return ResponseWrapperSuccess(orderService.selectOne(id));
    }

    @ApiOperation(value = "查询全部订单信息",response = HospOrder.class)
    @RequestMapping(value="/all", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject selectAll(
            @ApiParam(value = "分页信息", required = false)  @RequestBody(required = false) PageBean pageBean) throws Exception {
        return ResponseWrapperSuccess(orderService.selectAll(pageBean));
    }

    @ApiOperation(value = "根据条件查询订单信息",response = HospOrder.class)
    @RequestMapping(value="/query", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject select(
            @ApiParam(value = "订单信息", required = true)  @RequestBody OrderInfoPO orderInfoPO) throws Exception {
        return ResponseWrapperSuccess(orderService.select(orderInfoPO));
    }

    @ApiOperation(value = "查询单个订单信息--admin",response = HospOrder.class)
    @RequestMapping(value="/admin/", method = RequestMethod.GET)
    @ResponseBody
    public JSONObject selectOneAdmin(
            @ApiParam(value = "订单ID", required = true) @RequestParam(value = "id", required = true) Long id) throws Exception {
        return ResponseWrapperSuccess(orderService.selectOneAdmin(id));
    }

    @ApiOperation(value = "查询全部订单信息---admin",response = HospOrder.class)
    @RequestMapping(value="/admin/all", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject selectAllAdmin(
            @ApiParam(value = "分页信息", required = false)  @RequestBody(required = false) PageBean pageBean) throws Exception {
        return ResponseWrapperSuccess(orderService.selectAllAdmin(pageBean));
    }

    @ApiOperation(value = "根据条件查询订单信息---admin",response = HospOrder.class)
    @RequestMapping(value="/admin/query", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject selectAdmin(
            @ApiParam(value = "订单信息", required = true)  @RequestBody OrderInfoPO orderInfoPO) throws Exception {
        return ResponseWrapperSuccess(orderService.selectAdmin(orderInfoPO));
    }

    @ApiOperation(value = "订单信息置为无效")
    @RequestMapping(value="/invalid", method = RequestMethod.DELETE)
    @ResponseBody
    public JSONObject setStateAsInvalid(
            @ApiParam(value = "订单ID", required = true) @RequestParam(value = "id", required = true) Long id) throws Exception {
        orderService.setStateAsInvalid(id);
        return ResponseWrapperSuccess(null);
    }

    @ApiOperation(value = "订单申请退款")
    @RequestMapping(value="/refund", method = RequestMethod.DELETE)
    @ResponseBody
    public JSONObject refund(
            @ApiParam(value = "订单ID", required = true) @RequestParam(value = "id", required = true) Long id) throws Exception {
        orderService.refund(id);
        return ResponseWrapperSuccess(null);
    }

    @ApiOperation(value = "余额支付接口")
    @RequestMapping(value="/balancePay", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject balancePay(
            @ApiParam(value = "订单ID", required = true) @RequestParam(value = "id", required = true) Long id,
            @ApiParam(value = "支付的金额", required = true) @RequestParam(value = "amount", required = true) double amount) throws Exception {
        OrderInfoPO orderInfoPO = new OrderInfoPO();
        orderInfoPO.setId(id);
        orderInfoPO.setAmount(BigDecimal.valueOf(amount));
        orderInfoPO.setPaymentType(OrderPayTypeEnum.BALANCE.getCode());
        orderService.pay(orderInfoPO);
        return ResponseWrapperSuccess(null);
    }

    @ApiOperation(value = "微信支付回调接口")
    @RequestMapping(value="/wechatCallback", method = RequestMethod.POST)
    @ResponseBody
    public String wechatCallback(){
        return null;
    }

    @ApiOperation(value = "支付宝支付回调接口")
    @RequestMapping(value="/alipayCallback", method = RequestMethod.POST)
    @ResponseBody
    public String alipayCallback(){
        return null;
    }
}
