package com.jinxin.hospHealth.controller.protocol.PO;

import com.doraemon.base.controller.bean.PageBean;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import javax.persistence.Transient;
import java.math.BigDecimal;
import java.util.List;

/**
 * Created by zbs on 2018/1/10.
 */
@Data
@ApiModel("订单信息")
public class OrderInfoPO extends PageBean{

    @ApiModelProperty("订单ID")
    private Long id;
    @ApiModelProperty("订单code")
    private String code;
    @ApiModelProperty("操作人员名称")
    private String operationName;
    @ApiModelProperty("用户ID")
    private Long userId;
    @ApiModelProperty("类型（0 服务订单 1 商品订单）")
    private Integer type;
    @ApiModelProperty("状态 (0 未支付 )")
    private Integer state;
    @ApiModelProperty("购买的商品些")
    private List<OrderProductPO> orderProductPOList;
    @ApiModelProperty("支付方式（0 微信 1 支付宝）")
    private Integer paymentType;
    @ApiModelProperty("支付金额")
    private BigDecimal amount;


    @ApiModelProperty("时间区间-开始时间  YYYY-MM-DD  HH:mm:ss")
    private String startTime;
    @ApiModelProperty("时间区间-结束时间  YYYY-MM-DD  HH:mm:ss")
    private String stopTime;
    @ApiModelProperty("多个用户ID,使用,分割")
    private String userIds;
    @ApiModelProperty("0:正常 1:禁用  99:删除")
    private Integer enable = 0;
    public static String getDefaultField() {
        return "state ASC,create_date DESC";
    }
}
