package com.jinxin.hospHealth.dao.modelsEnum;

/**
 * Created by zbs on 2017/12/29.
 */
public enum  UserBalanceEnum {

    ENABLE_NORMAL(0,"正常"),
    ENABLE_DISABLED(1,"禁用"),
    ENABLE_DELETE(99,"删除");

    private int code;
    private String desc;

    UserBalanceEnum(int code, String desc) {
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
