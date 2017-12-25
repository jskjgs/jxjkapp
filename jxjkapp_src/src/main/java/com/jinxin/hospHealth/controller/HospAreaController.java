package com.jinxin.hospHealth.controller;

import com.alibaba.fastjson.JSONObject;
import com.doraemon.base.controller.bean.PageBean;
import com.jinxin.hospHealth.dao.models.HospArea;
import com.jinxin.hospHealth.dao.models.HospBanner;
import com.jinxin.hospHealth.service.HospAreaService;
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
@RequestMapping("/hospArea")
@Slf4j
@Api(description = "院区相关接口")
public class HospAreaController extends MyBaseController{

    @Autowired
    HospAreaService hospAreaService;

    @ApiOperation(value = "新增院区")
    @RequestMapping(value="/", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject add(
            @ApiParam(value = "院区", required = true) @RequestBody HospArea hospArea) throws Exception {
        Map<String,Long> map = new HashMap<>();
        hospAreaService.add(hospArea);
        map.put("id",hospArea.getId());
        return ResponseWrapperSuccess(map);
    }

    @ApiOperation(value = "更新院区")
    @RequestMapping(value="/", method = RequestMethod.PUT)
    @ResponseBody
    public JSONObject update(
            @ApiParam(value = "院区信息", required = true)  @RequestBody HospArea hospArea) throws Exception {
        hospAreaService.update(hospArea);
        return ResponseWrapperSuccess(null);
    }

    @ApiOperation(value = "查询单个院区",response = HospArea.class)
    @RequestMapping(value="/", method = RequestMethod.GET)
    @ResponseBody
    public JSONObject selectOne(
            @ApiParam(value = "院区ID", required = true) @RequestParam(value = "id", required = true) Long id) throws Exception {
        return ResponseWrapperSuccess(hospAreaService.selectOne(id));
    }

    @ApiOperation(value = "查询全部院区",response = HospArea.class)
    @RequestMapping(value="/all", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject selectAll(
            @ApiParam(value = "分页信息", required = false)  @RequestBody(required = false) PageBean pageBean) throws Exception {
        return ResponseWrapperSuccess(hospAreaService.selectAll(pageBean));
    }

    @ApiOperation(value = "根据条件查询院区",response = HospArea.class)
    @RequestMapping(value="/query", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject select(
            @ApiParam(value = "院区信息", required = true)  @RequestBody(required = true) HospArea hospArea) throws Exception {
        return ResponseWrapperSuccess(hospAreaService.select(hospArea));
    }

    @ApiOperation(value = "删除单个院区")
    @RequestMapping(value="/", method = RequestMethod.DELETE)
    @ResponseBody
    public JSONObject deleteOne(
            @ApiParam(value = "院区ID", required = true) @RequestParam(value = "id", required = true) Long id) throws Exception {
        hospAreaService.deleteOne(id);
        return ResponseWrapperSuccess(null);
    }

}
