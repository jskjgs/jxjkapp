package com.jinxin.hospHealth.controller.protocol.VO;

import com.doraemon.base.controller.bean.PageBean;
import com.jinxin.hospHealth.dao.models.HospPatientInfo;
import com.jinxin.hospHealth.dao.models.HospUserInfo;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import javax.persistence.Transient;
import java.util.Date;

/**
 * Created by zbs on 2018/1/10.
 */
@Data
@ApiModel("排队叫号信息")
public class CallNumberVO extends PageBean {

    @ApiModelProperty("id")
    private Long id;
    @ApiModelProperty("用户信息")
    private HospUserInfo hospUserInfo;
    @ApiModelProperty("就诊人信息")
    private HospPatientInfo hospPatientInfo;
    @ApiModelProperty("状态(0 : 等待  1 : 使用  2 : 过号)")
    private Integer state;
    @ApiModelProperty("排队序号")
    private Integer orderNumber;
    @ApiModelProperty("前面等待人数")
    private Integer waitNumber;
    @ApiModelProperty("创建时间")
    private Date createDate;
    @ApiModelProperty("更新时间")
    private Date updateDate;


}
