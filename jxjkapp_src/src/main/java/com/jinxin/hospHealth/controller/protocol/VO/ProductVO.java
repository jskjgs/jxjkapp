package com.jinxin.hospHealth.controller.protocol.VO;

import com.jinxin.hospHealth.dao.models.HospProduct;
import com.jinxin.hospHealth.dao.models.HospProductSku;
import com.jinxin.hospHealth.dao.models.HospProductType;
import com.jinxin.hospHealth.service.ProductTypeService;
import com.jinxin.hospHealth.service.SkuService;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Configurable;

import java.util.Date;

/**
 * Created by zbs on 2017/12/25.
 */

@Data
@ApiModel("商品信息")
public class ProductVO {

    @ApiModelProperty("商品ID")
    private Long id;
    @ApiModelProperty("商品名称")
    private String name;
    @ApiModelProperty("商品类型")
    private HospProductType productType;
    @ApiModelProperty("排序")
    private Integer sortNumber;
    @ApiModelProperty("默认sku信息")
    private HospProductSku defaultSku;
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

    public ProductVO(HospProduct hospProduct){
        if (hospProduct == null)
            return;
        this.id = hospProduct.getId();
        this.name = hospProduct.getName();
        this.sortNumber = hospProduct.getSortNumber();
        this.images = hospProduct.getImages();
        this.description = hospProduct.getDescription();
        this.information = hospProduct.getInformation();
        this.createDate = hospProduct.getCreateDate();
        this.updateDate = hospProduct.getUpdateDate();
        this.enable = hospProduct.getEnable();
    }
}
