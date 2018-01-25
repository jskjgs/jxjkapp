package com.jinxin.hospHealth.service;

import com.doraemon.base.controller.bean.PageBean;
import com.doraemon.base.exceptions.ShowExceptions;
import com.doraemon.base.guava.DPreconditions;
import com.doraemon.base.language.Language;
import com.doraemon.base.redis.RedisOperation;
import com.doraemon.base.util.DBigDecimal;
import com.doraemon.base.util.UUidGenerate;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.github.pagehelper.util.StringUtil;
import com.jinxin.hospHealth.controller.protocol.PO.OrderInfoPO;
import com.jinxin.hospHealth.controller.protocol.PO.OrderProductPO;
import com.jinxin.hospHealth.controller.protocol.PO.OrderServiceDetailsPO;
import com.jinxin.hospHealth.dao.mapper.HospOrderMapper;
import com.jinxin.hospHealth.dao.models.*;
import com.jinxin.hospHealth.dao.modelsEnum.*;
import lombok.extern.log4j.Log4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.util.*;

/**
 * Created by zbs on 2018/1/10.
 */
@Service
@Log4j
public class OrderService implements BaseService<HospOrder, OrderInfoPO> {

    @Autowired
    HospOrderMapper hospOrderMapper;
    @Autowired
    UserInfoService userInfoService;
    @Autowired
    SkuService skuService;
    @Autowired
    HospAreaService hospAreaService;
    @Autowired
    OrderProductService orderProductService;
    @Autowired
    RedisOperation redisOperation;
    @Autowired
    UserBalanceService userBalanceService;
    @Autowired
    OrderServiceDetailsService orderServiceDetailsService;
    @Autowired
    PatientInfoService patientInfoService;


    /**
     * 增加一个订单
     *
     * @param orderInfoPO
     * @return
     * @throws Exception
     */
    @Override
    @Transactional
    public HospOrder add(OrderInfoPO orderInfoPO) throws Exception {
        HospOrder add = checkOutOrder(orderInfoPO);
        //开始保存
        DPreconditions.checkState(hospOrderMapper.insertSelectiveReturnId(add) == 1,
                Language.get("service.save-failure"),
                true);
        for (OrderProductPO orderProductPO : orderInfoPO.getOrderProductPOList()) {
            orderProductPO.setOrderId(add.getId());
            orderProductService.add(orderProductPO);
        }
        return add;
    }

    /**
     * 检查订单,计算价格
     *
     * @param orderInfoPO
     */
    public HospOrder checkOutOrder(OrderInfoPO orderInfoPO) {
        //校验数据
        DPreconditions.checkState(
                orderInfoPO.getId() == null,
                "新增订单,id不能填写.",
                true);
        HospPatientInfo hospPatientInfo = DPreconditions.checkNotNull(
                patientInfoService.selectOneByIdCard(orderInfoPO.getIdCard()),
                "没有查询到就诊人信息",
                true);
//        DPreconditions.checkNotNull(
//                userInfoService.selectOne(orderInfoPO.getUserId()),
//                Language.get("user.select-not-exist"),
//                true);
        DPreconditions.checkNotNull(
                orderInfoPO.getType(),
                Language.get("order.type-null"),
                true);
        DPreconditions.checkState(
                orderInfoPO.getOrderProductPOList() != null
                        && orderInfoPO.getOrderProductPOList().size() > 0,
                Language.get("order.sku-null"),
                true);
        DPreconditions.checkNotNull(
                orderInfoPO.getAdminUserId(),
                Language.get("order.operation-name-null"),
                true);
        //创建 order product list 对象
        List<OrderProductPO> orderProductPOList = orderInfoPO.getOrderProductPOList();
        replenish(
                orderProductPOList,
                orderInfoPO.getType().equals(OrderTypeEnum.SERVICE.getCode())
                        ? true
                        : false);
        //创建 hospOrder object 对象
        orderInfoPO.setCode(UUidGenerate.create());
        orderInfoPO.setPayState(OrderPayStateEnum.NON_PAYMENT.getCode());
        orderInfoPO.setUserId(hospPatientInfo.getUserId());
        HospOrder add = orderInfoPO.transform(
                orderPayPrice(orderInfoPO),
                orderSalesPrice(orderProductPOList),
                null,
                new Date(),
                new Date(),
                null,
                ShowEnum.DISPLAY.getCode());
        add.setPatientInfoId(hospPatientInfo.getId());
        add.setAdminUserId(orderInfoPO.getAdminUserId());
        return add;
    }

    /**
     * 支付宝或微信回调支付
     *
     * @param orderInfoPO
     * @throws Exception
     */
    @Transactional
    public void pay(OrderInfoPO orderInfoPO) throws Exception {
        HospOrder order = orderInfoPO.getCode() != null ?
                DPreconditions.checkNotNull(
                        selectOneByCode(orderInfoPO.getCode()),
                        Language.get("order.select-not-exist"),
                        true) :
                DPreconditions.checkNotNull(
                        selectOne(orderInfoPO.getId()),
                        Language.get("order.select-not-exist"),
                        true);
        DPreconditions.checkNotNull(orderInfoPO.getPaymentType(),
                Language.get("order.payment-type-null"),
                true);
        DPreconditions.checkState(orderInfoPO.getAmount() != null
                        && orderInfoPO.getAmount().compareTo(BigDecimal.ZERO) > 0,
                Language.get("order.amount-null"),
                true);
        DPreconditions.checkState(
                order.getOrderPayPrice().compareTo(orderInfoPO.getAmount()) == 0,
                Language.get("order.pay-price-not-equal"),
                true);
        OrderPayTypeEnum.getByCode(orderInfoPO.getPaymentType());
        HospOrder update = new HospOrder();
        if (orderInfoPO.getPaymentType().equals(OrderPayTypeEnum.WECHAT.getCode())) {
            //验证对应的返回是否是恶意请求
        }
        if (orderInfoPO.getPaymentType().equals(OrderPayTypeEnum.ALIPAY.getCode())) {
            //验证对应的返回是否是恶意请求
        }
        //如果是余额支付
        if (orderInfoPO.getPaymentType().equals(OrderPayTypeEnum.BALANCE.getCode())) {
            HospUserBalance userBalance = new HospUserBalance();
            userBalance.setUserId(orderInfoPO.getUserId());
            userBalance.setBalance(DBigDecimal.upsideDown(orderInfoPO.getAmount()));
            userBalanceService.update(userBalance);
        }
        //如果是his支付
        if (orderInfoPO.getPaymentType().equals(OrderPayTypeEnum.HIS.getCode())) {
            DPreconditions.checkNotNullAndEmpty(
                    orderInfoPO.getPaymentCode(),
                    "订单回执不能为空.",
                    true);
            //todo : 去his中验证回执
        }
        update.setPaymentCode(orderInfoPO.getPaymentCode());
        update.setId(order.getId());
        update.setPayState(OrderPayStateEnum.PAY.getCode());
        update.setPaymentType(orderInfoPO.getPaymentType());
        update.setUpdateDate(new Date());
        update.setPaymentType(orderInfoPO.getPaymentType());
        DPreconditions.checkState(hospOrderMapper.updateByPrimaryKeySelective(update) == 1,
                Language.get("service.update-failure"),
                true);
    }

    /**
     * 订单申请退款
     *
     * @param id
     * @throws Exception
     */
    public void refund(Long id) throws Exception {
        DPreconditions.checkNotNull(id,
                Language.get("order.id-null"),
                true);
        HospOrder order = DPreconditions.checkNotNull(
                selectOne(id),
                Language.get("order.select-not-exist"),
                true);
        DPreconditions.checkState(
                order.getPayState().equals(OrderPayStateEnum.PAY.getCode()),
                Language.get("order.have-to-pay-state"),
                true);
        HospOrder update = new HospOrder();
        update.setId(id);
        update.setPayState(OrderPayStateEnum.APPLY.getCode());
        DPreconditions.checkState(
                hospOrderMapper.updateByPrimaryKeySelective(update) == 1,
                Language.get("service.update-failure"),
                true);
    }

    /**
     * 退款完毕接口
     *
     * @param id
     * @throws Exception
     */
    public void refundOver(Long id) throws Exception {
        DPreconditions.checkNotNull(id,
                Language.get("order.id-null"),
                true);
        HospOrder order = DPreconditions.checkNotNull(
                selectOne(id),
                Language.get("order.select-not-exist"),
                true);
        DPreconditions.checkState(
                order.getPayState().equals(OrderPayStateEnum.PAY.getCode())
                        || order.getPayState().equals(OrderPayStateEnum.APPLY.getCode()),
                Language.get("order.have-to-pay-state"),
                true);
        HospOrder update = new HospOrder();
        update.setId(id);
        update.setPayState(OrderPayStateEnum.FINISH.getCode());
        DPreconditions.checkState(
                hospOrderMapper.updateByPrimaryKeySelective(update) == 1,
                Language.get("service.update-failure"),
                true);
    }

    /**
     * 根据code查询订单信息
     *
     * @param code
     * @throws Exception
     **/
    public HospOrder selectOneByCode(String code) throws Exception {
        DPreconditions.checkNotNull(code,
                Language.get("order.code-null"),
                true);
        HospOrder hospOrder = new HospOrder();
        hospOrder.setCode(code);
        HospOrder req = hospOrderMapper.selectOne(hospOrder);
        return req;
    }

    @Override
    public void update(OrderInfoPO orderInfoPO) throws Exception {
        throw new ShowExceptions(Language.get("service.invalid-method"));
    }

    @Override
    public void deleteOne(Long id) throws Exception {
        throw new ShowExceptions(Language.get("service.invalid-method"));
    }

    /**
     * 查询order详情,通过服务订单详情ID
     *
     * @param orderProductServiceDetailsId
     * @return
     */
    public HospOrder selectOneByOrderProductServiceDetailsId(Long orderProductServiceDetailsId) {
        DPreconditions.checkNotNull(
                orderProductServiceDetailsId,
                "服务订单详情ID不能为空.",
                true);
        return hospOrderMapper.selectByOrderProductServiceId(orderProductServiceDetailsId);
    }


    /**
     * 订单不显示
     *
     * @param id
     * @throws Exception
     */
    @Override
    public void setStateAsInvalid(Long id) throws Exception {
        DPreconditions.checkNotNull(id,
                Language.get("order.id-null"),
                true);
        HospOrder order = DPreconditions.checkNotNull(
                selectOne(id),
                Language.get("order.select-not-exist"),
                true);
        DPreconditions.checkState(
                order.getPayState().equals(OrderPayStateEnum.NON_PAYMENT.getCode())
                        || order.getPayState().equals(OrderPayStateEnum.FINISH.getCode()),
                Language.get("order.close-order-tyep-failure"),
                true);
        OrderInfoPO update = new OrderInfoPO();
        update.setId(id);
        update.setDisplay(ShowEnum.NOT_DISPLAY.getCode());
        update(update);
    }

    /**
     * 根据ID查询订单信息
     *
     * @param id
     * @return
     * @throws Exception
     */
    @Override
    public HospOrder selectOne(Long id) throws Exception {
        DPreconditions.checkNotNull(id,
                Language.get("order.id-null"),
                true);
        HospOrder select = new HospOrder();
        select.setId(id);
        select.setDisplay(ShowEnum.DISPLAY.getCode());
        return hospOrderMapper.selectOne(select);
    }

    /**
     * 根据条件查询一个订单信息
     *
     * @param hospOrder
     * @return
     * @throws Exception
     */
    public HospOrder selectOne(HospOrder hospOrder) throws Exception {
        hospOrder.setDisplay(ShowEnum.DISPLAY.getCode());
        return hospOrderMapper.selectOne(hospOrder);
    }

    /**
     * 根据条件查询订单信息
     *
     * @param orderInfoPO
     * @return
     * @throws Exception
     */
    @Override
    public PageInfo<HospOrder> select(OrderInfoPO orderInfoPO) throws Exception {
        if (orderInfoPO == null)
            return null;
        PageHelper.startPage(orderInfoPO.getPageNum(), orderInfoPO.getPageSize());
        if (StringUtil.isNotEmpty(orderInfoPO.getField())) {
            PageHelper.orderBy(orderInfoPO.getField());
        }
        return new PageInfo(hospOrderMapper.selectByExampleByCustom(orderInfoPO));
    }

    /**
     * 查询全部订单
     *
     * @param pageBean
     * @return
     * @throws Exception
     */
    @Override
    public PageInfo<HospOrder> selectAll(PageBean pageBean) throws Exception {
        if (pageBean == null)
            pageBean = new PageBean();
        PageHelper.startPage(pageBean.getPageNum(), pageBean.getPageSize());
        if (StringUtil.isNotEmpty(pageBean.getField())) {
            PageHelper.orderBy(pageBean.getField());
        }
        HospOrder select = new HospOrder();
        select.setDisplay(ShowEnum.DISPLAY.getCode());
        return new PageInfo(hospOrderMapper.select(select));
    }

    /**
     * 查询一个订单信息 --- admin
     *
     * @param id
     * @return
     * @throws Exception
     */
    @Override
    public HospOrder selectOneAdmin(Long id) throws Exception {
        DPreconditions.checkNotNull(id,
                Language.get("order.id-null"),
                true);
        return hospOrderMapper.selectByPrimaryKey(id);
    }

    /**
     * 根据条件查询订单信息 --- admin
     *
     * @param orderInfoPO
     * @return
     * @throws Exception
     */
    @Override
    public PageInfo<HospOrder> selectAdmin(OrderInfoPO orderInfoPO) throws Exception {
        if (orderInfoPO == null)
            return null;
        PageHelper.startPage(orderInfoPO.getPageNum(), orderInfoPO.getPageSize());
        if (StringUtil.isNotEmpty(orderInfoPO.getField())) {
            PageHelper.orderBy(orderInfoPO.getField());
        }
        orderInfoPO.setDisplay(null);
        return new PageInfo(hospOrderMapper.selectByExampleByCustom(orderInfoPO));
    }


    /**
     * 查询全部订单信息 --- admin
     *
     * @param pageBean
     * @return
     * @throws Exception
     */
    @Override
    public PageInfo<HospOrder> selectAllAdmin(PageBean pageBean) throws Exception {
        if (pageBean == null)
            pageBean = new PageBean();
        PageHelper.startPage(pageBean.getPageNum(), pageBean.getPageSize());
        if (StringUtil.isNotEmpty(pageBean.getField())) {
            PageHelper.orderBy(pageBean.getField());
        }
        return new PageInfo(hospOrderMapper.selectAll());
    }

    /**
     * 计算订单支付价格
     *
     * @param orderInfoPO
     * @return
     */
    public BigDecimal orderPayPrice(OrderInfoPO orderInfoPO) {
        //如果是服务订单,并且是手工录入的价格,支持这样的直接录入价格模式
        if (OrderTypeEnum.SERVICE.equals(orderInfoPO.getType())
                && orderInfoPO.getAmount() != null
                && orderInfoPO.getAmount().compareTo(BigDecimal.ZERO) > 0) {
            return orderInfoPO.getAmount();
        }
        BigDecimal payPrice = BigDecimal.ZERO;
        for (OrderProductPO orderProductPO : orderInfoPO.getOrderProductPOList())
            payPrice = payPrice.add(orderProductPO.getProductPayPrice());
        return payPrice;
    }

    /**
     * 计算订单销售价格
     *
     * @param list
     * @return
     */
    public BigDecimal orderSalesPrice(List<OrderProductPO> list) {
        BigDecimal salesPrice = BigDecimal.ZERO;
        for (OrderProductPO orderProductPO : list) {
            HospProductSku sku = DPreconditions.checkNotNull(
                    skuService.selectOne(orderProductPO.getProductSkuId()),
                    Language.get("sku.select-not-exist"),
                    true);
            DPreconditions.checkNotNull(
                    orderProductPO.getQuantity(),
                    Language.get("order-product.quantity-null"),
                    true);
            salesPrice = salesPrice.add(
                    DBigDecimal.multiply(sku.getSalesPrice(), orderProductPO.getQuantity()));
        }
        return salesPrice;
    }


    /**
     * orderInfoPO 转成 List<HospOrderProduct>
     * 注意 :  List<HospOrderProduct> 对象没有orderId 等信息
     *
     * @param orderProductPOList 订单商品list
     * @param serviceType        是否是服务订单
     * @return
     */
    public void replenish(List<OrderProductPO> orderProductPOList, boolean serviceType) {
        DPreconditions.checkNotNull(
                orderProductPOList,
                "orderProduct List为空");
        for (OrderProductPO orderProductPO : orderProductPOList) {
            HospProductSku hospProductSku = DPreconditions.checkNotNull(
                    skuService.selectOne(orderProductPO.getProductSkuId()),
                    Language.get("sku.select-not-exist"),
                    true);
            DPreconditions.checkNotNull(
                    orderProductPO.getQuantity(),
                    Language.get("order-product.quantity-null"),
                    true);
            orderProductPO.setProductSkuId(hospProductSku.getId());
            //todo : 没有计算优惠
            orderProductPO.setProductPayPrice(
                    DBigDecimal.multiply(
                            hospProductSku.getSalesPrice(),
                            orderProductPO.getQuantity()));
            //如果是服务的话,计算出服务的次数
            if (serviceType)
                orderProductPO.setServiceQuantity(orderProductPO.getQuantity() * hospProductSku.getServiceQuantity());
        }
    }

}
