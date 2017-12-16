package com.jinxin.hospHealth.dao.models;

import lombok.Data;

import javax.persistence.Id;
import javax.persistence.Table;
import java.math.BigDecimal;
import java.util.Date;

@Data
@Table(name="hosp_order_product")
public class HospOrderProduct {
    @Id
    private Long id;

    private String code;

    private Long orderId;

    private Long productSkuId;

    private String productSkuName;

    private BigDecimal productPayPrice;

    private BigDecimal productSalesPrice;

    private BigDecimal productShowPrice;

    private Integer quantity;

    private Integer serviceQuantity;

    private Date startDate;

    private Date stopDate;

    private Long gradeId;

    private Integer state;

    private Date createDate;

    private Date updateDate;


}