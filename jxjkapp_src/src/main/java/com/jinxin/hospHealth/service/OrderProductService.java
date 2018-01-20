package com.jinxin.hospHealth.service;

import com.doraemon.base.controller.bean.PageBean;
import com.doraemon.base.exceptions.ShowExceptions;
import com.doraemon.base.guava.DPreconditions;
import com.doraemon.base.language.Language;
import com.doraemon.base.util.DBigDecimal;
import com.doraemon.base.util.UUidGenerate;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.jinxin.hospHealth.controller.protocol.PO.OrderInfoPO;
import com.jinxin.hospHealth.controller.protocol.PO.OrderProductPO;
import com.jinxin.hospHealth.dao.mapper.HospOrderProductMapper;
import com.github.pagehelper.util.StringUtil;
import com.jinxin.hospHealth.dao.mapper.HospOrderProductRollbackMapper;
import com.jinxin.hospHealth.dao.models.*;
import com.jinxin.hospHealth.dao.modelsEnum.OrderProductRollbackStateEnum;
import com.jinxin.hospHealth.dao.modelsEnum.OrderProductStateEnum;
import com.jinxin.hospHealth.dao.modelsEnum.OrderTypeEnum;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.net.IDN;
import java.util.Date;
import java.util.List;

/**
 * 订单商品详情相关接口
 * Created by zbs on 2018/1/10.
 */
@Service
public class OrderProductService implements BaseService<HospOrderProduct, OrderProductPO> {

    @Autowired
    HospOrderProductMapper hospOrderProductMapper;
    @Autowired
    OrderServiceDetailsService orderServiceDetailsService;
    @Autowired
    HospOrderProductRollbackMapper hospOrderProductRollbackMapper;
    @Autowired
    SkuService skuService;
    @Autowired
    OrderService orderService;
    @Autowired
    OrderProductRollbackService orderProductRollbackService;
    @Autowired
    UserBalanceService userBalanceService;
    @Autowired
    UserInfoService userInfoService;

    /**
     * 增加订单商品详情
     *
     * @param orderProductPO
     * @return
     * @throws Exception
     */
    @Override
    @Transactional
    public HospOrderProduct add(OrderProductPO orderProductPO) throws Exception {
        DPreconditions.checkNotNull(orderProductPO.getOrderId(),
                Language.get("order-product.order-id-null"),
                true);
        HospProductSku sku = DPreconditions.checkNotNull(
                skuService.selectOne(orderProductPO.getProductSkuId()),
                Language.get("order-product.sku-not-exist"),
                true);
        DPreconditions.checkNotNull(orderProductPO.getProductPayPrice(),
                Language.get("order-product.pay-price-null"),
                true);
        DPreconditions.checkState(orderProductPO.getQuantity() != null
                        && orderProductPO.getQuantity() > 0,
                Language.get("order-product.quantity-null"),
                true);
        orderProductPO.setCode(UUidGenerate.create());
        orderProductPO.setProductSkuName(sku.getName());
        orderProductPO.setState(OrderProductStateEnum.NORMAL.getCode());
        HospOrderProduct add = orderProductPO.transform(new Date(), new Date());
        DPreconditions.checkNotNull(hospOrderProductMapper.insertReturnId(add),
                Language.get("service.save-failure"),
                true);
        return add;
    }

    /**
     *  退款,由admin端发起
     * @param id
     * @param money
     * @param comment
     * @param adminUserId
     * @throws Exception
     */
    @Transactional
    public void refundment(Long id, BigDecimal money, String comment, Long adminUserId) throws Exception {
        HospOrderProduct hospOrderProduct = DPreconditions.checkNotNull(
                selectOne(id),
                Language.get("order-product.select-not-exist"),
                true);
        DPreconditions.checkState(hospOrderProduct.getProductPayPrice().compareTo(money) >= 0,
                "退款金额不能大于支付金额.",
                true);
        DPreconditions.checkState(
                orderServiceDetailsService.remainingServiceNumber(id) > 0,
                "该服务次数已经用完,不能申请退款",
                true);
        //创建一条记录信息
        HospOrderProductRollback add = new HospOrderProductRollback();
        add.setMoney(money);
        add.setComment(comment);
        add.setAdminUserId(adminUserId);
        add.setDoctorAreaId(1L);
        add.setOrderProductId(id);
        add.setState(OrderProductRollbackStateEnum.CANCELLATION.getCode());
        orderProductRollbackService.add(add);
        //更新order product 的标识
        OrderProductPO orderProductPO = new OrderProductPO();
        orderProductPO.setId(id);
        orderProductPO.setState(OrderProductStateEnum.CANCELLATION.getCode());
        update(orderProductPO);
        //退款
        HospUserBalance hospUserBalance = new HospUserBalance();
        hospUserBalance.setUserId(1L);
        hospUserBalance.setBalance(money);
        userBalanceService.update(hospUserBalance);

    }

    /**
     * 更新订单商品详情
     *
     * @param orderProductPO
     * @throws Exception
     */
    @Override
    public void update(OrderProductPO orderProductPO) throws Exception {
        if (orderProductPO == null)
            return;
        DPreconditions.checkNotNull(orderProductPO.getId(),
                Language.get("order-product.id-null"),
                true);
        DPreconditions.checkState(
                hospOrderProductMapper.updateByPrimaryKeySelective(
                        orderProductPO.transform(null, new Date())) == 1,
                Language.get("service.update-failure"),
                true);
    }


    @Override
    public void deleteOne(Long id) throws Exception {
        throw new ShowExceptions(Language.get("service.invalid-method"));
    }

    @Override
    public void setStateAsInvalid(Long id) throws Exception {
        throw new ShowExceptions(Language.get("service.invalid-method"));
    }

    /**
     * 查询一条订单商品信息
     *
     * @param id
     * @return
     * @throws Exception
     */
    @Override
    public HospOrderProduct selectOne(Long id) throws Exception {
        DPreconditions.checkNotNull(id,
                Language.get("order.id-null"),
                true);
        return hospOrderProductMapper.selectByPrimaryKey(id);
    }

    /**
     * 查询 订单商品 信息
     *
     * @param orderProductPO
     * @return
     * @throws Exception
     */
    @Override
    public PageInfo<HospOrderProduct> select(OrderProductPO orderProductPO) throws Exception {
        if(orderProductPO == null)
            return null;
        PageHelper.startPage(orderProductPO.getPageNum(), orderProductPO.getPageSize());
        if (StringUtil.isNotEmpty(orderProductPO.getField())) {
            PageHelper.orderBy(orderProductPO.getField());
        }
        HospOrderProduct select = orderProductPO.transform(null, null);
        return new PageInfo(hospOrderProductMapper.select(select));
    }

    /**
     * 通过Order 查询 order product 信息
     *
     * @param id
     * @return
     * @throws Exception
     */
    public PageInfo<HospOrderProduct> selectByOrderId(Long id) throws Exception {
        DPreconditions.checkNotNull(id,
                Language.get("order-product.order-id-null"),
                true);
        HospOrderProduct select = new HospOrderProduct();
        select.setOrderId(id);
        return new PageInfo(hospOrderProductMapper.select(select));
    }

    /**
     * 查询全部商品订单信息
     *
     * @param pageBean
     * @return
     * @throws Exception
     */
    @Override
    public PageInfo<HospOrderProduct> selectAll(PageBean pageBean) throws Exception {
        if (pageBean == null)
            pageBean = new PageBean();
        PageHelper.startPage(pageBean.getPageNum(), pageBean.getPageSize());
        if (StringUtil.isNotEmpty(pageBean.getField())) {
            PageHelper.orderBy(pageBean.getField());
        }
        return new PageInfo(hospOrderProductMapper.selectAll());
    }

    /**
     * 查询一条商品订单信息 ---admin
     *
     * @param id
     * @return
     * @throws Exception
     */
    @Override
    public HospOrderProduct selectOneAdmin(Long id) throws Exception {
        return selectOne(id);
    }

    /**
     * 查询商品订单信息 ---admin
     *
     * @param hospOrderProduct
     * @return
     * @throws Exception
     */
    @Override
    public PageInfo<HospOrderProduct> selectAdmin(OrderProductPO hospOrderProduct) throws Exception {
        return select(hospOrderProduct);
    }

    /**
     * 查询全部商品订单信息 --- admin
     *
     * @param pageBean
     * @return
     * @throws Exception
     */
    @Override
    public PageInfo<HospOrderProduct> selectAllAdmin(PageBean pageBean) throws Exception {
        if (pageBean == null)
            pageBean = new PageBean();
        return selectAll(pageBean);
    }
}
