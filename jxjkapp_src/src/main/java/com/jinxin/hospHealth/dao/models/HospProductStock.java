package com.jinxin.hospHealth.dao.models;

import lombok.Data;

import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;

@Data
@Table(name="hosp_product_stock")
public class HospProductStock {
    @Id
    private Long skuId;

    private Integer stockNumber;

    private Date createDate;

    private Date updateDate;


}