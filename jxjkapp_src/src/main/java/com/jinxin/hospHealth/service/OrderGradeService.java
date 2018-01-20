package com.jinxin.hospHealth.service;

import com.doraemon.base.controller.bean.PageBean;
import com.doraemon.base.exceptions.ShowExceptions;
import com.doraemon.base.guava.DPreconditions;
import com.doraemon.base.language.Language;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.github.pagehelper.util.StringUtil;
import com.jinxin.hospHealth.controller.protocol.PO.OrderServiceDetailsPO;
import com.jinxin.hospHealth.dao.mapper.HospOrderGradeMapper;
import com.jinxin.hospHealth.dao.models.HospOrderGrade;
import com.jinxin.hospHealth.dao.models.HospOrderServiceDetails;
import com.jinxin.hospHealth.dao.modelsEnum.OrderServiceDetailsStateEnum;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;

/**
 * Created by zbs on 2018/1/19.
 */
@Service
public class OrderGradeService implements BaseService<HospOrderGrade,HospOrderGrade>{

    @Autowired
    HospOrderGradeMapper hospOrderGradeMapper;
    @Autowired
    OrderServiceDetailsService orderServiceDetailsService;

    /**
     * 新增订单评价表
     * @param hospOrderGrade
     * @return
     * @throws Exception
     */
    @Override
    @Transactional
    public HospOrderGrade add(HospOrderGrade hospOrderGrade) throws Exception {
        DPreconditions.checkState(hospOrderGrade.getId() == null,
                "订单评价的id不能填写.",
                true);
        DPreconditions.checkNotNull(hospOrderGrade.getLevel(),
                "订单的等级不能为空",
                true);
        HospOrderServiceDetails hosd = DPreconditions.checkNotNull(
                orderServiceDetailsService.selectOne(hospOrderGrade.getOrderServiceDetailsId()),
                Language.get("order-product-service.select-not-exist"),
                true);
        DPreconditions.checkState(
                OrderServiceDetailsStateEnum.COMPLETE.getCode() == hosd.getState(),
                "必须是已经完成的订单服务才能被评价.",
                true);
        hospOrderGrade.setCreateDate(new Date());
        hospOrderGrade.setUpdateDate(new Date());
        DPreconditions.checkState(
                hospOrderGradeMapper.insertSelectiveReturnId(hospOrderGrade) == 1,
                Language.get("service.save-failure"),
                true);
        OrderServiceDetailsPO osdPO = new OrderServiceDetailsPO();
        osdPO.setId(hospOrderGrade.getOrderServiceDetailsId());
        osdPO.setGradeId(hospOrderGrade.getId());
        orderServiceDetailsService.update(osdPO);
        return hospOrderGrade;
    }

    /**
     * 更新订单商品评价
     * @param hospOrderGrade
     * @throws Exception
     */
    @Override
    public void update(HospOrderGrade hospOrderGrade) throws Exception {
         DPreconditions.checkNotNull(
                 hospOrderGrade.getId(),
                 "订单评价id不能为空.",
                 true);
         hospOrderGrade.setUpdateDate(new Date());
         DPreconditions.checkState(
                 hospOrderGradeMapper.updateByPrimaryKeySelective(hospOrderGrade) == 1,
                 Language.get("service.update-failure"),
                 true);
    }

    /**
     * 删除订单商品评价
     * @param id
     * @throws Exception
     */
    @Override
    public void deleteOne(Long id) throws Exception {
        DPreconditions.checkNotNull(
                id,
                "订单评价id不能为空.",
                true);
        DPreconditions.checkState(
                hospOrderGradeMapper.deleteByPrimaryKey(id) == 1,
                Language.get("service.delete-failure"),
                true);
    }

    @Override
    public void setStateAsInvalid(Long id) throws Exception {
        throw new ShowExceptions(Language.get("service.invalid-method"));
    }

    /**
     * 查询订单商品评价
     * @param id
     * @return
     * @throws Exception
     */
    @Override
    public HospOrderGrade selectOne(Long id) throws Exception {
        DPreconditions.checkNotNull(
                id,
                "订单评价id不能为空.",
                true);
        return hospOrderGradeMapper.selectByPrimaryKey(id);
    }

    /**
     * 查询订单商品评价
     * @param hospOrderGrade
     * @return
     * @throws Exception
     */
    @Override
    public PageInfo<HospOrderGrade> select(HospOrderGrade hospOrderGrade) throws Exception {
        PageHelper.startPage(hospOrderGrade.getPageNum(), hospOrderGrade.getPageSize());
        if (StringUtil.isNotEmpty(hospOrderGrade.getField()))
            PageHelper.orderBy(hospOrderGrade.getField());
        return new PageInfo(hospOrderGradeMapper.select(hospOrderGrade));
    }

    @Override
    public PageInfo<HospOrderGrade> selectAll(PageBean pageBean) throws Exception {
        if(pageBean == null)
            pageBean = new PageBean();
        PageHelper.startPage(pageBean.getPageNum(), pageBean.getPageSize());
        if (StringUtil.isNotEmpty(pageBean.getField()))
            PageHelper.orderBy(pageBean.getField());
        return new PageInfo(hospOrderGradeMapper.selectAll());
    }

    @Override
    public HospOrderGrade selectOneAdmin(Long id) throws Exception {
        return selectOne(id);
    }

    @Override
    public PageInfo<HospOrderGrade> selectAdmin(HospOrderGrade hospOrderGrade) throws Exception {
        return select(hospOrderGrade);
    }

    @Override
    public PageInfo<HospOrderGrade> selectAllAdmin(PageBean pageBean) throws Exception {
        return selectAll(pageBean);
    }
}
