package com.jinxin.hospHealth.dao.models;

import io.swagger.annotations.ApiModel;
import lombok.Data;

import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;

@Data
@ApiModel("医生信息")
@Table(name="hosp_doctor_info")
public class HospDoctorInfo {
    @Id
    private Long id;

    private String name;

    private Long hospAreaId;

    private Long doctorTypeId;

    private String headPortrait;

    private Integer sex;

    private String phone;

    private String email;

    private Integer age;

    private Date birthday;

    private String description;


}