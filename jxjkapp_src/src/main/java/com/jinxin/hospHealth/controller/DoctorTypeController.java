package com.jinxin.hospHealth.controller;

import com.alibaba.fastjson.JSONObject;
import com.doraemon.base.controller.bean.PageBean;
import com.jinxin.hospHealth.dao.models.HospDoctorType;
import com.jinxin.hospHealth.service.DoctorTypeService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

/**
 * 医生类别
 *
 * Created by zbs on 2017/12/25.
 */

@RestController
@RequestMapping("/doctorType")
@Slf4j
@Api(description = "医生类别相关接口")
public class DoctorTypeController extends MyBaseController {

    @Autowired
    DoctorTypeService doctorTypeService;


    @ApiOperation(value = "新增医生类别")
    @RequestMapping(value="/", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject add(
            @ApiParam(value = "医生类别", required = true) @RequestBody HospDoctorType doctorType) throws Exception {
        Map<String,Long> map = new HashMap<>();
        doctorTypeService.add(doctorType);
        map.put("id",doctorType.getId());
        return ResponseWrapperSuccess(map);
    }

    @ApiOperation(value = "更新医生类别")
    @RequestMapping(value="/", method = RequestMethod.PUT)
    @ResponseBody
    public JSONObject update(
            @ApiParam(value = "医生类别 信息", required = true)  @RequestBody HospDoctorType doctorType) throws Exception {
        doctorTypeService.update(doctorType);
        return ResponseWrapperSuccess(null);
    }

    @ApiOperation(value = "查询单个医生类别",response = HospDoctorType.class)
    @RequestMapping(value="/", method = RequestMethod.GET)
    @ResponseBody
    public JSONObject selectOne(
            @ApiParam(value = "医生类别 ID", required = true) @RequestParam(value = "id", required = true) Long id) throws Exception {
        return ResponseWrapperSuccess(doctorTypeService.selectOne(id));
    }

    @ApiOperation(value = "查询全部医生类别",response = HospDoctorType.class)
    @RequestMapping(value="/all", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject selectAll(
            @ApiParam(value = "分页信息", required = false)  @RequestBody(required = false) PageBean pageBean) throws Exception {
        return ResponseWrapperSuccess(doctorTypeService.selectAll(pageBean));
    }

    @ApiOperation(value = "根据条件查询医生类别",response = HospDoctorType.class)
    @RequestMapping(value="/query", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject select(
            @ApiParam(value = "医生类别 信息", required = true)  @RequestBody(required = true) HospDoctorType doctorType) throws Exception {
        return ResponseWrapperSuccess(doctorTypeService.select(doctorType));
    }

    @ApiOperation(value = "删除单个医生类别")
    @RequestMapping(value="/", method = RequestMethod.DELETE)
    @ResponseBody
    public JSONObject deleteOne(
            @ApiParam(value = "医生类别 ID", required = true) @RequestParam(value = "id", required = true) Long id) throws Exception {
        doctorTypeService.deleteOne(id);
        return ResponseWrapperSuccess(null);
    }


}
