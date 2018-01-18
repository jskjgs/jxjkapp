package com.jinxin.hospHealth.controller;

import com.alibaba.fastjson.JSONObject;
import com.doraemon.base.controller.bean.PageBean;
import com.github.pagehelper.PageInfo;
import com.jinxin.hospHealth.controller.protocol.PO.DoctorInfoPO;
import com.jinxin.hospHealth.controller.protocol.VO.DoctorInfoVO;
import com.jinxin.hospHealth.dao.models.HospArea;
import com.jinxin.hospHealth.dao.models.HospDoctorInfo;
import com.jinxin.hospHealth.dao.models.HospDoctorType;
import com.jinxin.hospHealth.service.DoctorInfoService;
import com.jinxin.hospHealth.service.DoctorTypeService;
import com.jinxin.hospHealth.service.HospAreaService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * 医生
 * Created by zbs on 2017/12/25.
 */
@RestController
@RequestMapping("/doctorInfo")
@Slf4j
@Api(description = "医生信息相关接口")
public class DoctorInfoController extends TransformController {

    @Autowired
    DoctorInfoService doctorInfoService;
    @Autowired
    DoctorTypeService doctorTypeService;
    @Autowired
    HospAreaService doctorAreaService;


    @ApiOperation(value = "新增医生信息")
    @RequestMapping(value = "/", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject add(
            @ApiParam(value = "医生信息", required = true) @RequestBody DoctorInfoPO doctorInfoPO) throws Exception {
        Map<String, Long> map = new HashMap();
        HospDoctorInfo hospDoctorInfo = doctorInfoService.add(doctorInfoPO);
        map.put("id", hospDoctorInfo.getId());
        return ResponseWrapperSuccess(map);
    }

    @ApiOperation(value = "更新医生信息")
    @RequestMapping(value = "/", method = RequestMethod.PUT)
    @ResponseBody
    public JSONObject update(
            @ApiParam(value = "医生 信息", required = true) @RequestBody DoctorInfoPO doctorInfoPO) throws Exception {
        doctorInfoService.update(doctorInfoPO);
        return ResponseWrapperSuccess(null);
    }

    @ApiOperation(value = "查询单个医生信息", response = DoctorInfoVO.class)
    @RequestMapping(value = "/", method = RequestMethod.GET)
    @ResponseBody
    public JSONObject selectOne(
            @ApiParam(value = "医生 ID", required = true) @RequestParam(value = "id", required = true) Long id) throws Exception {
        return ResponseWrapperSuccess(transform(doctorInfoService.selectOne(id)));
    }

    @ApiOperation(value = "查询全部医生信息", response = DoctorInfoVO.class)
    @RequestMapping(value = "/all", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject selectAll(
            @ApiParam(value = "分页信息", required = false) @RequestBody(required = false) PageBean pageBean) throws Exception {
        PageInfo<HospDoctorInfo> pageInfo = doctorInfoService.selectAll(pageBean);
        return ResponseWrapperSuccess(transformByHospDoctorInfo(pageInfo));
    }

    @ApiOperation(value = "根据条件查询医生信息", response = DoctorInfoVO.class)
    @RequestMapping(value = "/query", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject select(
            @ApiParam(value = "医生 信息", required = true) @RequestBody(required = true) DoctorInfoPO doctorInfoPO) throws Exception {
        PageInfo<HospDoctorInfo> pageInfo = doctorInfoService.select(doctorInfoPO);
        return ResponseWrapperSuccess(transformByHospDoctorInfo(pageInfo));
    }

    @ApiOperation(value = "根据条件查询医生信息 ---模糊查询", response = DoctorInfoVO.class)
    @RequestMapping(value = "/query/fuzzy", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject selectByFuzzy(
            @ApiParam(value = "医生 信息", required = true) @RequestBody(required = true) DoctorInfoPO doctorInfoPO) throws Exception {
        PageInfo<HospDoctorInfo> pageInfo = doctorInfoService.selectByFuzzy(doctorInfoPO);
        return ResponseWrapperSuccess(transformByHospDoctorInfo(pageInfo));
    }

    @ApiOperation(value = "删除单个医生信息")
    @RequestMapping(value = "/", method = RequestMethod.DELETE)
    @ResponseBody
    public JSONObject deleteOne(
            @ApiParam(value = "医生 ID", required = true) @RequestParam(value = "id", required = true) Long id) throws Exception {
        doctorInfoService.deleteOne(id);
        return ResponseWrapperSuccess(null);
    }


    @ApiOperation(value = "查询全部医生信息---admin", response = DoctorInfoVO.class)
    @RequestMapping(value = "/admin/all", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject selectAllAdmin(
            @ApiParam(value = "分页信息", required = false) @RequestBody(required = false) PageBean pageBean) throws Exception {
        PageInfo<HospDoctorInfo> pageInfo = doctorInfoService.selectAllAdmin(pageBean);
        return ResponseWrapperSuccess(transformByHospDoctorInfo(pageInfo));
    }

    @ApiOperation(value = "根据条件查询医生信息---admin", response = DoctorInfoVO.class)
    @RequestMapping(value = "/admin/query", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject selectAdmin(
            @ApiParam(value = "医生 信息", required = true) @RequestBody(required = true) DoctorInfoPO doctorInfoPO) throws Exception {
        PageInfo<HospDoctorInfo> pageInfo = doctorInfoService.selectAdmin(doctorInfoPO);
        return ResponseWrapperSuccess(transformByHospDoctorInfo(pageInfo));
    }


}
