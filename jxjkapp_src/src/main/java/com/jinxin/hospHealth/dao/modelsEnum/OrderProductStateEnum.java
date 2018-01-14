package com.jinxin.hospHealth.dao.modelsEnum;

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
}
