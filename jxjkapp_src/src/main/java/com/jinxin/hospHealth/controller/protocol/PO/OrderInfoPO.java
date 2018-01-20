package com.jinxin.hospHealth.controller.protocol.PO;

import com.doraemon.base.controller.bean.PageBean;
import com.jinxin.hospHealth.dao.models.HospOrder;
import com.jinxin.hospHealth.dao.models.HospOrderServiceDetails;
import com.jinxin.hospHealth.dao.modelsEnum.OrderPayTypeEnum;
import com.jinxin.hospHealth.dao.modelsEnum.OrderRefundStateEnum;
import com.jinxin.hospHealth.dao.modelsEnum.OrderTypeEnum;
import com.jinxin.hospHealth.dao.modelsEnum.ShowEnum;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import javax.persistence.Transient;
import java.math.BigDecimal;
import java.util.Date;
import java.util.List;

/**
 * Created by zbs on 2018/1/10.
 */
@Data
@ApiModel("订单信息")
public class OrderInfoPO extends PageBean {

    @ApiModelProperty("订单ID")
    private Long id;
    @ApiModelProperty("订单code")
    private String code;
    @ApiModelProperty("操作人员名称")
    private String operationName;
    @ApiModelProperty("用户ID")
    private Long userId;
    @ApiModelProperty("院区ID")
    private Long areaId;
    @ApiModelProperty("类型（0 服务订单 1 商品订单）")
    private Integer type;
    @ApiModelProperty("支付状态 (0 已支付订单 1 未支付 )")
    private Integer payState;
    @ApiModelProperty("退款状态 (0 退款申请中 1 退款完毕 )")
    private Integer refundState;
    @ApiModelProperty("购买的商品些")
    private List<OrderProductPO> orderProductPOList;
    @ApiModelProperty("支付方式（0 微信 1 支付宝）")
    private Integer paymentType;
    @ApiModelProperty("支付金额")
    private BigDecimal amount;
    @ApiModelProperty("是否显示 0:显示 1:隐藏")
    private Integer display;

    @ApiModelProperty("订单创建时间-开始时间  YYYY-MM-DD  HH:mm:ss")
    private String startTime;
    @ApiModelProperty("订单创建时间-结束时间  YYYY-MM-DD  HH:mm:ss")
    private String stopTime;
    @ApiModelProperty("多个用户ID,使用,分割")
    private String userIds;

    /**
     * 默认排序,如果没有传入排序的话
     *
     * @return
     */
    public String getField() {
        if (this.field == null || "".equals(this.field)) {
            return "create_date DESC";
        }
        return this.field;
    }

    public HospOrder transform(BigDecimal orderPayPrice,
                               BigDecimal orderSalesPrice,
                               String paymentCode,
                               Date createDate,
                               Date updateDate,
                               String promotionIds,
                               Integer display) {
        HospOrder hospOrder = new HospOrder();
        hospOrder.setId(this.id);
        hospOrder.setCode(this.code);
        hospOrder.setOperationName(this.operationName);
        hospOrder.setUserId(this.userId);
        hospOrder.setAreaId(this.areaId);
        hospOrder.setType(
                this.type != null
                        ? OrderTypeEnum.getByCode(this.type).getCode()
                        : null);
        hospOrder.setPayState(
                this.payState != null
                        ? OrderPayTypeEnum.getByCode(this.payState).getCode()
                        : null);
        hospOrder.setRefundState(
                this.refundState != null
                        ? OrderRefundStateEnum.getByCode(this.refundState).getCode()
                        : null);
        hospOrder.setOrderPayPrice(orderPayPrice);
        hospOrder.setOrderSalesPrice(orderSalesPrice);
        hospOrder.setPaymentType(
                this.paymentType != null
                        ? OrderPayTypeEnum.getByCode(this.paymentType).getCode()
                        : null);
        hospOrder.setPaymentCode(paymentCode);
        hospOrder.setCreateDate(createDate);
        hospOrder.setUpdateDate(updateDate);
        hospOrder.setPromotionIds(promotionIds);
        hospOrder.setDisplay(
                display != null
                        ? ShowEnum.getByCode(display).getCode()
                        : null);
        return hospOrder;
    }

}
