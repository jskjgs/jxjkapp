package com.jinxin.hospHealth.service;

import com.doraemon.base.controller.bean.PageBean;
import com.doraemon.base.exceptions.ShowExceptions;
import com.doraemon.base.guava.DPreconditions;
import com.doraemon.base.language.Language;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.github.pagehelper.util.StringUtil;
import com.jinxin.hospHealth.dao.mapper.HospDoctorTypeMapper;
import com.jinxin.hospHealth.dao.models.HospDoctorType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by zbs on 2017/12/25.
 */
@Service
public class DoctorTypeService implements BaseService<HospDoctorType,HospDoctorType> {

    @Autowired
    HospDoctorTypeMapper hospDoctorTypeMapper;

    /**
     * 增加医生类别信息
     *
     * @param hospDoctorType
     */
    public HospDoctorType add(HospDoctorType hospDoctorType) {
        DPreconditions.checkState(hospDoctorType.getId() == null,
                "医生类别的id不能填写.",
                true);
        DPreconditions.checkNotNullAndEmpty(hospDoctorType.getName(),
                "医生类别的名称不能为空.",
                true);
        DPreconditions.checkNotNullAndEmpty(hospDoctorType.getDescription(),
                "医生类别的说明不能为空.",
                true);
        DPreconditions.checkState(hospDoctorTypeMapper.insertSelectiveReturnId(hospDoctorType) == 1,
                Language.get("service.save-failure"),
                true);
        return hospDoctorType;
    }

    /**
     * 更新医生类别信息
     *
     * @param hospDoctorType
     */
    public void update(HospDoctorType hospDoctorType) {
        DPreconditions.checkNotNull(hospDoctorType.getId(),
                "医生类别的id不能为空.",
                true);
        HospDoctorType banner = selectOne(hospDoctorType.getId());
        DPreconditions.checkNotNull(banner,
                "该ID的医生类别未查询到.",
                true);
        DPreconditions.checkState(hospDoctorTypeMapper.updateByPrimaryKeySelective(hospDoctorType) == 1,
                "更新医生类别信息失败.",
                true);
    }

    /**
     * 删除单个医生类别信息
     *
     * @param id
     */
    public void deleteOne(Long id) {
        HospDoctorType banner = selectOne(id);
        DPreconditions.checkNotNull(banner,
                "该ID的医生类别未查询到.",
                true);
        DPreconditions.checkState(hospDoctorTypeMapper.deleteByPrimaryKey(id) == 1,
                "删除医生类别信息失败.",
                true);
    }

    @Override
    public void setStateAsInvalid(Long id) throws Exception {
        throw new ShowExceptions(Language.get("service.invalid-method"));
    }

    /**
     * 查询单个医生类别信息
     *
     * @return
     */
    public HospDoctorType selectOne(Long id) {
        DPreconditions.checkNotNull(id, "医生类别的id不能为空");
        return hospDoctorTypeMapper.selectByPrimaryKey(id);
    }

    /**
     * 根据条件查询医生类别信息
     *
     * @param hospDoctorType
     * @return
     */
    public PageInfo<HospDoctorType> select(HospDoctorType hospDoctorType) {
        PageHelper.startPage(hospDoctorType.getPageNum(), hospDoctorType.getPageSize());
        if (StringUtil.isNotEmpty(hospDoctorType.getField()))
            PageHelper.orderBy(hospDoctorType.getField());
        HospDoctorType select = new HospDoctorType();
        select.setName(hospDoctorType.getName());
        return new PageInfo(hospDoctorTypeMapper.select(select));
    }

    /**
     * 查询全部医生类别信息
     *
     * @param pageBean
     * @return
     */
    public PageInfo<HospDoctorType> selectAll(PageBean pageBean) {
        if(pageBean == null)
            pageBean = new PageBean();
        PageHelper.startPage(pageBean.getPageNum(), pageBean.getPageSize());
        if (StringUtil.isNotEmpty(pageBean.getField()))
            PageHelper.orderBy(pageBean.getField());
        return new PageInfo(hospDoctorTypeMapper.selectAll());
    }

    @Override
    public HospDoctorType selectOneAdmin(Long id) throws Exception {
        return selectOneAdmin(id);
    }

    @Override
    public PageInfo<HospDoctorType> selectAdmin(HospDoctorType hospDoctorType) throws Exception {
        return select(hospDoctorType);
    }

    @Override
    public PageInfo<HospDoctorType> selectAllAdmin(PageBean pageBean) throws Exception {
        return selectAll(pageBean);
    }
}
