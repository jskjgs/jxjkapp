package com.jinxin.hospHealth.service;

import com.doraemon.base.controller.bean.PageBean;
import com.doraemon.base.guava.DPreconditions;
import com.doraemon.base.language.Language;
import com.doraemon.base.util.MD5Encryption;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.github.pagehelper.util.StringUtil;
import com.jinxin.hospHealth.controller.protocol.PO.AdminInfoPO;
import com.jinxin.hospHealth.dao.mapper.HospAdminUserInfoMapper;
import com.jinxin.hospHealth.dao.models.HospAdminUserInfo;
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
public class AdminUserInfoService implements BaseService<HospAdminUserInfo, AdminInfoPO> {

    @Autowired
    HospAdminUserInfoMapper hospAdminUserInfoMapper;
    @Value("${default.userHeadPortrait}")
    String defaultUserHeadPortrait;
    @Autowired
    HospAreaService hospAreaService;

    /**
     * 增加admin账号
     *
     * @param po
     * @return
     * @throws Exception
     */
    @Override
    public HospAdminUserInfo add(AdminInfoPO po) throws Exception {
        DPreconditions.checkState(
                po.getId() == null,
                Language.get("admin-user.id-exist"),
                true);
        DPreconditions.checkNotNullAndEmpty(
                po.getAccount(),
                "admin账号不能为空.",
                true);
        DPreconditions.checkState(
                selectOneByAccount(po.getAccount()) == null,
                "admin账号名称重复",
                true);
        DPreconditions.checkState(
                po.getPassword() != null,
                Language.get("user.password-null"),
                true);
        DPreconditions.checkState(
                po.getAuthor() != null,
                Language.get("user.permissions-null"),
                true);
        DPreconditions.checkNotNull(
                hospAreaService.selectOne(po.getAreaId()),
                "院区信息没有查到.",
                true);
        po.setHeadPortrait(
                po.getHeadPortrait() != null
                        ? po.getHeadPortrait()
                        : defaultUserHeadPortrait);
        po.setSex(
                po.getSex() != null
                        ? po.getSex()
                        : SexEnum.MAN.getCode());
        HospAdminUserInfo add = po.transform(new Date(),new Date());
        add.setEnable(EnableEnum.ENABLE_NORMAL.getCode());
        DPreconditions.checkState(
                hospAdminUserInfoMapper.insertSelectiveReturnId(add) == 1,
                Language.get("service.save-failure"),
                true);
        return add;
    }

    /**
     * 根据账号查询信息
     *
     * @param account
     * @return
     */
    public HospAdminUserInfo selectOneByAccount(String account) {
        DPreconditions.checkNotNullAndEmpty(account,
                "admin账号不能为空",
                true);
        HospAdminUserInfo select = new HospAdminUserInfo();
        select.setAccount(account);
        select.setEnable(EnableEnum.ENABLE_NORMAL.getCode());
        return hospAdminUserInfoMapper.selectOne(select);
    }

    /**
     * 更新管理员用户信息
     *
     * @param adminInfoPO
     * @throws Exception
     */
    @Override
    public void update(AdminInfoPO adminInfoPO) throws Exception {
        HospAdminUserInfo hospAdminUserInfo = adminInfoPO.transform(null,null);
        //如果密码不为空的话,代表修改密码,需要做修改密码前提校验,id不能为空 或者 phone不能为空.
        if (hospAdminUserInfo.getPassword() != null) {
            DPreconditions.checkState(
                    hospAdminUserInfo.getId() != null
                            || hospAdminUserInfo.getPhone() != null);
        }
        DPreconditions.checkState(
                hospAdminUserInfoMapper.updateByPrimaryKeySelective(hospAdminUserInfo) == 1,
                Language.get("service.update-failure"),
                true);
    }

    @Override
    public void deleteOne(Long id) throws Exception {

    }

    /**
     * 软删除
     * @param id
     * @throws Exception
     */
    @Override
    public void setStateAsInvalid(Long id) throws Exception {
        DPreconditions.checkNotNull(
                id,
                Language.get("admin-user.id-null"),
                true);
        HospAdminUserInfo hospAdminUserInfo = new HospAdminUserInfo();
        hospAdminUserInfo.setId(id);
        hospAdminUserInfo.setEnable(EnableEnum.ENABLE_DELETE.getCode());
        DPreconditions.checkState(
                hospAdminUserInfoMapper.updateByPrimaryKeySelective(hospAdminUserInfo) == 1,
                Language.get("service.update-failure"),
                true);
    }

    /**
     * 查询管理员用户信息
     * @param id
     * @return
     * @throws Exception
     */
    @Override
    public HospAdminUserInfo selectOne(Long id) throws Exception {
        DPreconditions.checkNotNull(
                id,
                Language.get("admin-user.id-null"),
                true);
        HospAdminUserInfo select = new HospAdminUserInfo();
        select.setId(id);
        select.setEnable(EnableEnum.ENABLE_NORMAL.getCode());
        return hospAdminUserInfoMapper.selectOne(select);
    }

    /**
     * 查询管理员用户信息
     * @param adminInfoPO
     * @return
     * @throws Exception
     */
    public HospAdminUserInfo selectOne(AdminInfoPO adminInfoPO) throws Exception {
        if(adminInfoPO == null)
            return null;
        HospAdminUserInfo select = adminInfoPO.transform(null,null);
        select.setEnable(EnableEnum.ENABLE_NORMAL.getCode());
        return hospAdminUserInfoMapper.selectOne(select);
    }

    @Override
    public PageInfo<HospAdminUserInfo> select(AdminInfoPO adminInfoPO) throws Exception {
        if (adminInfoPO == null)
             return null;
        PageHelper.startPage(adminInfoPO.getPageNum(), adminInfoPO.getPageSize());
        if (StringUtil.isNotEmpty(adminInfoPO.getField()))
            PageHelper.orderBy(adminInfoPO.getField());
        HospAdminUserInfo select = adminInfoPO.transform(null,null);
        select.setEnable(EnableEnum.ENABLE_NORMAL.getCode());
        return new PageInfo(hospAdminUserInfoMapper.select(select));
    }

    @Override
    public PageInfo<HospAdminUserInfo> selectAll(PageBean pageBean) throws Exception {
        if (pageBean == null)
            pageBean = new PageBean();
        PageHelper.startPage(pageBean.getPageNum(), pageBean.getPageSize());
        if (StringUtil.isNotEmpty(pageBean.getField()))
            PageHelper.orderBy(pageBean.getField());
        HospAdminUserInfo select = new HospAdminUserInfo();
        select.setEnable(EnableEnum.ENABLE_NORMAL.getCode());
        return new PageInfo(hospAdminUserInfoMapper.select(select));
    }

    @Override
    public HospAdminUserInfo selectOneAdmin(Long id) throws Exception {
        return selectOne(id);
    }

    @Override
    public PageInfo<HospAdminUserInfo> selectAdmin(AdminInfoPO adminInfoPO) throws Exception {
        return select(adminInfoPO);
    }

    @Override
    public PageInfo<HospAdminUserInfo> selectAllAdmin(PageBean pageBean) throws Exception {
        return selectAll(pageBean);
    }
}
