package com.jinxin.hospHealth.utils.sms;

/**
 * Created by zbs on 2018/1/14.
 */
public enum  SmsEnum {

    LOGIN_REGISTER("SMS_121970050","登录注册验证码"),
    CHANGE_BUNDLE_TELEPHONE_OLD("SMS_121970050","换绑手机号_原手机号"),
    CHANGE_BUNDLE_TELEPHONE_NEW("SMS_121970050","换绑手机号_新手机号");

    private String templateCode;
    private String name;
    SmsEnum(String templateCode,String name){
        this.templateCode = templateCode;
        this.name = name;
    }

    public String getTemplateCode() {
        return templateCode;
    }

    public void setTemplateCode(String templateCode) {
        this.templateCode = templateCode;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
