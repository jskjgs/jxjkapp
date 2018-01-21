package com.jinxin.hospHealth.controller.protocol.VO;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import java.util.Date;

/**
 * Created by zbs on 2018/1/21.
 */
@Data
@ApiModel("服务订单使用回退申请表")
public class OrderServiceRollbackVO {

    @ApiModelProperty("服务订单使用详情表")
    private OrderServiceDetailsVO orderServiceDetails;
    @ApiModelProperty("状态 0 申请中  1 已退款")
    private Integer state;
    @ApiModelProperty("操作的admin用户ID")
    private AdminInfoVO adminUser;
    @ApiModelProperty("创建时间")
    private Date createDate;
    @ApiModelProperty("更新时间")
    private Date updateDate;
    @ApiModelProperty("回退申请理由")
    private String comment;



}
