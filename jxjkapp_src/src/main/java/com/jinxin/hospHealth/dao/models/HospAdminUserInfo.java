package com.jinxin.hospHealth.dao.models;

import com.jinxin.hospHealth.controller.protocol.VO.AdminInfoVO;
import com.jinxin.hospHealth.controller.protocol.VO.OrderVO;
import com.jinxin.hospHealth.dao.modelsEnum.AuthorEnum;
import com.jinxin.hospHealth.dao.modelsEnum.SexEnum;
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
    @ApiModelProperty("账号")
    private String account;
    @ApiModelProperty("昵称")
    private String nickname;
    @ApiModelProperty("院区ID")
    private Long areaId;
    @ApiModelProperty("职位")
    private String title;
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
    @ApiModelProperty("权限")
    private Integer author;
    @ApiModelProperty("创建时间")
    private Date createDate;
    @ApiModelProperty("更新时间")
    private Date updateDate;
    @ApiModelProperty("删除标识 0:正常 1:禁用  99:删除")
    private Integer enable;


    public AdminInfoVO transform(HospArea hospArea){
        AdminInfoVO adminInfoVO = new AdminInfoVO();
        adminInfoVO.setId(this.id);
        adminInfoVO.setArea(hospArea);
        adminInfoVO.setUpdateDate(this.updateDate);
        adminInfoVO.setAge(this.age);
        adminInfoVO.setTitle(this.title);
        adminInfoVO.setBirthday(this.birthday);
        adminInfoVO.setCreateDate(this.createDate);
        adminInfoVO.setEmail(this.email);
        adminInfoVO.setHeadPortrait(this.headPortrait);
        adminInfoVO.setAuthor(
                this.author != null
                        ? AuthorEnum.getByCode(this.author).getDesc()
                        : null);
        adminInfoVO.setAuthorId(
                this.author != null
                        ? AuthorEnum.getByCode(this.author).getCode()
                        : null);
        adminInfoVO.setPhone(this.phone);
        adminInfoVO.setSex(this.sex);
        adminInfoVO.setAccount(this.account);
        adminInfoVO.setNickname(this.nickname);
        return adminInfoVO;
    }

}