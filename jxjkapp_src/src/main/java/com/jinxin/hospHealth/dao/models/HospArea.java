package com.jinxin.hospHealth.dao.models;

import io.swagger.annotations.ApiModel;
import lombok.Data;

import javax.persistence.Id;
import javax.persistence.Table;

@Data
@ApiModel("医院院区信息")
@Table(name="hosp_area")
public class HospArea {
    @Id
    private Long id;

    private String name;

    private String description;

}