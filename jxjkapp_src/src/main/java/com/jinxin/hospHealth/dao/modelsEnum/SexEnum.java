package com.jinxin.hospHealth.dao.modelsEnum;

/**
 * 性别
 * Created by zbs on 2018/1/4.
 */
public enum SexEnum {

    WOMAN(0,"女"),
    MAN(1,"男");


    private int code;
    private String desc;

    SexEnum(int code, String desc) {
        this.code = code;
        this.desc = desc;
    }


    public int getCode() {
        return code;
    }

    public String getDesc() {
        return desc;
    }

    public static SexEnum getSexEnumByCode(Integer code){
        for(SexEnum sexEnum : SexEnum.values()){
            if(code.equals(sexEnum.getCode()))
                return sexEnum;
        }
        return null;
    }
}
