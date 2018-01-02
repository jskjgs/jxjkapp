package com.jinxin.hospHealth.dao.models;

import com.doraemon.base.controller.bean.PageBean;
import com.jinxin.hospHealth.dao.modelsEnum.EnableEnum;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;

@Data
@ApiModel("就诊人信息")
@Table(name="hosp_patient_info")
public class HospPatientInfo extends PageBean{

    @Id
    @ApiModelProperty("就诊人的ID")
    private Long id;
    @ApiModelProperty("用户ID")
    private Long userId;
    @ApiModelProperty("身份证号")
    private String cardId;
    @ApiModelProperty("分娩日期")
    private Date deliveryDate;
    @ApiModelProperty("宝宝性别 0 女 1 男")
    private Integer babySex;
    @ApiModelProperty("客户来源")
    private String userSource;
    @ApiModelProperty("就诊人 0 主就诊人 1 从就诊人")
    private Integer type;
    @ApiModelProperty("过敏史")
    private String allergies;
    @ApiModelProperty("疾病史")
    private String disease;
    @ApiModelProperty("分娩情况")
    private String deliveryInfo;
    @ApiModelProperty("联系地址")
    private String address;

}