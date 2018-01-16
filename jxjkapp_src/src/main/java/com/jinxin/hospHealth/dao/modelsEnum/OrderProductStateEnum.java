package com.jinxin.hospHealth.dao.modelsEnum;

import com.doraemon.base.exceptions.ShowExceptions;
import com.doraemon.base.language.Language;

/**
 * Created by zbs on 2018/1/10.
 */
public enum OrderProductStateEnum {

    NORMAL(0,"正常"),
    APPLY_CANCELLATION(1,"申请作废"),
    CANCELLATION(2,"已作废");

    private int code;
    private String desc;

    OrderProductStateEnum(int code, String desc) {
        this.code = code;
        this.desc = desc;
    }

    public int getCode() {
        return code;
    }

    public String getDesc() {
        return desc;
    }

    public static OrderProductStateEnum getByCode(Integer code){
        for(OrderProductStateEnum orderProductStateEnum : OrderProductStateEnum.values()){
            if(code.equals(orderProductStateEnum.getCode()))
                return orderProductStateEnum;
        }
        throw new ShowExceptions(Language.get("service.not-scope"));
    }
}
