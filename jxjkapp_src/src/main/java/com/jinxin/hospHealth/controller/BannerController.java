package com.jinxin.hospHealth.controller;

import com.alibaba.fastjson.JSONObject;
import com.doraemon.base.controller.bean.PageBean;
import com.jinxin.hospHealth.dao.models.HospBanner;
import com.jinxin.hospHealth.service.BannerService;
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
@RequestMapping("/banner")
@Slf4j
@Api(description = "banner相关接口")
public class BannerController extends MyBaseController {

    @Autowired
    BannerService bannerService;

    @ApiOperation(value = "新增banner信息")
    @RequestMapping(value="/", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject add(
            @ApiParam(value = "banner信息", required = true) @RequestBody HospBanner hospBanner) throws Exception {
        Map<String,Long> map = new HashMap<>();
        bannerService.add(hospBanner);
        map.put("id",hospBanner.getId());
        return ResponseWrapperSuccess(map);
    }

    @ApiOperation(value = "更新banner信息")
    @RequestMapping(value="/", method = RequestMethod.PUT)
    @ResponseBody
    public JSONObject update(
            @ApiParam(value = "banner 信息", required = true)  @RequestBody HospBanner hospBanner) throws Exception {
        bannerService.update(hospBanner);
        return ResponseWrapperSuccess(null);
    }

    @ApiOperation(value = "查询单个banner信息",response = HospBanner.class)
    @RequestMapping(value="/", method = RequestMethod.GET)
    @ResponseBody
    public JSONObject selectOne(
            @ApiParam(value = "banner ID", required = true) @RequestParam(value = "id", required = true) Long id) throws Exception {
        return ResponseWrapperSuccess(bannerService.selectOne(id));
    }

    @ApiOperation(value = "查询全部banner信息",response = HospBanner.class)
    @RequestMapping(value="/all", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject selectAll(
            @ApiParam(value = "分页信息", required = false)  @RequestBody(required = false) PageBean pageBean) throws Exception {
        return ResponseWrapperSuccess(bannerService.selectAll(pageBean));
    }

    @ApiOperation(value = "根据条件查询banner信息",response = HospBanner.class)
    @RequestMapping(value="/query", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject select(
            @ApiParam(value = "banner 信息", required = true)  @RequestBody(required = true) HospBanner hospBanner) throws Exception {
        return ResponseWrapperSuccess(bannerService.select(hospBanner));
    }

    @ApiOperation(value = "查询全部banner信息--admin",response = HospBanner.class)
    @RequestMapping(value="/admin/all", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject selectAllAdmin(
            @ApiParam(value = "分页信息", required = false)  @RequestBody(required = false) PageBean pageBean) throws Exception {
        return ResponseWrapperSuccess(bannerService.selectAllAdmin(pageBean));
    }

    @ApiOperation(value = "根据条件查询banner信息--admin",response = HospBanner.class)
    @RequestMapping(value="/admin/query", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject selectAdmin(
            @ApiParam(value = "banner 信息", required = true)  @RequestBody(required = true) HospBanner hospBanner) throws Exception {
        return ResponseWrapperSuccess(bannerService.selectAdmin(hospBanner));
    }

    @ApiOperation(value = "删除单个banner信息")
    @RequestMapping(value="/", method = RequestMethod.DELETE)
    @ResponseBody
    public JSONObject deleteOne(
            @ApiParam(value = "banner ID", required = true) @RequestParam(value = "id", required = true) Long id) throws Exception {
        bannerService.deleteOne(id);
        return ResponseWrapperSuccess(null);
    }
}
