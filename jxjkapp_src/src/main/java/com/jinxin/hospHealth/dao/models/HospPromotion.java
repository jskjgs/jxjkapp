package com.jinxin.hospHealth.dao.models;

import lombok.Data;

import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;

@Data
@Table(name="hosp_promotion")
public class HospPromotion {
    @Id
    private Long id;

    private String name;

    private Date startDate;

    private Date expireDate;

    private String type;

    private String productTypes;

    private Date createDate;

    private Date updateDate;

    private Integer enable;

}