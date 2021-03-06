package com.jinxin.hospHealth.service;

import com.doraemon.base.controller.bean.PageBean;
import com.doraemon.base.guava.DPreconditions;
import com.doraemon.base.language.Language;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.github.pagehelper.util.StringUtil;
import com.jinxin.hospHealth.controller.protocol.PO.DoctorUserInfoPO;
import com.jinxin.hospHealth.dao.mapper.HospDoctorUserInfoMapper;
import com.jinxin.hospHealth.dao.models.HospDoctorUserInfo;
import com.jinxin.hospHealth.dao.modelsEnum.EnableEnum;
import com.jinxin.hospHealth.dao.modelsEnum.SexEnum;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.Date;

/**
 * Created by zbs on 2018/1/12.
 */
@Service
public class DoctorUserInfoService implements BaseService<HospDoctorUserInfo,DoctorUserInfoPO>{

    @Autowired
    HospDoctorUserInfoMapper hospDoctorUserInfoMapper;
    @Value("${default.userHeadPortrait}")
    String defaultUserHeadPortrait;
    @Autowired
    HospAreaService hospAreaService;

    @Override
    public HospDoctorUserInfo add(DoctorUserInfoPO po) throws Exception {
        DPreconditions.checkState(
                po.getId() == null,
                Language.get("doctor-user.id-exist"),
                true);
        DPreconditions.checkNotNullAndEmpty(
                po.getPhone(),
                Language.get("user.phone-null"),
                true);
        DPreconditions.checkState(selectOneByPhone(
                po.getPhone()) == null,
                Language.get("user.phone-repeat"),
                true);
        DPreconditions.checkState(
                po.getPassword() != null,
                Language.get("user.password-null"),
                true);
        DPreconditions.checkNotNull(
                hospAreaService.selectOne(po.getAreaId()),
                "院区信息没有找到.",
                true);
        po.setHeadPortrait(
                po.getHeadPortrait() != null
                        ? po.getHeadPortrait()
                        : defaultUserHeadPortrait);
        po.setName(
                po.getName() != null
                        ? po.getName()
                        : po.getPhone());
        po.setSex(
                po.getSex() != null
                        ? po.getSex()
                        : SexEnum.MAN.getCode());
        HospDoctorUserInfo add = po.transform(new Date(),new Date());
        add.setEnable(EnableEnum.ENABLE_NORMAL.getCode());
        DPreconditions.checkState(
                hospDoctorUserInfoMapper.insertSelectiveReturnId(add) == 1,
                Language.get("service.save-failure"),
                true);
        return add;
    }

    /**
     * 根据手机号查询信息
     *
     * @param phone
     * @return
     */
    public HospDoctorUserInfo selectOneByPhone(String phone) {
        DPreconditions.checkNotNullAndEmpty(phone,
                Language.get("user.phone-null"),
                true);
        HospDoctorUserInfo select = new HospDoctorUserInfo();
        select.setPhone(phone);
        select.setEnable(EnableEnum.ENABLE_NORMAL.getCode());
        return hospDoctorUserInfoMapper.selectOne(select);
    }


    @Override
    public void update(DoctorUserInfoPO po) throws Exception {
        HospDoctorUserInfo hospDoctorUserInfo = po.transform(null,null);
        //如果密码不为空的话,代表修改密码,需要做修改密码前提校验,id不能为空 或者 phone不能为空.
        if (hospDoctorUserInfo.getPassword() != null) {
            DPreconditions.checkState(
                    hospDoctorUserInfo.getId() != null
                            || hospDoctorUserInfo.getPhone() != null);
        }
        DPreconditions.checkState(
                hospDoctorUserInfoMapper.updateByPrimaryKeySelective(hospDoctorUserInfo) == 1,
                Language.get("service.update-failure"),
                true);
    }

    @Override
    public void deleteOne(Long id) throws Exception {

    }

    /**
     * 把doctor user 信息置为软删除
     * @param id
     * @throws Exception
     */
    @Override
    public void setStateAsInvalid(Long id) throws Exception {
        DPreconditions.checkNotNull(
                id,
                Language.get("doctor-user.id-null"),
                true);
        HospDoctorUserInfo hospDoctorUserInfo = new HospDoctorUserInfo();
        hospDoctorUserInfo.setId(id);
        hospDoctorUserInfo.setEnable(EnableEnum.ENABLE_DELETE.getCode());
        DPreconditions.checkState(
                hospDoctorUserInfoMapper.updateByPrimaryKeySelective(hospDoctorUserInfo) == 1,
                Language.get("service.update-failure"),
                true);
    }

    @Override
    public HospDoctorUserInfo selectOne(Long id) throws Exception {
        DPreconditions.checkNotNull(
                id,
                Language.get("doctor-user.id-null"),
                true);
        HospDoctorUserInfo select = new HospDoctorUserInfo();
        select.setId(id);
        select.setEnable(EnableEnum.ENABLE_NORMAL.getCode());
        return hospDoctorUserInfoMapper.selectOne(select);
    }


    /**
     * 查询管理员用户信息
     * @param po
     * @return
     * @throws Exception
     */
    public HospDoctorUserInfo selectOne(DoctorUserInfoPO po) throws Exception {
        if (po.getPassword() != null) {
            DPreconditions.checkState(
                    po.getId() != null
                            || po.getPhone() != null);
        }
        HospDoctorUserInfo select = po.transform(null,null);
        select.setEnable(EnableEnum.ENABLE_NORMAL.getCode());
        return hospDoctorUserInfoMapper.selectOne(select);
    }

    @Override
    public PageInfo<HospDoctorUserInfo> select(DoctorUserInfoPO po) throws Exception {
        if (po == null)
            return null;
        PageHelper.startPage(po.getPageNum(), po.getPageSize());
        if (StringUtil.isNotEmpty(po.getField()))
            PageHelper.orderBy(po.getField());
        HospDoctorUserInfo select = po.transform(null,null);
        select.setEnable(EnableEnum.ENABLE_NORMAL.getCode());
        return new PageInfo<>(hospDoctorUserInfoMapper.select(select));
    }

    @Override
    public PageInfo<HospDoctorUserInfo> selectAll(PageBean pageBean) throws Exception {
        if (pageBean == null)
            pageBean = new PageBean();
        PageHelper.startPage(pageBean.getPageNum(), pageBean.getPageSize());
        if (StringUtil.isNotEmpty(pageBean.getField()))
            PageHelper.orderBy(pageBean.getField());
        HospDoctorUserInfo select = new HospDoctorUserInfo();
        select.setEnable(EnableEnum.ENABLE_NORMAL.getCode());
        return new PageInfo(hospDoctorUserInfoMapper.select(select));
    }

    @Override
    public HospDoctorUserInfo selectOneAdmin(Long id) throws Exception {
        return selectOne(id);
    }

    @Override
    public PageInfo<HospDoctorUserInfo> selectAdmin(DoctorUserInfoPO po) throws Exception {
        return select(po);
    }

    @Override
    public PageInfo<HospDoctorUserInfo> selectAllAdmin(PageBean pageBean) throws Exception {
        return selectAll(pageBean);
    }
}
