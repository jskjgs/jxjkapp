package com.jinxin.hospHealth.controller;

import com.alibaba.fastjson.JSONObject;
import com.doraemon.base.controller.bean.PageBean;
import com.doraemon.base.guava.DPreconditions;
import com.github.pagehelper.PageInfo;
import com.jinxin.hospHealth.controller.protocol.PO.OrderServiceDetailsPO;
import com.jinxin.hospHealth.controller.protocol.VO.OrderServiceDetailsVO;
import com.jinxin.hospHealth.dao.models.*;
import com.jinxin.hospHealth.dao.modelsEnum.OrderServiceDetailsStateEnum;
import com.jinxin.hospHealth.service.*;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.HashMap;
import java.util.Map;

/**
 * Created by zbs on 2018/1/17.
 */

@RestController
@RequestMapping("/orderService")
@Slf4j
@Api(description = "订单服务详情相关接口")
public class OrderServiceDetailsController extends TransformController{

    @Autowired
    DoctorInfoService doctorInfoService;
    @Autowired
    DoctorTypeService doctorTypeService;
    @Autowired
    HospAreaService doctorAreaService;
    @Autowired
    OrderServiceDetailsService orderServiceDetailsService;
    @Autowired
    SkuService skuService;
    @Autowired
    ProductService productService;
    @Autowired
    ProductTypeService productTypeService;


    @ApiOperation(value = "新增订单服务详情信息 ---admin")
    @RequestMapping(value = "/", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject add(
            @ApiParam(value = "订单服务详情信息", required = true) @RequestBody OrderServiceDetailsPO orderServiceDetailsPO) throws Exception {
        orderServiceDetailsPO.setAdminUserId(getAdminUserId());
        Map<String, Long> map = new HashMap<>();
        HospOrderServiceDetails hospOrderServiceDetails = orderServiceDetailsService.add(orderServiceDetailsPO);
        map.put("id", hospOrderServiceDetails.getId());
        return ResponseWrapperSuccess(map);
    }

    @ApiOperation(value = "完成服务详情 ---docker")
    @RequestMapping(value = "/admin/confirm", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject confirm(
            @ApiParam(value = "完成服务详情", required = true) @RequestBody OrderServiceDetailsPO orderServiceDetailsPO) throws Exception {
        orderServiceDetailsPO.setAdminUserId(getAdminUserId());
        orderServiceDetailsService.confirm(orderServiceDetailsPO);
        return ResponseWrapperSuccess(null);
    }

    @ApiOperation(value = "确认订单服务详情 ---docker")
    @RequestMapping(value = "/admin/accept", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject accept(
            @ApiParam(value = "订单服务详情信息", required = true) @RequestBody OrderServiceDetailsPO orderServiceDetailsPO) throws Exception {
        orderServiceDetailsPO.setAdminUserId(getAdminUserId());
        orderServiceDetailsService.accept(orderServiceDetailsPO);
        return ResponseWrapperSuccess(null);
    }

    @ApiOperation(value = "作废服务订单 --- admin")
    @RequestMapping(value = "/admin/cancellation", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject cancellation(
            @ApiParam(value = "订单服务详情 ID", required = true) @RequestParam(value = "id", required = true) Long id) throws Exception {
        Long adminUserId = getAdminUserId();
        orderServiceDetailsService.cancellation(id,adminUserId);
        return ResponseWrapperSuccess(null);
    }

    @ApiOperation(value = "申请作废服务订单 --- 用户端")
    @RequestMapping(value = "/applyCancellation", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject applyCancellation(
            @ApiParam(value = "订单服务详情 信息", required = true) @RequestBody(required = true) OrderServiceDetailsPO orderServiceDetailsPO) throws Exception {
        orderServiceDetailsService.applyCancellation(orderServiceDetailsPO,getCurrentUserId());
        return ResponseWrapperSuccess(null);
    }

    @ApiOperation(value = "查询单个订单服务详情信息", response = OrderServiceDetailsVO.class)
    @RequestMapping(value = "/", method = RequestMethod.GET)
    @ResponseBody
    public JSONObject selectOne(
            @ApiParam(value = "订单服务详情 ID", required = true) @RequestParam(value = "id", required = true) Long id) throws Exception {
        return ResponseWrapperSuccess(transform(orderServiceDetailsService.selectOne(id)));
    }

    @ApiOperation(value = "根据条件查询订单服务详情信息", response = OrderServiceDetailsVO.class)
    @RequestMapping(value = "/query", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject select(
            @ApiParam(value = "订单服务详情 信息", required = true) @RequestBody(required = true) OrderServiceDetailsPO orderServiceDetailsPO) throws Exception {
        PageInfo<HospOrderServiceDetails> pageInfo = orderServiceDetailsService.select(orderServiceDetailsPO);
        return ResponseWrapperSuccess(transformByHospOrderServiceDetails(pageInfo));
    }


    @ApiOperation(value = "查询全部订单服务详情信息---admin", response = OrderServiceDetailsVO.class)
    @RequestMapping(value = "/admin/all", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject selectAllAdmin(
            @ApiParam(value = "分页信息", required = false) @RequestBody(required = false) PageBean pageBean) throws Exception {
        PageInfo<HospOrderServiceDetails> pageInfo = orderServiceDetailsService.selectAllAdmin(pageBean);
        return ResponseWrapperSuccess(transformByHospOrderServiceDetails(pageInfo));
    }

    @ApiOperation(value = "在医生端查询全部订单服务详情信息---doctor", response = OrderServiceDetailsVO.class)
    @RequestMapping(value = "/doctor/all", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject selectAllDoctor(
            @ApiParam(value = "状态", required = true) @RequestParam(value = "state", required = true) Integer state,
            @ApiParam(value = "分页信息", required = false) @RequestBody(required = false) PageBean pageBean) throws Exception {
        HospAdminUserInfo adminUserInfo = DPreconditions.checkNotNull(
                adminUserInfoService.selectOne(getAdminUserId()),
                "admin端用户信息为空",
                true);
        OrderServiceDetailsPO orderServiceDetailsPO = new OrderServiceDetailsPO();
        orderServiceDetailsPO.setDoctorAreaId(adminUserInfo.getAreaId());
        orderServiceDetailsPO.setState(OrderServiceDetailsStateEnum.getByCode(state).getCode());
        if(pageBean != null){
            orderServiceDetailsPO.setPageNum(pageBean.getPageNum());
            orderServiceDetailsPO.setPageSize(pageBean.getPageSize());
            orderServiceDetailsPO.setField(pageBean.getField());
        }
        PageInfo<HospOrderServiceDetails> pageInfo = orderServiceDetailsService.select(orderServiceDetailsPO);
        return ResponseWrapperSuccess(transformByHospOrderServiceDetails(pageInfo));
    }

    @ApiOperation(value = "根据条件查询订单服务详情信息---admin", response = OrderServiceDetailsVO.class)
    @RequestMapping(value = "/admin/query", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject selectAdmin(
            @ApiParam(value = "订单服务详情信息", required = true) @RequestBody(required = true) OrderServiceDetailsPO orderServiceDetailsPO) throws Exception {
        PageInfo<HospOrderServiceDetails> pageInfo = orderServiceDetailsService.selectAdmin(orderServiceDetailsPO);
        return ResponseWrapperSuccess(transformByHospOrderServiceDetails(pageInfo));
    }

}
