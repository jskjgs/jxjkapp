package com.jinxin.hospHealth.dao.models;

import com.jinxin.hospHealth.controller.protocol.PO.DoctorUserInfoPO;
import com.jinxin.hospHealth.controller.protocol.VO.DoctorUserInfoVO;
import com.jinxin.hospHealth.dao.modelsEnum.SexEnum;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;

@Data
@ApiModel("医生账户信息")
@Table(name = "hosp_doctor_user_info")
public class HospDoctorUserInfo {
    @Id
    @ApiModelProperty("用户ID")
    private Long id;
    @ApiModelProperty("姓名")
    private String name;
    @ApiModelProperty("院区ID")
    private Long areaId;
    @ApiModelProperty("密码")
    private String password;
    @ApiModelProperty("头像")
    private String headPortrait;
    @ApiModelProperty("性别 0 女 1 男")
    private Integer sex;
    @ApiModelProperty("电话")
    private String phone;
    @ApiModelProperty("邮箱")
    private String email;
    @ApiModelProperty("年龄")
    private Integer age;
    @ApiModelProperty("生日")
    private Date birthday;
    @ApiModelProperty("创建时间")
    private Date createDate;
    @ApiModelProperty("更新时间")
    private Date updateDate;


    public DoctorUserInfoVO transform(HospArea area) {
        DoctorUserInfoVO doctorUserInfoVO = new DoctorUserInfoVO();
        doctorUserInfoVO.setId(this.id);
        doctorUserInfoVO.setUpdateDate(this.updateDate);
        doctorUserInfoVO.setAge(this.age);
        doctorUserInfoVO.setBirthday(this.birthday);
        doctorUserInfoVO.setCreateDate(this.createDate);
        doctorUserInfoVO.setEmail(this.email);
        doctorUserInfoVO.setHeadPortrait(this.headPortrait);
        doctorUserInfoVO.setPhone(this.phone);
        doctorUserInfoVO.setSex(this.sex);
        doctorUserInfoVO.setArea(area);
        doctorUserInfoVO.setName(this.name);
        return doctorUserInfoVO;
    }

}