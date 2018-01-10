package com.jinxin.hospHealth.dao.modelsEnum;

/**
 * 订单状态
 * Created by zbs on 2018/1/10.
 */
public enum OrderStateEnum {

    PAY(0,"已支付订单"),
    NON_PAYMENT(1,"未支付订单"),
    REFUND(2,"申请退款订单"),
    CLOSE(99,"关闭订单");

    private int code;
    private String desc;

    OrderStateEnum(int code, String desc) {
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
