package com.jinxin.hospHealth.controller.protocol.VO;

import com.jinxin.hospHealth.dao.models.HospArea;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import java.util.Date;

/**
 * Created by zbs on 2018/1/15.
 */
@Data
@ApiModel("admin账户信息")
public class AdminInfoVO {
    @ApiModelProperty("用户ID")
    private Long id;
    @ApiModelProperty("姓名")
    private String name;
    @ApiModelProperty("院区信息")
    private HospArea area;
    @ApiModelProperty("头像")
    private String headPortrait;
    @ApiModelProperty("性别 0 女/1 男")
    private Integer sex;
    @ApiModelProperty("电话")
    private String phone;
    @ApiModelProperty("邮箱")
    private String email;
    @ApiModelProperty("年龄")
    private Integer age;
    @ApiModelProperty("生日")
    private Date birthday;
    @ApiModelProperty("权限")
    private String permission;
    @ApiModelProperty("创建时间")
    private Date createDate;
    @ApiModelProperty("更新时间")
    private Date updateDate;
    @ApiModelProperty("token")
    private String token;

}
