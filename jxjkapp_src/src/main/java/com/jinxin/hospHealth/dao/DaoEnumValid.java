package com.jinxin.hospHealth.dao;

import com.doraemon.base.guava.DPreconditions;
import com.doraemon.base.language.Language;
import com.jinxin.hospHealth.dao.modelsEnum.*;

/**
 * Created by zbs on 2017/12/30.
 */
public class DaoEnumValid {

    public static void checkOrderProductState(Integer state) {
        if (state == null)
            return;
        DPreconditions.checkState(state.equals(OrderProductStateEnum.CREATE.getCode())
                        || state.equals(OrderProductStateEnum.USE.getCode()),
                Language.get("parameter-valid.order-product-state-scope"),
                true);
    }

    public static void checkOrderState(Integer state) {
        if (state == null)
            return;
        DPreconditions.checkState(state.equals(OrderStateEnum.NON_PAYMENT.getCode())
                        || state.equals(OrderStateEnum.PAY.getCode())
                        || state.equals(OrderStateEnum.CLOSE.getCode()),
                Language.get("parameter-valid.order-state-scope"),
                true);
    }

    public static void checkOrderType(Integer type) {
        if (type == null)
            return;
        DPreconditions.checkState(type.equals(OrderTypeEnum.GOODS.getCode())
                        || type.equals(OrderTypeEnum.SERVICE.getCode()),
                Language.get("parameter-valid.order-type-scope"),
                true);
    }

    public static void checkOrderPayType(Integer type) {
        if (type == null)
            return;
        DPreconditions.checkState(type.equals(OrderPayTypeEnum.ALIPAY.getCode())
                        || type.equals(OrderPayTypeEnum.WECHAT.getCode())
                        || type.equals(OrderPayTypeEnum.BALANCE.getCode()),
                Language.get("parameter-valid.order-pay-type-scope"),
                true);
    }

    public static void checkCallNumberState(Integer state) {
        if (state == null)
            return;
        DPreconditions.checkState(state.equals(CallNumberEnum.NORMAL.getCode())
                        || state.equals(CallNumberEnum.OVERDUE.getCode())
                        || state.equals(CallNumberEnum.USED.getCode()),
                Language.get("parameter-valid.call-number-state-scope"),
                true);
    }

    public static void checkSex(Integer sex) {
        if (sex == null)
            return;
        DPreconditions.checkState(sex.equals(SexEnum.MAN.getCode())
                        || sex.equals(SexEnum.WOMAN.getCode()),
                Language.get("parameter-valid.sex-scope"),
                true);
    }

    public static void checkShow(Integer value) {
        if (value == null)
            return;
        DPreconditions.checkState(value.equals(ShowEnum.DISPLAY.getCode())
                        || value.equals(ShowEnum.NOT_DISPLAY.getCode()),
                Language.get("parameter-valid.display-scope"),
                true);
    }

    public static void checkAllEnable(Integer value) {
        if (value == null)
            return;
        DPreconditions.checkState(value.equals(EnableEnum.ENABLE_NORMAL.getCode())
                        || value.equals(EnableEnum.ENABLE_DELETE.getCode())
                        || value.equals(EnableEnum.ENABLE_DISABLED.getCode()),
                Language.get("parameter-valid.all-enable-scope"),
                true);
    }

    public static void checkDisableEnable(Integer value) {
        if (value == null)
            return;
        DPreconditions.checkState(value.equals(EnableEnum.ENABLE_NORMAL.getCode())
                        || value.equals(EnableEnum.ENABLE_DISABLED.getCode()),
                Language.get("parameter-valid.disable-enable-scope"),
                true);
    }
}
