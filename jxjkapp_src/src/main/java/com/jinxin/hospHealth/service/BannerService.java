package com.jinxin.hospHealth.service;

import com.doraemon.base.controller.bean.PageBean;
import com.doraemon.base.guava.DPreconditions;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.github.pagehelper.StringUtil;
import com.jinxin.hospHealth.dao.mapper.HospBannerMapper;
import com.jinxin.hospHealth.dao.models.HospBanner;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * banner信息service
 * Created by zbs on 2017/12/24.
 */
@Service
public class BannerService {

    @Autowired
    HospBannerMapper hospBannerMapper;

    /**
     * 增加banner信息
     *
     * @param hospBanner
     */
    public void add(HospBanner hospBanner) {
        DPreconditions.checkState(hospBanner.getId() == null, "banner的id不能填写.", true);
        DPreconditions.checkNotNullAndEmpty(hospBanner.getName(), "banner的名称不能为空.", true);
        DPreconditions.checkNotNullAndEmpty(hospBanner.getBannerUrl(), "banner图片路径url不能为空.", true);
        DPreconditions.checkNotNullAndEmpty(hospBanner.getJumpUrl(), "banner跳转路径url不能为空.", true);
        if (hospBanner.getOrderNumber() == null)
            hospBanner.setOrderNumber(1);
        if (hospBanner.getDisplay() == null)
            hospBanner.setDisplay(0);
        DPreconditions.checkState(hospBannerMapper.insertSelectiveReturnId(hospBanner) == 1, "增加banner失败", true);
    }

    /**
     * 更新banner信息
     *
     * @param hospBanner
     */
    public void update(HospBanner hospBanner) {
        DPreconditions.checkNotNull(hospBanner.getId(), "banner的id不能为空.", true);
        HospBanner banner = selectOne(hospBanner.getId());
        DPreconditions.checkNotNull(banner, "该ID的banner未查询到.", true);
        DPreconditions.checkState(hospBannerMapper.updateByPrimaryKeySelective(hospBanner) == 1, "更新banner信息失败.", true);
    }

    /**
     * 删除单个banner信息
     *
     * @param id
     */
    public void deleteOne(Long id) {
        HospBanner banner = selectOne(id);
        DPreconditions.checkNotNull(banner, "该ID的banner未查询到.", true);
        DPreconditions.checkState(hospBannerMapper.deleteByPrimaryKey(id) == 1, "删除banner信息失败.");
    }

    /**
     * 查询单个banner信息
     *
     * @return
     */
    public HospBanner selectOne(Long id) {
        DPreconditions.checkNotNull(id, "banner的id不能为空");
        return hospBannerMapper.selectByPrimaryKey(id);
    }

    /**
     * 根据条件查询banner信息
     *
     * @param hospBanner
     * @return
     */
    public PageInfo<HospBanner> select(HospBanner hospBanner) {
        PageHelper.startPage(hospBanner.getPageNum(), hospBanner.getPageSize());
        if (StringUtil.isNotEmpty(hospBanner.getField()))
            PageHelper.orderBy(hospBanner.getField());
        HospBanner select = new HospBanner();
        select.setName(hospBanner.getName());
        select.setDisplay(hospBanner.getDisplay());
        return new PageInfo(hospBannerMapper.select(select));
    }

    /**
     * 查询全部banner信息
     *
     * @param pageBean
     * @return
     */
    public PageInfo<HospBanner> selectAll(PageBean pageBean) {
        PageHelper.startPage(pageBean.getPageNum(), pageBean.getPageSize());
        if (StringUtil.isNotEmpty(pageBean.getField()))
            PageHelper.orderBy(pageBean.getField());
        return new PageInfo(hospBannerMapper.selectAll());
    }

}
