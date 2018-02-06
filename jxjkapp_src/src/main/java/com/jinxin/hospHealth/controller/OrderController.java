package com.jinxin.hospHealth.controller;

import com.alibaba.fastjson.JSONObject;
import com.doraemon.base.controller.bean.PageBean;
import com.doraemon.base.guava.DPreconditions;
import com.doraemon.base.language.Language;
import com.github.pagehelper.PageInfo;
import com.jinxin.hospHealth.controller.protocol.PO.OrderInfoPO;
import com.jinxin.hospHealth.controller.protocol.VO.OrderVO;
import com.jinxin.hospHealth.controller.protocol.VO.UserInfoVO;
import com.jinxin.hospHealth.dao.models.*;
import com.jinxin.hospHealth.dao.modelsEnum.OrderPayTypeEnum;
import com.jinxin.hospHealth.service.*;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by zbs on 2018/1/10.
 */
@RestController
@RequestMapping("/order")
@Slf4j
@Api(description = "订单相关接口")
public class OrderController extends TransformController {

    @Autowired
    OrderService orderService;
    @Autowired
    OrderProductController orderProductService;
    @Autowired
    UserInfoService userInfoService;
    @Autowired
    HospAreaService hospAreaService;
    @Autowired
    ProductService productService;
    @Autowired
    SkuService skuService;

    @ApiOperation(value = "查询单个订单信息", response = OrderVO.class)
    @RequestMapping(value = "/", method = RequestMethod.GET)
    @ResponseBody
    public JSONObject selectOne(
            @ApiParam(value = "订单ID", required = true) @RequestParam(value = "id", required = true) Long id) throws Exception {
        HospOrder select = new HospOrder();
        select.setUserId(DPreconditions.checkNotNull(getCurrentUserId(),
                Language.get("user.id-null"),
                true));
        select.setId(id);
        return ResponseWrapperSuccess(transform(orderService.selectOne(select)));
    }

    @ApiOperation(value = "查询该用户全部订单信息", response = OrderVO.class)
    @RequestMapping(value = "/all", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject selectAll(
            @ApiParam(value = "分页信息", required = false) @RequestBody(required = false) PageBean pageBean) throws Exception {
        OrderInfoPO orderInfoPO = new OrderInfoPO();
        orderInfoPO.setUserId(DPreconditions.checkNotNull(getCurrentUserId(),
                Language.get("user.id-null"),
                true));
        if (pageBean != null) {
            orderInfoPO.setPageNum(pageBean.getPageNum());
            orderInfoPO.setPageSize(pageBean.getPageSize());
            orderInfoPO.setField(pageBean.getField());
        }
        return ResponseWrapperSuccess(transformByHospOrder(orderService.select(orderInfoPO)));
    }

    @ApiOperation(value = "根据条件查询本用户的订单信息", response = OrderVO.class)
    @RequestMapping(value = "/query", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject select(
            @ApiParam(value = "订单信息", required = true) @RequestBody OrderInfoPO orderInfoPO) throws Exception {
        orderInfoPO.setUserId(
                DPreconditions.checkNotNull(
                        getCurrentUserId(),
                        Language.get("user.id-null"),
                        true));
        return ResponseWrapperSuccess(transformByHospOrder(orderService.select(orderInfoPO)));
    }

    @ApiOperation(value = "本用户申请订单退款")
    @RequestMapping(value = "/refund", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject refund(
            @ApiParam(value = "订单ID", required = true) @RequestParam(value = "id", required = true) Long id) throws Exception {
        HospOrder select = new HospOrder();
        select.setId(id);
        select.setUserId(
                DPreconditions.checkNotNull(
                        getCurrentUserId(),
                        Language.get("user.id-null"),
                        true));
        DPreconditions.checkNotNull(
                orderService.selectOne(select),
                Language.get("order.must-is-own-order"),
                true);
        orderService.refund(id);
        return ResponseWrapperSuccess(null);
    }


    @ApiOperation(value = "订单退款完毕 ---admin")
    @RequestMapping(value = "/admin/refundOver", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject refundOver(
            @ApiParam(value = "订单ID", required = true) @RequestParam(value = "id", required = true) Long id) throws Exception {
        Long adminUserId = DPreconditions.checkNotNull(
                getAdminUserId(),
                Language.get(""),
                true);
        orderService.refundOver(id);
        return ResponseWrapperSuccess(null);
    }

    @ApiOperation(value = "新增订单信息 ---admin")
    @RequestMapping(value = "/admin", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject add(
            @ApiParam(value = "订单信息", required = true) @RequestBody OrderInfoPO orderInfoPO) throws Exception {
        Long adminUserId = DPreconditions.checkNotNull(
                getAdminUserId(),
                "admin账号ID不能为空",
                true);
        orderInfoPO.setAdminUserId(adminUserId);
        return ResponseWrapperSuccess(transform(orderService.add(orderInfoPO)));
    }

    @ApiOperation(value = "查询单个订单信息--admin", response = OrderVO.class)
    @RequestMapping(value = "/admin", method = RequestMethod.GET)
    @ResponseBody
    public JSONObject selectOneAdmin(
            @ApiParam(value = "订单ID", required = true) @RequestParam(value = "id", required = true) Long id) throws Exception {
        return ResponseWrapperSuccess(transform(orderService.selectOneAdmin(id)));
    }

    @ApiOperation(value = "查询全部订单信息---admin", response = OrderVO.class)
    @RequestMapping(value = "/admin/all", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject selectAllAdmin(
            @ApiParam(value = "分页信息", required = false) @RequestBody(required = false) PageBean pageBean) throws Exception {
        return ResponseWrapperSuccess(transformByHospOrder(orderService.selectAllAdmin(pageBean)));
    }

    @ApiOperation(value = "根据条件查询订单信息---admin", response = OrderVO.class)
    @RequestMapping(value = "/admin/query", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject selectAdmin(
            @ApiParam(value = "订单信息", required = true) @RequestBody OrderInfoPO orderInfoPO) throws Exception {
        return ResponseWrapperSuccess(transformByHospOrder(orderService.selectAdmin(orderInfoPO)));
    }

    @ApiOperation(value = "订单信息置为无效 ---admin")
    @RequestMapping(value = "/invalid", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject setStateAsInvalid(
            @ApiParam(value = "订单ID", required = true) @RequestParam(value = "id", required = true) Long id) throws Exception {
        orderService.setStateAsInvalid(id);
        return ResponseWrapperSuccess(null);
    }

    @ApiOperation(value = "检查订单,并计算订单价格 ---admin")
    @RequestMapping(value = "/checkout", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject checkout(
            @ApiParam(value = "订单信息", required = true) @RequestBody OrderInfoPO orderInfoPO) throws Exception {
        Long adminUserId = DPreconditions.checkNotNull(
                getAdminUserId(),
                "admin账号ID不能为空",
                true);
        orderInfoPO.setAdminUserId(adminUserId);
        HospOrder hospOrder = orderService.checkOutOrder(orderInfoPO);
        return ResponseWrapperSuccess(hospOrder);
    }

    @ApiOperation(value = "余额支付接口")
    @RequestMapping(value = "/balancePay", method = RequestMethod.POST)
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

    @ApiOperation(value = "HIS支付接口")
    @RequestMapping(value = "/hisPay", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject hisPay(
            @ApiParam(value = "订单ID", required = true) @RequestParam(value = "orderId", required = true) Long orderId,
            @ApiParam(value = "用户ID", required = true) @RequestParam(value = "userId", required = true) Long userId,
            @ApiParam(value = "缴费单号", required = false) @RequestParam(value = "paymentNumber", required = false) String paymentNumber) throws Exception {
        Long adminUserId = DPreconditions.checkNotNull(
                getAdminUserId(),
                "admin账号ID不能为空",
                true);
        OrderInfoPO orderInfoPO = new OrderInfoPO();
        orderInfoPO.setId(orderId);
        if(paymentNumber == null && "".equals(paymentNumber)) {
            orderInfoPO.setPaymentType(OrderPayTypeEnum.HIS.getCode());
            orderInfoPO.setPaymentCode(DPreconditions.checkNotNullAndEmpty(paymentNumber, "his缴费单号不能为空.", true));
            orderService.pay(orderInfoPO);
        }else {
            orderInfoPO.setPaymentType(OrderPayTypeEnum.BALANCE.getCode());
            orderService.pay(orderInfoPO);
        }
        return ResponseWrapperSuccess(null);
    }

    @ApiOperation(value = "微信支付回调接口")
    @RequestMapping(value = "/wechatCallback", method = RequestMethod.POST)
    @ResponseBody
    public String wechatCallback() {
        return null;
    }

    @ApiOperation(value = "支付宝支付回调接口")
    @RequestMapping(value = "/alipayCallback", method = RequestMethod.POST)
    @ResponseBody
    public String alipayCallback() {
        return null;
    }


}
