package com.jinxin.hospHealth.dao.models;

import lombok.Data;

import javax.persistence.Id;
import javax.persistence.Table;

@Data
@Table(name="hosp_product_type")
public class HospProductType {
    @Id
    private Long id;

    private String name;

    private String images;

    private String description;

    private Integer parentProductTypeId;


}