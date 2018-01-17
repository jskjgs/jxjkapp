package com.jinxin.hospHealth.controller.protocol.PO;

import com.doraemon.base.controller.bean.PageBean;
import com.jinxin.hospHealth.dao.models.HospCallNumber;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

/**
 * Created by zbs on 2018/1/14.
 */
@Data
@ApiModel("排队叫号系统")
public class CallNumberPO extends PageBean {

    @ApiModelProperty("用户ID")
    private Long userID;

    public HospCallNumber transform(){
        HospCallNumber hospCallNumber = new HospCallNumber();
        return hospCallNumber;
    }
}
