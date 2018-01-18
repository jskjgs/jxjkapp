package com.jinxin.hospHealth.dao.models;

import com.jinxin.hospHealth.controller.protocol.VO.DoctorUserInfoVO;
import com.jinxin.hospHealth.controller.protocol.VO.OrderServiceDetailsVO;
import com.jinxin.hospHealth.controller.protocol.VO.ProductSkuVO;
import com.jinxin.hospHealth.dao.modelsEnum.OrderServiceDetailsStateEnum;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import javax.persistence.Id;
import javax.persistence.Table;
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
    @ApiModelProperty("医生用户ID")
    private Long doctorUserId;
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
            ProductSkuVO productSku,
            DoctorUserInfoVO doctorUserInfoVO,
            HospOrderGrade grade,
            HospArea area) {
        OrderServiceDetailsVO vo = new OrderServiceDetailsVO();
        vo.setId(this.id);
        vo.setCode(this.code);
        vo.setProductSku(productSku);
        vo.setQty(qty);
        vo.setArea(area);
        vo.setDoctorUserInfo(doctorUserInfoVO);
        vo.setDoctorComment(this.doctorComment);
        vo.setState(
                this.state != null
                        ? OrderServiceDetailsStateEnum.getByCode(this.state).getDesc()
                        : null);
        vo.setCreateDate(this.createDate);
        vo.setUpdateDate(this.updateDate);
        vo.setAddress(this.address);
        return vo;
    }

}