package com.jinxin.hospHealth.controller.protocol.VO;

import com.jinxin.hospHealth.dao.models.HospArea;
import com.jinxin.hospHealth.dao.models.HospDoctorInfo;
import com.jinxin.hospHealth.dao.models.HospDoctorType;
import com.jinxin.hospHealth.service.HospAreaService;
import com.jinxin.hospHealth.service.DoctorTypeService;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Configurable;

import java.util.Date;

/**
 * Created by zbs on 2017/12/25.
 */
@Data
@ApiModel("医生信息")
public class DoctorInfoVO {

    @ApiModelProperty("医生的ID")
    private Long id;
    @ApiModelProperty("医生的名称")
    private String name;
    @ApiModelProperty("医院院区")
    private HospArea hospArea;
    @ApiModelProperty("医生类别")
    private HospDoctorType doctorType;
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

    @Autowired
    DoctorTypeService doctorTypeService;
    @Autowired
    HospAreaService doctorAreaService;

    public DoctorInfoVO(HospDoctorInfo hospDoctorInfo){
        if(hospDoctorInfo == null)
            return;
        this.id = hospDoctorInfo.getId();
        this.name = hospDoctorInfo.getName();
        this.headPortrait = hospDoctorInfo.getHeadPortrait();
        this.sex = hospDoctorInfo.getSex();
        this.phone = hospDoctorInfo.getPhone();
        this.email = hospDoctorInfo.getEmail();
        this.age = hospDoctorInfo.getAge();
        this.birthday = hospDoctorInfo.getBirthday();
        this.description = hospDoctorInfo.getDescription();
    }
}
