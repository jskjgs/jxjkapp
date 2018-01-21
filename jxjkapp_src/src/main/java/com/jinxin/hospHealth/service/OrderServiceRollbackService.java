package com.jinxin.hospHealth.service;

import com.doraemon.base.controller.bean.PageBean;
import com.doraemon.base.guava.DPreconditions;
import com.doraemon.base.language.Language;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.github.pagehelper.util.StringUtil;
import com.jinxin.hospHealth.dao.mapper.HospOrderServiceRollbackMapper;
import com.jinxin.hospHealth.dao.models.HospOrderServiceRollback;
import com.jinxin.hospHealth.dao.modelsEnum.OrderServiceRollbackStateEnum;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;

/**
 * Created by zbs on 2018/1/21.
 */
@Service
public class OrderServiceRollbackService implements BaseService<HospOrderServiceRollback,HospOrderServiceRollback>{

    @Autowired
    HospOrderServiceRollbackMapper hospOrderServiceRollbackMapper;
    @Autowired
    OrderServiceDetailsService orderServiceDetailsService;


    /**
     * 增加一条服务订单使用回退申请表
     *
     * @param hospOrderServiceRollback
     * @return
     * @throws Exception
     */
    @Override
    @Transactional
    public HospOrderServiceRollback add(HospOrderServiceRollback hospOrderServiceRollback) throws Exception {
        DPreconditions.checkNotNull(
                orderServiceDetailsService.selectOne(hospOrderServiceRollback.getOrderServiceDetailsId()),
                Language.get("order-product-service.select-not-exist"),
                true);
        DPreconditions.checkNotNull(
                hospOrderServiceRollback.getComment(),
                "申请回退的理由不能为空.",
                true);
        DPreconditions.checkState(
                selectOne(hospOrderServiceRollback.getOrderServiceDetailsId()) == null,
                "该条信息已经在申请列表中,不能重复申请.",
                true);
        hospOrderServiceRollback.setState(OrderServiceRollbackStateEnum.APPLY_CANCELLATION.getCode());
        hospOrderServiceRollback.setCreateDate(new Date());
        hospOrderServiceRollback.setUpdateDate(new Date());
        DPreconditions.checkState(hospOrderServiceRollbackMapper.insertSelectiveReturnId(hospOrderServiceRollback) == 1,
                Language.get("service.save-failure"),
                true);
        return hospOrderServiceRollback;
    }

    @Override
    public void update(HospOrderServiceRollback hospOrderServiceRollback) throws Exception {
        DPreconditions.checkNotNull(
                hospOrderServiceRollback.getOrderServiceDetailsId(),
                "申请回退详情ID不能为空.",
                true);
        hospOrderServiceRollbackMapper.updateByPrimaryKeySelective(hospOrderServiceRollback);
    }

    @Override
    public void deleteOne(Long id) throws Exception {

    }

    @Override
    public void setStateAsInvalid(Long id) throws Exception {

    }

    @Override
    public HospOrderServiceRollback selectOne(Long id) throws Exception {
        DPreconditions.checkNotNull(
                id,
                "申请回退详情ID不能为空.",
                true);
        return hospOrderServiceRollbackMapper.selectByPrimaryKey(id);
    }

    @Override
    public PageInfo<HospOrderServiceRollback> select(HospOrderServiceRollback hospOrderServiceRollback) throws Exception {
        if (hospOrderServiceRollback == null)
            return null;
        PageHelper.startPage(hospOrderServiceRollback.getPageNum(), hospOrderServiceRollback.getPageSize());
        if (StringUtil.isNotEmpty(hospOrderServiceRollback.getField())) {
            PageHelper.orderBy(hospOrderServiceRollback.getField());
        }
        return new PageInfo<>(hospOrderServiceRollbackMapper.select(hospOrderServiceRollback));
    }

    @Override
    public PageInfo<HospOrderServiceRollback> selectAll(PageBean pageBean) throws Exception {
        if (pageBean == null)
            pageBean = new PageBean();
        PageHelper.startPage(pageBean.getPageNum(), pageBean.getPageSize());
        if (StringUtil.isNotEmpty(pageBean.getField())) {
            PageHelper.orderBy(pageBean.getField());
        }
        return new PageInfo<>(hospOrderServiceRollbackMapper.selectAll());
    }

    @Override
    public HospOrderServiceRollback selectOneAdmin(Long id) throws Exception {
        return selectOne(id);
    }

    @Override
    public PageInfo<HospOrderServiceRollback> selectAdmin(HospOrderServiceRollback t) throws Exception {
        return select(t);
    }

    @Override
    public PageInfo<HospOrderServiceRollback> selectAllAdmin(PageBean pageBean) throws Exception {
        return selectAll(pageBean);
    }
}
