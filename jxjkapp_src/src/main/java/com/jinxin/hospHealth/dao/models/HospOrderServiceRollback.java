package com.jinxin.hospHealth.dao.models;

import com.doraemon.base.controller.bean.PageBean;
import com.jinxin.hospHealth.controller.protocol.VO.AdminInfoVO;
import com.jinxin.hospHealth.controller.protocol.VO.OrderServiceDetailsVO;
import com.jinxin.hospHealth.controller.protocol.VO.OrderServiceRollbackVO;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;

@Data
@Table(name="hosp_order_service_rollback")
@ApiModel("服务订单使用回退申请表")
public class HospOrderServiceRollback extends PageBean{
    @Id
    @ApiModelProperty("服务订单使用详情表ID")
    private Long orderServiceDetailsId;
    @ApiModelProperty("状态 0 申请中  1 已退款")
    private Integer state;
    @ApiModelProperty("操作的admin用户ID")
    private Long adminUserId;
    @ApiModelProperty("创建时间")
    private Date createDate;
    @ApiModelProperty("更新时间")
    private Date updateDate;
    @ApiModelProperty("回退申请理由")
    private String comment;

    public OrderServiceRollbackVO transform(
            OrderServiceDetailsVO orderServiceDetailsVO,
            AdminInfoVO adminInfoVO){
        OrderServiceRollbackVO vo = new OrderServiceRollbackVO();
        vo.setState(this.state);
        vo.setCreateDate(this.createDate);
        vo.setUpdateDate(this.updateDate);
        vo.setComment(this.comment);
        vo.setOrderServiceDetails(orderServiceDetailsVO);
        vo.setAdminUser(adminInfoVO);
        return vo;
    }

}