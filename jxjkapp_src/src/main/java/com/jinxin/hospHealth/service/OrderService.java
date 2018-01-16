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
import com.jinxin.hospHealth.controller.protocol.VO.OrderVO;
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
public class OrderService implements BaseService<OrderVO, OrderInfoPO> {

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


    /**
     * 增加一个订单
     *
     * @param orderInfoPO
     * @return
     * @throws Exception
     */
    @Override
    @Transactional
    public OrderVO add(OrderInfoPO orderInfoPO) throws Exception {
        //校验数据
        DPreconditions.checkNotNull(userInfoService.selectOne(orderInfoPO.getUserId()),
                Language.get("user.select-not-exist"),
                true);
        DPreconditions.checkNotNull(orderInfoPO.getType(),
                Language.get("order.type-null"),
                true);
        DPreconditions.checkState(orderInfoPO.getOrderProductPOList() != null
                        && orderInfoPO.getOrderProductPOList().size() > 0,
                Language.get("order.sku-null"),
                true);
        DPreconditions.checkNotNullAndEmpty(orderInfoPO.getOperationName(),
                Language.get("order.operation-name-null"),
                true);
        //创建 order product list 对象
        List<HospOrderProduct> orderProductList = convert(orderInfoPO);
        //创建 hospOrder object 对象
        HospOrder add = new HospOrder();
        add.setCode(UUidGenerate.create());
        add.setUserId(orderInfoPO.getUserId());
        add.setType(OrderTypeEnum.getByCode(orderInfoPO.getType()).getCode());
        add.setPayState(OrderPayStateEnum.NON_PAYMENT.getCode());
        add.setOrderPayPrice(orderPayPrice(orderProductList, orderInfoPO));
        add.setOrderSalesPrice(orderSalesPrice(orderProductList));
        add.setCreateDate(new Date());
        add.setUpdateDate(new Date());
        add.setOperationName(orderInfoPO.getOperationName());
        //开始保存
        DPreconditions.checkState(hospOrderMapper.insertReturnId(add) == 1,
                Language.get("service.save-failure"),
                true);
        for (HospOrderProduct orderProduct : orderProductList) {
            orderProduct.setOrderId(add.getId());
            orderProductService.add(orderProduct);
        }
        return add.transform(null, null, null);
    }

    /**
     * 支付宝或微信回调支付
     *
     * @param orderInfoPO
     * @throws Exception
     */
    @Transactional
    public void pay(OrderInfoPO orderInfoPO) throws Exception {
        OrderVO orderVO = orderInfoPO.getCode() != null ?
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
                orderVO.getOrderPayPrice().compareTo(orderInfoPO.getAmount()) == 0,
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
        update.setId(orderVO.getId());
        update.setPayState(OrderPayStateEnum.PAY.getCode());
        update.setPaymentType(orderInfoPO.getPaymentType());
        update.setUpdateDate(new Date());
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
        OrderVO orderVO = DPreconditions.checkNotNull(
                selectOne(id),
                Language.get("order.select-not-exist"),
                true);
        DPreconditions.checkState(
                orderVO.getPayState().equals(OrderPayStateEnum.PAY.getCode()),
                Language.get("order.have-to-pay-state"),
                true);
        HospOrder update = new HospOrder();
        update.setId(id);
        update.setRefundState(OrderRefundStateEnum.APPLY.getCode());
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
    public OrderVO selectOneByCode(String code) throws Exception {
        DPreconditions.checkNotNull(code,
                Language.get("order.code-null"),
                true);
        HospOrder hospOrder = new HospOrder();
        hospOrder.setCode(code);
        HospOrder req = hospOrderMapper.selectOne(hospOrder);
        return req.transform(userInfoService.selectOne(req.getUserId()),
                hospAreaService.selectOne(req.getAreaId()),
                selectOrderProductListByOrderId(req.getId()));
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
     * 不显示 订单
     *
     * @param id
     * @throws Exception
     */
    @Transactional
    public void show(Long id) throws Exception {
        DPreconditions.checkNotNull(id,
                Language.get("order.id-null"),
                true);
        OrderVO orderVO = DPreconditions.checkNotNull(
                selectOne(id),
                Language.get("order.select-not-exist"),
                true);
        DPreconditions.checkState(
                orderVO.getPayState().equals(OrderPayStateEnum.NON_PAYMENT.getCode()),
                Language.get("order.close-order-tyep-failure"),
                true);
        HospOrder update = new HospOrder();
        update.setId(id);
        update.setDisplay(ShowEnum.DISPLAY.getCode());
        DPreconditions.checkState(
                hospOrderMapper.updateByPrimaryKeySelective(update) == 1,
                Language.get("service.update-failure"),
                true);
    }

    /**
     * 订单无效
     *
     * @param id
     * @throws Exception
     */
    @Override
    public void setStateAsInvalid(Long id) throws Exception {
        DPreconditions.checkNotNull(id,
                Language.get("order.id-null"),
                true);
        DPreconditions.checkNotNull(
                selectOne(id),
                Language.get("order.select-not-exist"),
                true);
        OrderInfoPO update = new OrderInfoPO();
        update.setId(id);
        update.setEnable(EnableEnum.ENABLE_DELETE.getCode());
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
    public OrderVO selectOne(Long id) throws Exception {
        DPreconditions.checkNotNull(id,
                Language.get("order.id-null"),
                true);
        HospOrder select = new HospOrder();
        select.setId(id);
        select.setDisplay(ShowEnum.NOT_DISPLAY.getCode());
        HospOrder req = hospOrderMapper.selectOne(select);
        return req == null
                ? null
                : req.transform(userInfoService.selectOne(req.getUserId()),
                hospAreaService.selectOne(req.getAreaId()),
                selectOrderProductListByOrderId(req.getId()));
    }

    /**
     * 根据条件查询一个订单信息
     *
     * @param hospOrder
     * @return
     * @throws Exception
     */
    public OrderVO selectOne(HospOrder hospOrder) throws Exception {
        hospOrder.setDisplay(ShowEnum.NOT_DISPLAY.getCode());
        HospOrder req = hospOrderMapper.selectOne(hospOrder);
        return req == null
                ? null
                : req.transform(userInfoService.selectOne(req.getUserId()),
                hospAreaService.selectOne(req.getAreaId()),
                selectOrderProductListByOrderId(req.getId()));
    }

    /**
     * 根据条件查询订单信息
     *
     * @param orderInfoPO
     * @return
     * @throws Exception
     */
    @Override
    public PageInfo<OrderVO> select(OrderInfoPO orderInfoPO) throws Exception {
        PageHelper.startPage(orderInfoPO.getPageNum(), orderInfoPO.getPageSize());
        if (StringUtil.isNotEmpty(orderInfoPO.getField())) {
            PageHelper.orderBy(orderInfoPO.getField());
        } else {
            PageHelper.orderBy(orderInfoPO.getDefaultField());
        }
        orderInfoPO.setEnable(EnableEnum.ENABLE_NORMAL.getCode());
        List<HospOrder> hospOrderList = hospOrderMapper.selectByExampleByCustom(orderInfoPO);
        List<OrderVO> req = new ArrayList<>();
        for (HospOrder hospOrder : hospOrderList) {
            req.add(hospOrder.transform(userInfoService.selectOne(hospOrder.getUserId()),
                    hospAreaService.selectOne(hospOrder.getAreaId()),
                    selectOrderProductListByOrderId(hospOrder.getId())));
        }
        return new PageInfo(req);
    }

    /**
     * 查询全部订单
     *
     * @param pageBean
     * @return
     * @throws Exception
     */
    @Override
    public PageInfo selectAll(PageBean pageBean) throws Exception {
        if (pageBean == null)
            pageBean = new PageBean();
        PageHelper.startPage(pageBean.getPageNum(), pageBean.getPageSize());
        if (StringUtil.isNotEmpty(pageBean.getField())) {
            PageHelper.orderBy(pageBean.getField());
        } else {
            PageHelper.orderBy(OrderInfoPO.getDefaultField());
        }
        HospOrder select = new HospOrder();
        select.setDisplay(ShowEnum.NOT_DISPLAY.getCode());
        List<HospOrder> hospOrderList = hospOrderMapper.select(select);
        List<OrderVO> req = new ArrayList<>();
        for (HospOrder hospOrder : hospOrderList) {
            req.add(hospOrder.transform(userInfoService.selectOne(hospOrder.getUserId()),
                    hospAreaService.selectOne(hospOrder.getAreaId()),
                    selectOrderProductListByOrderId(hospOrder.getId())));
        }
        return new PageInfo(req);
    }

    /**
     * 查询一个订单信息 --- admin
     *
     * @param id
     * @return
     * @throws Exception
     */
    @Override
    public OrderVO selectOneAdmin(Long id) throws Exception {
        DPreconditions.checkNotNull(id,
                Language.get("order.id-null"),
                true);
        HospOrder req = hospOrderMapper.selectByPrimaryKey(id);
        return req == null
                ? null
                : req.transform(userInfoService.selectOne(req.getUserId()),
                hospAreaService.selectOne(req.getAreaId()),
                selectOrderProductListByOrderId(req.getId()));
    }

    /**
     * 根据条件查询订单信息 --- admin
     *
     * @param orderInfoPO
     * @return
     * @throws Exception
     */
    @Override
    public PageInfo<OrderVO> selectAdmin(OrderInfoPO orderInfoPO) throws Exception {
        PageHelper.startPage(orderInfoPO.getPageNum(), orderInfoPO.getPageSize());
        if (StringUtil.isNotEmpty(orderInfoPO.getField())) {
            PageHelper.orderBy(orderInfoPO.getField());
        } else {
            PageHelper.orderBy(orderInfoPO.getDefaultField());
        }
        orderInfoPO.setEnable(null);
        List<HospOrder> hospOrderList = hospOrderMapper.selectByExampleByCustom(orderInfoPO);
        List<OrderVO> req = new ArrayList<>();
        for (HospOrder hospOrder : hospOrderList) {
            req.add(hospOrder.transform(userInfoService.selectOne(hospOrder.getUserId()),
                    hospAreaService.selectOne(hospOrder.getAreaId()),
                    selectOrderProductListByOrderId(hospOrder.getId())));
        }
        return new PageInfo(req);
    }


    /**
     * 查询全部订单信息 --- admin
     *
     * @param pageBean
     * @return
     * @throws Exception
     */
    @Override
    public PageInfo selectAllAdmin(PageBean pageBean) throws Exception {
        if (pageBean == null)
            pageBean = new PageBean();
        PageHelper.startPage(pageBean.getPageNum(), pageBean.getPageSize());
        if (StringUtil.isNotEmpty(pageBean.getField())) {
            PageHelper.orderBy(pageBean.getField());
        } else {
            PageHelper.orderBy(OrderInfoPO.getDefaultField());
        }
        List<HospOrder> hospOrderList = hospOrderMapper.selectAll();
        List<OrderVO> req = new ArrayList<>();
        for (HospOrder hospOrder : hospOrderList) {
            req.add(hospOrder.transform(userInfoService.selectOne(hospOrder.getUserId()),
                    hospAreaService.selectOne(hospOrder.getAreaId()),
                    selectOrderProductListByOrderId(hospOrder.getId())));
        }
        return new PageInfo(req);
    }

    /**
     * 订单支付价格
     *
     * @param list
     * @return
     */
    private BigDecimal orderPayPrice(List<HospOrderProduct> list, OrderInfoPO orderInfoPO) {
        //如果是服务订单,并且是手工录入的价格,支持这样的直接录入价格模式
        if (OrderTypeEnum.SERVICE.equals(orderInfoPO.getType())
                && orderInfoPO.getAmount() != null
                && orderInfoPO.getAmount().compareTo(BigDecimal.ZERO) > 0) {
            return orderInfoPO.getAmount();
        }
        BigDecimal payPrice = BigDecimal.ZERO;
        for (HospOrderProduct hospOrderProduct : list)
            payPrice = payPrice.add(hospOrderProduct.getProductPayPrice());
        return payPrice;
    }

    /**
     * 订单销售价格
     *
     * @param list
     * @return
     */
    private BigDecimal orderSalesPrice(List<HospOrderProduct> list) {
        BigDecimal salesPrice = BigDecimal.ZERO;
        for (HospOrderProduct hospOrderProduct : list) {
            salesPrice = salesPrice.add(hospOrderProduct.getProductSalesPrice());
        }
        return salesPrice;
    }


    /**
     * orderInfoPO 转成 List<HospOrderProduct>
     * 注意 :  List<HospOrderProduct> 对象没有orderId 等信息
     *
     * @param orderInfoPO
     * @return
     */
    private List<HospOrderProduct> convert(OrderInfoPO orderInfoPO) {
        DPreconditions.checkNotNull(orderInfoPO, "需要被转换的orderInfoPo为空");
        List<HospOrderProduct> hospOrderProductList = new ArrayList<>();
        for (OrderProductPO orderProductPO : orderInfoPO.getOrderProductPOList()) {
            HospProductSku hospProductSku = DPreconditions.checkNotNull(
                    skuService.selectOne(orderProductPO.getSkuId()),
                    Language.get("sku.select-not-exist"),
                    true);
            HospOrderProduct orderProduct = new HospOrderProduct();
            orderProduct.setProductSkuId(hospProductSku.getId());
            //todo : 没有计算优惠
            orderProduct.setProductPayPrice(
                    DBigDecimal.multiply(hospProductSku.getSalesPrice(), orderProductPO.getQua()));
            orderProduct.setProductSalesPrice(hospProductSku.getSalesPrice());
            orderProduct.setProductShowPrice(hospProductSku.getShowPrice());
            orderProduct.setQuantity(orderProductPO.getQua());
            //如果是服务的话,计算出服务的次数
            if (orderInfoPO.getType().equals(OrderTypeEnum.SERVICE))
                orderProduct.setServiceQuantity(orderProductPO.getQua() * hospProductSku.getServiceQuantity());
            hospOrderProductList.add(orderProduct);
        }
        return hospOrderProductList;
    }

    /**
     * 通过order补充order product信息
     *
     * @param id
     * @return
     * @throws Exception
     */
    private List<HospOrderProduct> selectOrderProductListByOrderId(Long id) throws Exception {
        DPreconditions.checkNotNull(id,
                Language.get("order.id-null"),
                true);
        PageInfo<HospOrderProduct> pageInfo = DPreconditions.checkNotNull(
                orderProductService.selectByOrderId(id),
                Language.get("order.order-product-null"),
                true);
        return pageInfo.getList();
    }

}
