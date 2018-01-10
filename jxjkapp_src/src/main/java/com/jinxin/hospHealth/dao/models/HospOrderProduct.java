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

@Data
@ApiModel("订单商品")
@Table(name="hosp_order_product")
public class HospOrderProduct extends PageBean{
    @Id
    @ApiModelProperty("订单商品ID")
    private Long id;
    @ApiModelProperty("订单商品code")
    private String code;
    @ApiModelProperty("订单ID")
    private Long orderId;
    @ApiModelProperty("商品SKU id")
    private Long productSkuId;
    @ApiModelProperty("商品SKU名称")
    private String productSkuName;
    @ApiModelProperty("商品支付价格（促销优惠后的支付价格）")
    private BigDecimal productPayPrice;
    @ApiModelProperty("商品销售价格（商品没参加促销的价格）")
    private BigDecimal productSalesPrice;
    @ApiModelProperty("商品显示价格")
    private BigDecimal productShowPrice;
    @ApiModelProperty("购买的数量")
    private Integer quantity;
    @ApiModelProperty("如果购买的是服务，服务的总次数")
    private Integer serviceQuantity;
    @ApiModelProperty("开始使用的时间")
    private Date startDate;
    @ApiModelProperty("过期的时间")
    private Date stopDate;
    @ApiModelProperty("订单评价ID")
    private Long gradeId;
    @ApiModelProperty("状态 ")
    private Integer state;
    @ApiModelProperty("创建时间")
    private Date createDate;
    @ApiModelProperty("更新时间")
    private Date updateDate;

    @Transient
    @ApiModelProperty("商品详情")
    private HospProductSku hospProductSku;

}