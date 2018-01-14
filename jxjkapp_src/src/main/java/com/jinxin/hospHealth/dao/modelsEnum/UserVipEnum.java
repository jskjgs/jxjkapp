package com.jinxin.hospHealth.dao.modelsEnum;

/**
 * Created by zbs on 2018/1/11.
 */
public enum UserVipEnum {

    VIP(1,"VIP"),
    NOT_VIP(0,"一般用户");

    private int code;
    private String desc;

    UserVipEnum(int code, String desc) {
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
