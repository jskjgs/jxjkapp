package com.jinxin.hospHealth.controller.protocol.VO;

import com.jinxin.hospHealth.dao.models.HospArea;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import java.math.BigDecimal;
import java.util.Date;

/**
 * Created by zbs on 2018/1/17.
 */
@Data
@ApiModel("商品SKU信息")
public class ProductSkuVO {

    @ApiModelProperty("商品SKU ID")
    private Long id;
    @ApiModelProperty("产品信息表ID")
    private ProductVO product;
    @ApiModelProperty("sku名称")
    private String name;
    @ApiModelProperty("图片些，使用逗号分隔")
    private String images;
    @ApiModelProperty("院区信息")
    private HospArea area;
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
