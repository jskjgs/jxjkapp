package com.jinxin.hospHealth.controller.protocol.PO;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

/**
 * Created by zbs on 2018/1/14.
 */
@Data
@ApiModel("排队叫号系统")
public class CallNumberPO {

    @ApiModelProperty("用户ID")
    private Long userID;
}
