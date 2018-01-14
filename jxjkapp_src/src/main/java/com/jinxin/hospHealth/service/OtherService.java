package com.jinxin.hospHealth.service;

import com.doraemon.base.exceptions.ShowExceptions;
import com.doraemon.base.guava.DPreconditions;
import com.doraemon.base.language.Language;
import com.doraemon.base.redis.RedisOperation;
import com.github.pagehelper.util.StringUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by zbs on 2017/12/25.
 */
@Service
public class OtherService {

    @Autowired
    RedisOperation redisOperation;

    @Value("${dynamic.codeKey.login}")
    String loginCode;
    @Value("${dynamic.codeKey.register}")
    String registerCode;
    @Value("${dynamic.codeKey.token}")
    String tokenKey;
    @Value("${dynamic.codeKey.updatePhone}")
    String updatePhoneKey;

    @Value("${dynamic.effectiveTime.login}")
    String loginEffectiveTime;
    @Value("${dynamic.effectiveTime.register}")
    String registerEffectiveTime;
    @Value("${dynamic.effectiveTime.token}")
    String tokenEffectiveTime;
    @Value("${dynamic.effectiveTime.updatePhone}")
    String updatePhoneEffectiveTime;

    @Value("${dynamic.nextSendTime.login}")
    String loginNextSendTime;
    @Value("${dynamic.nextSendTime.register}")
    String registerNextSendTime;
    @Value("${dynamic.nextSendTime.updatePhone}")
    String updatePhoneNextSendTime;


    public final static String loginType="0";
    public final static String registerType="1";
    public final static String updatePhoneType="2";


    /**
     * 保存token到redis
     * @param phone
     * @param tokenCode
     * @param id
     * @throws Exception
     */
    public void saveToker(String phone,String tokenCode,Long id) throws Exception {
        Map map = new HashMap<>();
        map.put("tokenCode",tokenCode);
        map.put("userId",String.valueOf(id));
        redisOperation.usePool().hset(getTokeRedisKey(phone),map);
        redisOperation.usePool().expire(getTokeRedisKey(phone),Integer.valueOf(tokenEffectiveTime));
        redisOperation.usePool().set(tokenCode,String.valueOf(id));
        redisOperation.usePool().expire(tokenCode,Integer.valueOf(tokenEffectiveTime));
    }

    /**
     * 查询token
     * @param phone
     * @return
     * @throws Exception
     */
    public Map getToke(String phone) throws Exception {
        return redisOperation.usePool().hget(getTokeRedisKey(phone));
    }

    /**
     * 通过token 获取userId
     * @param token
     * @return
     * @throws Exception
     */
    public String getUserId(String token) throws Exception {
        return redisOperation.usePool().get(token);
    }

    /**
     * 删除token
     * @param phone
     * @throws Exception
     */
    public void deleteToken(String phone) throws Exception {
        Map<String,String> map = redisOperation.usePool().hget(getTokeRedisKey(phone));
        if (map == null)
            return;
        String token = map.get("tokenCode");
        if (StringUtil.isNotEmpty(token))
            redisOperation.usePool().del(token);
        redisOperation.usePool().del(getTokeRedisKey(phone));
    }

    /**
     * 保存动态码
     * @param phone
     * @param type (0-登陆 1-注册 2-换绑手机号)
     */
    public void saveDynamicCode(String phone,String type,String dynamicCode,String newPhone,String newDynamicCode) throws Exception {
        switch (type){
            case loginType:
                repeatSend(type,phone);
                redisOperation.usePool().set(getLoginRedisKey(phone), dynamicCode);
                redisOperation.expire(getLoginRedisKey(phone),Integer.valueOf(loginEffectiveTime));
                break;
            case registerType:
                repeatSend(type,phone);
                redisOperation.usePool().set(getRegisterRedisKey(phone),dynamicCode);
                redisOperation.expire(getRegisterRedisKey(phone),Integer.valueOf(registerEffectiveTime));
                break;
            case updatePhoneType:
                repeatSend(type,phone+"_"+newPhone);
                //给新手机发验证码
                redisOperation.usePool().set(getUpdatePhoneKey(newPhone),newDynamicCode);
                redisOperation.expire(getUpdatePhoneKey(newPhone),Integer.valueOf(updatePhoneEffectiveTime));
                break;
            default:
                throw new ShowExceptions(Language.get("dynamic.type-invalid"));
        }
    }

    /**
     * 验证是否可以重复发送的时间,如果可以,加入时间限制
     * @param type
     * @param phone
     * @throws Exception
     */
    private void repeatSend(String type,String phone) throws Exception {
        DPreconditions.checkNotNullAndEmpty(type,"动态码类型不能为空,为空不能通过校验");
        DPreconditions.checkNotNullAndEmpty(phone,Language.get("dynamic.phone-null"),true);
        DPreconditions.checkState(redisOperation.usePool().get(type+"_"+phone)== null, Language.get("dynamic.next-send-error"),true);
        redisOperation.usePool().set(type+"_"+phone, phone);
        redisOperation.expire(type+"_"+phone,Integer.valueOf(loginNextSendTime));
    }

    /**
     * 获取动态码
     * @param phone
     * @param type
     * @return
     * @throws Exception
     */
    public String getDynamicCode(String phone,String type) throws Exception {
        String code = null;
        switch (type){
            case loginType:
                code = redisOperation.usePool().get(getLoginRedisKey(phone));
                break;
            case registerType:
                code = redisOperation.usePool().get(getRegisterRedisKey(phone));
                break;
            case updatePhoneType:
                code = redisOperation.usePool().get(getUpdatePhoneKey(phone));
            default:
                throw new ShowExceptions("传入的验证码类型错误");
        }
        return code;
    }

    public String getLoginRedisKey(String phone){
        return phone+"_"+loginCode;
    }
    public String getRegisterRedisKey(String phone){
        return phone+"_"+registerCode;
    }
    public String getTokeRedisKey(String phone){
        return phone+"_"+tokenKey;
    }
    public String getUpdatePhoneKey(String newPhone) {
        return newPhone+"_"+updatePhoneKey;
    }

}
