package com.jinxin.hospHealth.service;

import com.doraemon.base.controller.bean.PageBean;
import com.doraemon.base.guava.DPreconditions;
import com.github.pagehelper.PageInfo;
import com.jinxin.hospHealth.dao.models.HospOrderProductRollback;
import org.mybatis.generator.config.Context;
import org.mybatis.generator.config.TableConfiguration;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;

/**
 * Created by zbs on 2018/1/18.
 */
@Service
public class OrderProductRollbackService implements BaseService<HospOrderProductRollback,HospOrderProductRollback>{

    @Autowired
    AdminUserInfoService adminUserInfoService;
    @Autowired
    OrderProductService orderProductService;

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
        return hospOrderProductRollback;
    }

    @Override
    public void update(HospOrderProductRollback t) throws Exception {

    }

    @Override
    public void deleteOne(Long id) throws Exception {

    }

    @Override
    public void setStateAsInvalid(Long id) throws Exception {

    }

    @Override
    public HospOrderProductRollback selectOne(Long id) throws Exception {
        return null;
    }

    @Override
    public PageInfo<HospOrderProductRollback> select(HospOrderProductRollback t) throws Exception {
        return null;
    }

    @Override
    public PageInfo<HospOrderProductRollback> selectAll(PageBean pageBean) throws Exception {
        return null;
    }

    @Override
    public HospOrderProductRollback selectOneAdmin(Long id) throws Exception {
        return null;
    }

    @Override
    public PageInfo<HospOrderProductRollback> selectAdmin(HospOrderProductRollback t) throws Exception {
        return null;
    }

    @Override
    public PageInfo<HospOrderProductRollback> selectAllAdmin(PageBean pageBean) throws Exception {
        return null;
    }
}
