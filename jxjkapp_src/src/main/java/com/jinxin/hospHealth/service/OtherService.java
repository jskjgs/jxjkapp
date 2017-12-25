package com.jinxin.hospHealth.service;

import com.doraemon.base.exceptions.ShowExceptions;
import com.doraemon.base.redis.RedisOperation;
import com.github.pagehelper.StringUtil;
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
    @Value("${dynamic.effectiveTime.login}")
    String loginEffectiveTime;
    @Value("${dynamic.effectiveTime.register}")
    String registerEffectiveTime;
    @Value("${dynamic.effectiveTime.token}")
    String tokenEffectiveTime;


    public final static String loginType="0";
    public final static String registerType="1";


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
     * @param type (0-登陆 1-注册)
     */
    public void saveDynamicCode(String phone,String type,String dynamicCode) throws Exception {
        switch (type){
            case loginType:
                redisOperation.usePool().set(getLoginRedisKey(phone), dynamicCode);
                redisOperation.expire(getLoginRedisKey(phone),Integer.valueOf(loginEffectiveTime));
                break;
            case registerType:
                redisOperation.usePool().set(getRegisterRedisKey(phone),dynamicCode);
                redisOperation.expire(getRegisterRedisKey(phone),Integer.valueOf(registerEffectiveTime));
                break;
            default:
                throw new ShowExceptions("传入的验证码类型错误");
        }
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

}
