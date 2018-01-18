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
        DPreconditions.checkState(
                po.getPermissions() != null,
                Language.get("user.permissions-null"),
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
        HospAdminUserInfo add = po.transform(new Date(),new Date());
        DPreconditions.checkState(
                hospAdminUserInfoMapper.insertSelectiveReturnId(add) == 1,
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
    public HospAdminUserInfo selectOneByPhone(String phone) {
        DPreconditions.checkNotNullAndEmpty(phone,
                Language.get("user.phone-null"),
                true);
        HospAdminUserInfo select = new HospAdminUserInfo();
        select.setPhone(phone);
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

    @Override
    public void setStateAsInvalid(Long id) throws Exception {

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
        return hospAdminUserInfoMapper.selectByPrimaryKey(id);
    }

    /**
     * 查询管理员用户信息
     * @param adminInfoPO
     * @return
     * @throws Exception
     */
    public HospAdminUserInfo selectOne(AdminInfoPO adminInfoPO) throws Exception {
        if (adminInfoPO.getPassword() != null) {
            DPreconditions.checkState(
                    adminInfoPO.getId() != null
                            || adminInfoPO.getPhone() != null);
        }
        return hospAdminUserInfoMapper.selectOne(adminInfoPO.transform(null,null));
    }

    @Override
    public PageInfo<HospAdminUserInfo> select(AdminInfoPO adminInfoPO) throws Exception {
        return null;
    }

    @Override
    public PageInfo<HospAdminUserInfo> selectAll(PageBean pageBean) throws Exception {
        if (pageBean == null)
            pageBean = new PageBean();
        PageHelper.startPage(pageBean.getPageNum(), pageBean.getPageSize());
        if (StringUtil.isNotEmpty(pageBean.getField()))
            PageHelper.orderBy(pageBean.getField());
        return new PageInfo(hospAdminUserInfoMapper.selectAll());
    }

    @Override
    public HospAdminUserInfo selectOneAdmin(Long id) throws Exception {
        return null;
    }

    @Override
    public PageInfo<HospAdminUserInfo> selectAdmin(AdminInfoPO adminInfoPO) throws Exception {
        return null;
    }

    @Override
    public PageInfo<HospAdminUserInfo> selectAllAdmin(PageBean pageBean) throws Exception {
        return null;
    }
}
