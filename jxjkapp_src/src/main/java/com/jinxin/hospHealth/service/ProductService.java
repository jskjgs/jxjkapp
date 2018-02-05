package com.jinxin.hospHealth.service;

import com.doraemon.base.controller.bean.PageBean;
import com.doraemon.base.exceptions.ShowExceptions;
import com.doraemon.base.guava.DPreconditions;
import com.doraemon.base.language.Language;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.github.pagehelper.util.StringUtil;
import com.jinxin.hospHealth.controller.protocol.PO.ProductPO;
import com.jinxin.hospHealth.controller.protocol.VO.ProductVO;
import com.jinxin.hospHealth.dao.mapper.HospProductMapper;
import com.jinxin.hospHealth.dao.models.HospProduct;
import com.jinxin.hospHealth.dao.models.HospProductSku;
import com.jinxin.hospHealth.dao.modelsEnum.EnableEnum;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.Date;

/**
 * 商品信息service
 * Created by zbs on 2017/12/25.
 */
@Service
public class ProductService implements BaseService<HospProduct,HospProduct>{

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
     * @param productPO
     */
    public HospProduct addProductAndSku(ProductPO productPO) throws Exception {
        DPreconditions.checkState(productPO.getId() == null,
                "商品的id不能填写.",
                true);
        DPreconditions.checkNotNullAndEmpty(productPO.getName(),
                "商品的名称不能为空.",
                true);
        DPreconditions.checkNotNull(productPO.getProductTypeId(),
                "商品的类型不能为空.",
                true);
        DPreconditions.checkNotNullAndEmpty(productPO.getDescription(),
                "商品的描述不能为空.",
                true);
        DPreconditions.checkNotNullAndEmpty(productPO.getInformation(),
                "商品的简介不能为空.",
                true);
        //检查SKU是否存在
        if(productPO.getDefaultSkuId() != null)
            DPreconditions.checkNotNull(skuService.selectOne(productPO.getDefaultSkuId()),
                    "商品的默认SKU不存在",
                    true);
        //检查商品类型是否存在
        DPreconditions.checkNotNull(productTypeService.selectOne(productPO.getProductTypeId()),
                "商品所属的商品类型不存在.",
                true);
        //创建和更新时间和set默认信息
        Date date = new Date();
        if (productPO.getImages() == null)
            productPO.setImages(productImage);
        if(productPO.getSortNumber() == null)
            productPO.setSortNumber(1);
        HospProduct addProduct = new HospProduct();
        addProduct = productPO.transform(new Date(),new Date(),null);
        addProduct.setEnable(EnableEnum.ENABLE_NORMAL.getCode());
        DPreconditions.checkState(hospProductMapper.insertSelectiveReturnId(addProduct) == 1,
                Language.get("service.save-failure"),
                true);
        HospProductSku addSku = new HospProductSku();
        addSku.setImages(productPO.getImages());
        addSku.setName(productPO.getName());
        addSku.setShowPrice(productPO.getShowPrice());
        addSku.setProductId(addProduct.getId());
        addSku.setDescription(productPO.getDescription());
        addSku.setCreateDate(new Date());
        addSku.setSalesPrice(productPO.getSalesPrice());
        addSku.setServiceQuantity(productPO.getServiceQuantity());
        addSku.setUpdateDate(new Date());
        skuService.add(addSku);
        HospProduct update = new HospProduct();
        update.setId(addProduct.getId());
        update.setDefaultSkuId(addSku.getId());
        hospProductMapper.updateByPrimaryKeySelective(update);
        return addProduct;
    }

    /**
     * 更新商品和默认SKU信息
     *
     * @param productPO
     */
    public void updateProductAndSku(ProductPO productPO) throws Exception {
        DPreconditions.checkNotNull(productPO.getId(),
                "商品的id不能为空.",
                true);
        HospProduct product = selectOne(productPO.getId());
        DPreconditions.checkNotNull(product,
                "该ID的商品未查询到.",
                true);
        HospProduct updateProduct = productPO.transform(null,new Date(),null);
        updateProduct.setId(product.getId());
        DPreconditions.checkState(hospProductMapper.updateByPrimaryKeySelective(updateProduct) == 1,
                "更新信息失败.",
                true);
        HospProductSku updateSku = new HospProductSku();
        updateSku.setId(product.getDefaultSkuId());
        updateSku.setImages(productPO.getImages());
        updateSku.setName(productPO.getName());
        updateSku.setShowPrice(productPO.getShowPrice());
        updateSku.setDescription(productPO.getDescription());
        updateSku.setSalesPrice(productPO.getSalesPrice());
        updateSku.setServiceQuantity(productPO.getServiceQuantity());
        updateSku.setUpdateDate(new Date());
        skuService.update(updateSku);
    }

    @Override
    public HospProduct add(HospProduct t) throws Exception {
        return null;
    }

    @Override
    public void update(HospProduct t) throws Exception {

    }

    /**
     * 删除单个商品信息
     *
     * @param id
     */
    public void deleteOne(Long id) {
        HospProduct banner = selectOne(id);
        DPreconditions.checkNotNull(banner,
                "该ID的商品未查询到.",
                true);
        DPreconditions.checkState(hospProductMapper.deleteByPrimaryKey(id) == 1,
                "删除商品信息失败.",
                true);
    }

    @Override
    public void setStateAsInvalid(Long id) throws Exception {
        DPreconditions.checkNotNull(id,
                "商品的id不能为空.",
                true);
        DPreconditions.checkNotNull(selectOne(id),
                "该ID的商品未查询到.",
                true);
        HospProduct invalid = new HospProduct();
        invalid.setId(id);
        invalid.setEnable(EnableEnum.ENABLE_DISABLED.getCode());
        DPreconditions.checkState(hospProductMapper.updateByPrimaryKey(invalid) == 1,
                "删除商品信息失败.",
                true);
    }

    /**
     * 查询单个商品信息
     *
     * @return
     */
    public HospProduct selectOne(Long id) {
        DPreconditions.checkNotNull(id, "商品的id不能为空");
        HospProduct hospProduct = new HospProduct();
        hospProduct.setEnable(EnableEnum.ENABLE_NORMAL.getCode());
        hospProduct.setId(id);
        return hospProductMapper.selectOne(hospProduct);
    }

    /**
     * 根据条件查询商品信息
     *
     * @param hospProduct
     * @return
     */
    public PageInfo<HospProduct> select(HospProduct hospProduct) {
        if(hospProduct == null)
            return null;
        PageHelper.startPage(hospProduct.getPageNum(), hospProduct.getPageSize());
        if (StringUtil.isNotEmpty(hospProduct.getField()))
            PageHelper.orderBy(hospProduct.getField());
        hospProduct.setEnable(EnableEnum.ENABLE_NORMAL.getCode());
        return new PageInfo(hospProductMapper.select(hospProduct));
    }

    /**
     * 查询全部商品信息
     *
     * @param pageBean
     * @return
     */
    public PageInfo<HospProduct> selectAll(PageBean pageBean) {
        if(pageBean == null)
            pageBean = new PageBean();
        PageHelper.startPage(pageBean.getPageNum(), pageBean.getPageSize());
        if (StringUtil.isNotEmpty(pageBean.getField()))
            PageHelper.orderBy(pageBean.getField());
        HospProduct hospProduct = new HospProduct();
        hospProduct.setEnable(EnableEnum.ENABLE_NORMAL.getCode());
        return new PageInfo(hospProductMapper.select(hospProduct));
    }

    /**
     * 查询一个商品---admin
     * @param id
     * @return
     * @throws Exception
     */
    @Override
    public HospProduct selectOneAdmin(Long id) throws Exception {
        DPreconditions.checkNotNull(id, "商品的id不能为空");
        HospProduct select = new HospProduct();
        select.setId(id);
        return hospProductMapper.selectOne(select);
    }

    /**
     * 查询商品
     * @param hospProduct
     * @return
     * @throws Exception
     */
    @Override
    public PageInfo<HospProduct> selectAdmin(HospProduct hospProduct) throws Exception {
        if(hospProduct == null)
            return null;
        PageHelper.startPage(hospProduct.getPageNum(), hospProduct.getPageSize());
        if (StringUtil.isNotEmpty(hospProduct.getField()))
            PageHelper.orderBy(hospProduct.getField());
        return new PageInfo(hospProductMapper.select(hospProduct));
    }

    /**
     * 查询全部商品
     * @param pageBean
     * @return
     * @throws Exception
     */
    @Override
    public PageInfo<HospProduct> selectAllAdmin(PageBean pageBean) throws Exception {
        if(pageBean == null)
            pageBean = new PageBean();
        PageHelper.startPage(pageBean.getPageNum(), pageBean.getPageSize());
        if (StringUtil.isNotEmpty(pageBean.getField()))
            PageHelper.orderBy(pageBean.getField());
        return new PageInfo(hospProductMapper.selectAll());
    }
}
