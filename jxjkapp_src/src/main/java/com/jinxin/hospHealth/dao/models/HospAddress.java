package com.jinxin.hospHealth.dao.models;

import com.doraemon.base.controller.bean.PageBean;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import javax.persistence.Id;
import javax.persistence.Table;


@Data
@ApiModel("用户地址信息")
@Table(name="hosp_address")
public class HospAddress extends PageBean{
    @Id
    @ApiModelProperty("用户地址ID")
    private Long id;
    @ApiModelProperty("用户ID")
    private Long userId;
    @ApiModelProperty("联系电话")
    private String phone;
    @ApiModelProperty("详细地址")
    private String userAddress;

}