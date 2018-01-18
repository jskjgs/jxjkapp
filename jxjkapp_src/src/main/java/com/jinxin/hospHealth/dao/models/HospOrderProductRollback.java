package com.jinxin.hospHealth.dao.models;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import javax.persistence.Id;
import javax.persistence.Table;
import java.math.BigDecimal;
import java.util.Date;

@Data
@ApiModel("订单商品回退申请表")
@Table(name="hosp_order_product_rollback")
public class HospOrderProductRollback {
    @Id
    @ApiModelProperty("订单商品回退申请表ID")
    private Long id;
    @ApiModelProperty("订单商品表ID")
    private Long orderProductId;
    @ApiModelProperty("院区ID")
    private Long doctorAreaId;
    @ApiModelProperty("admin操作人ID")
    private Long adminUserId;
    @ApiModelProperty("状态 ")
    private Integer state;
    @ApiModelProperty("退款金额")
    private BigDecimal money;
    @ApiModelProperty("创建时间")
    private Date createDate;
    @ApiModelProperty("更新时间")
    private Date updateDate;
    @ApiModelProperty("回退申请理由")
    private String comment;

}