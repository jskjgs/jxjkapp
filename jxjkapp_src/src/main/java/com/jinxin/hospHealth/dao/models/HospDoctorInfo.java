package com.jinxin.hospHealth.dao.models;

import com.doraemon.base.controller.bean.PageBean;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;

@Data
@ApiModel("医生信息")
@Table(name="hosp_doctor_info")
public class HospDoctorInfo extends PageBean{
    @Id
    @ApiModelProperty("医生的ID")
    private Long id;
    @ApiModelProperty("医生的名称")
    private String name;
    @ApiModelProperty("医院院区ID")
    private Long hospAreaId;
    @ApiModelProperty("医生类别ID")
    private Long doctorTypeId;
    @ApiModelProperty("医生的头像")
    private String headPortrait;
    @ApiModelProperty("医生的性别 性别 0 女 1 男")
    private Integer sex;
    @ApiModelProperty("医生的电话")
    private String phone;
    @ApiModelProperty("医生的邮箱")
    private String email;
    @ApiModelProperty("医生的年龄")
    private Integer age;
    @ApiModelProperty("医生的生日")
    private Date birthday;
    @ApiModelProperty("医生的描述")
    private String description;


}