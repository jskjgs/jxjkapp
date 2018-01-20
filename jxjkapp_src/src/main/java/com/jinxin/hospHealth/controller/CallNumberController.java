package com.jinxin.hospHealth.controller;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.doraemon.base.controller.bean.PageBean;
import com.doraemon.base.exceptions.ShowExceptions;
import com.doraemon.base.guava.DPreconditions;
import com.doraemon.base.language.Language;
import com.doraemon.base.redis.RedisOperation;
import com.github.pagehelper.PageInfo;
import com.jinxin.hospHealth.controller.protocol.PO.CallNumberPO;
import com.jinxin.hospHealth.controller.protocol.PO.DoctorInfoPO;
import com.jinxin.hospHealth.controller.protocol.PO.OrderInfoPO;
import com.jinxin.hospHealth.controller.protocol.VO.CallNumberVO;
import com.jinxin.hospHealth.dao.models.*;
import com.jinxin.hospHealth.dao.modelsEnum.OrderPayStateEnum;
import com.jinxin.hospHealth.dao.modelsEnum.OrderPayTypeEnum;
import com.jinxin.hospHealth.service.CallNumberService;
import com.jinxin.hospHealth.service.PatientInfoService;
import com.jinxin.hospHealth.service.UserInfoService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.actuate.metrics.export.MetricExportProperties;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by zbs on 2018/1/5.
 */
@RestController
@RequestMapping("/call")
@Slf4j
@Api(description = "排队叫号")
public class CallNumberController extends TransformController{

    String callQueName = "aaaa";

    @Autowired
    CallNumberService callNumberService;
    @Autowired
    RedisOperation redisOperation;

    @ApiOperation(value = "排号")
    @RequestMapping(value = "/add", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject push(
            @ApiParam(value = "排队叫号", required = true) @RequestBody CallNumberPO callNumber) throws Exception {
        DPreconditions.checkState(
                check(callNumber),
                "该用户没有有效的订单,不能进行排号.",
                true);
        redisOperation.usePool().push(callQueName, JSON.toJSONString(callNumber));
        return ResponseWrapperSuccess(null);
    }

    @ApiOperation(value = "叫号",response = CallNumberVO.class)
    @RequestMapping(value = "/call", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject pop() throws Exception {
        String callNumber = redisOperation.usePool().pop(callQueName);
        CallNumberPO callNumberPO = JSON.parseObject(callNumber,CallNumberPO.class);
        return ResponseWrapperSuccess(transform(callNumberPO));
    }

    @ApiOperation(value = "插号")
    @RequestMapping(value = "/put", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject put(
            @ApiParam(value = "排队叫号", required = true) @RequestBody CallNumberPO callNumber) throws Exception {
        DPreconditions.checkState(
                check(callNumber),
                "该用户没有有效的订单,不能进行排号.",
                true);
        redisOperation.usePool().put(callQueName,JSON.toJSONString(callNumber));
        return ResponseWrapperSuccess(null);
    }

    @ApiOperation(value = "查询等待列表",response = CallNumberVO.class)
    @RequestMapping(value = "/selectAll", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject selectAll() throws Exception {
        List<String> values = redisOperation.usePool().lrange(callQueName,0,-1);
        if(values == null || values.size()<1)
            return ResponseWrapperSuccess(null);
        List<CallNumberVO> callNumberVOList = new ArrayList<>();
        for(String s : values){
            CallNumberPO po = JSON.parseObject(s,CallNumberPO.class);
            callNumberVOList.add(transform(po));
        }
        return ResponseWrapperSuccess(callNumberVOList);
    }


    /**
     * 检查该用户是否有有效的订单,支付并没使用完的订单
     * @param callNumberPO
     * @return
     * @throws Exception
     */
    private boolean check(CallNumberPO callNumberPO) throws Exception {
        HospUserInfo hospUserInfo = DPreconditions.checkNotNull(
                userInfoService.selectOneByPhone(callNumberPO.getPhone()),
                Language.get("user.select-not-exist"),
                true);
        OrderInfoPO selectOrder = new OrderInfoPO();
        selectOrder.setUserId(hospUserInfo.getId());
        selectOrder.setPayState(OrderPayStateEnum.PAY.getCode());
        PageInfo<HospOrder> pageInfoOrder = orderService.select(selectOrder);
        if(pageInfoOrder == null || pageInfoOrder.getList() == null || pageInfoOrder.getList().size()<1)
            throw new ShowExceptions("该用户没有有效的订单.");
        boolean boo = false;
        for(HospOrder order : pageInfoOrder.getList()){
            PageInfo<HospOrderProduct> pageInfoOrderProduct =  orderProductService.selectByOrderId(order.getId());
            if(pageInfoOrderProduct == null || pageInfoOrderProduct.getList() == null || pageInfoOrderProduct.getList().size()<1)
                continue;
            for(HospOrderProduct hospOrderProduct : pageInfoOrderProduct.getList()){
                if(orderServiceDetailsService.remainingServiceNumber(hospOrderProduct.getId()) > 0){
                    boo = true;
                    break;
                }
            }
        }
        return boo;
    }

}
