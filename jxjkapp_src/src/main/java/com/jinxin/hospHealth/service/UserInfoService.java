package com.jinxin.hospHealth.service;

import com.doraemon.base.controller.bean.PageBean;
import com.doraemon.base.guava.DPreconditions;
import com.doraemon.base.language.Language;
import com.doraemon.base.util.MD5Encryption;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.github.pagehelper.StringUtil;
import com.jinxin.hospHealth.dao.mapper.HospUserInfoMapper;
import com.jinxin.hospHealth.dao.models.HospUserInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.security.NoSuchAlgorithmException;
import java.util.Date;

/**
 * Created by zbs on 2017/12/25.
 */
@Service
public class UserInfoService implements BaseService<HospUserInfo>{

    @Autowired
    HospUserInfoMapper hospUserInfoMapper;

    @Value("${default.userHeadPortrait}")
    String defaultUserHeadPortrait;

    /**
     * 增加用户信息
     *
     * @param hospUserInfo
     */
    public void add(HospUserInfo hospUserInfo) throws NoSuchAlgorithmException {
        DPreconditions.checkState(hospUserInfo.getId() == null, "用户的id不能填写.", true);
        DPreconditions.checkNotNullAndEmpty(hospUserInfo.getPhone(), Language.get("user.phone-null"), true);
        Date date = new Date();
        if (hospUserInfo.getHeadPortrait() == null)
            hospUserInfo.setHeadPortrait(defaultUserHeadPortrait);
        if (hospUserInfo.getName() == null)
            hospUserInfo.setName(hospUserInfo.getPhone());
        if (hospUserInfo.getPassword() == null) {
            hospUserInfo.setPassword(MD5Encryption.getMD5(hospUserInfo.getPhone()));
        }else {
            hospUserInfo.setPassword(MD5Encryption.getMD5(hospUserInfo.getPassword()));
        }
        if (hospUserInfo.getSex() == null)
            hospUserInfo.setSex(0);
        if (hospUserInfo.getCreateDate() == null)
            hospUserInfo.setCreateDate(date);
        if (hospUserInfo.getUpdateDate() == null)
            hospUserInfo.setUpdateDate(date);
        DPreconditions.checkState(hospUserInfoMapper.insertSelectiveReturnId(hospUserInfo) == 1, "增加用户失败", true);
    }

    /**
     * 更新用户信息
     *
     * @param hospUserInfo
     */
    public void update(HospUserInfo hospUserInfo) {
        DPreconditions.checkNotNull(hospUserInfo.getId(), Language.get("user.id-null"), true);
        HospUserInfo selectNews = selectOne(hospUserInfo.getId());
        DPreconditions.checkNotNull(selectNews, Language.get("user.select-not-exist"), true);
        DPreconditions.checkState(hospUserInfoMapper.updateByPrimaryKeySelective(hospUserInfo) == 1, "更新用户信息失败.", true);
    }

    /**
     * 删除单个用户信息
     *
     * @param id
     */
    public void deleteOne(Long id) {
        HospUserInfo hospUserInfo = selectOne(id);
        DPreconditions.checkNotNull(hospUserInfo, Language.get("user.select-not-exist"), true);
        DPreconditions.checkState(hospUserInfoMapper.deleteByPrimaryKey(id) == 1, "删除该用户信息失败.");
    }

    /**
     * 查询单个用户信息
     *
     * @return
     */
    public HospUserInfo selectOne(Long id) {
        DPreconditions.checkNotNull(id, Language.get("user.id-null"),true);
        return hospUserInfoMapper.selectByPrimaryKey(id);
    }

    /**
     * 查询单个用户信息
     *
     * @return
     */
    public HospUserInfo selectOne(HospUserInfo hospUserInfo) {
        DPreconditions.checkNotNull(hospUserInfo, "传入不能为空");
        return hospUserInfoMapper.selectOne(hospUserInfo);
    }

    /**
     * 根据条件查询用户信息
     *
     * @param hospUserInfo
     * @return
     */
    public PageInfo<HospUserInfo> select(HospUserInfo hospUserInfo) {
        PageHelper.startPage(hospUserInfo.getPageNum(), hospUserInfo.getPageSize());
        if (StringUtil.isNotEmpty(hospUserInfo.getField()))
            PageHelper.orderBy(hospUserInfo.getField());
        HospUserInfo select = new HospUserInfo();
        select.setName(hospUserInfo.getName());
        select.setSex(hospUserInfo.getSex());
        return new PageInfo(hospUserInfoMapper.select(select));
    }

    /**
     * 查询全部用户信息
     *
     * @param pageBean
     * @return
     */
    public PageInfo<HospUserInfo> selectAll(PageBean pageBean) {
        PageHelper.startPage(pageBean.getPageNum(), pageBean.getPageSize());
        if (StringUtil.isNotEmpty(pageBean.getField()))
            PageHelper.orderBy(pageBean.getField());
        return new PageInfo(hospUserInfoMapper.selectAll());
    }

    @Override
    public HospUserInfo selectOneAdmin(Long id) throws Exception {
        return null;
    }

    @Override
    public PageInfo<HospUserInfo> selectAdmin(HospUserInfo hospUserInfo) throws Exception {
        return null;
    }

    @Override
    public PageInfo<HospUserInfo> selectAllAdmin(PageBean pageBean) throws Exception {
        return null;
    }

}
