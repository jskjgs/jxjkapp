package com.jinxin.hospHealth.utils.sms;

import com.alibaba.fastjson.JSONObject;
import com.aliyuncs.DefaultAcsClient;
import com.aliyuncs.IAcsClient;
import com.aliyuncs.http.MethodType;
import com.aliyuncs.profile.DefaultProfile;
import com.aliyuncs.profile.IClientProfile;
import com.doraemon.base.guava.DPreconditions;
import com.doraemon.base.language.Language;
import com.taobao.api.ApiException;
import com.taobao.api.DefaultTaobaoClient;
import com.taobao.api.TaobaoClient;
import com.taobao.api.request.AlibabaAliqinFcSmsNumSendRequest;
import com.taobao.api.response.AlibabaAliqinFcSmsNumSendResponse;
import lombok.extern.log4j.Log4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

/**
 * Created by zbs on 2018/1/14.
 */
@Log4j
@Component
public class AlidayuSms {

    @Value("${sms.region-id}")
    String REGION_ID;
    @Value("${sms.access-key-id}")
    String ACCESS_KEY_ID;
    @Value("${sms.access-key-secret}")
    String ACCESS_KEY_SECRET;
    @Value("${sms.product}")
    String PRODUCT;
    @Value("${sms.domain}")
    String DOMAIN;
    @Value("${sms.name}")
    String NAME;

    public void sendynamicCode(String phone, String code ,String templateCode) throws Exception{
        String url = "http://gw.api.taobao.com/router/rest";
        TaobaoClient client = new DefaultTaobaoClient(url, ACCESS_KEY_ID, ACCESS_KEY_SECRET);
        AlibabaAliqinFcSmsNumSendRequest req = new AlibabaAliqinFcSmsNumSendRequest();
        req.setExtend("");
        req.setSmsType("normal");
        req.setSmsFreeSignName(NAME);
        req.setSmsParamString("{\"code\":"+code+"}");
        req.setRecNum(phone);
        req.setSmsTemplateCode(templateCode);
        AlibabaAliqinFcSmsNumSendResponse rsp = client.execute(req);
        log.info(rsp.getBody());
    }

}
