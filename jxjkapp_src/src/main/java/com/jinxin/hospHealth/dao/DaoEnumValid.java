package com.jinxin.hospHealth.dao;

import com.doraemon.base.guava.DPreconditions;
import com.jinxin.hospHealth.dao.modelsEnum.EnableEnum;
import com.jinxin.hospHealth.dao.modelsEnum.ShowEnum;

/**
 * Created by zbs on 2017/12/30.
 */
public class DaoEnumValid {

    public static void checkShow(Integer value){
        if (value == null)
            return;
        DPreconditions.checkState(value.equals(ShowEnum.DISPLAY)
                || value.equals(ShowEnum.NOT_DISPLAY),"传入的display参数不属于默认值范围内.");
    }

    public static void checkEnable(Integer value){
        if (value == null)
            return;
        DPreconditions.checkState(value.equals(EnableEnum.ENABLE_NORMAL)
                || value.equals(EnableEnum.ENABLE_DELETE)
                || value.equals(EnableEnum.ENABLE_DISABLED),"传入的Enable参数不属于默认值范围内.");
    }

    public static void checkUpdateEnable(Integer value){
        if (value == null)
            return;
        DPreconditions.checkState(value.equals(EnableEnum.ENABLE_NORMAL)
                || value.equals(EnableEnum.ENABLE_DISABLED),"传入的Enable参数不属于默认值范围内.");
    }
}
