package com.jinxin.hospHealth.service;

import com.doraemon.base.controller.bean.PageBean;
import com.doraemon.base.guava.DPreconditions;
import com.doraemon.base.language.Language;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.github.pagehelper.util.StringUtil;
import com.jinxin.hospHealth.dao.mapper.HospOrderProductRollbackMapper;
import com.jinxin.hospHealth.dao.models.HospOrderProductRollback;
import com.jinxin.hospHealth.dao.modelsEnum.OrderProductRollbackStateEnum;
import org.mybatis.generator.config.Context;
import org.mybatis.generator.config.TableConfiguration;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;

/**
 * Created by zbs on 2018/1/18.
 */
@Service
public class OrderProductRollbackService implements BaseService<HospOrderProductRollback, HospOrderProductRollback> {

    @Autowired
    AdminUserInfoService adminUserInfoService;
    @Autowired
    OrderProductService orderProductService;
    @Autowired
    HospOrderProductRollbackMapper hospOrderProductRollbackMapper;

    @Override
    public HospOrderProductRollback add(HospOrderProductRollback hospOrderProductRollback) throws Exception {
        DPreconditions.checkNotNull(
                adminUserInfoService.selectOne(hospOrderProductRollback.getAdminUserId()),
                "操作人用户未查询到.",
                true);
        DPreconditions.checkNotNull(
                orderProductService.selectOne(hospOrderProductRollback.getOrderProductId()),
                "订单商品未查询到.",
                true);
        DPreconditions.checkNotNull(
                hospOrderProductRollback.getComment(),
                "申请理由不能为空.",
                true);
        DPreconditions.checkNotNull(
                hospOrderProductRollback.getMoney(),
                "回退金额不能为空.",
                true);
        DPreconditions.checkNotNull(
                hospOrderProductRollback.getDoctorAreaId(),
                "医院院区ID不能为空.",
                true);
        hospOrderProductRollback.setCreateDate(new Date());
        hospOrderProductRollback.setUpdateDate(new Date());
        hospOrderProductRollback.setState(
                hospOrderProductRollback.getState() == null
                        ? OrderProductRollbackStateEnum.APPLY_CANCELLATION.getCode()
                        : hospOrderProductRollback.getState());
        DPreconditions.checkState(hospOrderProductRollbackMapper.insertSelectiveReturnId(hospOrderProductRollback) == 1,
                Language.get("service.save-failure"),
                true);
        return hospOrderProductRollback;
    }

    @Override
    public void update(HospOrderProductRollback hospOrderProductRollback) throws Exception {
        DPreconditions.checkNotNull(
                hospOrderProductRollback.getOrderProductId(),
                "申请退款详情ID不能为空.",
                true);
        hospOrderProductRollbackMapper.updateByPrimaryKeySelective(hospOrderProductRollback);

    }

    @Override
    public void deleteOne(Long id) throws Exception {
        DPreconditions.checkNotNull(
                id,
                "申请退款详情ID不能为空.",
                true);
        hospOrderProductRollbackMapper.deleteByPrimaryKey(id);
    }

    @Override
    public void setStateAsInvalid(Long id) throws Exception {

    }

    @Override
    public HospOrderProductRollback selectOne(Long id) throws Exception {
        DPreconditions.checkNotNull(
                id,
                "申请退款详情ID不能为空.",
                true);
        return hospOrderProductRollbackMapper.selectByPrimaryKey(id);
    }

    @Override
    public PageInfo<HospOrderProductRollback> select(HospOrderProductRollback hospOrderProductRollback) throws Exception {
        if (hospOrderProductRollback == null)
            return null;
        PageHelper.startPage(hospOrderProductRollback.getPageNum(), hospOrderProductRollback.getPageSize());
        if (StringUtil.isNotEmpty(hospOrderProductRollback.getField())) {
            PageHelper.orderBy(hospOrderProductRollback.getField());
        }
        return new PageInfo<>(hospOrderProductRollbackMapper.select(hospOrderProductRollback));
    }

    @Override
    public PageInfo<HospOrderProductRollback> selectAll(PageBean pageBean) throws Exception {
        if (pageBean == null)
            pageBean = new PageBean();
        PageHelper.startPage(pageBean.getPageNum(), pageBean.getPageSize());
        if (StringUtil.isNotEmpty(pageBean.getField())) {
            PageHelper.orderBy(pageBean.getField());
        }
        return new PageInfo<>(hospOrderProductRollbackMapper.selectAll());
    }

    @Override
    public HospOrderProductRollback selectOneAdmin(Long id) throws Exception {
        return selectOne(id);
    }

    @Override
    public PageInfo<HospOrderProductRollback> selectAdmin(HospOrderProductRollback t) throws Exception {
        return select(t);
    }

    @Override
    public PageInfo<HospOrderProductRollback> selectAllAdmin(PageBean pageBean) throws Exception {
        return selectAll(pageBean);
    }
}
