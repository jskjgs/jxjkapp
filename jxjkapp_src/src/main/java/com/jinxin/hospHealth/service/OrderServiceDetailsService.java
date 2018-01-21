package com.jinxin.hospHealth.service;

import com.doraemon.base.controller.bean.PageBean;
import com.doraemon.base.guava.DPreconditions;
import com.doraemon.base.language.Language;
import com.doraemon.base.util.UUidGenerate;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.github.pagehelper.util.StringUtil;
import com.jinxin.hospHealth.controller.protocol.PO.OrderServiceDetailsPO;
import com.jinxin.hospHealth.dao.mapper.HospOrderServiceDetailsMapper;
import com.jinxin.hospHealth.dao.models.*;
import com.jinxin.hospHealth.dao.modelsEnum.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;

/**
 * Created by zbs on 2018/1/11.
 */
@Service
public class OrderServiceDetailsService implements BaseService<HospOrderServiceDetails, OrderServiceDetailsPO> {

    @Autowired
    HospOrderServiceDetailsMapper hospOrderServiceDetailsMapper;
    @Autowired
    DoctorInfoService doctorInfoService;
    @Autowired
    SkuService skuService;
    @Autowired
    OrderProductService orderProductService;
    @Autowired
    OrderService orderService;
    @Autowired
    DoctorUserInfoService doctorUserInfoService;
    @Autowired
    OrderServiceRollbackService hospOrderServiceRollbackService;

    /**
     * 新增订单商品服务信息
     *
     * @param po
     * @return
     * @throws Exception
     */
    @Override
    @Transactional
    public HospOrderServiceDetails add(OrderServiceDetailsPO po) throws Exception {
        DPreconditions.checkState(
                po.getId() == null,
                Language.get("order-product-service.id-exist"),
                true);
        DPreconditions.checkNotNull(
                po.getOrderProductId(),
                Language.get("order-product.id-null"),
                true);
        DPreconditions.checkNotNull(
                po.getQty(),
                Language.get("docker.id-null"),
                true);
        DPreconditions.checkNotNull(
                po.getDoctorAreaId(),
                Language.get("docker-area.id-null"),
                true);
        HospOrderProduct hospOrderProduct = DPreconditions.checkNotNull(
                orderProductService.selectOne(po.getOrderProductId()),
                Language.get("order-product.select-not-exist"),
                true);
        DPreconditions.checkState(
                hospOrderProduct.getState().equals(OrderProductStateEnum.NORMAL.getCode()),
                Language.get("order-product.not-normal-state"),
                true);
        HospOrder hospOrder = DPreconditions.checkNotNull(
                orderService.selectOne(hospOrderProduct.getOrderId()),
                Language.get("order.select-not-exist"),
                true);
        DPreconditions.checkState(
                hospOrder.getPayState().equals(OrderPayStateEnum.PAY.getCode()),
                Language.get("order.have-to-pay-state"),
                true);
        DPreconditions.checkState(
                OrderTypeEnum.SERVICE.getCode() == hospOrder.getType(),
                "订单必须是服务订单.",
                true);
        DPreconditions.checkState(
                OrderPayStateEnum.PAY.getCode() == hospOrder.getPayState(),
                "订单必须是支付的订单.",
                true);
        DPreconditions.checkState(
                remainingServiceNumber(po.getOrderProductId()) > 0,
                Language.get("order-product-service.number-null"),
                true);
        po.setCode(UUidGenerate.create());
        po.setState(OrderServiceDetailsStateEnum.NORMAL.getCode());
        HospOrderServiceDetails hospOrderServiceDetails = po.transform(new Date(), new Date());
        DPreconditions.checkState(
                hospOrderServiceDetailsMapper.insertSelectiveReturnId(hospOrderServiceDetails) == 1,
                Language.get("service.save-failure"),
                true);
        return hospOrderServiceDetails;
    }

    /**
     * 统计剩余的服务次数
     *
     * @return
     */
    public int remainingServiceNumber(Long orderProductId) throws Exception {
        DPreconditions.checkNotNull(orderProductId,
                Language.get("order-product.id-null"),
                true);
        HospOrderProduct hospOrderProduct = DPreconditions.checkNotNull(
                orderProductService.selectOne(orderProductId),
                Language.get("order-product.select-not-exist"),
                true);
        if (hospOrderProduct.getServiceQuantity() == null
                || hospOrderProduct.getServiceQuantity() == 0)
            return 0;
        int countUseNumber =
                hospOrderServiceDetailsMapper.countUseNumber(
                        orderProductId,
                        OrderServiceDetailsStateEnum.CANCELLATION.getCode());
        int serviceQuantity = hospOrderProduct.getServiceQuantity();
        return serviceQuantity - countUseNumber;
    }

    @Override
    public void update(OrderServiceDetailsPO po) throws Exception {
        DPreconditions.checkNotNull(po.getId(),
                Language.get("order-product.id-null"),
                true);
        HospOrderServiceDetails hospOrderServiceDetails = po.transform(null, new Date());
        DPreconditions.checkState(
                hospOrderServiceDetailsMapper.updateByPrimaryKeySelective(hospOrderServiceDetails) == 1,
                Language.get("service.update-failure"),
                true);
    }

    /**
     * 确认服务订单
     *
     * @param po
     */
    public void confirm(OrderServiceDetailsPO po, Long doctorUserId) throws Exception {
        OrderServiceDetailsPO select = new OrderServiceDetailsPO();
        select.setDoctorUserId(doctorUserId);
        select.setId(po.getId());
        select.setState(OrderServiceDetailsStateEnum.NORMAL.getCode());
        DPreconditions.checkNotNull(
                selectOne(select),
                "服务订单未查询到.",
                true);
        DPreconditions.checkNotNullAndEmpty(
                po.getDoctorSign(),
                "医生签字不能为空.",
                true);
        DPreconditions.checkNotNullAndEmpty(
                po.getUserSign(),
                "用户签字不能为空.",
                true);
        DPreconditions.checkNotNull(
                doctorUserInfoService.selectOne(doctorUserId),
                "医生用户ID不存在",
                true);
        OrderServiceDetailsPO update = new OrderServiceDetailsPO();
        update.setId(po.getId());
        update.setDoctorUserId(doctorUserId);
        update.setAssociatesId(po.getAssociatesId());
        update.setConsumptionNote(po.getConsumptionNote());
        update.setBuyNote(po.getBuyNote());
        update.setUserSign(po.getUserSign());
        update.setDoctorSign(po.getDoctorSign());
        update.setDoctorComment(po.getDoctorComment());
        update.setState(OrderServiceDetailsStateEnum.IN_SERVICE.getCode());
        update(update);
    }

    /**
     * 申请作废
     *
     * @param orderServiceDetailsPO
     * @param userId
     * @throws Exception
     */
    public void applyCancellation(OrderServiceDetailsPO orderServiceDetailsPO, Long userId) throws Exception {
        Long id = DPreconditions.checkNotNull(
                orderServiceDetailsPO.getId(),
                "传入的订单服务详情ID不能为空",
                true);
        String comment = DPreconditions.checkNotNullAndEmpty(
                orderServiceDetailsPO.getComment(),
                "申请作废的理由不能为空.",
                true);
        DPreconditions.checkNotNull(
                userId,
                "用户ID不能为空.",
                true);
        HospOrderServiceDetails hospOrderServiceDetails = DPreconditions.checkNotNull(
                selectOne(id),
                "order-product-service.select-not-exist",
                true);
        HospOrderProduct hospOrderProduct =
                DPreconditions.checkNotNull(
                        orderProductService.selectOne(hospOrderServiceDetails.getOrderProductId()),
                        Language.get("order-product.select-not-exist"),
                        true);
        HospOrder hospOrder =
                DPreconditions.checkNotNull(
                        orderService.selectOne(hospOrderProduct.getOrderId()),
                        Language.get("order.select-not-exist"),
                        true);
        DPreconditions.checkState(
                hospOrder.getPayState().equals(OrderPayStateEnum.PAY.getCode()),
                Language.get("order.have-to-pay-state"),
                true);
        DPreconditions.checkState(
                hospOrderProduct.getState().equals(OrderProductStateEnum.NORMAL.getCode()),
                Language.get("order-product.not-normal-state"),
                true);
        DPreconditions.checkState(
                hospOrder.getUserId() == userId,
                "不能申请不属于自己的订单.",
                true);
        OrderServiceDetailsPO update = new OrderServiceDetailsPO();
        update.setId(id);
        update.setState(OrderServiceDetailsStateEnum.APPLY_CANCELLATION.getCode());
        update(update);
        HospOrderServiceRollback rollback = new HospOrderServiceRollback();
        rollback.setOrderServiceDetailsId(orderServiceDetailsPO.getId());
        rollback.setComment(comment);
        hospOrderServiceRollbackService.add(rollback);
    }

    /**
     * 进行作废操作
     * @param id
     * @param adminUserId
     */
    public void cancellation(Long id,Long adminUserId) throws Exception {
        HospOrderServiceDetails hospOrderServiceDetails = DPreconditions.checkNotNull(
                selectOne(id),
                "服务订单未查询到.",
                true);
        DPreconditions.checkState(
                hospOrderServiceDetails.getState() == OrderServiceDetailsStateEnum.APPLY_CANCELLATION.getCode(),
                "该服务不是申请状态订单,不能被作废",
                true);
        OrderServiceDetailsPO update = new OrderServiceDetailsPO();
        update.setId(id);
        update.setState(OrderServiceDetailsStateEnum.CANCELLATION.getCode());
        update(update);
        HospOrderServiceRollback rollback = new HospOrderServiceRollback();
        rollback.setOrderServiceDetailsId(id);
        rollback.setAdminUserId(adminUserId);
        rollback.setState(OrderServiceRollbackStateEnum.CANCELLATION.getCode());
        hospOrderServiceRollbackService.update(rollback);
    }

    @Override
    public void deleteOne(Long id) throws Exception {

    }

    @Override
    public void setStateAsInvalid(Long id) throws Exception {

    }

    @Override
    public HospOrderServiceDetails selectOne(Long id) throws Exception {
        DPreconditions.checkNotNull(id,
                Language.get("order-product.id-null"),
                true);
        return hospOrderServiceDetailsMapper.selectByPrimaryKey(id);
    }


    public HospOrderServiceDetails selectOne(OrderServiceDetailsPO po) throws Exception {
        if (po == null)
            return null;
        HospOrderServiceDetails select = po.transform(null, null);
        return hospOrderServiceDetailsMapper.selectOne(select);
    }

    @Override
    public PageInfo<HospOrderServiceDetails> select(OrderServiceDetailsPO po) throws Exception {
        if (po == null)
            return null;
        PageHelper.startPage(po.getPageNum(), po.getPageSize());
        if (StringUtil.isNotEmpty(po.getField()))
            PageHelper.orderBy(po.getField());
        HospOrderServiceDetails select = po.transform(null, null);
        return new PageInfo<>(hospOrderServiceDetailsMapper.select(select));
    }

    @Override
    public PageInfo<HospOrderServiceDetails> selectAll(PageBean pageBean) throws Exception {
        if (pageBean == null)
            pageBean = new PageBean();
        PageHelper.startPage(pageBean.getPageNum(), pageBean.getPageSize());
        if (StringUtil.isNotEmpty(pageBean.getField()))
            PageHelper.orderBy(pageBean.getField());
        return new PageInfo<>(hospOrderServiceDetailsMapper.selectAll());
    }

    @Override
    public HospOrderServiceDetails selectOneAdmin(Long id) throws Exception {
        return selectOne(id);
    }

    @Override
    public PageInfo<HospOrderServiceDetails> selectAdmin(OrderServiceDetailsPO po) throws Exception {
        return select(po);
    }

    @Override
    public PageInfo<HospOrderServiceDetails> selectAllAdmin(PageBean pageBean) throws Exception {
        return selectAll(pageBean);
    }
}
