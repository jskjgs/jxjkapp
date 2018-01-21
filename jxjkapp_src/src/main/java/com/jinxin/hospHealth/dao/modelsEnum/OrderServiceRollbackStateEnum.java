package com.jinxin.hospHealth.dao.modelsEnum;

import com.doraemon.base.exceptions.ShowExceptions;
import com.doraemon.base.language.Language;

/**
 * Created by zbs on 2018/1/21.
 */
public enum  OrderServiceRollbackStateEnum {

    APPLY_CANCELLATION(0,"申请作废"),
    CANCELLATION(1,"已作废");

    private int code;
    private String desc;

    OrderServiceRollbackStateEnum(int code, String desc) {
        this.code = code;
        this.desc = desc;
    }

    public int getCode() {
        return code;
    }

    public String getDesc() {
        return desc;
    }

    public static OrderServiceRollbackStateEnum getByCode(Integer code){
        for(OrderServiceRollbackStateEnum orderServiceRollbackStateEnum : OrderServiceRollbackStateEnum.values()){
            if(code.equals(orderServiceRollbackStateEnum.getCode()))
                return orderServiceRollbackStateEnum;
        }
        throw new ShowExceptions(Language.get("service.not-scope"));
    }
}
