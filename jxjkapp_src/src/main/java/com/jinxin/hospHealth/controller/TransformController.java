package com.jinxin.hospHealth.controller;

import com.github.pagehelper.PageInfo;
import com.jinxin.hospHealth.controller.protocol.PO.OrderProductPO;
import com.jinxin.hospHealth.controller.protocol.VO.*;
import com.jinxin.hospHealth.dao.models.*;
import com.jinxin.hospHealth.service.*;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by zbs on 2018/1/18.
 */
public class TransformController extends MyBaseController {

    @Autowired
    DoctorInfoService doctorInfoService;
    @Autowired
    DoctorTypeService doctorTypeService;
    @Autowired
    HospAreaService doctorAreaService;
    @Autowired
    OrderProductService orderProductService;
    @Autowired
    SkuService skuService;
    @Autowired
    ProductService productService;
    @Autowired
    ProductTypeService productTypeService;
    @Autowired
    OrderServiceDetailsService orderServiceDetailsService;
    @Autowired
    OrderService orderService;
    @Autowired
    UserInfoService userInfoService;
    @Autowired
    HospAreaService hospAreaService;
    @Autowired
    DoctorUserInfoService doctorUserInfoService;

    public PrecontractVO transform(HospPrecontract precontract) {
        if (precontract == null)
            return null;
        HospArea area =
                precontract.getAreaId() != null
                        ? hospAreaService.selectOne(precontract.getAreaId())
                        : null;
        UserInfoVO userInfoVO =
                precontract.getUserId() != null
                        ? transform(userInfoService.selectOne(precontract.getUserId()))
                        : null;
        ProductSkuVO productSkuVO =
                precontract.getProductSkuId() != null
                        ? transform(skuService.selectOne(precontract.getProductSkuId()))
                        : null;
        return precontract.transform(area, userInfoVO, productSkuVO);
    }

    public OrderProductVO transform(HospOrderProduct hospOrderProduct) throws Exception {
        if (hospOrderProduct == null)
            return null;
//        OrderVO orderVO =
//                hospOrderProduct.getOrderId() != null
//                        ? transform(orderService.selectOne(hospOrderProduct.getOrderId()))
//                        : null;
        ProductSkuVO productSkuVO =
                hospOrderProduct.getProductSkuId() != null
                        ? transform(skuService.selectOne(hospOrderProduct.getProductSkuId()))
                        : null;
        HospOrderGrade grade = null;
        int restServcieNumber = orderServiceDetailsService.remainingServiceNumber(hospOrderProduct.getId());
        return hospOrderProduct.transform(productSkuVO, grade, restServcieNumber);
    }


    public DoctorInfoVO transform(HospDoctorInfo hospDoctorInfo) {
        if (hospDoctorInfo == null)
            return null;
        HospArea hospArea =
                hospDoctorInfo.getHospAreaId() != null
                        ? doctorAreaService.selectOne(hospDoctorInfo.getHospAreaId())
                        : null;
        HospDoctorType hospDoctorType =
                hospDoctorInfo.getDoctorTypeId() != null
                        ? doctorTypeService.selectOne(hospDoctorInfo.getDoctorTypeId())
                        : null;
        return hospDoctorInfo.transform(hospArea, hospDoctorType);
    }

    public ProductVO transform(HospProduct hospProduct) {
        if (hospProduct == null)
            return null;
        ProductVO productVO = hospProduct.transform(
                hospProduct.getProductTypeId() != null
                        ? productTypeService.selectOne(hospProduct.getProductTypeId())
                        : null,
                hospProduct.getDefaultSkuId() != null
                        ? skuService.selectOne(hospProduct.getDefaultSkuId())
                        : null);
        return productVO;
    }

    public ProductSkuVO transform(HospProductSku hospProductSku) {
        if (hospProductSku == null)
            return null;
        HospProduct hospProduct =
                hospProductSku.getProductId() != null
                        ? productService.selectOne(hospProductSku.getProductId())
                        : null;
        ProductVO productVO =
                hospProduct != null
                        ? transform(hospProduct)
                        : null;
        return hospProductSku.transform(productVO);
    }

    public DoctorUserInfoVO transform(HospDoctorUserInfo hospDoctorUserInfo) {
        if (hospDoctorUserInfo == null)
            return null;
        return hospDoctorUserInfo.transform();
    }

    public OrderServiceDetailsVO transform(HospOrderServiceDetails hospOrderServiceDetails) throws Exception {
        if (hospOrderServiceDetails == null)
            return null;
        HospDoctorUserInfo hospDoctorUserInfo =
                hospOrderServiceDetails.getDoctorUserId() != null
                        ? doctorUserInfoService.selectOne(hospOrderServiceDetails.getDoctorUserId())
                        : null;
        DoctorUserInfoVO doctorUserInfoVO =
                hospDoctorUserInfo != null
                        ? transform(hospDoctorUserInfo)
                        : null;
        HospProductSku hospProductSku =
                hospOrderServiceDetails.getOrderProductId() != null
                        ? skuService.selectOne(hospOrderServiceDetails.getOrderProductId())
                        : null;
        ProductSkuVO productSkuVO =
                hospProductSku != null
                        ? transform(hospProductSku)
                        : null;
        HospArea hospArea =
                hospOrderServiceDetails.getDoctorAreaId() != null
                        ? doctorAreaService.selectOne(hospOrderServiceDetails.getDoctorAreaId())
                        : null;
        //todo : grade 待做
        return hospOrderServiceDetails.transform(productSkuVO, doctorUserInfoVO, null, hospArea);
    }

    public OrderVO transform(HospOrder hospOrder) throws Exception {
        if (hospOrder == null)
            return null;
        HospUserInfo hospUserInfo =
                hospOrder.getUserId() != null
                        ? userInfoService.selectOne(hospOrder.getUserId())
                        : null;
        UserInfoVO userInfoVO =
                hospUserInfo != null
                        ? hospUserInfo.transform()
                        : null;
        HospArea hospArea =
                hospOrder.getAreaId() != null
                        ? hospAreaService.selectOne(hospOrder.getAreaId())
                        : null;
        OrderProductPO orderProductPO = new OrderProductPO();
        orderProductPO.setOrderId(hospOrder.getId());
        PageInfo<OrderProductVO> pageInfo =
                transformByHospOrderProduct(orderProductService.select(orderProductPO));
        return hospOrder.transform(userInfoVO, hospArea, pageInfo.getList());
    }

    public UserInfoVO transform(HospUserInfo hospUserInfo) {
        if (hospUserInfo == null)
            return null;
        return hospUserInfo.transform();
    }

    public AdminInfoVO transform(HospAdminUserInfo hospAdminUserInfo) {
        if (hospAdminUserInfo == null)
            return null;
        return hospAdminUserInfo.transform();
    }

    public PageInfo<DoctorInfoVO> transformByHospDoctorInfo(PageInfo pageInfo) {
        if (pageInfo == null || pageInfo.getList() == null || pageInfo.getList().size() < 1)
            return pageInfo;
        List<DoctorInfoVO> list = new ArrayList<>();
        for (Object object : pageInfo.getList()) {
            HospDoctorInfo hospDoctorInfo = (HospDoctorInfo) object;
            list.add(transform(hospDoctorInfo));
        }
        pageInfo.setList(list);
        return pageInfo;
    }

    public PageInfo<OrderVO> transformByHospOrder(PageInfo pageInfo) throws Exception {
        if (pageInfo == null || pageInfo.getList() == null || pageInfo.getList().size() < 1)
            return pageInfo;
        List<OrderVO> orderVOList = new ArrayList<>();
        for (Object object : pageInfo.getList()) {
            HospOrder hospOrder = (HospOrder) object;
            orderVOList.add(transform(hospOrder));
        }
        pageInfo.setList(orderVOList);
        return pageInfo;
    }

    public PageInfo<OrderServiceDetailsVO> transformByHospOrderServiceDetails(PageInfo pageInfo) throws Exception {
        if (pageInfo == null || pageInfo.getList() == null || pageInfo.getList().size() < 1)
            return pageInfo;
        List<OrderServiceDetailsVO> list = new ArrayList<>();
        for (Object object : pageInfo.getList()) {
            HospOrderServiceDetails hospOrderServiceDetails = (HospOrderServiceDetails) object;
            list.add(transform(hospOrderServiceDetails));
        }
        pageInfo.setList(list);
        return pageInfo;
    }

    public PageInfo<AdminInfoVO> transformByHospAdminUserInfo(PageInfo pageInfo) {
        if (pageInfo == null || pageInfo.getList() == null || pageInfo.getList().size() < 1)
            return pageInfo;
        List<AdminInfoVO> adminInfoVOList = new ArrayList<>();
        for (Object object : pageInfo.getList()) {
            HospAdminUserInfo hospAdminUserInfo = (HospAdminUserInfo) object;
            adminInfoVOList.add(transform(hospAdminUserInfo));
        }
        pageInfo.setList(adminInfoVOList);
        return pageInfo;
    }

    public PageInfo<PrecontractVO> transformByHospPrecontract(PageInfo pageInfo) {
        if (pageInfo == null || pageInfo.getList() == null || pageInfo.getList().size() < 1)
            return pageInfo;
        List<PrecontractVO> precontractVOList = new ArrayList<>();
        for (Object object : pageInfo.getList()) {
            HospPrecontract hospPrecontract = (HospPrecontract) object;
            precontractVOList.add(transform(hospPrecontract));
        }
        pageInfo.setList(precontractVOList);
        return pageInfo;
    }

    public PageInfo<ProductVO> transformByHospProduct(PageInfo pageInfo) {
        if (pageInfo == null || pageInfo.getList() == null || pageInfo.getList().size() < 1)
            return pageInfo;
        List<ProductVO> productVOList = new ArrayList<>();
        for (Object object : pageInfo.getList()) {
            HospProduct hospProduct = (HospProduct) object;
            productVOList.add(transform(hospProduct));
        }
        pageInfo.setList(productVOList);
        return pageInfo;
    }

    public PageInfo<ProductSkuVO> transformByHospProductSku(PageInfo pageInfo) {
        if (pageInfo == null || pageInfo.getList() == null || pageInfo.getList().size() < 1)
            return pageInfo;
        List<ProductSkuVO> productSkuVOList = new ArrayList<>();
        for (Object object : pageInfo.getList()) {
            HospProductSku hospProductSku = (HospProductSku) object;
            productSkuVOList.add(transform(hospProductSku));
        }
        pageInfo.setList(productSkuVOList);
        return pageInfo;
    }

    public PageInfo<UserInfoVO> transformByHospUserInfo(PageInfo pageInfo) {
        if (pageInfo == null || pageInfo.getList() == null || pageInfo.getList().size() < 1)
            return pageInfo;
        List<UserInfoVO> userInfoVOList = new ArrayList<>();
        for (Object object : pageInfo.getList()) {
            HospUserInfo hospUserInfo = (HospUserInfo) object;
            userInfoVOList.add(transform(hospUserInfo));
        }
        pageInfo.setList(userInfoVOList);
        return pageInfo;
    }

    public PageInfo<OrderProductVO> transformByHospOrderProduct(PageInfo pageInfo) throws Exception {
        if (pageInfo == null || pageInfo.getList() == null || pageInfo.getList().size() < 1)
            return pageInfo;
        List<OrderProductVO> orderProductVOList = new ArrayList<>();
        for (Object object : pageInfo.getList()) {
            HospOrderProduct hospOrderProduct = (HospOrderProduct) object;
            orderProductVOList.add(transform(hospOrderProduct));
        }
        pageInfo.setList(orderProductVOList);
        return pageInfo;
    }

    public PageInfo<DoctorUserInfoVO> transformByHospDoctorUserInfo(PageInfo pageInfo) throws Exception {
        if (pageInfo == null || pageInfo.getList() == null || pageInfo.getList().size() < 1)
            return pageInfo;
        List<DoctorUserInfoVO> doctorUserInfoVOList = new ArrayList<>();
        for (Object object : pageInfo.getList()) {
            HospDoctorUserInfo hospDoctorUserInfo = (HospDoctorUserInfo) object;
            doctorUserInfoVOList.add(transform(hospDoctorUserInfo));
        }
        pageInfo.setList(doctorUserInfoVOList);
        return pageInfo;
    }
}
