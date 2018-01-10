package com.jinxin.hospHealth.service;

import com.doraemon.base.controller.bean.PageBean;
import com.doraemon.base.exceptions.ShowExceptions;
import com.doraemon.base.guava.DPreconditions;
import com.doraemon.base.language.Language;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.github.pagehelper.StringUtil;
import com.jinxin.hospHealth.controller.protocol.PO.DoctorInfoPO;
import com.jinxin.hospHealth.dao.mapper.HospDoctorInfoMapper;
import com.jinxin.hospHealth.dao.models.HospDoctorInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * Created by zbs on 2017/12/25.
 */
@Service
public class DoctorInfoService implements BaseService<HospDoctorInfo,DoctorInfoPO> {

    @Autowired
    HospDoctorInfoMapper hospDoctorInfoMapper;
    @Autowired
    HospAreaService hospAreaService;
    @Autowired
    DoctorTypeService doctorTypeService;

    @Value("${default.doctorHeadPortrait}")
    String doctorHeadPortrait;

    /**
     * 增加医生信息
     *
     * @param po
     */
    @Override
    @Transactional
    public HospDoctorInfo add(DoctorInfoPO po) {
        //PO 转换为 daoBean
        HospDoctorInfo hospDoctorInfo =  po.conversion();
        DPreconditions.checkState(hospDoctorInfo.getId() == null,
                Language.get("docker.id-exist"),
                true);
        DPreconditions.checkNotNullAndEmpty(hospDoctorInfo.getName(),
                Language.get("docker.name-null"),
                true);
        DPreconditions.checkNotNull(hospDoctorInfo.getHospAreaId(),
                Language.get("docker-area.id-null"),
                true);
        DPreconditions.checkNotNull(hospAreaService.selectOne(hospDoctorInfo.getHospAreaId()),
                Language.get("docker-area.select-not-exist"),
                true);
        DPreconditions.checkNotNull(hospDoctorInfo.getDoctorTypeId(),
                Language.get("docker-type.id-null"),
                true);
        DPreconditions.checkNotNull(doctorTypeService.selectOne(hospDoctorInfo.getDoctorTypeId()),
                Language.get("docker-type.select-not-exist"),
                true);
        DPreconditions.checkNotNullAndEmpty(hospDoctorInfo.getDescription(),
                Language.get("docker.description-null"),
                true);
        if (hospDoctorInfo.getHeadPortrait() == null)
            hospDoctorInfo.setHeadPortrait(doctorHeadPortrait);
        if (hospDoctorInfo.getSex() == null)
            hospDoctorInfo.setSex(0);
        DPreconditions.checkState(hospDoctorInfoMapper.insertSelectiveReturnId(hospDoctorInfo) == 1,
                Language.get("service.save-failure"),
                true);
        return hospDoctorInfo;
    }

    /**
     * 更新医生信息
     *
     * @param doctorInfoPO
     */
    @Override
    @Transactional
    public void update(DoctorInfoPO doctorInfoPO) {
        HospDoctorInfo hospDoctorInfo = doctorInfoPO.conversion();
        DPreconditions.checkNotNull(hospDoctorInfo.getId(),
                Language.get("docker.id-null"),
                true);
        DPreconditions.checkNotNull(selectOne(hospDoctorInfo.getId()),
                Language.get("docker.select-not-exist"),
                true);
        DPreconditions.checkState(hospDoctorInfoMapper.updateByPrimaryKeySelective(hospDoctorInfo) == 1,
                Language.get("service.update-failure"),
                true);
    }

    /**
     * 删除单个医生信息
     *
     * @param id
     */
    @Override
    @Transactional
    public void deleteOne(Long id) {
        HospDoctorInfo doctor = selectOne(id);
        DPreconditions.checkNotNull(doctor,
                Language.get("docker.select-not-exist"),
                true);
        DPreconditions.checkState(hospDoctorInfoMapper.deleteByPrimaryKey(id) == 1,
                Language.get("service.delete-failure"),
                true);
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
    @Override
    public HospDoctorInfo selectOne(Long id) {
        DPreconditions.checkNotNull(id,
                Language.get("docker.id-null"),
                true);
        return hospDoctorInfoMapper.selectByPrimaryKey(id);
    }

    /**
     * 根据条件查询医生信息
     *
     * @param doctorInfoPO
     * @return
     */
    @Override
    public PageInfo<HospDoctorInfo> select(DoctorInfoPO doctorInfoPO) {
        PageHelper.startPage(doctorInfoPO.getPageNum(), doctorInfoPO.getPageSize());
        if (StringUtil.isNotEmpty(doctorInfoPO.getField()))
            PageHelper.orderBy(doctorInfoPO.getField());
        HospDoctorInfo select = doctorInfoPO.conversion();
        return new PageInfo(hospDoctorInfoMapper.select(select));
    }

    /**
     * 根据条件模糊查询医生信息
     *
     * @param doctorInfoPO
     * @return
     */
    public PageInfo<HospDoctorInfo> selectByFuzzy(DoctorInfoPO doctorInfoPO) {
        PageHelper.startPage(doctorInfoPO.getPageNum(), doctorInfoPO.getPageSize());
        if (StringUtil.isNotEmpty(doctorInfoPO.getField()))
            PageHelper.orderBy(doctorInfoPO.getField());
        HospDoctorInfo select = doctorInfoPO.conversion();
        return new PageInfo(hospDoctorInfoMapper.selectByExampleByFuzzy(select));
    }

    /**
     * 查询全部医生信息
     *
     * @param pageBean
     * @return
     */
    @Override
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
    public PageInfo<HospDoctorInfo> selectAdmin(DoctorInfoPO doctorInfoPO) throws Exception {
        return select(doctorInfoPO);
    }

    @Override
    public PageInfo<HospDoctorInfo> selectAllAdmin(PageBean pageBean) throws Exception {
        return selectAll(pageBean);
    }
}
