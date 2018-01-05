package com.jinxin.hospHealth.dao.modelsEnum;

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
}
