package com.jinxin.hospHealth.dao.modelsEnum;

import com.doraemon.base.exceptions.ShowExceptions;
import com.doraemon.base.language.Language;

/**
 * Created by zbs on 2018/1/22.
 */
public enum AuthorEnum {

    //医生
    DOCTOR(0,"m_01,m_02,m_03,m_04,m_05,m_06,m_07,m_08"),
    //主管
    DIRECTOR(1,"m_01,m_02,m_03,m_04,m_05,m_06,m_07,m_08"),
    //集团领导
    GROUP_LEADER(2,"m_01,m_02,m_03,m_04,m_05,m_06,m_07,m_08");

    private int code;
    private String desc;

    AuthorEnum(int code, String desc) {
        this.code = code;
        this.desc = desc;
    }

    public int getCode() {
        return code;
    }

    public String getDesc() {
        return desc;
    }

    public static AuthorEnum getByCode(Integer code){
        for(AuthorEnum authorEnum : AuthorEnum.values()){
            if(code.equals(authorEnum.getCode()))
                return authorEnum;
        }
        throw new ShowExceptions(Language.get("service.not-scope"));
    }
}
