package com.jinxin.hospHealth.dao.modelsEnum;

/**
 * 验证码类型 ,验证码模板
 * Created by zbs on 2018/1/18.
 */
public enum DynamicTypeEnum {

    LOGIN(0,"SMS_121970050"),
    UPDATE_PHONE(1,"SMS_121970050");

    private int code;
    private String desc;

    DynamicTypeEnum(int code, String desc) {
        this.code = code;
        this.desc = desc;
    }

    public int getCode() {
        return code;
    }

    public String getDesc() {
        return desc;
    }

    public static DynamicTypeEnum getByCode(Integer code){
        for(DynamicTypeEnum dynamicTypeEnum : DynamicTypeEnum.values()){
            if(code.equals(dynamicTypeEnum.getCode()))
                return dynamicTypeEnum;
        }
        return null;
    }
}
