package com.jinxin.hospHealth.service;

import com.doraemon.base.controller.bean.PageBean;
import com.github.pagehelper.PageInfo;
import com.jinxin.hospHealth.dao.mapper.HospDoctorUserInfoMapper;
import com.jinxin.hospHealth.dao.models.HospDoctorUserInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by zbs on 2018/1/12.
 */
@Service
public class DoctorUserInfoService implements BaseService<HospDoctorUserInfo,HospDoctorUserInfo>{

    @Autowired
    HospDoctorUserInfoMapper hospDoctorUserInfoMapper;

    @Override
    public HospDoctorUserInfo add(HospDoctorUserInfo hospDoctorUserInfo) throws Exception {
        return null;
    }

    @Override
    public void update(HospDoctorUserInfo hospDoctorUserInfo) throws Exception {

    }

    @Override
    public void deleteOne(Long id) throws Exception {

    }

    @Override
    public void setStateAsInvalid(Long id) throws Exception {

    }

    @Override
    public HospDoctorUserInfo selectOne(Long id) throws Exception {
        return null;
    }

    @Override
    public PageInfo<HospDoctorUserInfo> select(HospDoctorUserInfo hospDoctorUserInfo) throws Exception {
        return null;
    }

    @Override
    public PageInfo<HospDoctorUserInfo> selectAll(PageBean pageBean) throws Exception {
        return null;
    }

    @Override
    public HospDoctorUserInfo selectOneAdmin(Long id) throws Exception {
        return null;
    }

    @Override
    public PageInfo<HospDoctorUserInfo> selectAdmin(HospDoctorUserInfo hospDoctorUserInfo) throws Exception {
        return null;
    }

    @Override
    public PageInfo<HospDoctorUserInfo> selectAllAdmin(PageBean pageBean) throws Exception {
        return null;
    }
}
