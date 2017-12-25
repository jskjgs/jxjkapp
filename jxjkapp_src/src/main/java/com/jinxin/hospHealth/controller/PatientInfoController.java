package com.jinxin.hospHealth.controller;

import com.alibaba.fastjson.JSONObject;
import com.doraemon.base.controller.bean.PageBean;
import com.github.pagehelper.PageInfo;
import com.jinxin.hospHealth.dao.mapper.HospPatientInfoMapper;
import com.jinxin.hospHealth.dao.models.HospNews;
import com.jinxin.hospHealth.dao.models.HospPatientInfo;
import com.jinxin.hospHealth.service.PatientInfoService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by zbs on 2017/12/24.
 */
@RestController
@RequestMapping("/patientInfo")
@Slf4j
@Api(description = "就诊人相关接口")
public class PatientInfoController extends MyBaseController{

    @Autowired
    PatientInfoService patientInfoService;


    @ApiOperation(value = "新增就诊人信息")
    @RequestMapping(value="/", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject add(
            @ApiParam(value = "就诊人信息", required = true) @RequestBody HospPatientInfo patientInfo) throws Exception {
        Map<String,Long> map = new HashMap<>();
        patientInfoService.add(patientInfo);
        map.put("id",patientInfo.getId());
        return ResponseWrapperSuccess(null);
    }

    @ApiOperation(value = "更新就诊人信息")
    @RequestMapping(value="/", method = RequestMethod.PUT)
    @ResponseBody
    public JSONObject update(
            @ApiParam(value = "就诊人信息", required = true)  @RequestBody HospPatientInfo patientInfo) throws Exception {
        patientInfoService.update(patientInfo);
        return ResponseWrapperSuccess(null);
    }

    @ApiOperation(value = "查询单个就诊人信息",response = HospPatientInfo.class)
    @RequestMapping(value="/", method = RequestMethod.GET)
    @ResponseBody
    public JSONObject selectOne(
            @ApiParam(value = "就诊人ID", required = true) @RequestParam(value = "id", required = true) Long id) throws Exception {

        return ResponseWrapperSuccess(patientInfoService.selectOne(id));
    }

    @ApiOperation(value = "查询全部就诊人信息",response = HospNews.class)
    @RequestMapping(value="/all", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject selectAll(
            @ApiParam(value = "分页信息", required = false)  @RequestBody(required = false) PageBean pageBean) throws Exception {
        return ResponseWrapperSuccess(patientInfoService.selectAll(pageBean));
    }

    @ApiOperation(value = "根据条件查询就诊人信息",response = HospPatientInfo.class)
    @RequestMapping(value="/query", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject select(
            @ApiParam(value = "就诊人信息", required = true)  @RequestBody HospPatientInfo patientInfo) throws Exception {
        return ResponseWrapperSuccess(patientInfoService.select(patientInfo));
    }

    @ApiOperation(value = "删除单个就诊人信息")
    @RequestMapping(value="/", method = RequestMethod.DELETE)
    @ResponseBody
    public JSONObject deleteOne(
            @ApiParam(value = "就诊人ID", required = true) @RequestParam(value = "id", required = true) Long id) throws Exception {
        patientInfoService.deleteOne(id);
        return ResponseWrapperSuccess(null);
    }
}
