package com.jinxin.hospHealth.dao.modelsEnum;

import com.doraemon.base.exceptions.ShowExceptions;
import com.doraemon.base.language.Language;

/**
 * 订单类型
 * Created by zbs on 2018/1/10.
 */
public enum OrderTypeEnum {

    SERVICE(0,"服务订单"),
    GOODS(1,"商品订单");

    private int code;
    private String desc;

    OrderTypeEnum(int code, String desc) {
        this.code = code;
        this.desc = desc;
    }

    public int getCode() {
        return code;
    }

    public String getDesc() {
        return desc;
    }

    public static OrderTypeEnum getByCode(Integer code){
        for(OrderTypeEnum orderTypeEnum : OrderTypeEnum.values()){
            if(code.equals(orderTypeEnum.getCode()))
                return orderTypeEnum;
        }
        throw new ShowExceptions(Language.get("service.not-scope"));
    }
}
