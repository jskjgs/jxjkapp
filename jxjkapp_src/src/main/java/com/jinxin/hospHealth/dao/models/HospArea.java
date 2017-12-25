package com.jinxin.hospHealth.dao.models;

import com.doraemon.base.controller.bean.PageBean;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import javax.persistence.Id;
import javax.persistence.Table;

@Data
@ApiModel("医院院区信息")
@Table(name="hosp_area")
public class HospArea extends PageBean{
    @Id
    @ApiModelProperty("医院院区的ID")
    private Long id;
    @ApiModelProperty("医院院区名称")
    private String name;
    @ApiModelProperty("医院院区说明")
    private String description;

}