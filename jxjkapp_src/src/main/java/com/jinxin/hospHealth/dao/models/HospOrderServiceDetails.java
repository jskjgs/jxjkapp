package com.jinxin.hospHealth.dao.models;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;

@Data
@ApiModel("订单服务详情")
@Table(name="hosp_order_service_details")
public class HospOrderServiceDetails {
    @Id
    @ApiModelProperty("订单服务详情ID")
    private Long id;
    @ApiModelProperty("订单服务CODE")
    private String code;
    @ApiModelProperty("订单服务的商品SKU-id")
    private Long orderProductId;
    @ApiModelProperty("数量")
    private Integer qty;

    private Long doctorId;

    private String doctorName;

    private String doctorComment;

    private Long gradeId;

    private Integer state;

    private Date createDate;

    private Date updateDate;

    private String address;


}