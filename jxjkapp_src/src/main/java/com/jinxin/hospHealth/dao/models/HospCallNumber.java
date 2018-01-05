package com.jinxin.hospHealth.dao.models;

import com.doraemon.base.controller.bean.PageBean;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;
import java.util.Date;

@Data
@ApiModel("排队叫号信息")
@Table(name="hosp_call_number")
public class HospCallNumber extends PageBean{
    @Id
    @ApiModelProperty("id")
    private Long id;
    @ApiModelProperty("用户ID")
    private Long userId;
    @ApiModelProperty("状态(0 : 等待  1 : 使用  2 : 过号)")
    private Integer state;
    @ApiModelProperty("创建时间")
    private Date createDate;
    @ApiModelProperty("更新时间")
    private Date updateDate;

    @Transient
    @ApiModelProperty("时间区间-开始时间")
    private Date startTime;
    @Transient
    @ApiModelProperty("时间区间-结束时间")
    private Date stopTime;
    @Transient
    @ApiModelProperty("多个用户ID,使用,分割")
    private String userIds;
}