package com.jinxin.hospHealth.service;

import com.doraemon.base.controller.bean.PageBean;
import com.doraemon.base.exceptions.ShowExceptions;
import com.doraemon.base.guava.DPreconditions;
import com.doraemon.base.language.Language;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.github.pagehelper.util.StringUtil;
import com.jinxin.hospHealth.dao.mapper.HospProductTypeMapper;
import com.jinxin.hospHealth.dao.models.HospProductType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by zbs on 2017/12/25.
 */
@Service
public class ProductTypeService implements BaseService<HospProductType,HospProductType> {

    @Autowired
    HospProductTypeMapper hospProductTypeMapper;

    @Value("${default.productTypeImage}")
    String productTypeImage;

    /**
     * 增加商品类别信息
     *
     * @param hospProductType
     */
    public HospProductType add(HospProductType hospProductType) {
        DPreconditions.checkState(hospProductType.getId() == null,
                "商品类别的id不能填写.",
                true);
        DPreconditions.checkNotNullAndEmpty(hospProductType.getName(),
                "商品类别的名称不能为空.",
                true);
        DPreconditions.checkNotNullAndEmpty(hospProductType.getDescription(),
                "商品类别的说明不能为空.",
                true);
        if (hospProductType.getImages() == null)
            hospProductType.setImages(productTypeImage);
        DPreconditions.checkState(hospProductTypeMapper.insertSelectiveReturnId(hospProductType) == 1,
                Language.get("service.save-failure"),
                true);
        return hospProductType;
    }

    /**
     * 更新商品类别信息
     *
     * @param hospProductType
     */
    public void update(HospProductType hospProductType) {
        DPreconditions.checkNotNull(hospProductType.getId(),
                "商品类别的id不能为空.",
                true);
        HospProductType banner = selectOne(hospProductType.getId());
        DPreconditions.checkNotNull(banner,
                "该ID的商品类别未查询到.",
                true);
        DPreconditions.checkState(hospProductTypeMapper.updateByPrimaryKeySelective(hospProductType) == 1,
                "更新商品类别信息失败.",
                true);
    }

    /**
     * 删除单个商品类别信息
     *
     * @param id
     */
    public void deleteOne(Long id) {
        HospProductType banner = selectOne(id);
        DPreconditions.checkNotNull(banner,
                "该ID的商品类别未查询到.",
                true);
        DPreconditions.checkState(hospProductTypeMapper.deleteByPrimaryKey(id) == 1,
                "删除商品类别信息失败.",
                true);
    }

    @Override
    public void setStateAsInvalid(Long id) throws Exception {
        throw new ShowExceptions(Language.get("service.invalid-method"));
    }

    /**
     * 查询单个商品类别信息
     *
     * @return
     */
    public HospProductType selectOne(Long id) {
        DPreconditions.checkNotNull(id, "商品类别的id不能为空");
        return hospProductTypeMapper.selectByPrimaryKey(id);
    }

    /**
     * 根据条件查询商品类别信息
     *
     * @param hospProductType
     * @return
     */
    public PageInfo<HospProductType> select(HospProductType hospProductType) {
        if(hospProductType == null)
            return  null;
        PageHelper.startPage(hospProductType.getPageNum(), hospProductType.getPageSize());
        if (StringUtil.isNotEmpty(hospProductType.getField()))
            PageHelper.orderBy(hospProductType.getField());
        HospProductType select = new HospProductType();
        select.setName(hospProductType.getName());
        select.setParentProductTypeId(hospProductType.getParentProductTypeId());
        select.setId(hospProductType.getId());
        return new PageInfo(hospProductTypeMapper.select(select));
    }

    /**
     * 查询全部商品类别信息
     *
     * @param pageBean
     * @return
     */
    public PageInfo<HospProductType> selectAll(PageBean pageBean) {
        if(pageBean == null)
            pageBean = new PageBean();
        PageHelper.startPage(pageBean.getPageNum(), pageBean.getPageSize());
        if (StringUtil.isNotEmpty(pageBean.getField()))
            PageHelper.orderBy(pageBean.getField());
        return new PageInfo(hospProductTypeMapper.selectAll());
    }

    public List<HospProductType> selectAll() {
        return hospProductTypeMapper.selectAll();
    }

    @Override
    public HospProductType selectOneAdmin(Long id) throws Exception {
        return selectOne(id);
    }

    @Override
    public PageInfo<HospProductType> selectAdmin(HospProductType hospProductType) throws Exception {
        return selectAllAdmin(hospProductType);
    }

    @Override
    public PageInfo<HospProductType> selectAllAdmin(PageBean pageBean) throws Exception {
        if(pageBean == null)
            pageBean = new PageBean();
        return selectAll(pageBean);
    }
}
