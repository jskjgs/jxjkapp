package com.jinxin.hospHealth.controller;

import com.alibaba.fastjson.JSONObject;
import com.doraemon.base.controller.BaseController;
import com.doraemon.base.controller.bean.PageBean;
import com.doraemon.base.guava.DPreconditions;
import com.doraemon.base.language.Language;
import com.github.pagehelper.PageInfo;
import com.jinxin.hospHealth.controller.protocol.PO.OrderProductPO;
import com.jinxin.hospHealth.controller.protocol.PO.OrderServiceDetailsPO;
import com.jinxin.hospHealth.controller.protocol.VO.*;
import com.jinxin.hospHealth.dao.models.*;
import com.jinxin.hospHealth.service.*;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.*;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by zbs on 2018/1/17.
 */
@RestController
@RequestMapping("/orderProduct")
@Slf4j
@Api(description = "订单商品详情相关接口")
public class OrderProductController extends TransformController{

    @Autowired
    DoctorInfoService doctorInfoService;
    @Autowired
    DoctorTypeService doctorTypeService;
    @Autowired
    HospAreaService doctorAreaService;
    @Autowired
    OrderProductService orderProductService;
    @Autowired
    SkuService skuService;
    @Autowired
    ProductService productService;
    @Autowired
    ProductTypeService productTypeService;

    @ApiOperation(value = "更新订单服务详情信息")
    @RequestMapping(value = "/", method = RequestMethod.PUT)
    @ResponseBody
    public JSONObject update(
            @ApiParam(value = "订单服务详情 信息", required = true) @RequestBody OrderProductPO orderProductPO) throws Exception {
        orderProductService.update(orderProductPO);
        return ResponseWrapperSuccess(null);
    }

    @ApiOperation(value = "订单商品退款 -- admin")
    @RequestMapping(value = "/refundment", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject refundment(
            @ApiParam(value = "订单服务详情 信息", required = true) @RequestBody OrderProductPO orderProductPO) throws Exception {
        Long adminUserId = getAdminUserId();
        if(orderProductPO.getOrderId() != null) {
            HospOrder hospOrder = DPreconditions.checkNotNull(
                    orderService.selectOne(orderProductPO.getOrderId()),
                    Language.get("order.select-not-exist"),
                    true);
            PageInfo<HospOrderProduct> pageInfo = orderProductService.selectByOrderId(hospOrder.getId());
            List<HospOrderProduct> list = pageInfo.getList();
            orderProductPO.setId(
                    list != null && list.size()>0
                            ? list.get(0).getId()
                            : orderProductPO.getId());
        }
        orderProductService.refundment(
                orderProductPO.getId(),
                orderProductPO.getRollbackMoney(),
                orderProductPO.getComment(),
                adminUserId);
        return ResponseWrapperSuccess(null);
    }

    @ApiOperation(value = "查询单个订单服务详情信息", response = OrderProductVO.class)
    @RequestMapping(value = "/", method = RequestMethod.GET)
    @ResponseBody
    public JSONObject selectOne(
            @ApiParam(value = "订单服务详情 ID", required = true) @RequestParam(value = "id", required = true) Long id) throws Exception {
        return ResponseWrapperSuccess(transform(orderProductService.selectOne(id)));
    }

    @ApiOperation(value = "查询全部订单服务详情信息", response = OrderProductVO.class)
    @RequestMapping(value = "/all", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject selectAll(
            @ApiParam(value = "分页信息", required = false) @RequestBody(required = false) PageBean pageBean) throws Exception {
        PageInfo<HospOrderProduct> pageInfo = orderProductService.selectAll(pageBean);
        return ResponseWrapperSuccess(transformByHospOrderProduct(pageInfo));
    }

    @ApiOperation(value = "根据条件查询订单服务详情信息", response = OrderProductVO.class)
    @RequestMapping(value = "/query", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject select(
            @ApiParam(value = "订单服务详情 信息", required = true) @RequestBody(required = true) OrderProductPO orderProductPO) throws Exception {
        PageInfo<HospOrderProduct> pageInfo = orderProductService.select(orderProductPO);
        return ResponseWrapperSuccess(transformByHospOrderProduct(pageInfo));
    }


    @ApiOperation(value = "查询全部订单服务详情信息---admin", response = OrderProductVO.class)
    @RequestMapping(value = "/admin/all", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject selectAllAdmin(
            @ApiParam(value = "分页信息", required = false) @RequestBody(required = false) PageBean pageBean) throws Exception {
        PageInfo<HospOrderProduct> pageInfo = orderProductService.selectAllAdmin(pageBean);
        return ResponseWrapperSuccess(transformByHospOrderProduct(pageInfo));
    }

    @ApiOperation(value = "根据条件查询订单服务详情信息---admin", response = OrderProductVO.class)
    @RequestMapping(value = "/admin/query", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject selectAdmin(
            @ApiParam(value = "订单服务详情信息", required = true) @RequestBody(required = true) OrderProductPO orderProductPO) throws Exception {
        PageInfo<HospOrderProduct> pageInfo = orderProductService.selectAdmin(orderProductPO);
        return ResponseWrapperSuccess(transformByHospOrderProduct(pageInfo));
    }


}
