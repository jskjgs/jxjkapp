package com.jinxin.hospHealth.dao.models;

import com.doraemon.base.controller.bean.PageBean;
import com.jinxin.hospHealth.controller.protocol.VO.UserInfoVO;
import com.jinxin.hospHealth.dao.modelsEnum.SexEnum;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;

@Data
@ApiModel("用户信息")
@Table(name="hosp_user_info")
public class HospUserInfo extends PageBean{
    @Id
    @ApiModelProperty("用户ID")
    private Long id;
    @ApiModelProperty("姓名")
    private String name;
    @ApiModelProperty("密码")
    private String password;
    @ApiModelProperty("为了推送做的唯一识别用户的id")
    private String pushId;
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
    @ApiModelProperty("是否是vip")
    private Integer isVip;
    @ApiModelProperty("创建时间")
    private Date createDate;
    @ApiModelProperty("更新时间")
    private Date updateDate;

    public UserInfoVO transform(){
        UserInfoVO userInfoVO = new UserInfoVO();
        userInfoVO.setId(this.id);
        userInfoVO.setName(this.name);
        userInfoVO.setHeadPortrait(this.headPortrait);
        userInfoVO.setSex(
                this.sex != null
                        ? SexEnum.getByCode(this.sex).getDesc()
                        : null);
        userInfoVO.setPhone(this.phone);
        userInfoVO.setEmail(this.email);
        userInfoVO.setAge(this.age);
        userInfoVO.setBirthday(this.birthday);
        userInfoVO.setCreateDate(this.createDate);
        userInfoVO.setUpdateDate(this.updateDate);
        userInfoVO.setIsVip(this.isVip);
        return userInfoVO;
    }

}