package com.jinxin.hospHealth.dao.modelsEnum;

/**
 * Created by zbs on 2018/1/10.
 */
public enum OrderProductStateEnum {

    CREATE(0,"创建"),
    USE(1,"使用");

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
