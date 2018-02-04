package com.jinxin.hospHealth.dao.modelsEnum;

import com.doraemon.base.exceptions.ShowExceptions;
import com.doraemon.base.language.Language;

/**
 * Created by zbs on 2018/1/31.
 */
public enum  OperationType {

    USER(0,"普通用户"),
    ADMIN(1,"admin用户");

    private int code;
    private String desc;

    OperationType(int code, String desc) {
        this.code = code;
        this.desc = desc;
    }

    public int getCode() {
        return code;
    }

    public String getDesc() {
        return desc;
    }

    public static OperationType getByCode(Integer code){
        for(OperationType operationType : OperationType.values()){
            if(code.equals(operationType.getCode()))
                return operationType;
        }
        throw new ShowExceptions(Language.get("service.not-scope"));
    }
}
