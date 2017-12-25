package com.jinxin.hospHealth.service;

import com.doraemon.base.controller.bean.PageBean;
import com.doraemon.base.guava.DPreconditions;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.github.pagehelper.StringUtil;
import com.jinxin.hospHealth.dao.mapper.HospProductSkuMapper;
import com.jinxin.hospHealth.dao.models.HospNews;
import com.jinxin.hospHealth.dao.models.HospProductSku;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.Date;

/**
 * 商品SKU信息service
 * Created by zbs on 2017/12/25.
 */
@Service
public class SkuService {

    @Autowired
    HospProductSkuMapper hospProductSkuMapper;

    @Value("${default.skuImage}")
    String skuImage;

    @Autowired
    ProductService productService;

    /**
     * 增加商品SKU信息
     *
     * @param hospProductSku
     */
    public void add(HospProductSku hospProductSku) {
        DPreconditions.checkState(hospProductSku.getId() == null, "商品SKU的id不能填写.", true);
        DPreconditions.checkNotNull(hospProductSku.getProductId(), "商品的ID不能为空.", true);
        DPreconditions.checkNotNullAndEmpty(hospProductSku.getName(), "商品SKU的名称不能为空.", true);
        DPreconditions.checkNotNullAndEmpty(hospProductSku.getDescription(), "商品SKU的描述不能为空.", true);
        DPreconditions.checkNotNull(hospProductSku.getSalesPrice(), "商品SKU的销售价格不能为空.", true);
        DPreconditions.checkNotNull(hospProductSku.getShowPrice(), "商品SKU的显示价格不能为空.", true);
        //判断商品存在
        DPreconditions.checkNotNull(productService.selectOne(hospProductSku.getProductId()),"商品SKU挂载的商品不存在.",true);
        Date date = new Date();
        if (hospProductSku.getServiceQuantity() == null)
            hospProductSku.setServiceQuantity(1);
        if (hospProductSku.getCreateDate() == null)
            hospProductSku.setCreateDate(date);
        if (hospProductSku.getUpdateDate() == null)
            hospProductSku.setUpdateDate(date);
        if (hospProductSku.getEnable() == null)
            hospProductSku.setEnable(0);
        if (hospProductSku.getImages() == null)
            hospProductSku.setImages(skuImage);
        DPreconditions.checkState(hospProductSkuMapper.insertSelectiveReturnId(hospProductSku) == 1, "增加商品SKU失败", true);
    }

    /**
     * 更新商品SKU信息
     *
     * @param hospProductSku
     */
    public void update(HospProductSku hospProductSku) {
        DPreconditions.checkNotNull(hospProductSku.getId(), "商品SKU的id不能为空.", true);
        HospProductSku selectProductSku = selectOne(hospProductSku.getId());
        DPreconditions.checkNotNull(selectProductSku, "该ID的商品SKU未查询到.", true);
        DPreconditions.checkState(hospProductSkuMapper.updateByPrimaryKeySelective(hospProductSku) == 1, "更新商品SKU信息失败.", true);
    }

    /**
     * 删除单个商品SKU信息
     *
     * @param id
     */
    public void deleteOne(Long id) {
        HospProductSku hospProductSku = selectOne(id);
        DPreconditions.checkNotNull(hospProductSku, "该ID的商品SKU未查询到.", true);
        DPreconditions.checkState(hospProductSkuMapper.deleteByPrimaryKey(id) == 1, "删除该商品SKU信息失败.");
    }

    /**
     * 查询单个商品SKU信息
     *
     * @return
     */
    public HospProductSku selectOne(Long id) {
        DPreconditions.checkNotNull(id, "商品SKU的id不能为空");
        return hospProductSkuMapper.selectByPrimaryKey(id);
    }

    /**
     * 根据条件查询商品SKU信息
     *
     * @param hospProductSku
     * @return
     */
    public PageInfo<HospNews> select(HospProductSku hospProductSku) {
        PageHelper.startPage(hospProductSku.getPageNum(), hospProductSku.getPageSize());
        if (StringUtil.isNotEmpty(hospProductSku.getField()))
            PageHelper.orderBy(hospProductSku.getField());
        HospProductSku select = new HospProductSku();
        select.setEnable(hospProductSku.getEnable());
        select.setProductId(hospProductSku.getProductId());
        select.setName(hospProductSku.getName());
        return new PageInfo(hospProductSkuMapper.select(select));
    }

    /**
     * 查询全部商品SKU信息
     *
     * @param pageBean
     * @return
     */
    public PageInfo<HospNews> selectAll(PageBean pageBean) {
        PageHelper.startPage(pageBean.getPageNum(), pageBean.getPageSize());
        if (StringUtil.isNotEmpty(pageBean.getField()))
            PageHelper.orderBy(pageBean.getField());
        return new PageInfo(hospProductSkuMapper.selectAll());
    }
}
