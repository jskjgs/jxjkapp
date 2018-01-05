package com.jinxin.hospHealth.controller;

import com.alibaba.fastjson.JSONObject;
import com.doraemon.base.controller.bean.PageBean;
import com.jinxin.hospHealth.dao.models.HospCallNumber;
import com.jinxin.hospHealth.service.CallNumberService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by zbs on 2018/1/5.
 */
@RestController
@RequestMapping("/call")
@Slf4j
@Api(description = "排队叫号")
public class CallNumberController extends MyBaseController{

    @Autowired
    CallNumberService callNumberService;

    @ApiOperation(value = "新增排队叫号信息")
    @RequestMapping(value="/", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject add(
            @ApiParam(value = "排队叫号信息", required = true) @RequestBody HospCallNumber callNumber) throws Exception {
        Map<String,Long> map = new HashMap<>();
        HospCallNumber hospCallNumber = callNumberService.add(callNumber);
        map.put("id",hospCallNumber.getId());
        return ResponseWrapperSuccess(map);
    }

    @ApiOperation(value = "更新排队叫号信息")
    @RequestMapping(value="/", method = RequestMethod.PUT)
    @ResponseBody
    public JSONObject update(
            @ApiParam(value = "排队叫号 信息", required = true)  @RequestBody HospCallNumber hospCallNumber) throws Exception {
        callNumberService.update(hospCallNumber);
        return ResponseWrapperSuccess(null);
    }

    @ApiOperation(value = "查询单个排队叫号信息",response = HospCallNumber.class)
    @RequestMapping(value="/", method = RequestMethod.GET)
    @ResponseBody
    public JSONObject selectOne(
            @ApiParam(value = "排队叫号 ID", required = true) @RequestParam(value = "id", required = true) Long id) throws Exception {
        return ResponseWrapperSuccess(callNumberService.selectOne(id));
    }

    @ApiOperation(value = "查询全部排队叫号信息",response = HospCallNumber.class)
    @RequestMapping(value="/all", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject selectAll(
            @ApiParam(value = "分页信息", required = false)  @RequestBody(required = false) PageBean pageBean) throws Exception {
        return ResponseWrapperSuccess(callNumberService.selectAll(pageBean));
    }

    @ApiOperation(value = "根据条件查询排队叫号信息",response = HospCallNumber.class)
    @RequestMapping(value="/query", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject select(
            @ApiParam(value = "排队叫号 信息", required = true)  @RequestBody(required = true) HospCallNumber hospCallNumber) throws Exception {
        return ResponseWrapperSuccess(callNumberService.select(hospCallNumber));
    }

    @ApiOperation(value = "查询全部排队叫号信息--admin",response = HospCallNumber.class)
    @RequestMapping(value="/admin/all", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject selectAllAdmin(
            @ApiParam(value = "分页信息", required = false)  @RequestBody(required = false) PageBean pageBean) throws Exception {
        return ResponseWrapperSuccess(callNumberService.selectAllAdmin(pageBean));
    }

    @ApiOperation(value = "根据条件查询排队叫号信息--admin",response = HospCallNumber.class)
    @RequestMapping(value="/admin/query", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject selectAdmin(
            @ApiParam(value = "排队叫号 信息", required = true)  @RequestBody(required = true) HospCallNumber hospCallNumber) throws Exception {
        return ResponseWrapperSuccess(callNumberService.selectAdmin(hospCallNumber));
    }

    @ApiOperation(value = "删除单个排队叫号信息")
    @RequestMapping(value="/", method = RequestMethod.DELETE)
    @ResponseBody
    public JSONObject deleteOne(
            @ApiParam(value = "排队叫号 ID", required = true) @RequestParam(value = "id", required = true) Long id) throws Exception {
        callNumberService.deleteOne(id);
        return ResponseWrapperSuccess(null);
    }

}
