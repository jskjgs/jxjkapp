package com.jinxin.hospHealth.dao.models;

import com.doraemon.base.controller.bean.PageBean;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import javax.persistence.Id;
import javax.persistence.Table;

@Data
@Table(name="hosp_product_type")
@ApiModel("商品类别信息")
public class HospProductType extends PageBean{
    @Id
    @ApiModelProperty("商品类别的ID")
    private Long id;
    @ApiModelProperty("商品类别的名称")
    private String name;
    @ApiModelProperty("商品类别的图片")
    private String images;
    @ApiModelProperty("商品类别的描述D")
    private String description;
    @ApiModelProperty("商品类别的上级商品类别")
    private Integer parentProductTypeId;

}