package com.jinxin.hospHealth.controller.protocol.PO;

import com.doraemon.base.controller.bean.PageBean;
import com.jinxin.hospHealth.controller.protocol.VO.DoctorInfoVO;
import com.jinxin.hospHealth.controller.protocol.VO.OrderServiceDetailsVO;
import com.jinxin.hospHealth.controller.protocol.VO.ProductSkuVO;
import com.jinxin.hospHealth.dao.models.HospOrderGrade;
import com.jinxin.hospHealth.dao.models.HospOrderServiceDetails;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import java.util.Date;

/**
 * Created by zbs on 2018/1/17.
 */
@Data
@ApiModel("订单服务详情")
public class OrderServiceDetailsPO extends PageBean{

    @ApiModelProperty("订单服务详情ID")
    private Long id;
    @ApiModelProperty("订单服务CODE")
    private String code;
    @ApiModelProperty("订单服务的商品SKU-id")
    private Long orderProductId;
    @ApiModelProperty("本次使用的数量")
    private Integer qty;
    @ApiModelProperty("医院院区ID")
    private Long doctorAreaId;
    @ApiModelProperty("医生ID")
    private Long doctorUserId;
    @ApiModelProperty("医生评价")
    private String doctorComment;
    @ApiModelProperty("订单评价ID")
    private Long gradeId;
    @ApiModelProperty("状态")
    private Integer state;
    @ApiModelProperty("使用的地址")
    private String address;


    public HospOrderServiceDetails transform(Date createDate,Date updateDate) {
        HospOrderServiceDetails hospOrderServiceDetails = new HospOrderServiceDetails();
        hospOrderServiceDetails.setId(this.id);
        hospOrderServiceDetails.setCode(this.code);
        hospOrderServiceDetails.setOrderProductId(this.orderProductId);
        hospOrderServiceDetails.setQty(this.qty);
        hospOrderServiceDetails.setDoctorAreaId(this.doctorAreaId);
        hospOrderServiceDetails.setDoctorComment(this.doctorComment);
        hospOrderServiceDetails.setGradeId(this.gradeId);
        hospOrderServiceDetails.setState(this.state);
        hospOrderServiceDetails.setAddress(this.address);
        hospOrderServiceDetails.setDoctorUserId(this.doctorUserId);
        hospOrderServiceDetails.setCreateDate(createDate);
        hospOrderServiceDetails.setUpdateDate(updateDate);
        return hospOrderServiceDetails;
    }
}
