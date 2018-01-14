package com.jinxin.hospHealth.service;

import com.doraemon.base.controller.bean.PageBean;
import com.doraemon.base.exceptions.ShowExceptions;
import com.doraemon.base.guava.DPreconditions;
import com.doraemon.base.language.Language;
import com.doraemon.base.util.UUidGenerate;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.jinxin.hospHealth.dao.mapper.HospOrderProductMapper;
import com.github.pagehelper.util.StringUtil;
import com.jinxin.hospHealth.dao.models.HospOrderProduct;
import com.jinxin.hospHealth.dao.models.HospProductSku;
import com.jinxin.hospHealth.dao.modelsEnum.OrderProductStateEnum;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;

/**
 * Created by zbs on 2018/1/10.
 */
@Service
public class OrderProductService implements BaseService<HospOrderProduct,HospOrderProduct>{

    @Autowired
    HospOrderProductMapper hospOrderProductMapper;

    @Autowired
    SkuService skuService;

    @Override
    @Transactional
    public HospOrderProduct add(HospOrderProduct hospOrderProduct) throws Exception {
        DPreconditions.checkNotNull(hospOrderProduct.getOrderId(),
                Language.get("order-product.order-id-null"),
                true);
        HospProductSku sku = DPreconditions.checkNotNull(
                skuService.selectOne(hospOrderProduct.getProductSkuId()),
                Language.get("order-product.sku-not-exist"),
                true);
        DPreconditions.checkNotNull(hospOrderProduct.getProductPayPrice(),
                Language.get("order-product.pay-price-null"),
                true);
        DPreconditions.checkState(hospOrderProduct.getQuantity() != null
                && hospOrderProduct.getQuantity()>0,
                Language.get("order-product.quantity-null"),
                true);
        HospOrderProduct add = new HospOrderProduct();
        add.setCode(UUidGenerate.create());
        add.setOrderId(hospOrderProduct.getOrderId());
        add.setProductSkuId(hospOrderProduct.getProductSkuId());
        add.setProductSkuName(sku.getName());
        add.setProductPayPrice(hospOrderProduct.getProductPayPrice());
        add.setProductSalesPrice(sku.getSalesPrice());
        add.setProductShowPrice(sku.getShowPrice());
        add.setQuantity(hospOrderProduct.getQuantity());
        add.setServiceQuantity(hospOrderProduct.getServiceQuantity());
        add.setStartDate(hospOrderProduct.getStartDate());
        add.setStopDate(hospOrderProduct.getStopDate());
        add.setState(OrderProductStateEnum.NORMAL.getCode());
        add.setCreateDate(new Date());
        add.setUpdateDate(new Date());
        DPreconditions.checkNotNull(hospOrderProductMapper.insertReturnId(add),
                Language.get("service.save-failure"),
                true);
        return add;
    }


    @Override
    public void update(HospOrderProduct t) throws Exception {
        throw new ShowExceptions(Language.get("service.invalid-method"));
    }

    @Override
    public void deleteOne(Long id) throws Exception {
        throw new ShowExceptions(Language.get("service.invalid-method"));
    }

    @Override
    public void setStateAsInvalid(Long id) throws Exception {
        throw new ShowExceptions(Language.get("service.invalid-method"));
    }

    /**
     * 查询一条订单商品信息
     * @param id
     * @return
     * @throws Exception
     */
    @Override
    public HospOrderProduct selectOne(Long id) throws Exception {
        DPreconditions.checkNotNull(id,
                Language.get("order.id-null"),
                true);
        return selectSkuInfoByOrderProductId(hospOrderProductMapper.selectByPrimaryKey(id));
    }

    /**
     * 查询 订单商品 信息
     * @param hospOrderProduct
     * @return
     * @throws Exception
     */
    @Override
    public PageInfo<HospOrderProduct> select(HospOrderProduct hospOrderProduct) throws Exception {
        PageHelper.startPage(hospOrderProduct.getPageNum(), hospOrderProduct.getPageSize());
        if (StringUtil.isNotEmpty(hospOrderProduct.getField())) {
            PageHelper.orderBy(hospOrderProduct.getField());
        }
        HospOrderProduct select = new HospOrderProduct();
        select.setOrderId(hospOrderProduct.getId());
        select.setOrderId(hospOrderProduct.getOrderId());
        select.setProductSkuId(hospOrderProduct.getProductSkuId());
        return new PageInfo(selectSkuInfoByOrderProductId(hospOrderProductMapper.select(select)));
    }

    /**
     * 通过Order 查询 order product 信息
     * @param id
     * @return
     * @throws Exception
     */
    public PageInfo<HospOrderProduct> selectByOrderId(Long id) throws Exception {
        DPreconditions.checkNotNull(id,
                Language.get("order-product.order-id-null"),
                true);
        HospOrderProduct select = new HospOrderProduct();
        select.setOrderId(id);
        return new PageInfo(selectSkuInfoByOrderProductId(hospOrderProductMapper.select(select)));
    }

    /**
     * 查询全部商品订单信息
     * @param pageBean
     * @return
     * @throws Exception
     */
    @Override
    public PageInfo<HospOrderProduct> selectAll(PageBean pageBean) throws Exception {
        if(pageBean == null)
            pageBean = new PageBean();
        PageHelper.startPage(pageBean.getPageNum(), pageBean.getPageSize());
        if (StringUtil.isNotEmpty(pageBean.getField())) {
            PageHelper.orderBy(pageBean.getField());
        }
        return new PageInfo(selectSkuInfoByOrderProductId(hospOrderProductMapper.selectAll()));
    }

    /**
     * 查询一条商品订单信息 ---admin
     * @param id
     * @return
     * @throws Exception
     */
    @Override
    public HospOrderProduct selectOneAdmin(Long id) throws Exception {
        return selectOne(id);
    }

    /**
     * 查询商品订单信息 ---admin
     * @param hospOrderProduct
     * @return
     * @throws Exception
     */
    @Override
    public PageInfo<HospOrderProduct> selectAdmin(HospOrderProduct hospOrderProduct) throws Exception {
        return select(hospOrderProduct);
    }

    /**
     * 查询全部商品订单信息 --- admin
     * @param pageBean
     * @return
     * @throws Exception
     */
    @Override
    public PageInfo<HospOrderProduct> selectAllAdmin(PageBean pageBean) throws Exception {
        return selectAll(pageBean);
    }

    /**
     * 通过order product id补充sku信息
     * @param hospOrderProductList
     * @return
     * @throws Exception
     */
    private List<HospOrderProduct> selectSkuInfoByOrderProductId(List<HospOrderProduct> hospOrderProductList) throws Exception {
        if(hospOrderProductList == null)
            return null;
        for(HospOrderProduct hospOrderProduct : hospOrderProductList){
            selectSkuInfoByOrderProductId(hospOrderProduct);
        }
        return hospOrderProductList;
    }

    /**
     * 通过order product id补充sku信息
     * @param hospOrderProduct
     * @return
     * @throws Exception
     */
    private HospOrderProduct selectSkuInfoByOrderProductId(HospOrderProduct hospOrderProduct) throws Exception {
        if(hospOrderProduct == null)
            return null;
        hospOrderProduct.setHospProductSku(skuService.selectOne(hospOrderProduct.getProductSkuId()));
        return hospOrderProduct;
    }
}
