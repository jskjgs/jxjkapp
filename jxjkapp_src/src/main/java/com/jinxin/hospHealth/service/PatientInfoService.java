package com.jinxin.hospHealth.service;

import com.doraemon.base.controller.bean.PageBean;
import com.doraemon.base.exceptions.ShowExceptions;
import com.doraemon.base.guava.DPreconditions;
import com.doraemon.base.language.Language;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.github.pagehelper.StringUtil;
import com.jinxin.hospHealth.dao.mapper.HospDoctorTypeMapper;
import com.jinxin.hospHealth.dao.mapper.HospPatientInfoMapper;
import com.jinxin.hospHealth.dao.models.HospPatientInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by zbs on 2017/12/25.
 */
@Service
public class PatientInfoService implements BaseService<HospPatientInfo>{

    @Autowired
    HospDoctorTypeMapper hospDoctorTypeMapper;

    @Autowired
    HospPatientInfoMapper hospPatientInfoMapper;

    /**
     * 增加就诊人信息信息
     *
     * @param hospDoctorType
     */
    public void add(HospPatientInfo hospDoctorType) {
        DPreconditions.checkState(hospDoctorType.getId() == null, "就诊人信息的id不能填写.", true);
        DPreconditions.checkNotNull(hospDoctorType.getUserId(), "就诊人用户ID不能为空.", true);
        DPreconditions.checkNotNullAndEmpty(hospDoctorType.getCardId(), "就诊人身份证号码不能为空.", true);
        DPreconditions.checkNotNull(hospDoctorType.getType(),"就诊人类型不能为空",true);
        if(hospDoctorType.getBabySex() == null)
            hospDoctorType.setBabySex(0);
        DPreconditions.checkState(hospPatientInfoMapper.insertSelectiveReturnId(hospDoctorType) == 1, "增加就诊人信息失败", true);
    }

    /**
     * 更新就诊人信息信息
     *
     * @param hospBanner
     */
    public void update(HospPatientInfo hospBanner) {
        DPreconditions.checkNotNull(hospBanner.getId(), "就诊人信息的id不能为空.", true);
        HospPatientInfo banner = selectOne(hospBanner.getId());
        DPreconditions.checkNotNull(banner, "该ID的就诊人信息未查询到.", true);
        DPreconditions.checkState(hospPatientInfoMapper.updateByPrimaryKeySelective(hospBanner) == 1, "更新就诊人信息失败.", true);
    }

    /**
     * 删除单个就诊人信息信息
     *
     * @param id
     */
    public void deleteOne(Long id) {
        HospPatientInfo banner = selectOne(id);
        DPreconditions.checkNotNull(banner, "该ID的就诊人信息未查询到.", true);
        DPreconditions.checkState(hospPatientInfoMapper.deleteByPrimaryKey(id) == 1, "删除就诊人信息失败.");
    }

    @Override
    public void setStateAsInvalid(Long id) throws Exception {
        throw new ShowExceptions(Language.get("service.invalid-method"));
    }

    /**
     * 查询单个就诊人信息信息
     *
     * @return
     */
    public HospPatientInfo selectOne(Long id) {
        DPreconditions.checkNotNull(id, "就诊人信息的id不能为空");
        return hospPatientInfoMapper.selectByPrimaryKey(id);
    }

    /**
     * 根据条件查询就诊人信息
     *
     * @param hospPatientInfo
     * @return
     */
    public PageInfo<HospPatientInfo> select(HospPatientInfo hospPatientInfo) {
        PageHelper.startPage(hospPatientInfo.getPageNum(), hospPatientInfo.getPageSize());
        if (StringUtil.isNotEmpty(hospPatientInfo.getField()))
            PageHelper.orderBy(hospPatientInfo.getField());
        HospPatientInfo select = new HospPatientInfo();
        select.setCardId(hospPatientInfo.getCardId());
        select.setType(hospPatientInfo.getType());
        select.setUserId(hospPatientInfo.getUserId());
        select.setBabySex(hospPatientInfo.getBabySex());
        select.setId(hospPatientInfo.getId());
        return new PageInfo(hospPatientInfoMapper.select(select));
    }

    /**
     * 查询全部就诊人信息
     *
     * @param pageBean
     * @return
     */
    public PageInfo<HospPatientInfo> selectAll(PageBean pageBean) {
        PageHelper.startPage(pageBean.getPageNum(), pageBean.getPageSize());
        if (StringUtil.isNotEmpty(pageBean.getField()))
            PageHelper.orderBy(pageBean.getField());
        return new PageInfo(hospPatientInfoMapper.selectAll());
    }

    @Override
    public HospPatientInfo selectOneAdmin(Long id) throws Exception {
        return selectOne(id);
    }

    @Override
    public PageInfo<HospPatientInfo> selectAdmin(HospPatientInfo patientInfo) throws Exception {
        return select(patientInfo);
    }

    @Override
    public PageInfo<HospPatientInfo> selectAllAdmin(PageBean pageBean) throws Exception {
        return selectAll(pageBean);
    }
}
