package com.jinxin.hospHealth.controller;

import com.alibaba.fastjson.JSONObject;
import com.doraemon.base.controller.bean.PageBean;
import com.github.pagehelper.PageInfo;
import com.jinxin.hospHealth.controller.protocol.PO.ProductPO;
import com.jinxin.hospHealth.controller.protocol.VO.ProductVO;
import com.jinxin.hospHealth.dao.models.HospProduct;
import com.jinxin.hospHealth.service.ProductService;
import com.jinxin.hospHealth.service.ProductTypeService;
import com.jinxin.hospHealth.service.SkuService;
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
 * Created by zbs on 2017/12/24.
 */

@RestController
@RequestMapping("/product")
@Slf4j
@Api(description = "商品相关接口")
public class ProductController extends TransformController{

    @Autowired
    ProductService productService;
    @Autowired
    SkuService skuService;
    @Autowired
    ProductTypeService productTypeService;

    @ApiOperation(value = "新增商品和默认SKU信息")
    @RequestMapping(value="/productAndSku", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject add(
            @ApiParam(value = "商品信息", required = true) @RequestBody ProductPO product) throws Exception {
        Map<String,Long> map = new HashMap<>();
        HospProduct req = productService.addProductAndSku(product);
        map.put("id",req.getId());
        return ResponseWrapperSuccess(map);
    }

    @ApiOperation(value = "更新商品和默认SKU信息")
    @RequestMapping(value="/productAndSku", method = RequestMethod.PUT)
    @ResponseBody
    public JSONObject update(
            @ApiParam(value = "商品信息", required = true)  @RequestBody ProductPO product) throws Exception {
        productService.updateProductAndSku(product);
        return ResponseWrapperSuccess(null);
    }

    @ApiOperation(value = "查询单个商品信息",response = ProductVO.class)
    @RequestMapping(value="/", method = RequestMethod.GET)
    @ResponseBody
    public JSONObject selectOne(
            @ApiParam(value = "商品ID", required = true) @RequestParam(value = "id", required = true) Long id) throws Exception {
        HospProduct hospProduct = productService.selectOne(id);
        return ResponseWrapperSuccess(transform(hospProduct));
    }

    @ApiOperation(value = "查询全部商品信息",response = ProductVO.class)
    @RequestMapping(value="/all", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject selectAll(
            @ApiParam(value = "分页信息", required = false)  @RequestBody(required = false) PageBean pageBean) throws Exception {
        PageInfo pageInfo =  productService.selectAll(pageBean);
        return ResponseWrapperSuccess(transformByHospProduct(pageInfo));
    }

    @ApiOperation(value = "根据条件查询商品信息",response = ProductVO.class)
    @RequestMapping(value="/query", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject select(
            @ApiParam(value = "商品信息", required = true)  @RequestBody(required = true) HospProduct product) throws Exception {
        PageInfo pageInfo =  productService.select(product);
        return ResponseWrapperSuccess(transformByHospProduct(pageInfo));
    }


    @ApiOperation(value = "查询单个商品信息---admin",response = ProductVO.class)
    @RequestMapping(value="/admin/", method = RequestMethod.GET)
    @ResponseBody
    public JSONObject selectOneAdmin(
            @ApiParam(value = "商品ID", required = true) @RequestParam(value = "id", required = true) Long id) throws Exception {
        HospProduct hospProduct = productService.selectOneAdmin(id);
        return ResponseWrapperSuccess(transform(hospProduct));
    }

    @ApiOperation(value = "查询全部商品信息---admin",response = ProductVO.class)
    @RequestMapping(value="/admin/all", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject selectAllAdmin(
            @ApiParam(value = "分页信息", required = false)  @RequestBody(required = false) PageBean pageBean) throws Exception {
        PageInfo pageInfo =  productService.selectAllAdmin(pageBean);
        return ResponseWrapperSuccess(transformByHospProduct(pageInfo));
    }

    @ApiOperation(value = "根据条件查询商品信息---admin",response = ProductVO.class)
    @RequestMapping(value="/admin/query", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject selectAdmin(
            @ApiParam(value = "商品信息", required = true)  @RequestBody(required = true) HospProduct product) throws Exception {
        PageInfo pageInfo =  productService.selectAdmin(product);
        return ResponseWrapperSuccess(transformByHospProduct(pageInfo));
    }

    @ApiOperation(value = "删除单个商品信息")
    @RequestMapping(value="/", method = RequestMethod.DELETE)
    @ResponseBody
    public JSONObject deleteOne(
            @ApiParam(value = "商品ID", required = true) @RequestParam(value = "id", required = true) Long id) throws Exception {
        productService.deleteOne(id);
        return ResponseWrapperSuccess(null);
    }

    @ApiOperation(value = "商品置为无效")
    @RequestMapping(value="/invalid", method = RequestMethod.DELETE)
    @ResponseBody
    public JSONObject setStateAsInvalid(
            @ApiParam(value = "商品ID", required = true) @RequestParam(value = "id", required = true) Long id) throws Exception {
        productService.setStateAsInvalid(id);
        return ResponseWrapperSuccess(null);
    }


}
