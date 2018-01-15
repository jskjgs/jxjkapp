package com.jinxin.hospHealth.controller;

import com.alibaba.fastjson.JSONObject;
import com.doraemon.base.controller.bean.PageBean;
import com.doraemon.base.guava.DPreconditions;
import com.doraemon.base.language.Language;
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
        patientInfo.setUserId(DPreconditions.checkNotNull(getCurrentUserId(),
                Language.get("user.id-null"),
                true));
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
        patientInfo.setUserId(DPreconditions.checkNotNull(getCurrentUserId(),
                Language.get("user.id-null"),
                true));
        patientInfoService.update(patientInfo);
        return ResponseWrapperSuccess(null);
    }

    @ApiOperation(value = "查询单个就诊人信息",response = HospPatientInfo.class)
    @RequestMapping(value="/", method = RequestMethod.GET)
    @ResponseBody
    public JSONObject selectOne(
            @ApiParam(value = "就诊人ID", required = true) @RequestParam(value = "id", required = true) Long id) throws Exception {
        HospPatientInfo hospPatientInfo = new HospPatientInfo();
        hospPatientInfo.setUserId(DPreconditions.checkNotNull(getCurrentUserId(),
                Language.get("user.id-null"),
                true));
        hospPatientInfo.setId(id);
        return ResponseWrapperSuccess(patientInfoService.selectOne(hospPatientInfo));
    }

    @ApiOperation(value = "查询全部就诊人信息",response = HospNews.class)
    @RequestMapping(value="/all", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject selectAll(
            @ApiParam(value = "分页信息", required = false)  @RequestBody(required = false) PageBean pageBean) throws Exception {
        HospPatientInfo hospPatientInfo = new HospPatientInfo();
        hospPatientInfo.setUserId(DPreconditions.checkNotNull(getCurrentUserId(),
                Language.get("user.id-null"),
                true));
        if(pageBean != null) {
            hospPatientInfo.setPageNum(pageBean.getPageNum());
            hospPatientInfo.setPageSize(pageBean.getPageSize());
            hospPatientInfo.setField(pageBean.getField());
        }
        return ResponseWrapperSuccess(patientInfoService.selectAll(pageBean));
    }

    @ApiOperation(value = "根据条件查询就诊人信息",response = HospPatientInfo.class)
    @RequestMapping(value="/query", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject select(
            @ApiParam(value = "就诊人信息", required = true)  @RequestBody HospPatientInfo patientInfo) throws Exception {
        patientInfo.setUserId(DPreconditions.checkNotNull(getCurrentUserId(),
                Language.get("user.id-null"),
                true));
        return ResponseWrapperSuccess(patientInfoService.select(patientInfo));
    }

    @ApiOperation(value = "查询单个就诊人信息---admin",response = HospPatientInfo.class)
    @RequestMapping(value="/admin/", method = RequestMethod.GET)
    @ResponseBody
    public JSONObject selectOneAdmin(
            @ApiParam(value = "就诊人ID", required = true) @RequestParam(value = "id", required = true) Long id) throws Exception {

        return ResponseWrapperSuccess(patientInfoService.selectOneAdmin(id));
    }

    @ApiOperation(value = "查询全部就诊人信息---admin",response = HospNews.class)
    @RequestMapping(value="/admin/all", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject selectAllAdmin(
            @ApiParam(value = "分页信息", required = false)  @RequestBody(required = false) PageBean pageBean) throws Exception {
        return ResponseWrapperSuccess(patientInfoService.selectAllAdmin(pageBean));
    }

    @ApiOperation(value = "根据条件查询就诊人信息---admin",response = HospPatientInfo.class)
    @RequestMapping(value="/admin/query", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject selectAdmin(
            @ApiParam(value = "就诊人信息", required = true)  @RequestBody HospPatientInfo patientInfo) throws Exception {
        return ResponseWrapperSuccess(patientInfoService.selectAdmin(patientInfo));
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
