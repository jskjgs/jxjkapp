package com.jinxin.hospHealth.dao.modelsEnum;

import com.doraemon.base.exceptions.ShowExceptions;
import com.doraemon.base.language.Language;

/**
 * 订单支付类型
 * Created by zbs on 2018/1/10.
 */
public enum OrderPayTypeEnum {

    WECHAT(0,"微信"),
    ALIPAY(1,"支付宝"),
    BALANCE(2,"余额支付"),
    HIS(3,"HIS线下支付");

    private int code;
    private String desc;

    OrderPayTypeEnum(int code, String desc) {
        this.code = code;
        this.desc = desc;
    }

    public int getCode() {
        return code;
    }

    public String getDesc() {
        return desc;
    }

    public static OrderPayTypeEnum getByCode(Integer code){
        for(OrderPayTypeEnum orderPayTypeEnum : OrderPayTypeEnum.values()){
            if(code.equals(orderPayTypeEnum.getCode()))
                return orderPayTypeEnum;
        }
        throw new ShowExceptions(Language.get("service.not-scope"));
    }
}
