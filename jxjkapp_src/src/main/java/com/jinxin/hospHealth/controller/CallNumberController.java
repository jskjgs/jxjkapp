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
import com.jinxin.hospHealth.controller.protocol.PO.OrderServiceDetailsPO;
import com.jinxin.hospHealth.controller.protocol.VO.CallNumberVO;
import com.jinxin.hospHealth.dao.models.*;
import com.jinxin.hospHealth.dao.modelsEnum.OrderPayStateEnum;
import com.jinxin.hospHealth.dao.modelsEnum.OrderPayTypeEnum;
import com.jinxin.hospHealth.service.CallNumberService;
import com.jinxin.hospHealth.service.OrderServiceDetailsService;
import com.jinxin.hospHealth.service.PatientInfoService;
import com.jinxin.hospHealth.service.UserInfoService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
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

    @Value("${call-number.waiting-que-name}")
    String waitingQueName;
    @Value("${call-number.waiting-que-number}")
    String waitingQueNumber;
    @Autowired
    CallNumberService callNumberService;
    @Autowired
    RedisOperation redisOperation;
    @Autowired
    OrderServiceDetailsService orderServiceDetailsService;

    @ApiOperation(value = "排号")
    @RequestMapping(value = "/admin/add", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject push(
            @ApiParam(value = "排队叫号 ---admin", required = true) @RequestBody CallNumberPO callNumber) throws Exception {
        HospAdminUserInfo  hospAdminUserInfo = DPreconditions.checkNotNull(
                adminUserInfoService.selectOne(getAdminUserId()),
                "admin用户信息为空.",
                true);
        check(callNumber);
        OrderServiceDetailsPO po = new OrderServiceDetailsPO();
        po.setOrderProductId(callNumber.getOrderProductId());
        po.setQty(1);
        po.setDoctorAreaId(hospAdminUserInfo.getAreaId());
        orderServiceDetailsService.add(po);
        //计数
        callNumber.setNumber(redisOperation.usePool().incrBy(waitingQueNumber,1));
        redisOperation.usePool().push(waitingQueName+hospAdminUserInfo.getAreaId(), JSON.toJSONString(callNumber));
        return ResponseWrapperSuccess(null);
    }

    @ApiOperation(value = "叫号 ---admin",response = CallNumberVO.class)
    @RequestMapping(value = "/admin/next", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject pop() throws Exception {
        HospAdminUserInfo  hospAdminUserInfo = DPreconditions.checkNotNull(
                adminUserInfoService.selectOne(getAdminUserId()),
                "admin用户信息为空.",
                true);
        String callNumber = redisOperation.usePool().pop(waitingQueName+hospAdminUserInfo.getAreaId());
        CallNumberPO callNumberPO = JSON.parseObject(callNumber,CallNumberPO.class);
        return ResponseWrapperSuccess(transform(callNumberPO));
    }

    @ApiOperation(value = "插号 ---admin")
    @RequestMapping(value = "/admin/put", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject put(
            @ApiParam(value = "排队叫号", required = true) @RequestBody CallNumberPO callNumber) throws Exception {
        HospAdminUserInfo  hospAdminUserInfo = DPreconditions.checkNotNull(
                adminUserInfoService.selectOne(getAdminUserId()),
                "admin用户信息为空.",
                true);
        check(callNumber);
        OrderServiceDetailsPO po = new OrderServiceDetailsPO();
        po.setOrderProductId(callNumber.getOrderProductId());
        po.setQty(1);
        po.setDoctorAreaId(hospAdminUserInfo.getAreaId());
        orderServiceDetailsService.add(po);
        callNumber.setNumber(redisOperation.usePool().incrBy(waitingQueNumber,1));
        redisOperation.usePool().put(waitingQueName+hospAdminUserInfo.getAreaId(),JSON.toJSONString(callNumber));
        return ResponseWrapperSuccess(null);
    }

    @ApiOperation(value = "查询等待列表 ---admin",response = CallNumberVO.class)
    @RequestMapping(value = "/admin/selectAll", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject selectAll() throws Exception {
        HospAdminUserInfo  hospAdminUserInfo = DPreconditions.checkNotNull(
                adminUserInfoService.selectOne(getAdminUserId()),
                "admin用户信息为空.",
                true);
        List<String> values = redisOperation.usePool().lrange(waitingQueName+hospAdminUserInfo,0,-1);
        if(values == null || values.size()<1)
            return ResponseWrapperSuccess(null);
        List<CallNumberVO> callNumberVOList = new ArrayList<>();
        for(String s : values){
            CallNumberPO po = JSON.parseObject(s,CallNumberPO.class);
            callNumberVOList.add(transform(po));
        }
        return ResponseWrapperSuccess(callNumberVOList);
    }

    @ApiOperation(value = "查询排号详情",response = CallNumberVO.class)
    @RequestMapping(value = "/select", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject select(
            @ApiParam(value = "院区ID", required = false) @RequestParam(value = "areaId", required = false) Long areaId) throws Exception {
        HospUserInfo userInfo = DPreconditions.checkNotNull(
                userInfoService.selectOne(getCurrentUserId()),
                "用户信息为空.",
                true);
        //查询院区
        List<Long> areaIds = new ArrayList<>();
        if(areaId == null){
            PageInfo<HospArea> pageInfo = hospAreaService.selectAll(null);
            if(pageInfo == null || pageInfo.getList() == null || pageInfo.getList().size()<1)
                throw new ShowExceptions("没有院区信息,不能排号");
            for(HospArea hospArea : pageInfo.getList()){
                areaIds.add(hospArea.getId());
            }
        }else{
            areaIds.add(areaId);
        }
        //根据院区ID,循环院区que列表,进行查找
        CallNumberVO vo = new CallNumberVO();
        for(Long areaIdTemp : areaIds) {
            List<String> values = redisOperation.usePool().lrange(waitingQueName + areaIdTemp, 0, -1);
            for (int i = 0; i < values.size(); i++) {
                CallNumberPO po = JSON.parseObject(values.get(i), CallNumberPO.class);
                if (userInfo.getPhone().equals(po.getPhone())) {
                    vo = transform(po);
                    vo.setBeforeNumber(i);
                    break;
                }
            }
        }
        return ResponseWrapperSuccess(vo);
    }


    /**
     * 检查该用户是否有有效的订单
     * @param callNumberPO
     * @return
     * @throws Exception
     */
    private void check(CallNumberPO callNumberPO) throws Exception {
        HospUserInfo hospUserInfo = DPreconditions.checkNotNull(
                userInfoService.selectOneByPhone(callNumberPO.getPhone()),
                Language.get("user.select-not-exist"),
                true);
        HospOrderProduct hospOrderProduct = DPreconditions.checkNotNull(
                orderProductService.selectOne(callNumberPO.getOrderProductId()),
                "订单商品信息不存在.",
                true);
        HospOrder hospOrder = DPreconditions.checkNotNull(
                orderService.selectOne(hospOrderProduct.getOrderId()),
                "订单信息不存在.",
                true);
        DPreconditions.checkState(
                hospOrder.getUserId() == hospUserInfo.getId(),
                "排队的订单不属于该用户.",
                true);
    }

}
