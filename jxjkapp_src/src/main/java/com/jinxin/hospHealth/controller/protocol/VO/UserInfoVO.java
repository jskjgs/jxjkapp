package com.jinxin.hospHealth.controller.protocol.VO;

import com.jinxin.hospHealth.dao.models.HospUserInfo;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import java.util.Date;

/**
 * Created by zbs on 2017/12/25.
 */
@Data
@ApiModel("用户信息")
public class UserInfoVO {

    @ApiModelProperty("用户ID")
    private Long id;
    @ApiModelProperty("姓名")
    private String name;
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

    public UserInfoVO(HospUserInfo hospUserInfo){
        if (hospUserInfo == null)
            return;
        this.id = hospUserInfo.getId();
        this.name = hospUserInfo.getName();
        this.headPortrait = hospUserInfo.getHeadPortrait();
        this.sex = hospUserInfo.getSex();
        this.phone = hospUserInfo.getPhone();
        this.email = hospUserInfo.getEmail();
        this.age = hospUserInfo.getAge();
        this.birthday = hospUserInfo.getBirthday();
        this.createDate = hospUserInfo.getCreateDate();
        this.updateDate = hospUserInfo.getUpdateDate();
    }
}
