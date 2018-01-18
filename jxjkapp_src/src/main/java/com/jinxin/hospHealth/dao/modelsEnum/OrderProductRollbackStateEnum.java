package com.jinxin.hospHealth.dao.modelsEnum;

import com.doraemon.base.exceptions.ShowExceptions;
import com.doraemon.base.language.Language;

/**
 * Created by zbs on 2018/1/18.
 */
public enum  OrderProductRollbackStateEnum {

    NORMAL(0,"正常"),
    APPLY_CANCELLATION(1,"申请退款"),
    CANCELLATION(2,"已退款");

    private int code;
    private String desc;

    OrderProductRollbackStateEnum(int code, String desc) {
        this.code = code;
        this.desc = desc;
    }

    public int getCode() {
        return code;
    }

    public String getDesc() {
        return desc;
    }

    public static OrderProductRollbackStateEnum getByCode(Integer code){
        for(OrderProductRollbackStateEnum orderProductRollbackStateEnum : OrderProductRollbackStateEnum.values()){
            if(code.equals(orderProductRollbackStateEnum.getCode()))
                return orderProductRollbackStateEnum;
        }
        throw new ShowExceptions(Language.get("service.not-scope"));
    }
}
