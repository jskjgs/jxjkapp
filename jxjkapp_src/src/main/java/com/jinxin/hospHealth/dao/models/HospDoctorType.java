package com.jinxin.hospHealth.dao.models;

import io.swagger.annotations.ApiModel;
import lombok.Data;

import javax.persistence.Id;
import javax.persistence.Table;

@Data
@ApiModel("医生类型")
@Table(name="hosp_doctor_type")
public class HospDoctorType {
    @Id
    private Long id;

    private String name;

    private String description;


}