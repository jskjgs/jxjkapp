package com.jinxin.hospHealth.controller;

import com.alibaba.fastjson.JSONObject;
import com.doraemon.base.controller.bean.PageBean;
import com.jinxin.hospHealth.dao.models.HospProductType;
import com.jinxin.hospHealth.service.ProductTypeService;
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
@RequestMapping("/productType")
@Slf4j
@Api(description = "商品类别相关接口")
public class ProductTypeController extends MyBaseController{

    @Autowired
    ProductTypeService productTypeService;

    @ApiOperation(value = "新增商品类别信息")
    @RequestMapping(value="/", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject add(
            @ApiParam(value = "商品信息", required = true) @RequestBody HospProductType productType) throws Exception {
        Map<String,Long> map = new HashMap<>();
        productTypeService.add(productType);
        map.put("id",productType.getId());
        return ResponseWrapperSuccess(null);
    }

    @ApiOperation(value = "更新商品类别信息")
    @RequestMapping(value="/", method = RequestMethod.PUT)
    @ResponseBody
    public JSONObject update(
            @ApiParam(value = "商品信息", required = true)  @RequestBody HospProductType productType) throws Exception {
        productTypeService.update(productType);
        return ResponseWrapperSuccess(null);
    }

    @ApiOperation(value = "查询单个商品类别信息",response = HospProductType.class)
    @RequestMapping(value="/", method = RequestMethod.GET)
    @ResponseBody
    public JSONObject selectOne(
            @ApiParam(value = "商品ID", required = true) @RequestParam(value = "id", required = true) Long id) throws Exception {
        return ResponseWrapperSuccess(productTypeService.selectOne(id));
    }

    @ApiOperation(value = "查询全部商品类别信息",response = HospProductType.class)
    @RequestMapping(value="/all", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject selectAll(
            @ApiParam(value = "分页信息", required = false)  @RequestBody(required = false) PageBean pageBean) throws Exception {
        return ResponseWrapperSuccess(productTypeService.selectAll(pageBean));
    }

    @ApiOperation(value = "根据条件查询商品类别信息",response = HospProductType.class)
    @RequestMapping(value="/query", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject select(
            @ApiParam(value = "商品信息", required = true)  @RequestBody HospProductType productType) throws Exception {
        return ResponseWrapperSuccess(productTypeService.select(productType));
    }

    @ApiOperation(value = "查询单个商品类别信息---admin",response = HospProductType.class)
    @RequestMapping(value="/admin/", method = RequestMethod.GET)
    @ResponseBody
    public JSONObject selectOneAdmin(
            @ApiParam(value = "商品ID", required = true) @RequestParam(value = "id", required = true) Long id) throws Exception {
        return ResponseWrapperSuccess(productTypeService.selectOneAdmin(id));
    }

    @ApiOperation(value = "查询全部商品类别信息---admin",response = HospProductType.class)
    @RequestMapping(value="/admin/all", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject selectAllAdmin(
            @ApiParam(value = "分页信息", required = false)  @RequestBody(required = false) PageBean pageBean) throws Exception {
        return ResponseWrapperSuccess(productTypeService.selectAllAdmin(pageBean));
    }

    @ApiOperation(value = "根据条件查询商品类别信息---admin",response = HospProductType.class)
    @RequestMapping(value="/admin/query", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject selectAdmin(
            @ApiParam(value = "商品信息", required = true)  @RequestBody HospProductType productType) throws Exception {
        return ResponseWrapperSuccess(productTypeService.selectAdmin(productType));
    }

    @ApiOperation(value = "删除单个商品类别信息")
    @RequestMapping(value="/", method = RequestMethod.DELETE)
    @ResponseBody
    public JSONObject deleteOne(
            @ApiParam(value = "商品ID", required = true) @RequestParam(value = "id", required = true) Long id) throws Exception {
        productTypeService.deleteOne(id);
        return ResponseWrapperSuccess(null);
    }
}
