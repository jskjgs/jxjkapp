package com.jinxin.hospHealth.service;

import com.doraemon.base.controller.bean.PageBean;
import com.doraemon.base.exceptions.ShowExceptions;
import com.doraemon.base.guava.DPreconditions;
import com.doraemon.base.language.Language;
import com.doraemon.base.util.MD5Encryption;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.github.pagehelper.util.StringUtil;
import com.jinxin.hospHealth.controller.protocol.PO.UserInfoPO;
import com.jinxin.hospHealth.controller.protocol.VO.UserInfoVO;
import com.jinxin.hospHealth.dao.mapper.HospUserInfoMapper;
import com.jinxin.hospHealth.dao.models.HospUserInfo;
import com.jinxin.hospHealth.dao.modelsEnum.SexEnum;
import com.jinxin.hospHealth.dao.modelsEnum.UserVipEnum;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.security.NoSuchAlgorithmException;
import java.security.UnresolvedPermission;
import java.util.Date;

/**
 * Created by zbs on 2017/12/25.
 */
@Service
public class UserInfoService implements BaseService<HospUserInfo, UserInfoPO> {

    @Autowired
    HospUserInfoMapper hospUserInfoMapper;

    @Value("${default.userHeadPortrait}")
    String defaultUserHeadPortrait;

    /**
     * 增加用户信息
     *
     * @param userInfoPO
     */
    @Override
    @Transactional
    public HospUserInfo add (UserInfoPO userInfoPO) throws NoSuchAlgorithmException {
        DPreconditions.checkState(userInfoPO.getId() == null,
                "用户的id不能填写.", true);
        DPreconditions.checkNotNullAndEmpty(userInfoPO.getPhone(),
                Language.get("user.phone-null"),
                true);
        DPreconditions.checkState(selectOneByPhone(userInfoPO.getPhone()) != null,
                Language.get("user.phone-repeat"),
                true);
        Date date = new Date();
        HospUserInfo add = new HospUserInfo();
        add.setHeadPortrait(
                userInfoPO.getHeadPortrait() == null
                        ? defaultUserHeadPortrait
                        : userInfoPO.getHeadPortrait());
        add.setName(
                userInfoPO.getName() == null
                        ? userInfoPO.getPhone()
                        : userInfoPO.getName());
        add.setPassword(
                userInfoPO.getPassword() == null
                        ? MD5Encryption.getMD5(userInfoPO.getPhone())
                        : MD5Encryption.getMD5(userInfoPO.getPassword()));
        add.setSex(
                userInfoPO.getSex() == null
                        ? SexEnum.MAN.getCode()
                        : userInfoPO.getSex());
        add.setCreateDate(date);
        add.setUpdateDate(date);
        DPreconditions.checkState(
                hospUserInfoMapper.insertSelectiveReturnId(add) == 1,
                Language.get("service.save-failure"),
                true);
        return add;
    }

    /**
     * 更新用户信息
     *
     * @param userInfoPO
     */
    @Override
    public void update(UserInfoPO userInfoPO) {
        DPreconditions.checkNotNull(userInfoPO.getId(),
                Language.get("user.id-null"),
                true);
        HospUserInfo selectNews = selectOne(userInfoPO.getId());
        DPreconditions.checkNotNull(selectNews,
                Language.get("user.select-not-exist"),
                true);
        HospUserInfo update = new HospUserInfo();
        update.setName(userInfoPO.getName());
        update.setUpdateDate(new Date());
        update.setAge(userInfoPO.getAge());
        update.setBirthday(userInfoPO.getBirthday());
        update.setEmail(userInfoPO.getEmail());
        update.setHeadPortrait(userInfoPO.getHeadPortrait());
        update.setSex(userInfoPO.getSex());
        DPreconditions.checkState(hospUserInfoMapper.updateByPrimaryKeySelective(update) == 1,
                "更新用户信息失败.",
                true);
    }

    /**
     * 升级 或 去掉 用户 VIP 资格
     *
     * @param id
     */
    public void updateVip(Long id) {
        DPreconditions.checkNotNull(id,
                Language.get("user.id-null"),
                true);
        HospUserInfo hospUserInfo = DPreconditions.checkNotNull(selectOne(id),
                Language.get("user.select-not-exist"),
                true);
        HospUserInfo update = new HospUserInfo();
        update.setIsVip(hospUserInfo.getIsVip().equals(UserVipEnum.NOT_VIP.getCode()) ?
                UserVipEnum.VIP.getCode() :
                UserVipEnum.NOT_VIP.getCode());
        DPreconditions.checkState(hospUserInfoMapper.updateByPrimaryKeySelective(update) == 1,
                "更新用户信息失败.",
                true);
    }

    /**
     * 删除单个用户信息
     *
     * @param id
     */
    @Override
    public void deleteOne(Long id) {
        HospUserInfo hospUserInfo = selectOne(id);
        DPreconditions.checkNotNull(hospUserInfo,
                Language.get("user.select-not-exist"),
                true);
        DPreconditions.checkState(hospUserInfoMapper.deleteByPrimaryKey(id) == 1,
                "删除该用户信息失败.",
                true);
    }

    @Override
    public void setStateAsInvalid(Long id) throws Exception {
        throw new ShowExceptions(Language.get("service.invalid-method"));
    }

    /**
     * 查询单个用户信息
     *
     * @return
     */
    @Override
    public HospUserInfo selectOne(Long id) {
        DPreconditions.checkNotNull(id,
                Language.get("user.id-null"),
                true);
        return hospUserInfoMapper.selectByPrimaryKey(id);
    }


    /**
     * 查询单个用户信息
     *
     * @return
     */
    public HospUserInfo selectOne(UserInfoPO userInfoPO) {
        HospUserInfo hospUserInfo = userInfoPO.transform();
        return hospUserInfoMapper.selectOne(hospUserInfo);
    }

    /**
     * 查询单个用户信息---根据手机号
     *
     * @return
     */
    public HospUserInfo selectOneByPhone(String phone) {
        DPreconditions.checkNotNullAndEmpty(phone,
                Language.get("user.phone-null"),
                true);
        HospUserInfo select = new HospUserInfo();
        select.setPhone(phone);
        return hospUserInfoMapper.selectOne(select);
    }

    /**
     * 根据条件查询用户信息
     *
     * @param userInfoPO
     * @return
     */
    @Override
    public PageInfo<HospUserInfo> select(UserInfoPO userInfoPO) {
        PageHelper.startPage(userInfoPO.getPageNum(), userInfoPO.getPageSize());
        if (StringUtil.isNotEmpty(userInfoPO.getField()))
            PageHelper.orderBy(userInfoPO.getField());
        HospUserInfo select = new HospUserInfo();
        select.setName(userInfoPO.getName());
        select.setSex(userInfoPO.getSex());
        return new PageInfo(hospUserInfoMapper.select(select));
    }

    /**
     * 查询全部用户信息
     *
     * @param pageBean
     * @return
     */
    @Override
    public PageInfo<HospUserInfo> selectAll(PageBean pageBean) {
        if (pageBean == null)
            pageBean = new PageBean();
        PageHelper.startPage(pageBean.getPageNum(), pageBean.getPageSize());
        if (StringUtil.isNotEmpty(pageBean.getField()))
            PageHelper.orderBy(pageBean.getField());
        return new PageInfo(hospUserInfoMapper.selectAll());
    }

    @Override
    public HospUserInfo selectOneAdmin(Long id) throws Exception {
        return selectOne(id);
    }


    @Override
    public PageInfo<HospUserInfo> selectAdmin(UserInfoPO userInfoPO) throws Exception {
        return selectAdmin(userInfoPO);
    }

    @Override
    public PageInfo<HospUserInfo> selectAllAdmin(PageBean pageBean) throws Exception {
        return selectAll(pageBean);
    }

}
