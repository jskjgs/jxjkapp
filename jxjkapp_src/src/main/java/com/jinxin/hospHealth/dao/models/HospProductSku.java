package com.jinxin.hospHealth.dao.models;

import com.doraemon.base.controller.bean.PageBean;
import com.jinxin.hospHealth.controller.protocol.VO.ProductSkuVO;
import com.jinxin.hospHealth.controller.protocol.VO.ProductVO;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import javax.persistence.Id;
import javax.persistence.Table;
import java.math.BigDecimal;
import java.util.Date;

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

    public String getField(){
        return this.field == null
                ? " update_date DESC "
                : this.field;
    }

    public ProductSkuVO transform(ProductVO product){
        ProductSkuVO productSkuVO = new ProductSkuVO();
        productSkuVO.setId(this.id);
        productSkuVO.setProduct(product);
        productSkuVO.setName(this.name);
        productSkuVO.setImages(this.images);
        productSkuVO.setDescription(this.description);
        productSkuVO.setServiceQuantity(this.serviceQuantity);
        productSkuVO.setSalesPrice(this.salesPrice);
        productSkuVO.setShowPrice(this.showPrice);
        productSkuVO.setCreateDate(this.createDate);
        productSkuVO.setUpdateDate(this.updateDate);
        return  productSkuVO;
    }
}