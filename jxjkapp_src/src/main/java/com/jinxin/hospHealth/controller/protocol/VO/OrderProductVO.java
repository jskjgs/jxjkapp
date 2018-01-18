package com.jinxin.hospHealth.controller.protocol.VO;

import com.jinxin.hospHealth.dao.models.HospOrderGrade;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import java.math.BigDecimal;
import java.util.Date;

/**
 * Created by zbs on 2018/1/17.
 */

@Data
@ApiModel("订单商品")
public class OrderProductVO {

    @ApiModelProperty("订单商品ID")
    private Long id;
    @ApiModelProperty("订单商品code")
    private String code;
    @ApiModelProperty("订单")
    private OrderVO order;
    @ApiModelProperty("商品SKU")
    private ProductSkuVO productSku;
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
    @ApiModelProperty("如果是服务订单，服务的总次数")
    private Integer serviceQuantity;
    @ApiModelProperty("开始使用的时间")
    private Date startDate;
    @ApiModelProperty("过期的时间")
    private Date stopDate;
    @ApiModelProperty("订单评价")
    private HospOrderGrade grade;
    @ApiModelProperty("状态 0 正常 1 申请退款 2 退款完毕")
    private String state;
    @ApiModelProperty("创建时间")
    private Date createDate;
    @ApiModelProperty("更新时间")
    private Date updateDate;
    @ApiModelProperty("如果是服务订单,剩余的数量")
    private int remainingServiceNumber;
}
