package com.jinxin.hospHealth.dao.models;

import com.doraemon.base.controller.bean.PageBean;
import com.jinxin.hospHealth.dao.modelsEnum.EnableEnum;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import javax.persistence.Id;
import javax.persistence.Table;
import java.math.BigDecimal;
import java.util.Date;

@Data
@ApiModel("用户余额信息")
@Table(name="hosp_user_balance")
public class HospUserBalance extends PageBean{
    @Id
    @ApiModelProperty("用户ID")
    private Long userId;
    @ApiModelProperty("余额")
    private BigDecimal balance;
    @ApiModelProperty("锁定余额")
    private BigDecimal lockBalance;
    @ApiModelProperty("金额验证MD5")
    private String checksum;
    @ApiModelProperty("创建时间")
    private Date createDate;
    @ApiModelProperty("更新时间")
    private Date updateDate;
    @ApiModelProperty("0:正常 1:禁用  99:删除")
    private Integer enable = EnableEnum.ENABLE_NORMAL.getCode();

}