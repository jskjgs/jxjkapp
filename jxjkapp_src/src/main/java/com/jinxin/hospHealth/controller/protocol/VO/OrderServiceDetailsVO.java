package com.jinxin.hospHealth.controller.protocol.VO;

import com.jinxin.hospHealth.dao.models.*;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import java.util.Date;

/**
 * Created by zbs on 2018/1/17.
 */
@Data
@ApiModel("订单服务详情")
public class OrderServiceDetailsVO {

    @ApiModelProperty("订单服务详情ID")
    private Long id;
    @ApiModelProperty("订单服务CODE")
    private String code;
    @ApiModelProperty("订单服务的商品SKU-id")
    private OrderProductVO orderProduct;
    @ApiModelProperty("本次使用的数量")
    private Integer qty;
    @ApiModelProperty("医院院区")
    private HospArea area;
    @ApiModelProperty("医生端用户信息")
    private DoctorUserInfoVO doctorUserInfo;
    @ApiModelProperty("合作的医生用户")
    private DoctorUserInfoVO associates;
    @ApiModelProperty("医生评价")
    private String doctorComment;
    @ApiModelProperty("订单评价")
    private HospOrderGrade grade;
    @ApiModelProperty("医生签字")
    private String doctorSign;
    @ApiModelProperty("用户签字")
    private String userSign;
    @ApiModelProperty("消费备注")
    private String consumptionNote;
    @ApiModelProperty("购买备注")
    private String buyNote;
    @ApiModelProperty("状态")
    private String state;
    @ApiModelProperty("创建时间")
    private Date createDate;
    @ApiModelProperty("更新时间")
    private Date updateDate;
    @ApiModelProperty("使用的地址")
    private String address;
}
