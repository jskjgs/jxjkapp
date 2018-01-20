package com.jinxin.hospHealth.dao.models;

import com.doraemon.base.controller.bean.PageBean;
import com.github.pagehelper.PageInfo;
import com.jinxin.hospHealth.dao.modelsEnum.LevelEnum;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;
import java.util.Date;

@Data
@ApiModel("订单商品评价表")
@Table(name = "hosp_order_grade")
public class HospOrderGrade extends PageBean {
    @Id
    @ApiModelProperty("订单商品评价ID")
    private Long id;
    @ApiModelProperty("等级")
    private Integer level;
    @ApiModelProperty("创建时间")
    private Date createDate;
    @ApiModelProperty("更新时间")
    private Date updateDate;
<<<<<<< HEAD
    @ApiModelProperty("评论内容")
=======

    private Integer enable = EnableEnum.ENABLE_DELETE.getCode();;

>>>>>>> 81490d29699307c63a52b01d4f06416bc4d0543f
    private String comment;

    @Transient
    @ApiModelProperty("订单商品服务ID")
    private Long orderServiceDetailsId;

    public Integer getLevel() {
        return this.level != null
                ? LevelEnum.getByCode(this.level).getCode()
                : null;
    }
}