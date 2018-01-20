package com.jinxin.hospHealth.dao.modelsEnum;

import com.doraemon.base.exceptions.ShowExceptions;
import com.doraemon.base.language.Language;

/**
 * Created by zbs on 2018/1/19.
 */
public enum LevelEnum {

    ONE(1,"1"),
    TWO(2,"2"),
    THREE(3,"3"),
    FOUR(4,"4"),
    FIVE(5,"5");

    private int code;
    private String desc;

    LevelEnum(int code, String desc) {
        this.code = code;
        this.desc = desc;
    }

    public int getCode() {
        return code;
    }

    public String getDesc() {
        return desc;
    }

    public static LevelEnum getByCode(Integer code){
        for(LevelEnum levelEnum : LevelEnum.values()){
            if(code.equals(levelEnum.getCode()))
                return levelEnum;
        }
        throw new ShowExceptions(Language.get("service.not-scope"));
    }
}
