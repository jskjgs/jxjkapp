package com.jinxin.hospHealth.controller.protocol.PO;

import com.jinxin.hospHealth.dao.models.HospProduct;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import java.math.BigDecimal;
import java.util.Date;

/**
 * Created by zbs on 2018/2/5.
 */
@Data
@ApiModel("商品和sku详情")
public class ProductPO {
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
    @ApiModelProperty("院区ID")
    private Long areaId;
    @ApiModelProperty("默认服务数量")
    private Integer serviceQuantity;
    @ApiModelProperty("销售价格")
    private BigDecimal salesPrice;
    @ApiModelProperty("显示价格")
    private BigDecimal showPrice;

    public HospProduct transform(Date createDate,
                                 Date updateDate,
                                 Long defaultSkuId) throws Exception {
        HospProduct hospProduct = new HospProduct();
        hospProduct.setName(this.name);
        hospProduct.setImages(this.images);
        hospProduct.setProductTypeId(this.productTypeId);
        hospProduct.setDefaultSkuId(defaultSkuId);
        hospProduct.setDescription(this.description);
        hospProduct.setSortNumber(this.sortNumber);
        hospProduct.setAreaId(this.areaId);
        hospProduct.setInformation(this.information);
        hospProduct.setCreateDate(createDate);
        hospProduct.setUpdateDate(updateDate);
        return hospProduct;
    }
}
