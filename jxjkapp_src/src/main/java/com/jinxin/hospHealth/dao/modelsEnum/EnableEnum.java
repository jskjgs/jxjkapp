package com.jinxin.hospHealth.dao.modelsEnum;

/**
 * 删除或禁用标识
 * Created by zbs on 2017/12/29.
 */
public enum EnableEnum {

    ENABLE_NORMAL(0,"正常"),
    ENABLE_DISABLED(1,"禁用"),
    ENABLE_DELETE(99,"删除");

    private int code;
    private String desc;

    EnableEnum(int code, String desc) {
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
