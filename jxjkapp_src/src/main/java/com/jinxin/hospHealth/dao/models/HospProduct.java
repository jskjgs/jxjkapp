package com.jinxin.hospHealth.dao.models;

import lombok.Data;

import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;

@Data
@Table(name="hosp_product")
public class HospProduct {
    @Id
    private Long id;

    private String name;

    private Long productTypeId;

    private Integer sortNumber;

    private Long defaultSkuId;

    private String images;

    private String description;

    private String information;

    private Date createDate;

    private Date updateDate;

    private Integer enable;


}