package com.jinxin.hospHealth.controller.protocol.PO;

import com.doraemon.base.controller.bean.PageBean;
import com.jinxin.hospHealth.dao.models.HospOrderProduct;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import java.math.BigDecimal;
import java.util.Date;

/**
 * Created by zbs on 2018/1/10.
 */
@Data
@ApiModel("订单商品信息")
public class OrderProductPO extends PageBean{

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
    @ApiModelProperty("购买的数量")
    private Integer quantity;
    @ApiModelProperty("如果是服务订单，服务的总次数")
    private Integer serviceQuantity;
    @ApiModelProperty("开始使用的时间")
    private Date startDate;
    @ApiModelProperty("过期的时间")
    private Date stopDate;
    @ApiModelProperty("订单评价ID")
    private Long gradeId;
    @ApiModelProperty("回退申请理由")
    private String comment;
    @ApiModelProperty("退款金额")
    private BigDecimal rollbackMoney;
    @ApiModelProperty("状态 0 正常 1 申请作废 2 已作废")
    private Integer state;

    public HospOrderProduct transform(Date createDate,Date updateDate) {
        HospOrderProduct hospOrderProduct = new HospOrderProduct();
        hospOrderProduct.setId(this.id);
        hospOrderProduct.setCode(this.code);
        hospOrderProduct.setOrderId(this.orderId);
        hospOrderProduct.setProductSkuId(this.productSkuId);
        hospOrderProduct.setProductSkuName(this.productSkuName);
        hospOrderProduct.setProductPayPrice(this.productPayPrice);
        hospOrderProduct.setQuantity(this.quantity);
        hospOrderProduct.setServiceQuantity(this.serviceQuantity);
        hospOrderProduct.setStartDate(this.startDate);
        hospOrderProduct.setStopDate(this.stopDate);
        hospOrderProduct.setGradeId(this.gradeId);
        hospOrderProduct.setState(this.state);
        hospOrderProduct.setCreateDate(createDate);
        hospOrderProduct.setUpdateDate(updateDate);
        return hospOrderProduct;
    }
}
