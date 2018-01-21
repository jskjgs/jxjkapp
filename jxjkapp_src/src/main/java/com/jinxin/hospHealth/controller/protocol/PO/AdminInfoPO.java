package com.jinxin.hospHealth.controller.protocol.PO;

import com.doraemon.base.controller.bean.PageBean;
import com.doraemon.base.util.MD5Encryption;
import com.jinxin.hospHealth.dao.models.HospAdminUserInfo;
import com.jinxin.hospHealth.dao.modelsEnum.AuthorEnum;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import java.security.NoSuchAlgorithmException;
import java.util.Date;

/**
 * Created by zbs on 2018/1/16.
 */
@Data
@ApiModel("admin账号信息")
public class AdminInfoPO extends PageBean {

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
    @ApiModelProperty("权限标识 0 医生 1 主管 2 集团领导")
    private Integer author;
    @ApiModelProperty("生日")
    private Date birthday;

    public HospAdminUserInfo transform(Date createDate, Date updateDate) throws Exception {
        HospAdminUserInfo hospAdminUserInfo = new HospAdminUserInfo();
        hospAdminUserInfo.setId(this.id);
        hospAdminUserInfo.setAccount(this.account);
        hospAdminUserInfo.setNickname(this.nickname);
        hospAdminUserInfo.setAreaId(this.areaId);
        hospAdminUserInfo.setTitle(this.title);
        hospAdminUserInfo.setPassword(
                this.password != null
                        ? MD5Encryption.getMD5(this.password)
                        : null);
        hospAdminUserInfo.setHeadPortrait(this.headPortrait);
        hospAdminUserInfo.setSex(this.sex);
        hospAdminUserInfo.setPhone(this.phone);
        hospAdminUserInfo.setEmail(this.email);
        hospAdminUserInfo.setAge(this.age);
        hospAdminUserInfo.setBirthday(this.birthday);
        hospAdminUserInfo.setAuthor(
                this.author != null
                        ? AuthorEnum.getByCode(this.author).getCode() :
                        null);
        hospAdminUserInfo.setCreateDate(createDate);
        hospAdminUserInfo.setUpdateDate(updateDate);
        return hospAdminUserInfo;
    }
}
