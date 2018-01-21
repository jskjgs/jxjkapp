package com.jinxin.hospHealth.controller.protocol.VO;

import com.jinxin.hospHealth.dao.models.HospArea;
import com.jinxin.hospHealth.dao.models.HospPrecontract;
import com.jinxin.hospHealth.dao.models.HospProduct;
import com.jinxin.hospHealth.dao.models.HospProductSku;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import java.util.Date;

/**
 * Created by zbs on 2018/1/2.
 */
@Data
@ApiModel("预约信息")
public class PrecontractVO {
    @ApiModelProperty("预约ID")
    private Long id;
    @ApiModelProperty("院区")
    private HospArea area;
    @ApiModelProperty("用户信息")
    private UserInfoVO userInfoVO;
    @ApiModelProperty("预约时间")
    private Date precontractDate;
    @ApiModelProperty("状态 0:正常 1:取消  2:已使用 3:过期")
    private Integer status;
    @ApiModelProperty("商品sku信息")
    private ProductSkuVO sku;

}
