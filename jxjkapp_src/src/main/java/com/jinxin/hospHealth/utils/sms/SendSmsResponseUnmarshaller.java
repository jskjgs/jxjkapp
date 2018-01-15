package com.jinxin.hospHealth.utils.sms;

import com.aliyuncs.transform.UnmarshallerContext;

/**
 * Created by zbs on 2018/1/14.
 */
public class SendSmsResponseUnmarshaller {

    public static SendSmsResponse unmarshall(SendSmsResponse sendSmsResponse, UnmarshallerContext context) {

        sendSmsResponse.setRequestId(context.stringValue("SendSmsResponse.RequestId"));
        sendSmsResponse.setBizId(context.stringValue("SendSmsResponse.BizId"));
        sendSmsResponse.setCode(context.stringValue("SendSmsResponse.Code"));
        sendSmsResponse.setMessage(context.stringValue("SendSmsResponse.Message"));

        return sendSmsResponse;
    }
}
