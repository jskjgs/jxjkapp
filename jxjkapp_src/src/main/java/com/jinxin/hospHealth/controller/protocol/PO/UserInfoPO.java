package com.jinxin.hospHealth.controller.protocol.PO;

import com.doraemon.base.controller.bean.PageBean;
import com.jinxin.hospHealth.dao.models.HospOrder;
import com.jinxin.hospHealth.dao.models.HospUserInfo;
import com.jinxin.hospHealth.dao.modelsEnum.SexEnum;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import java.util.Date;

/**
 * Created by zbs on 2018/1/16.
 */
@Data
@ApiModel("用户信息")
public class UserInfoPO extends PageBean {

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

    public HospUserInfo transform(Date createDate, Date updateDate, Integer isVip, String pushId) {
        HospUserInfo hospUserInfo = new HospUserInfo();
        hospUserInfo.setId(this.id);
        hospUserInfo.setName(this.name);
        hospUserInfo.setPassword(this.password);
        hospUserInfo.setHeadPortrait(this.headPortrait);
        hospUserInfo.setSex(
                this.sex != null
                        ? SexEnum.getByCode(this.sex).getCode()
                        : null);
        hospUserInfo.setPhone(this.phone);
        hospUserInfo.setEmail(this.email);
        hospUserInfo.setAge(this.age);
        hospUserInfo.setBirthday(this.birthday);
        hospUserInfo.setCreateDate(createDate);
        hospUserInfo.setUpdateDate(updateDate);
        hospUserInfo.setIsVip(isVip);
        hospUserInfo.setPushId(pushId);
        return hospUserInfo;
    }
}
