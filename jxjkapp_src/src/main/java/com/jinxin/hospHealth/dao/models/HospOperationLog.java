package com.jinxin.hospHealth.dao.models;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import javax.persistence.Id;
import javax.persistence.Table;

@Data
@ApiModel("操作日志表")
@Table(name = "hosp_operation_log")
public class HospOperationLog {
    @Id
    @ApiModelProperty("操作日志ID")
    private Long id;
    @ApiModelProperty("操作人类型")
    private Integer operationType;
    @ApiModelProperty("用户ID")
    private Long userId;
    @ApiModelProperty("操作人ID")
    private Long operationId;
    @ApiModelProperty("院区ID")
    private Long areaId;
    @ApiModelProperty("操作模块")
    private String module;
    @ApiModelProperty("操作说明")
    private String content;
    @ApiModelProperty("备注说明")
    private String remark;

}