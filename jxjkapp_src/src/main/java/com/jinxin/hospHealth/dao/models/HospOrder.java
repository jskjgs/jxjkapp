package com.jinxin.hospHealth.dao.models;

import com.doraemon.base.controller.bean.PageBean;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;
import java.math.BigDecimal;
import java.util.Date;
import java.util.List;

@Data
@ApiModel("订单")
@Table(name="hosp_order")
public class HospOrder extends PageBean{
    @Id
    @ApiModelProperty("订单ID")
    private Long id;
    @ApiModelProperty("订单编号")
    private String code;
    @ApiModelProperty("用户ID")
    private Long userId;
    @ApiModelProperty("类型（0 服务订单 1 商品订单）")
    private Integer type;
    @ApiModelProperty("状态 (0 已支付订单 1 未支付 )")
    private Integer state;
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
    @ApiModelProperty("订单参加的全部活动，按逗号分隔")
    private String promotionIds;
    @ApiModelProperty("0:正常 1:禁用  99:删除")
    private Integer enable = 0;

    @Transient
    @ApiModelProperty("订单中商品些")
    private List<HospOrderProduct> hospOrderProductList;
}