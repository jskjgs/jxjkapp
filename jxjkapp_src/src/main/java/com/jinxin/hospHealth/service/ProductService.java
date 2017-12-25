package com.jinxin.hospHealth.service;

import com.doraemon.base.controller.bean.PageBean;
import com.doraemon.base.guava.DPreconditions;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.github.pagehelper.StringUtil;
import com.jinxin.hospHealth.dao.mapper.HospProductMapper;
import com.jinxin.hospHealth.dao.models.HospProduct;
import com.jinxin.hospHealth.dao.models.HospProductSku;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.Date;

/**
 * 商品信息service
 * Created by zbs on 2017/12/25.
 */
@Service
public class ProductService {

    @Autowired
    HospProductMapper hospProductMapper;
    @Autowired
    SkuService skuService;
    @Autowired
    ProductTypeService productTypeService;

    @Value("${default.productImage}")
    String productImage;

    /**
     * 增加商品信息
     *
     * @param hospProduct
     */
    public void add(HospProduct hospProduct) {
        DPreconditions.checkState(hospProduct.getId() == null, "商品的id不能填写.", true);
        DPreconditions.checkNotNullAndEmpty(hospProduct.getName(), "商品的名称不能为空.", true);
        DPreconditions.checkNotNull(hospProduct.getProductTypeId(), "商品的类型不能为空.", true);
        DPreconditions.checkNotNullAndEmpty(hospProduct.getDescription(), "商品的描述不能为空.", true);
        DPreconditions.checkNotNullAndEmpty(hospProduct.getInformation(), "商品的简介不能为空.", true);
        //检查SKU是否存在
        if(hospProduct.getDefaultSkuId() != null)
            DPreconditions.checkNotNull(skuService.selectOne(hospProduct.getDefaultSkuId()),"商品的默认SKU不存在",true);
        //检查商品类型是否存在
        DPreconditions.checkNotNull(productTypeService.selectOne(hospProduct.getProductTypeId()),"商品所属的商品类型不存在.",true);
        //创建和更新时间和set默认信息
        Date date = new Date();
        if (hospProduct.getImages() == null)
            hospProduct.setImages(productImage);
        if(hospProduct.getCreateDate() == null)
            hospProduct.setCreateDate(date);
        if(hospProduct.getSortNumber() == null)
            hospProduct.setSortNumber(1);
        if(hospProduct.getUpdateDate() == null)
            hospProduct.setUpdateDate(date);
        DPreconditions.checkState(hospProductMapper.insertSelectiveReturnId(hospProduct) == 1, "增加商品失败", true);
    }

    /**
     * 更新商品信息
     *
     * @param hospProduct
     */
    public void update(HospProduct hospProduct) {
        DPreconditions.checkNotNull(hospProduct.getId(), "商品的id不能为空.", true);
        HospProduct product = selectOne(hospProduct.getId());
        DPreconditions.checkNotNull(product, "该ID的商品未查询到.", true);
        if(hospProduct.getUpdateDate() == null)
            hospProduct.setUpdateDate(new Date());
        //如果需要修改默认sku,需要判断默认的sku是否存在
        if(hospProduct.getDefaultSkuId() != null)
             DPreconditions.checkNotNull(skuService.selectOne(hospProduct.getDefaultSkuId()),"商品的默认SKU不存在",true);
        //如果需要修改商品类型,需要判断商品类型是否存在
        if(hospProduct.getProductTypeId() != null)
            DPreconditions.checkNotNull(productTypeService.selectOne(hospProduct.getProductTypeId()),"商品所属的商品类型不存在.",true);
        DPreconditions.checkState(hospProductMapper.updateByPrimaryKeySelective(hospProduct) == 1, "更新banner信息失败.", true);
    }

    /**
     * 删除单个商品信息
     *
     * @param id
     */
    public void deleteOne(Long id) {
        HospProduct banner = selectOne(id);
        DPreconditions.checkNotNull(banner, "该ID的商品未查询到.", true);
        DPreconditions.checkState(hospProductMapper.deleteByPrimaryKey(id) == 1, "删除商品信息失败.");
    }

    /**
     * 查询单个商品信息
     *
     * @return
     */
    public HospProduct selectOne(Long id) {
        DPreconditions.checkNotNull(id, "商品的id不能为空");
        return hospProductMapper.selectByPrimaryKey(id);
    }

    /**
     * 根据条件查询商品信息
     *
     * @param hospProduct
     * @return
     */
    public PageInfo<HospProduct> select(HospProduct hospProduct) {
        PageHelper.startPage(hospProduct.getPageNum(), hospProduct.getPageSize());
        if (StringUtil.isNotEmpty(hospProduct.getField()))
            PageHelper.orderBy(hospProduct.getField());
        HospProduct select = new HospProduct();
        select.setEnable(hospProduct.getEnable());
        select.setName(hospProduct.getName());
        select.setProductTypeId(hospProduct.getProductTypeId());
        return new PageInfo(hospProductMapper.select(select));
    }

    /**
     * 查询全部商品信息
     *
     * @param pageBean
     * @return
     */
    public PageInfo<HospProduct> selectAll(PageBean pageBean) {
        PageHelper.startPage(pageBean.getPageNum(), pageBean.getPageSize());
        if (StringUtil.isNotEmpty(pageBean.getField()))
            PageHelper.orderBy(pageBean.getField());
        return new PageInfo(hospProductMapper.selectAll());
    }
}
