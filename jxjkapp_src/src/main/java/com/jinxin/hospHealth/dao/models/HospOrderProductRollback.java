package com.jinxin.hospHealth.dao.models;

import lombok.Data;

import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;

@Data
@Table(name="hosp_order_product_rollback")
public class HospOrderProductRollback {
    @Id
    private Long id;

    private Long orderProductId;

    private Integer state;

    private Date createDate;

    private Date updateDate;

    private String comment;

}