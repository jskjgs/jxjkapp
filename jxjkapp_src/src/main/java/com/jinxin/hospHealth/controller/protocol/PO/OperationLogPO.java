package com.jinxin.hospHealth.controller.protocol.PO;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;


/**
 * Created by zbs on 2018/1/31.
 */
@Data
@ApiModel("操作日志")
public class OperationLogPO {

    @ApiModelProperty("操作日志ID")
    private Long id;
    @ApiModelProperty("用户ID/手机号/身份证号码/就诊卡号")
    private String userText;
    @ApiModelProperty("操作人ID/操作人admin账号")
    private String operationText;
    @ApiModelProperty("院区ID")
    private Long areaId;
    @ApiModelProperty("操作模块 topUp 用户充值 / payOrder 订单支付 / updatePhone 修改手机号码")
    private String module;
}
