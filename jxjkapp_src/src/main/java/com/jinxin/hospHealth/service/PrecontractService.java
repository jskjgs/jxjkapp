package com.jinxin.hospHealth.service;

import com.doraemon.base.controller.bean.PageBean;
import com.doraemon.base.exceptions.ShowExceptions;
import com.doraemon.base.guava.DPreconditions;
import com.doraemon.base.language.Language;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.github.pagehelper.util.StringUtil;
import com.jinxin.hospHealth.dao.mapper.HospPrecontractMapper;
import com.jinxin.hospHealth.dao.models.HospPatientInfo;
import com.jinxin.hospHealth.dao.models.HospPrecontract;
import com.jinxin.hospHealth.dao.models.HospUserInfo;
import com.jinxin.hospHealth.dao.modelsEnum.PrecontractEnum;
import com.jinxin.hospHealth.dao.modelsEnum.UserVipEnum;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * 预约
 * Created by zbs on 2018/1/2.
 */
@Service
public class PrecontractService implements BaseService<HospPrecontract, HospPrecontract> {

    @Autowired
    HospPrecontractMapper hospPrecontractMapper;
    @Autowired
    UserInfoService userInfoService;
    @Autowired
    SkuService skuService;

    /**
     * 增加预约
     *
     * @param hospPrecontract
     * @throws Exception
     */
    @Override
    public HospPrecontract add(HospPrecontract hospPrecontract) throws Exception {
        DPreconditions.checkNotNull(hospPrecontract.getUserId(),
                Language.get("user.id-null"),
                true);
        DPreconditions.checkNotNull(hospPrecontract.getProductSkuId(),
                Language.get("productSku.id-null"),
                true);
        DPreconditions.checkNotNull(hospPrecontract.getPrecontractDate(),
                Language.get("precontract.precontract-time-null"),
                true);
        HospUserInfo userInfo = DPreconditions.checkNotNull(userInfoService.selectOne(hospPrecontract.getUserId()),
                Language.get("user.select-not-exist"),
                true);
        DPreconditions.checkState(userInfo.getIsVip().equals(UserVipEnum.VIP.getCode()),
                Language.get("precontract.user-must-is-vip"),
                true);
        DPreconditions.checkNotNull(skuService.selectOne(hospPrecontract.getProductSkuId()),
                Language.get("productSku.id-not-exist"),
                true);
        DPreconditions.checkNotNull(
                hospPrecontract.getAreaId(),
                Language.get("precontract.area-null"),
                true);
        HospPrecontract precontract = new HospPrecontract();
        precontract.setPrecontractDate(hospPrecontract.getPrecontractDate());
        precontract.setProductSkuId(hospPrecontract.getProductSkuId());
        precontract.setUserId(hospPrecontract.getUserId());
        precontract.setStatus(PrecontractEnum.NORMAL.getCode());
        DPreconditions.checkState(hospPrecontractMapper.insertSelectiveReturnId(precontract) == 1,
                Language.get("service.save-failure"),
                true);
        return precontract;
    }

    /**
     * 更新预约
     *
     * @param hospPrecontract
     * @throws Exception
     */
    @Override
    public void update(HospPrecontract hospPrecontract) throws Exception {
        DPreconditions.checkNotNull(hospPrecontract.getId(),
                "预约的ID不能为空.",
                true);
        DPreconditions.checkNotNull(selectOne(hospPrecontract.getId()),
                "该ID的预约未查询到.",
                true);
        HospPrecontract update = new HospPrecontract();
        update.setId(hospPrecontract.getId());
        update.setStatus(hospPrecontract.getStatus());
        DPreconditions.checkState(hospPrecontractMapper.updateByPrimaryKeySelective(update) == 1,
                "更新医生信息失败.",
                true);
    }

    /**
     * 删除预约
     *
     * @param id
     * @throws Exception
     */
    @Override
    public void deleteOne(Long id) throws Exception {
        HospPrecontract precontract = selectOne(id);
        DPreconditions.checkNotNull(precontract,
                "该ID的预约未查询到.",
                true);
        DPreconditions.checkState(hospPrecontractMapper.deleteByPrimaryKey(id) == 1,
                "删除预约信息失败.",
                true);
    }

    /**
     * 失效预约信息
     *
     * @param id
     * @throws Exception
     */
    @Override
    public void setStateAsInvalid(Long id) throws Exception {
        throw new ShowExceptions(Language.get("service.invalid-method"));
    }

    /**
     * 查询一条预约信息
     *
     * @param id
     * @return
     * @throws Exception
     */
    @Override
    public HospPrecontract selectOne(Long id) throws Exception {
        DPreconditions.checkNotNull(id,
                Language.get("user.id-null"),
                true);
        return hospPrecontractMapper.selectByPrimaryKey(id);
    }

    public HospPrecontract selectOne(HospPrecontract hospPrecontract) throws Exception {
        return hospPrecontractMapper.selectOne(hospPrecontract);
    }

    /**
     * 查询预约信息
     *
     * @param hospPrecontract
     * @return
     * @throws Exception
     */
    @Override
    public PageInfo<HospPrecontract> select(HospPrecontract hospPrecontract) throws Exception {
        if (hospPrecontract == null)
            return null;
        PageHelper.startPage(hospPrecontract.getPageNum(), hospPrecontract.getPageSize());
        if (StringUtil.isNotEmpty(hospPrecontract.getField()))
            PageHelper.orderBy(hospPrecontract.getField());
        return new PageInfo(hospPrecontractMapper.selectByExampleByCustom(hospPrecontract));
    }

    /**
     * 查询全部预约信息
     *
     * @param pageBean
     * @return
     * @throws Exception
     */
    @Override
    public PageInfo<HospPrecontract> selectAll(PageBean pageBean) throws Exception {
        if (pageBean == null)
            pageBean = new PageBean();
        PageHelper.startPage(pageBean.getPageNum(), pageBean.getPageSize());
        if (StringUtil.isNotEmpty(pageBean.getField()))
            PageHelper.orderBy(pageBean.getField());
        return new PageInfo(hospPrecontractMapper.selectAll());
    }

    /**
     * 查询一个信息---admin
     *
     * @param id
     * @return
     * @throws Exception
     */
    @Override
    public HospPrecontract selectOneAdmin(Long id) throws Exception {
        return selectOne(id);
    }

    /**
     * 查询信息---admin
     *
     * @param hospPrecontract
     * @return
     * @throws Exception
     */
    @Override
    public PageInfo<HospPrecontract> selectAdmin(HospPrecontract hospPrecontract) throws Exception {
        return select(hospPrecontract);
    }

    /**
     * 查询全部信息---admin
     *
     * @param pageBean
     * @return
     * @throws Exception
     */
    @Override
    public PageInfo<HospPrecontract> selectAllAdmin(PageBean pageBean) throws Exception {
        if (pageBean == null)
            pageBean = new PageBean();
        return selectAll(pageBean);
    }
}
