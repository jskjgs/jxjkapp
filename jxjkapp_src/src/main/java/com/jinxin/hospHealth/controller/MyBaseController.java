package com.jinxin.hospHealth.controller;

import com.alibaba.fastjson.JSONObject;
import com.doraemon.base.controller.BaseController;
import com.doraemon.base.controller.CodeEnum;
import org.springframework.beans.factory.annotation.Configurable;

/**
 * Created by zbs on 2017/12/12.
 */
@Configurable
public class MyBaseController extends BaseController {

    @Override
    public Long getCurrentUserId() {
        return null;
    }

    @Override
    public String getToken() {
        return null;
    }

    // 响应包装---成功
    public JSONObject ResponseWrapperSuccess(Object data) {
        return this.ResponseWrapper().addData(data).addMessage("ok").ExeSuccess(CodeEnum.SUCCESS.getCode());
    }

    // 响应包装---没有权限
    public JSONObject ResponseWrapperNotPermissions(String message) {
        return this.ResponseWrapper().addMessage(message).ExeFaild(CodeEnum.FAILURE_NO_PERMISSIONS.getCode());
    }

    // 响应包装---400 异常报错
    public JSONObject ResponseWrapperError(Exception e,String message) {
        return this.ResponseWrapper().addError(e).addMessage(message).ExeFaild(CodeEnum.FAILURE_ERROR.getCode());
    }

    // 响应包装---406 异常报错,显示在界面上
    public JSONObject ResponseWrapperShowError(Exception e,String message) {
        return this.ResponseWrapper().addError(e).addMessage(message).ExeFaild(CodeEnum.FAILURE_SHOW_MSG.getCode());
    }
}
