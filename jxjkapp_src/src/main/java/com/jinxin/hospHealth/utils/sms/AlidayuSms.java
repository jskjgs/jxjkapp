package com.jinxin.hospHealth.utils.sms;

import com.alibaba.fastjson.JSONObject;
import com.aliyuncs.DefaultAcsClient;
import com.aliyuncs.IAcsClient;
import com.aliyuncs.http.MethodType;
import com.aliyuncs.profile.DefaultProfile;
import com.aliyuncs.profile.IClientProfile;
import com.doraemon.base.guava.DPreconditions;
import com.doraemon.base.language.Language;
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
        IClientProfile profile = DefaultProfile.getProfile(REGION_ID, ACCESS_KEY_ID,ACCESS_KEY_SECRET);
        DefaultProfile.addEndpoint(REGION_ID, REGION_ID, PRODUCT,DOMAIN);
        IAcsClient acsClient = new DefaultAcsClient(profile);
        //组装请求对象
        SendSmsRequest request = new SendSmsRequest();
        //使用post提交
        request.setMethod(MethodType.POST);
        //短信推荐使用单条调用的方式
        request.setPhoneNumbers(phone);
        //必填:短信签名-可在短信控制台中找到
        request.setSignName(NAME);
        //必填:短信模板-可在短信控制台中找到
        request.setTemplateCode(templateCode);
        request.setTemplateParam("{\"code\":"+code+"}");
        SendSmsResponse sendSmsResponse = acsClient.getAcsResponse(request);
        log.info("返回结果："+ JSONObject.toJSONString(sendSmsResponse));
        DPreconditions.checkState(sendSmsResponse.getCode() != null && sendSmsResponse.getCode().equals("OK"),
                Language.get("发送短信失败."));
    }
}
