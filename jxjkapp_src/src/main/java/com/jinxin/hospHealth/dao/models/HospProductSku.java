package com.jinxin.hospHealth.dao.models;

import lombok.Data;

import javax.persistence.Id;
import javax.persistence.Table;
import java.math.BigDecimal;
import java.util.Date;

@Data
@Table(name="hosp_product_sku")
public class HospProductSku {

    @Id
    private Long id;

    private Long productId;

    private String name;

    private String images;

    private String description;

    private Integer serviceQuantity;

    private BigDecimal salesPrice;

    private BigDecimal showPrice;

    private Date createDate;

    private Date updateDate;

    private Integer enable;


}