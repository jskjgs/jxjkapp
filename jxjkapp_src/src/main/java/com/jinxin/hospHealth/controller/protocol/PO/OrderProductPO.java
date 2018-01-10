package com.jinxin.hospHealth.controller.protocol.PO;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

/**
 * Created by zbs on 2018/1/10.
 */
@Data
@ApiModel("订单商品信息")
public class OrderProductPO {

    @ApiModelProperty("skuId")
    private Long skuId;
    @ApiModelProperty("数量")
    private Integer qua;
}
