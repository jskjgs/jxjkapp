package com.jinxin.hospHealth.dao.models;

import com.doraemon.base.controller.bean.PageBean;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;

@Data
@ApiModel("banner信息")
@Table(name="hosp_banner")
public class HospBanner extends PageBean{

    @Id
    @ApiModelProperty("banner的ID")
    private Long id;
    @ApiModelProperty("banner的名称")
    private String name;
    @ApiModelProperty("banner 图片路径")
    private String bannerUrl;
    @ApiModelProperty("跳转链接")
    private String jumpUrl;
    @ApiModelProperty("排序")
    private Integer orderNumber;
    @ApiModelProperty("显示和隐藏的标志  0显示，1隐藏")
    private Integer display;
}