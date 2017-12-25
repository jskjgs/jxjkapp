package com.jinxin.hospHealth.dao.models;

import com.doraemon.base.controller.bean.PageBean;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import javax.persistence.Id;
import javax.persistence.Table;

@Data
@ApiModel("医生类型")
@Table(name="hosp_doctor_type")
public class HospDoctorType extends PageBean {
    @Id
    @ApiModelProperty("医生类型的ID")
    private Long id;
    @ApiModelProperty("医生类型的名称")
    private String name;
    @ApiModelProperty("医生类型的说明")
    private String description;


}