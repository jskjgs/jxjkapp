package com.jinxin.hospHealth.dao.models;

import com.doraemon.base.controller.bean.PageBean;
import com.jinxin.hospHealth.dao.modelsEnum.EnableEnum;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;
import java.math.BigDecimal;
import java.util.Date;
import java.util.List;

@Data
@ApiModel("商品SKU信息")
@Table(name="hosp_product_sku")
public class HospProductSku extends PageBean{
    @Id
    @ApiModelProperty("商品SKU ID")
    private Long id;
    @ApiModelProperty("产品信息表ID")
    private Long productId;
    @ApiModelProperty("sku名称")
    private String name;
    @ApiModelProperty("图片些，使用逗号分隔")
    private String images;
    @ApiModelProperty("描述")
    private String description;
    @ApiModelProperty("默认服务数量")
    private Integer serviceQuantity;
    @ApiModelProperty("销售价格")
    private BigDecimal salesPrice;
    @ApiModelProperty("显示价格")
    private BigDecimal showPrice;
    @ApiModelProperty("创建时间")
    private Date createDate;
    @ApiModelProperty("更新时间")
    private Date updateDate;

}