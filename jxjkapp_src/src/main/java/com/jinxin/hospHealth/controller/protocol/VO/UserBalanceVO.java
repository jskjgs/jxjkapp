package com.jinxin.hospHealth.controller.protocol.VO;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import java.math.BigDecimal;

/**
 * Created by zbs on 2018/1/4.
 */
@Data
@ApiModel("用户余额信息")
public class UserBalanceVO {

    @ApiModelProperty("用户ID")
    private Long userId;
    @ApiModelProperty("余额")
    private BigDecimal balance;
    @ApiModelProperty("锁定余额")
    private BigDecimal lockBalance;

    public UserBalanceVO() {}

    public UserBalanceVO(Long userId,BigDecimal balance,BigDecimal lockBalance) {
        this.userId = userId;
        this.balance = balance;
        this.lockBalance = lockBalance;
    }

}
