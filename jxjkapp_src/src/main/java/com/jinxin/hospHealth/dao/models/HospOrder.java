package com.jinxin.hospHealth.dao.models;

import com.jinxin.hospHealth.controller.protocol.VO.AdminInfoVO;
import com.jinxin.hospHealth.controller.protocol.VO.OrderProductVO;
import com.jinxin.hospHealth.controller.protocol.VO.OrderVO;
import com.jinxin.hospHealth.controller.protocol.VO.UserInfoVO;
import com.jinxin.hospHealth.dao.modelsEnum.OrderPayStateEnum;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import javax.persistence.Id;
import javax.persistence.Table;
import java.math.BigDecimal;
import java.util.Date;
import java.util.List;

@Data
@ApiModel("订单")
@Table(name = "hosp_order")
public class HospOrder {
    @Id
    @ApiModelProperty("订单ID")
    private Long id;
    @ApiModelProperty("订单编号")
    private String code;
    @ApiModelProperty("Admin操作人员ID")
    private Long adminUserId;
    @ApiModelProperty("用户ID")
    private Long userId;
    @ApiModelProperty("就诊人ID")
    private Long patientInfoId;
    @ApiModelProperty("类型（0 服务订单 1 商品订单）")
    private Integer type;
    @ApiModelProperty("支付状态 (0 未支付订单/1 已支付订单/2 退款申请中/3 退款完毕)")
    private Integer payState;
    @ApiModelProperty("订单支付总价格（促销优惠后的支付总价格）")
    private BigDecimal orderPayPrice;
    @ApiModelProperty("订单销售总价格（没参加促销的价格）")
    private BigDecimal orderSalesPrice;
    @ApiModelProperty("支付方式（0 微信 1 支付宝）")
    private Integer paymentType;
    @ApiModelProperty("支付成功回执编号")
    private String paymentCode;
    @ApiModelProperty("创建时间")
    private Date createDate;
    @ApiModelProperty("更新时间")
    private Date updateDate;
    @ApiModelProperty("折扣倍数")
    private BigDecimal discount;
    @ApiModelProperty("备注")
    private String comment;
    @ApiModelProperty("订单参加的全部活动，按逗号分隔")
    private String promotionIds;
    @ApiModelProperty("是否显示 0:显示 1:隐藏")
    private Integer display;

    public OrderVO transform(
            UserInfoVO userInfoVO,
            List<OrderProductVO> orderProductVOList,
            AdminInfoVO adminInfoVO,
            HospPatientInfo patientInfo) {
        OrderVO orderVO = new OrderVO();
        orderVO.setId(this.id);
        orderVO.setAdminInfo(adminInfoVO);
        orderVO.setCode(this.code);
        orderVO.setPatientInfo(patientInfo);
        orderVO.setCreateDate(this.createDate);
        orderVO.setOrderPayPrice(this.orderPayPrice);
        orderVO.setOrderSalesPrice(this.orderSalesPrice);
        orderVO.setPaymentCode(this.paymentCode);
        orderVO.setPaymentType(this.paymentType);
        orderVO.setPromotionIds(this.promotionIds);
        orderVO.setPayState(this.payState);
        orderVO.setType(this.type);
        orderVO.setUpdateDate(this.updateDate);
        orderVO.setUser(userInfoVO);
        orderVO.setDiscount(this.discount);
        orderVO.setComment(this.comment);
        orderVO.setOrderProductList(orderProductVOList);
        return orderVO;
    }

}