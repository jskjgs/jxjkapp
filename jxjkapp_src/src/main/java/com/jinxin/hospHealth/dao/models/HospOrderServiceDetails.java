package com.jinxin.hospHealth.dao.models;

import com.jinxin.hospHealth.controller.protocol.VO.*;
import com.jinxin.hospHealth.dao.modelsEnum.OrderServiceDetailsStateEnum;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;
import java.util.Date;

@Data
@ApiModel("订单服务详情")
@Table(name = "hosp_order_service_details")
public class HospOrderServiceDetails {
    @Id
    @ApiModelProperty("订单服务详情ID")
    private Long id;
    @ApiModelProperty("订单服务CODE")
    private String code;
    @ApiModelProperty("订单服务商品S-id")
    private Long orderProductId;
    @ApiModelProperty("本次使用的数量")
    private Integer qty;
    @ApiModelProperty("医院院区ID")
    private Long doctorAreaId;
    @ApiModelProperty("admin用户ID")
    private Long adminUserId;
    @ApiModelProperty("合作的医生用户ID")
    private Long associatesId;
    @ApiModelProperty("医生签字")
    private String doctorSign;
    @ApiModelProperty("用户签字")
    private String userSign;
    @ApiModelProperty("消费备注")
    private String consumptionNote;
    @ApiModelProperty("购买备注")
    private String buyNote;
    @ApiModelProperty("医生评价")
    private String doctorComment;
    @ApiModelProperty("订单评价ID")
    private Long gradeId;
    @ApiModelProperty("状态")
    private Integer state;
    @ApiModelProperty("创建时间")
    private Date createDate;
    @ApiModelProperty("更新时间")
    private Date updateDate;
    @ApiModelProperty("使用的地址")
    private String address;

    public OrderServiceDetailsVO transform(
            OrderProductVO orderProduct,
            AdminInfoVO adminInfoVO,
            AdminInfoVO associates,
            HospOrderGrade grade,
            HospArea area,
            UserInfoVO userInfoVO) {
        OrderServiceDetailsVO vo = new OrderServiceDetailsVO();
        vo.setId(this.id);
        vo.setCode(this.code);
        vo.setOrderProduct(orderProduct);
        vo.setQty(qty);
        vo.setAssociates(associates);
        vo.setArea(area);
        vo.setUserInfo(userInfoVO);
        vo.setAdminInfo(adminInfoVO);
        vo.setDoctorComment(this.doctorComment);
        vo.setGrade(grade);
        vo.setBuyNote(this.buyNote);
        vo.setConsumptionNote(this.consumptionNote);
        vo.setDoctorSign(this.doctorSign);
        vo.setUserSign(this.userSign);
        vo.setState(this.state);
        vo.setCreateDate(this.createDate);
        vo.setUpdateDate(this.updateDate);
        vo.setAddress(this.address);
        return vo;
    }

}