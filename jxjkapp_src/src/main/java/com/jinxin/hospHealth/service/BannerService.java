package com.jinxin.hospHealth.service;

import com.doraemon.base.controller.bean.PageBean;
import com.doraemon.base.exceptions.ShowExceptions;
import com.doraemon.base.guava.DPreconditions;
import com.doraemon.base.language.Language;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.github.pagehelper.util.StringUtil;
import com.jinxin.hospHealth.dao.mapper.HospBannerMapper;
import com.jinxin.hospHealth.dao.models.HospBanner;
import com.jinxin.hospHealth.dao.modelsEnum.ShowEnum;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * banner信息service
 * Created by zbs on 2017/12/24.
 */
@Service
public class BannerService implements BaseService<HospBanner,HospBanner>{

    @Autowired
    HospBannerMapper hospBannerMapper;

    /**
     * 增加banner信息
     *
     * @param hospBanner
     */
    @Override
    public HospBanner add(HospBanner hospBanner) {
        DPreconditions.checkState(
                hospBanner.getId() == null,
                "banner的id不能填写.",
                true);
        DPreconditions.checkNotNullAndEmpty(
                hospBanner.getName(),
                Language.get("banner.name-null"),
                true);
        DPreconditions.checkNotNullAndEmpty(
                hospBanner.getBannerUrl(),
                Language.get("banner.imageURL-null"),
                true);
        DPreconditions.checkNotNullAndEmpty(
                hospBanner.getJumpUrl(),
                Language.get("banner.jumpURL-null"),
                true);
        if (hospBanner.getOrderNumber() == null)
            hospBanner.setOrderNumber(1);
        if (hospBanner.getDisplay() == null)
            hospBanner.setDisplay(0);
        DPreconditions.checkState(
                hospBannerMapper.insertSelectiveReturnId(hospBanner) == 1,
                Language.get("service.save-failure"),
                true);
        return hospBanner;
    }

    /**
     * 更新banner信息
     *
     * @param hospBanner
     */
    @Override
    public void update(HospBanner hospBanner) {
        if(hospBanner == null)
            return;
        DPreconditions.checkNotNull(
                hospBanner.getId(),
                Language.get("banner.id-null"),
                true);
        HospBanner banner = selectOne(hospBanner.getId());
        DPreconditions.checkNotNull(
                banner,
                Language.get("banner.id-not-exist"),
                true);
        DPreconditions.checkState(
                hospBannerMapper.updateByPrimaryKeySelective(hospBanner) == 1,
                "更新banner信息失败.",
                true);
    }

    /**
     * 删除单个banner信息
     *
     * @param id
     */
    @Override
    public void deleteOne(Long id) {
        HospBanner banner = selectOne(id);
        DPreconditions.checkNotNull(
                banner,
                Language.get("banner.id-not-exist"),
                true);
        DPreconditions.checkState(
                hospBannerMapper.deleteByPrimaryKey(id) == 1,
                "删除banner信息失败.",
                true);
    }

    @Override
    public void setStateAsInvalid(Long id) throws Exception {
        throw new ShowExceptions(Language.get("service.invalid-method"));
    }

    /**
     * 查询单个banner信息 -- 提供给客户端
     *
     * @return
     */
    @Override
    public HospBanner selectOne(Long id) {
        DPreconditions.checkNotNull(
                id,
                Language.get("banner.id-null"),
                true);
        HospBanner select = new HospBanner();
        select.setId(id);
        select.setDisplay(ShowEnum.DISPLAY.getCode());
        return hospBannerMapper.selectOne(select);
    }

    /**
     * 根据条件查询banner信息-- 提供给客户端
     * @param hospBanner
     * @return     *

     */
    @Override
    public PageInfo<HospBanner> select(HospBanner hospBanner) {
        if(hospBanner == null)
            return null;
        PageHelper.startPage(hospBanner.getPageNum(), hospBanner.getPageSize());
        if (StringUtil.isNotEmpty(hospBanner.getField()))
            PageHelper.orderBy(hospBanner.getField());
        HospBanner select = new HospBanner();
        select.setName(hospBanner.getName());
        select.setId(hospBanner.getId());
        select.setDisplay(ShowEnum.DISPLAY.getCode());
        return new PageInfo(hospBannerMapper.select(select));
    }

    /**
     * 查询全部banner信息-- 提供给客户端
     *
     * @param pageBean
     * @return
     */
    @Override
    public PageInfo<HospBanner> selectAll(PageBean pageBean) {
        if(pageBean == null)
            pageBean = new PageBean();
        PageHelper.startPage(pageBean.getPageNum(), pageBean.getPageSize());
        if (StringUtil.isNotEmpty(pageBean.getField()))
            PageHelper.orderBy(pageBean.getField());
        HospBanner select = new HospBanner();
        select.setDisplay(ShowEnum.DISPLAY.getCode());
        return new PageInfo(hospBannerMapper.select(select));
    }



    /**
     * 查询单个banner信息 -- 提供给客户端
     *
     * @return
     */
    @Override
    public HospBanner selectOneAdmin(Long id) throws Exception {
        DPreconditions.checkNotNull(
                id,
                Language.get("banner.id-null"),
                true);
        return hospBannerMapper.selectByPrimaryKey(id);
    }

    /**
     * 根据条件查询banner信息-- 提供给客户端
     *
     * @param hospBanner
     * @return
     */
    @Override
    public PageInfo<HospBanner> selectAdmin(HospBanner hospBanner) throws Exception {
        if(hospBanner == null)
            return null;
        PageHelper.startPage(hospBanner.getPageNum(), hospBanner.getPageSize());
        if (StringUtil.isNotEmpty(hospBanner.getField()))
            PageHelper.orderBy(hospBanner.getField());
        return new PageInfo(hospBannerMapper.selectByExampleByFuzzy(hospBanner));
    }

    /**
     * 查询全部banner信息-- 提供给客户端
     *
     * @param pageBean
     * @return
     */
    @Override
    public PageInfo<HospBanner> selectAllAdmin(PageBean pageBean) throws Exception {
        if(pageBean == null)
            pageBean = new PageBean();
        PageHelper.startPage(pageBean.getPageNum(), pageBean.getPageSize());
        if (StringUtil.isNotEmpty(pageBean.getField()))
            PageHelper.orderBy(pageBean.getField());
        return new PageInfo(hospBannerMapper.selectAll());
    }

}
