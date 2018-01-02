package com.jinxin.hospHealth.service;

import com.doraemon.base.controller.bean.PageBean;
import com.doraemon.base.exceptions.ShowExceptions;
import com.doraemon.base.guava.DPreconditions;
import com.doraemon.base.language.Language;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.github.pagehelper.StringUtil;
import com.jinxin.hospHealth.dao.mapper.HospDoctorInfoMapper;
import com.jinxin.hospHealth.dao.models.HospDoctorInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

/**
 * Created by zbs on 2017/12/25.
 */
@Service
public class DoctorInfoService implements BaseService<HospDoctorInfo> {

    @Autowired
    HospDoctorInfoMapper hospDoctorInfoMapper;
    @Value("${default.doctorHeadPortrait}")
    String doctorHeadPortrait;

    /**
     * 增加医生信息
     *
     * @param hospBanner
     */
    public void add(HospDoctorInfo hospBanner) {
        DPreconditions.checkState(hospBanner.getId() == null, "医生的id不能填写.", true);
        DPreconditions.checkNotNullAndEmpty(hospBanner.getName(), "医生的名称不能为空.", true);
        DPreconditions.checkNotNull(hospBanner.getHospAreaId(), "医生的院区不能为空.", true);
        DPreconditions.checkNotNull(hospBanner.getDoctorTypeId(), "医生的类别不能为空.", true);
        DPreconditions.checkNotNullAndEmpty(hospBanner.getDescription(), "医生的描述不能为空.", true);
        if (hospBanner.getHeadPortrait() == null)
            hospBanner.setHeadPortrait(doctorHeadPortrait);
        if (hospBanner.getSex() == null)
            hospBanner.setSex(0);
        DPreconditions.checkState(hospDoctorInfoMapper.insertSelectiveReturnId(hospBanner) == 1, "增加医生失败", true);
    }

    /**
     * 更新医生信息
     *
     * @param hospBanner
     */
    public void update(HospDoctorInfo hospBanner) {
        DPreconditions.checkNotNull(hospBanner.getId(), "医生的id不能为空.", true);
        HospDoctorInfo 医生 = selectOne(hospBanner.getId());
        DPreconditions.checkNotNull(医生, "该ID的医生未查询到.", true);
        DPreconditions.checkState(hospDoctorInfoMapper.updateByPrimaryKeySelective(hospBanner) == 1, "更新医生信息失败.", true);
    }

    /**
     * 删除单个医生信息
     *
     * @param id
     */
    public void deleteOne(Long id) {
        HospDoctorInfo 医生 = selectOne(id);
        DPreconditions.checkNotNull(医生, "该ID的医生未查询到.", true);
        DPreconditions.checkState(hospDoctorInfoMapper.deleteByPrimaryKey(id) == 1, "删除医生信息失败.");
    }

    @Override
    public void setStateAsInvalid(Long id) throws Exception {
        throw new ShowExceptions(Language.get("service.invalid-method"));
    }

    /**
     * 查询单个医生信息
     *
     * @return
     */
    public HospDoctorInfo selectOne(Long id) {
        DPreconditions.checkNotNull(id, "医生的id不能为空");
        return hospDoctorInfoMapper.selectByPrimaryKey(id);
    }

    /**
     * 根据条件查询医生信息
     *
     * @param hospDoctorInfo
     * @return
     */
    public PageInfo<HospDoctorInfo> select(HospDoctorInfo hospDoctorInfo) {
        PageHelper.startPage(hospDoctorInfo.getPageNum(), hospDoctorInfo.getPageSize());
        if (StringUtil.isNotEmpty(hospDoctorInfo.getField()))
            PageHelper.orderBy(hospDoctorInfo.getField());
        HospDoctorInfo select = new HospDoctorInfo();
        select.setName(hospDoctorInfo.getName());
        select.setHospAreaId(hospDoctorInfo.getHospAreaId());
        select.setDoctorTypeId(hospDoctorInfo.getDoctorTypeId());
        select.setSex(hospDoctorInfo.getSex());
        return new PageInfo(hospDoctorInfoMapper.selectByExample1(select));
    }

    /**
     * 查询全部医生信息
     *
     * @param pageBean
     * @return
     */
    public PageInfo<HospDoctorInfo> selectAll(PageBean pageBean) {
        PageHelper.startPage(pageBean.getPageNum(), pageBean.getPageSize());
        if (StringUtil.isNotEmpty(pageBean.getField()))
            PageHelper.orderBy(pageBean.getField());
        return new PageInfo(hospDoctorInfoMapper.selectAll());
    }

    @Override
    public HospDoctorInfo selectOneAdmin(Long id) throws Exception {
        return selectOne(id);
    }

    @Override
    public PageInfo<HospDoctorInfo> selectAdmin(HospDoctorInfo hospDoctorInfo) throws Exception {
        return select(hospDoctorInfo);
    }

    @Override
    public PageInfo<HospDoctorInfo> selectAllAdmin(PageBean pageBean) throws Exception {
        return selectAll(pageBean);
    }
}
