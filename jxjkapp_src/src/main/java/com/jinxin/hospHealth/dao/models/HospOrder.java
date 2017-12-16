package com.jinxin.hospHealth.dao.models;

import io.swagger.annotations.ApiModel;
import lombok.Data;

import javax.persistence.Id;
import javax.persistence.Table;
import java.math.BigDecimal;
import java.util.Date;

@Data
@ApiModel("")
@Table(name="hosp_order")
public class HospOrder {
    @Id
    private Long id;

    private String code;

    private Long userId;

    private Integer type;

    private Integer state;

    private BigDecimal orderPayPrice;

    private BigDecimal orderSalesPrice;

    private Integer paymentType;

    private String paymentCode;

    private Date createDate;

    private Date updateDate;

    private String promotionIds;

}