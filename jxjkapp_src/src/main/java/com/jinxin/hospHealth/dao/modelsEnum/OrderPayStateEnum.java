package com.jinxin.hospHealth.dao.modelsEnum;

/**
 * 订单状态
 * Created by zbs on 2018/1/10.
 */
public enum OrderPayStateEnum {

    PAY(0,"已支付订单"),
    NON_PAYMENT(1,"未支付订单");

    private int code;
    private String desc;

    OrderPayStateEnum(int code, String desc) {
        this.code = code;
        this.desc = desc;
    }

    public int getCode() {
        return code;
    }

    public String getDesc() {
        return desc;
    }

    public static OrderPayStateEnum getByCode(Integer code){
        for(OrderPayStateEnum orderPayStateEnum : OrderPayStateEnum.values()){
            if(code.equals(orderPayStateEnum.getCode()))
                return orderPayStateEnum;
        }
        return null;
    }
}
