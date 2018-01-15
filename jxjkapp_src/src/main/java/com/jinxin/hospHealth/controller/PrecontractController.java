package com.jinxin.hospHealth.controller;

import com.alibaba.fastjson.JSONObject;
import com.doraemon.base.controller.bean.PageBean;
import com.doraemon.base.guava.DPreconditions;
import com.doraemon.base.language.Language;
import com.github.pagehelper.PageInfo;
import com.jinxin.hospHealth.controller.protocol.VO.PrecontractVO;
import com.jinxin.hospHealth.controller.protocol.VO.ProductVO;
import com.jinxin.hospHealth.controller.protocol.VO.UserInfoVO;
import com.jinxin.hospHealth.dao.models.HospPrecontract;
import com.jinxin.hospHealth.dao.models.HospProductSku;
import com.jinxin.hospHealth.service.PrecontractService;
import com.jinxin.hospHealth.service.ProductService;
import com.jinxin.hospHealth.service.SkuService;
import com.jinxin.hospHealth.service.UserInfoService;
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
 * Created by zbs on 2018/1/2.
 */
@RestController
@RequestMapping("/precontract")
@Slf4j
@Api(description = "预约相关接口")
public class PrecontractController extends MyBaseController{

    @Autowired
    PrecontractService precontractService;
    @Autowired
    SkuService skuService;
    @Autowired
    ProductService productService;
    @Autowired
    UserInfoService userInfoService;

    @ApiOperation(value = "新增预约信息")
    @RequestMapping(value="/", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject add(
            @ApiParam(value = "预约信息", required = true) @RequestBody HospPrecontract precontract) throws Exception {
        precontract.setUserId(DPreconditions.checkNotNull(getCurrentUserId(),
                Language.get("user.id-null"),
                true));
        Map<String,Long> map = new HashMap<>();
        precontractService.add(precontract);
        map.put("id",precontract.getId());
        return ResponseWrapperSuccess(map);
    }

    @ApiOperation(value = "更新预约信息")
    @RequestMapping(value="/", method = RequestMethod.PUT)
    @ResponseBody
    public JSONObject update(
            @ApiParam(value = "预约信息", required = true)  @RequestBody HospPrecontract precontract) throws Exception {
        precontract.setUserId(DPreconditions.checkNotNull(getCurrentUserId(),
                Language.get("user.id-null"),
                true));
        precontractService.update(precontract);
        return ResponseWrapperSuccess(null);
    }

    @ApiOperation(value = "查询单个预约信息",response = PrecontractVO.class)
    @RequestMapping(value="/", method = RequestMethod.GET)
    @ResponseBody
    public JSONObject selectOne(
            @ApiParam(value = "预约ID", required = true) @RequestParam(value = "id", required = true) Long id) throws Exception {
        HospPrecontract hospPrecontract =  new HospPrecontract();
        hospPrecontract.setUserId(DPreconditions.checkNotNull(getCurrentUserId(),
                Language.get("user.id-null"),
                true));
        hospPrecontract.setId(id);
        HospPrecontract hospProduct = precontractService.selectOne(hospPrecontract);
        return ResponseWrapperSuccess(conversion(hospProduct));
    }

    @ApiOperation(value = "查询全部预约信息",response = PrecontractVO.class)
    @RequestMapping(value="/all", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject selectAll(
            @ApiParam(value = "分页信息", required = false)  @RequestBody(required = false) PageBean pageBean) throws Exception {
        HospPrecontract hospPrecontract =  new HospPrecontract();
        hospPrecontract.setUserId(DPreconditions.checkNotNull(getCurrentUserId(),
                Language.get("user.id-null"),
                true));
        if(pageBean != null) {
            hospPrecontract.setPageNum(pageBean.getPageNum());
            hospPrecontract.setPageSize(pageBean.getPageSize());
            hospPrecontract.setField(pageBean.getField());
        }
        PageInfo pageInfo =  precontractService.select(hospPrecontract);
        List<PrecontractVO> respList = new ArrayList<>();
        for(Object info : pageInfo.getList()) {
            respList.add(conversion((HospPrecontract) info));
        }
        pageInfo.setList(respList);
        return ResponseWrapperSuccess(pageInfo);
    }

    @ApiOperation(value = "根据条件查询预约信息",response = PrecontractVO.class)
    @RequestMapping(value="/query", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject select(
            @ApiParam(value = "预约信息", required = true)  @RequestBody(required = true) HospPrecontract precontract) throws Exception {
        precontract.setUserId(DPreconditions.checkNotNull(getCurrentUserId(),
                Language.get("user.id-null"),
                true));
        PageInfo pageInfo =  precontractService.select(precontract);
        List<PrecontractVO> respList = new ArrayList<>();
        for(Object info : pageInfo.getList()) {
            respList.add(conversion((HospPrecontract) info));
        }
        pageInfo.setList(respList);
        return ResponseWrapperSuccess(pageInfo);
    }


    @ApiOperation(value = "查询单个预约信息---admin",response = PrecontractVO.class)
    @RequestMapping(value="/admin/", method = RequestMethod.GET)
    @ResponseBody
    public JSONObject selectOneAdmin(
            @ApiParam(value = "预约ID", required = true) @RequestParam(value = "id", required = true) Long id) throws Exception {
        HospPrecontract hospProduct = precontractService.selectOneAdmin(id);
        return ResponseWrapperSuccess(conversion(hospProduct));
    }

    @ApiOperation(value = "查询全部预约信息---admin",response = PrecontractVO.class)
    @RequestMapping(value="/admin/all", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject selectAllAdmin(
            @ApiParam(value = "分页信息", required = false)  @RequestBody(required = false) PageBean pageBean) throws Exception {
        PageInfo pageInfo =  precontractService.selectAllAdmin(pageBean);
        List<PrecontractVO> respList = new ArrayList<>();
        for(Object info : pageInfo.getList()) {
            respList.add(conversion((HospPrecontract) info));
        }
        pageInfo.setList(respList);
        return ResponseWrapperSuccess(pageInfo);
    }

    @ApiOperation(value = "根据条件查询预约信息---admin",response = PrecontractVO.class)
    @RequestMapping(value="/admin/query", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject selectAdmin(
            @ApiParam(value = "预约信息", required = true)  @RequestBody(required = true) HospPrecontract precontract) throws Exception {
        PageInfo pageInfo =  precontractService.selectAdmin(precontract);
        List<PrecontractVO> respList = new ArrayList<>();
        for(Object info : pageInfo.getList()) {
            respList.add(conversion((HospPrecontract) info));
        }
        pageInfo.setList(respList);
        return ResponseWrapperSuccess(pageInfo);
    }

    @ApiOperation(value = "删除单个预约信息")
    @RequestMapping(value="/", method = RequestMethod.DELETE)
    @ResponseBody
    public JSONObject deleteOne(
            @ApiParam(value = "预约ID", required = true) @RequestParam(value = "id", required = true) Long id) throws Exception {
        precontractService.deleteOne(id);
        return ResponseWrapperSuccess(null);
    }

    /**
     * 转换 HospPrecontract 为 PrecontractVO
     * @param precontract
     * @return
     */
    private PrecontractVO conversion(HospPrecontract precontract){
        PrecontractVO precontractVO = new PrecontractVO(precontract);
        if(precontract.getUserId() != null)
            precontractVO.setUserInfoVO(new UserInfoVO(userInfoService.selectOne(precontract.getId())));
        if(precontract.getProductSkuId() != null) {
            HospProductSku sku = skuService.selectOne(precontract.getId());
            precontractVO.setSku(sku);
            precontractVO.setProduct(productService.selectOne(sku.getProductId()));
        }
        return precontractVO;
    }
}
