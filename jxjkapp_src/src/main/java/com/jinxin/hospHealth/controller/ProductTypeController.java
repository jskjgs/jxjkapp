package com.jinxin.hospHealth.controller;

import com.alibaba.fastjson.JSONObject;
import com.doraemon.base.controller.bean.PageBean;
import com.github.pagehelper.PageInfo;
import com.jinxin.hospHealth.controller.protocol.VO.ProductVO;
import com.jinxin.hospHealth.dao.models.HospProduct;
import com.jinxin.hospHealth.dao.models.HospProductType;
import com.jinxin.hospHealth.service.ProductService;
import com.jinxin.hospHealth.service.ProductTypeService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by zbs on 2017/12/25.
 */

@RestController
@RequestMapping("/productType")
@Slf4j
@Api(description = "商品类别相关接口")
public class ProductTypeController extends TransformController{

    @Autowired
    ProductTypeService productTypeService;
    @Autowired
    ProductService productService;

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

    @ApiOperation(value = "查询全部类目--商品",response = ProductVO.class)
    @RequestMapping(value="/allProductAndType", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject allProductAndType() throws Exception {
        List<HospProductType> hospProductTypeList =  productTypeService.selectAll();
        if(hospProductTypeList == null || hospProductTypeList.size() < 1)
            return ResponseWrapperSuccess(null);
        for(HospProductType productType : hospProductTypeList) {
            HospProduct hospProduct = new HospProduct();
            hospProduct.setProductTypeId(productType.getId());
            PageInfo<ProductVO> pageInfo = transformByHospProduct(productService.select(hospProduct));
            productType.setProductVO(pageInfo.getList());
        }
        return ResponseWrapperSuccess(hospProductTypeList);
    }
}
