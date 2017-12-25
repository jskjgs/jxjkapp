package com.jinxin.hospHealth.service;

import com.doraemon.base.controller.bean.PageBean;
import com.doraemon.base.guava.DPreconditions;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.github.pagehelper.StringUtil;
import com.jinxin.hospHealth.dao.mapper.HospDoctorTypeMapper;
import com.jinxin.hospHealth.dao.models.HospDoctorType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by zbs on 2017/12/25.
 */
@Service
public class DoctorTypeService {

    @Autowired
    HospDoctorTypeMapper hospDoctorTypeMapper;

    /**
     * 增加医生类别信息
     *
     * @param hospDoctorType
     */
    public void add(HospDoctorType hospDoctorType) {
        DPreconditions.checkState(hospDoctorType.getId() == null, "医生类别的id不能填写.", true);
        DPreconditions.checkNotNullAndEmpty(hospDoctorType.getName(), "医生类别的名称不能为空.", true);
        DPreconditions.checkNotNullAndEmpty(hospDoctorType.getDescription(), "医生类别的说明不能为空.", true);
        DPreconditions.checkState(hospDoctorTypeMapper.insertSelectiveReturnId(hospDoctorType) == 1, "增加医生类别失败", true);
    }

    /**
     * 更新医生类别信息
     *
     * @param hospDoctorType
     */
    public void update(HospDoctorType hospDoctorType) {
        DPreconditions.checkNotNull(hospDoctorType.getId(), "医生类别的id不能为空.", true);
        HospDoctorType banner = selectOne(hospDoctorType.getId());
        DPreconditions.checkNotNull(banner, "该ID的医生类别未查询到.", true);
        DPreconditions.checkState(hospDoctorTypeMapper.updateByPrimaryKeySelective(hospDoctorType) == 1, "更新医生类别信息失败.", true);
    }

    /**
     * 删除单个医生类别信息
     *
     * @param id
     */
    public void deleteOne(Long id) {
        HospDoctorType banner = selectOne(id);
        DPreconditions.checkNotNull(banner, "该ID的医生类别未查询到.", true);
        DPreconditions.checkState(hospDoctorTypeMapper.deleteByPrimaryKey(id) == 1, "删除医生类别信息失败.");
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
        PageHelper.startPage(pageBean.getPageNum(), pageBean.getPageSize());
        if (StringUtil.isNotEmpty(pageBean.getField()))
            PageHelper.orderBy(pageBean.getField());
        return new PageInfo(hospDoctorTypeMapper.selectAll());
    }
}
