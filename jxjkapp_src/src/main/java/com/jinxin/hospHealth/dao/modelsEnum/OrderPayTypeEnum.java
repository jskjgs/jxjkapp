package com.jinxin.hospHealth.dao.modelsEnum;

/**
 * 订单支付类型
 * Created by zbs on 2018/1/10.
 */
public enum OrderPayTypeEnum {

    WECHAT(0,"微信"),
    ALIPAY(1,"支付宝"),
    BALANCE(2,"余额支付");

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
}
