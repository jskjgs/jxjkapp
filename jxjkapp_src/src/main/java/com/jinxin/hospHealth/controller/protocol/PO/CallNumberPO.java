package com.jinxin.hospHealth.controller.protocol.PO;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

/**
 * Created by zbs on 2018/1/21.
 */
@Data
@ApiModel("排队叫号信息")
public class CallNumberPO {

    @ApiModelProperty("手机号码")
    String phone;
    @ApiModelProperty("预约订单商品ID")
    Long orderProductId;
    @ApiModelProperty("排号")
    Long number;

}
