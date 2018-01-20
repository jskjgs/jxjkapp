package com.jinxin.hospHealth.dao.models;

import com.doraemon.base.controller.bean.PageBean;
import com.jinxin.hospHealth.controller.protocol.VO.PrecontractVO;
import com.jinxin.hospHealth.controller.protocol.VO.ProductSkuVO;
import com.jinxin.hospHealth.controller.protocol.VO.UserInfoVO;
import com.jinxin.hospHealth.dao.modelsEnum.PrecontractEnum;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;
import java.util.Date;

@Data
@ApiModel("预约")
@Table(name="hosp_precontract")
public class HospPrecontract extends PageBean{
    @Id
    @ApiModelProperty("预约ID")
    private Long id;
    @ApiModelProperty("院区ID")
    private Long areaId;
    @ApiModelProperty("用户ID")
    private Long userId;
    @ApiModelProperty("预约时间")
    private Date precontractDate;
    @ApiModelProperty("状态 0:正常 1:取消  2:已使用 3:过期")
    private Integer status;
    @ApiModelProperty("商品SKU-id")
    private Long productSkuId;
    @Transient
    @ApiModelProperty("多个用户ID,使用,分割")
    private String userIds;
    @Transient
    @ApiModelProperty("多个商品SKU-ID,使用,分割")
    private String productSkuIds;
    @Transient
    @ApiModelProperty("时间区间-开始时间  YYYY-MM-DD  HH:mm:ss")
    private String startTime;
    @Transient
    @ApiModelProperty("时间区间-结束时间  YYYY-MM-DD  HH:mm:ss")
    private String stopTime;

    public PrecontractVO transform(HospArea area,UserInfoVO userInfoVO,ProductSkuVO productSkuVO){
        PrecontractVO precontractVO = new PrecontractVO();
        precontractVO.setId(this.id);
        precontractVO.setPrecontractDate(this.precontractDate);
        precontractVO.setStatus(
                this.status != null
                        ? PrecontractEnum.getByCode(this.status).getDesc()
                        : null);
        precontractVO.setArea(area);
        precontractVO.setUserInfoVO(userInfoVO);
        precontractVO.setSku(productSkuVO);
        return precontractVO;
    }
}