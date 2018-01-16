package com.jinxin.hospHealth.dao.modelsEnum;

import com.doraemon.base.exceptions.ShowExceptions;
import com.doraemon.base.language.Language;

/**
 * Created by zbs on 2018/1/5.
 */
public enum  CallNumberEnum {

    NORMAL(0,"等待"),
    USED(1,"已使用"),
    OVERDUE(2,"已过期");

    private int code;
    private String desc;

    CallNumberEnum(int code, String desc) {
        this.code = code;
        this.desc = desc;
    }

    public int getCode() {
        return code;
    }

    public String getDesc() {
        return desc;
    }

    public static CallNumberEnum getByCode(Integer code){
        for(CallNumberEnum callNumberEnum : CallNumberEnum.values()){
            if(code.equals(callNumberEnum.getCode()))
                return callNumberEnum;
        }
        throw new ShowExceptions(Language.get("service.not-scope"));
    }
}
