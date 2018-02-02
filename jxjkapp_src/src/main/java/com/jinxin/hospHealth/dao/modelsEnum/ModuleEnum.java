package com.jinxin.hospHealth.dao.modelsEnum;

import com.doraemon.base.exceptions.ShowExceptions;
import com.doraemon.base.language.Language;

/**
 * Created by zbs on 2018/1/31.
 */
public enum  ModuleEnum {


    TOP_UP("topUp","用户充值"),
    PAY_ORDER("payOrder","订单支付"),
    UPDATE_PHONE("updatePhone","修改手机号码");

    private String code;
    private String desc;

    ModuleEnum(String code, String desc) {
        this.code = code;
        this.desc = desc;
    }

    public String getCode() {
        return code;
    }

    public String getDesc() {
        return desc;
    }

    public static ModuleEnum getByCode(String code){
        for(ModuleEnum moduleEnum : ModuleEnum.values()){
            if(code.equals(moduleEnum.getCode()))
                return moduleEnum;
        }
        throw new ShowExceptions(Language.get("service.not-scope"));
    }
}
