package com.jinxin.hospHealth.dao.modelsEnum;

import com.doraemon.base.exceptions.ShowExceptions;
import com.doraemon.base.language.Language;

/**
 * Created by zbs on 2018/1/17.
 */
public enum  OrderServiceDetailsStateEnum {

    NORMAL(0,"指派中"),
    IN_SERVICE(1,"服务中"),
    COMPLETE(2,"已完成"),
    APPLY_CANCELLATION(98,"申请作废"),
    CANCELLATION(99,"已作废");

    private int code;
    private String desc;

    OrderServiceDetailsStateEnum(int code, String desc) {
        this.code = code;
        this.desc = desc;
    }

    public int getCode() {
        return code;
    }

    public String getDesc() {
        return desc;
    }

    public static OrderServiceDetailsStateEnum getByCode(Integer code){
        for(OrderServiceDetailsStateEnum orderServiceDetailsStateEnum : OrderServiceDetailsStateEnum.values()){
            if(code.equals(orderServiceDetailsStateEnum.getCode()))
                return orderServiceDetailsStateEnum;
        }
        throw new ShowExceptions(Language.get("service.not-scope"));
    }
}
