package com.jinxin.hospHealth.dao.modelsEnum;

import com.doraemon.base.exceptions.ShowExceptions;
import com.doraemon.base.language.Language;

/**
 * Created by zbs on 2018/1/16.
 */
public enum OrderRefundStateEnum {

    APPLY(0,"申请退款"),
    FINISH(1,"退款完毕");

    private int code;
    private String desc;

    OrderRefundStateEnum(int code, String desc) {
        this.code = code;
        this.desc = desc;
    }

    public int getCode() {
        return code;
    }

    public String getDesc() {
        return desc;
    }

    public static OrderRefundStateEnum getByCode(Integer code){
        for(OrderRefundStateEnum orderRefundStateEnumor : OrderRefundStateEnum.values()){
            if(code.equals(orderRefundStateEnumor.getCode()))
                return orderRefundStateEnumor;
        }
        throw new ShowExceptions(Language.get("service.not-scope"));
    }
}
