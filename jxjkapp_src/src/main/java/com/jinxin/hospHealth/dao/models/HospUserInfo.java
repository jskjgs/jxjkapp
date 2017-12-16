package com.jinxin.hospHealth.dao.models;

import lombok.Data;

import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;

@Data
@Table(name="hosp_user_info")
public class HospUserInfo {
    @Id
    private Long id;

    private String name;

    private String password;

    private String pushId;

    private String headPortrait;

    private Integer sex;

    private String phone;

    private String email;

    private Integer age;

    private Date birthday;

    private Date createDate;

    private Date updateDate;


}