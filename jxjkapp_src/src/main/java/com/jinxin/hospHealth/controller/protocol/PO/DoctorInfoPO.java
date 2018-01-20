package com.jinxin.hospHealth.controller.protocol.PO;

import com.doraemon.base.controller.bean.PageBean;
import com.jinxin.hospHealth.dao.models.HospArea;
import com.jinxin.hospHealth.dao.models.HospDoctorInfo;
import com.jinxin.hospHealth.dao.models.HospDoctorType;
import com.jinxin.hospHealth.dao.modelsEnum.SexEnum;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import java.util.Date;

/**
 * Created by zbs on 2018/1/8.
 */
@Data
@ApiModel("医生信息_传入的参数")
public class DoctorInfoPO extends PageBean{

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

    public HospDoctorInfo transform(){
        HospDoctorInfo hospDoctorInfo = new HospDoctorInfo();
        hospDoctorInfo.setId(this.getId());
        hospDoctorInfo.setName(this.getName());
        hospDoctorInfo.setHospAreaId(this.getHospAreaId());
        hospDoctorInfo.setDoctorTypeId(this.getDoctorTypeId());
        hospDoctorInfo.setHeadPortrait(this.getHeadPortrait());
        hospDoctorInfo.setSex(SexEnum.getSexEnumByCode(this.getSex()).getCode());
        hospDoctorInfo.setPhone(this.getPhone());
        hospDoctorInfo.setEmail(this.email);
        hospDoctorInfo.setAge(this.getAge());
        hospDoctorInfo.setBirthday(this.getBirthday());
        hospDoctorInfo.setDescription(this.getDescription());
        return hospDoctorInfo;
    }
}
