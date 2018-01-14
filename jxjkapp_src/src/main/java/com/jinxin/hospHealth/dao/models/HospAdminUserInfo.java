package com.jinxin.hospHealth.dao.models;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;

@Data
@ApiModel("admin账户信息")
@Table(name="hosp_admin_user_info")
public class HospAdminUserInfo {
    @Id
    @ApiModelProperty("用户ID")
    private Long id;
    @ApiModelProperty("姓名")
    private String name;
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

}