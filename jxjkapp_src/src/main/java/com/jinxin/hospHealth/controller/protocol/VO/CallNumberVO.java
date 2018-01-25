package com.jinxin.hospHealth.controller.protocol.VO;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

/**
 * Created by zbs on 2018/1/21.
 */
@Data
@ApiModel("排队叫号信息")
public class CallNumberVO {

    @ApiModelProperty("用户信息")
    UserInfoVO userInfo;
    @ApiModelProperty("订单商品信息")
    OrderProductVO orderProduct;
    @ApiModelProperty("排号")
    Long number;
    @ApiModelProperty("前面的人数")
    Integer beforeNumber;
}
