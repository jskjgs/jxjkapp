package com.jinxin.hospHealth.controller;

import com.alibaba.fastjson.JSONObject;
import com.doraemon.base.controller.bean.PageBean;
import com.jinxin.hospHealth.dao.models.HospProductSku;
import com.jinxin.hospHealth.service.SkuService;
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
@RequestMapping("/sku")
@Slf4j
@Api(description = "商品SKU相关接口")
public class SkuContoller extends MyBaseController{

    @Autowired
    SkuService skuService;

    @ApiOperation(value = "新增商品SKU信息")
    @RequestMapping(value="/", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject add(
            @ApiParam(value = "商品信息", required = true) @RequestBody HospProductSku product) throws Exception {
        Map<String,Long> map = new HashMap<>();
        skuService.add(product);
        map.put("id",product.getId());
        return ResponseWrapperSuccess(null);
    }

    @ApiOperation(value = "更新商品SKU信息")
    @RequestMapping(value="/", method = RequestMethod.PUT)
    @ResponseBody
    public JSONObject update(
            @ApiParam(value = "商品信息", required = true)  @RequestBody HospProductSku productSku) throws Exception {
        skuService.update(productSku);
        return ResponseWrapperSuccess(null);
    }

    @ApiOperation(value = "查询单个商品SKU信息",response = HospProductSku.class)
    @RequestMapping(value="/", method = RequestMethod.GET)
    @ResponseBody
    public JSONObject selectOne(
            @ApiParam(value = "商品ID", required = true) @RequestParam(value = "id", required = true) Long id) throws Exception {
        return ResponseWrapperSuccess(skuService.selectOne(id));
    }

    @ApiOperation(value = "查询全部商品SKU信息",response = HospProductSku.class)
    @RequestMapping(value="/all", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject selectAll(
            @ApiParam(value = "分页信息", required = false)  @RequestBody(required = false) PageBean pageBean) throws Exception {
        return ResponseWrapperSuccess(skuService.selectAll(pageBean));
    }

    @ApiOperation(value = "根据条件查询商品SKU信息",response = HospProductSku.class)
    @RequestMapping(value="/query", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject select(
            @ApiParam(value = "商品信息", required = true)  @RequestBody HospProductSku productSku) throws Exception {
        return ResponseWrapperSuccess(skuService.select(productSku));
    }

    @ApiOperation(value = "删除单个商品SKU信息")
    @RequestMapping(value="/", method = RequestMethod.DELETE)
    @ResponseBody
    public JSONObject deleteOne(
            @ApiParam(value = "商品ID", required = true) @RequestParam(value = "id", required = true) Long id) throws Exception {
        skuService.deleteOne(id);
        return ResponseWrapperSuccess(null);
    }
}
