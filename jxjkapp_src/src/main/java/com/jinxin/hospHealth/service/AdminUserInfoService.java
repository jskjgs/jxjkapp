package com.jinxin.hospHealth.service;

import com.doraemon.base.controller.bean.PageBean;
import com.doraemon.base.guava.DPreconditions;
import com.doraemon.base.language.Language;
import com.doraemon.base.util.MD5Encryption;
import com.github.pagehelper.PageInfo;
import com.jinxin.hospHealth.dao.mapper.HospAdminUserInfoMapper;
import com.jinxin.hospHealth.dao.models.HospAdminUserInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.security.NoSuchAlgorithmException;
import java.util.Date;

/**
 * Created by zbs on 2018/1/12.
 */
@Service
public class AdminUserInfoService implements BaseService<HospAdminUserInfo,HospAdminUserInfo>{

    @Autowired
    HospAdminUserInfoMapper hospAdminUserInfoMapper;
    @Value("${default.userHeadPortrait}")
    String defaultUserHeadPortrait;

    /**
     * 增加admin账号
     * @param hospAdminUserInfo
     * @return
     * @throws Exception
     */
    @Override
    public HospAdminUserInfo add(HospAdminUserInfo hospAdminUserInfo) throws Exception {
        DPreconditions.checkState(hospAdminUserInfo.getId() == null,
                "用户的id不能填写.", true);
        DPreconditions.checkNotNullAndEmpty(hospAdminUserInfo.getPhone(),
                Language.get("user.phone-null"),
                true);
        DPreconditions.checkState(selectOneByPhone(hospAdminUserInfo.getPhone())==null,
                Language.get("user.phone-repeat"),
                true);
        DPreconditions.checkState(hospAdminUserInfo.getPassword()!=null,
                Language.get("user.password-null"),
                true);
        Date date = new Date();
        if (hospAdminUserInfo.getHeadPortrait() == null)
            hospAdminUserInfo.setHeadPortrait(defaultUserHeadPortrait);
        if (hospAdminUserInfo.getName() == null)
            hospAdminUserInfo.setName(hospAdminUserInfo.getPhone());
       if (hospAdminUserInfo.getSex() == null)
            hospAdminUserInfo.setSex(0);
        hospAdminUserInfo.setCreateDate(date);
        hospAdminUserInfo.setUpdateDate(date);
        hospAdminUserInfo.setPassword(MD5Encryption.getMD5(hospAdminUserInfo.getPassword()));
        DPreconditions.checkState(hospAdminUserInfoMapper.insertSelectiveReturnId(hospAdminUserInfo) == 1,
                Language.get("service.save-failure"),
                true);
        return hospAdminUserInfo;
    }

    /**
     * 根据手机号查询信息
     * @param phone
     * @return
     */
    public HospAdminUserInfo selectOneByPhone(String phone){
        DPreconditions.checkNotNullAndEmpty(phone,
                Language.get("user.phone-null"),
                true);
        HospAdminUserInfo select = new HospAdminUserInfo();
        select.setPhone(phone);
        return hospAdminUserInfoMapper.selectOne(select);
    }

    /**
     * 根据手机号,密码 查询信息
     * @param phone
     * @return
     */
    public HospAdminUserInfo selectOneByPhoneAndPassword(String phone,String password) throws Exception {
        DPreconditions.checkNotNullAndEmpty(phone,
                Language.get("user.phone-null"),
                true);
        DPreconditions.checkNotNullAndEmpty(password,
                Language.get("user.password-null"),
                true);
        HospAdminUserInfo select = new HospAdminUserInfo();
        select.setPhone(phone);
        select.setPassword(MD5Encryption.getMD5(password));
        return hospAdminUserInfoMapper.selectOne(select);
    }

    @Override
    public void update(HospAdminUserInfo hospAdminUserInfo) throws Exception {

    }

    @Override
    public void deleteOne(Long id) throws Exception {

    }

    @Override
    public void setStateAsInvalid(Long id) throws Exception {

    }

    @Override
    public HospAdminUserInfo selectOne(Long id) throws Exception {
        return null;
    }

    @Override
    public PageInfo<HospAdminUserInfo> select(HospAdminUserInfo hospAdminUserInfo) throws Exception {
        return null;
    }

    @Override
    public PageInfo<HospAdminUserInfo> selectAll(PageBean pageBean) throws Exception {
        return null;
    }

    @Override
    public HospAdminUserInfo selectOneAdmin(Long id) throws Exception {
        return null;
    }

    @Override
    public PageInfo<HospAdminUserInfo> selectAdmin(HospAdminUserInfo hospAdminUserInfo) throws Exception {
        return null;
    }

    @Override
    public PageInfo<HospAdminUserInfo> selectAllAdmin(PageBean pageBean) throws Exception {
        return null;
    }
}
