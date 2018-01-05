package com.jinxin.hospHealth.dao.modelsEnum;


/**
 * 显示标识
 * Created by zbs on 2017/12/28.
 */
public enum ShowEnum {

    DISPLAY(0,"显示"),
    NOT_DISPLAY(1,"隐藏");

    private int code;
    private String desc;

    ShowEnum(int code, String desc) {
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
