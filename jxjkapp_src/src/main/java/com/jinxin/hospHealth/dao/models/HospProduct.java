package com.jinxin.hospHealth.dao.models;

import com.doraemon.base.controller.bean.PageBean;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;
import java.util.Date;

@Data
@ApiModel("商品信息")
@Table(name="hosp_product")
public class HospProduct extends PageBean{
    @Id
    @ApiModelProperty("商品ID")
    private Long id;
    @ApiModelProperty("商品名称")
    private String name;
    @ApiModelProperty("商品类型ID")
    private Long productTypeId;
    @ApiModelProperty("排序")
    private Integer sortNumber;
    @ApiModelProperty("默认skuID")
    private Long defaultSkuId;
    @ApiModelProperty("商品图片些，使用逗号分隔")
    private String images;
    @ApiModelProperty("商品描述")
    private String description;
    @ApiModelProperty("商品简介")
    private String information;
    @ApiModelProperty("创建时间")
    private Date createDate;
    @ApiModelProperty("更新时间")
    private Date updateDate;
    @ApiModelProperty("删除标识 0:正常 1:禁用  99:删除")
    private Integer enable;

}