package com.jinxin.hospHealth.dao.modelsEnum;

/**
 * 预约标识
 * Created by zbs on 2018/1/2.
 */
public enum PrecontractEnum {

    NORMAL(0,"正常"),
    CANCEL(1,"取消"),
    USED(2,"已使用"),
    OVERDUE(3,"已过期");

    private int code;
    private String desc;

    PrecontractEnum(int code, String desc) {
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
