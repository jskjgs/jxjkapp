package com.jinxin.hospHealth.controller;

import com.alibaba.fastjson.JSON;
import com.jinxin.hospHealth.Main;
import com.jinxin.hospHealth.controller.protocol.VO.LoginInfoVO;
import com.jinxin.hospHealth.dao.modelsEnum.DynamicTypeEnum;
import com.jinxin.hospHealth.utils.Constant;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by zbs on 2018/1/18.
 */

public class OtherControllerTest extends TestBase{

    /**
     * 1.发送登陆动态码
     * 2.发送更新手机动态码
     * 3.user登陆获取token
     * 4.进行手机换绑
     *
     * @throws Exception
     */
    @Test
    public void userLoginAndUpdatePhone() throws Exception {
//        String phone = "13678113250";
//        String newPhone = "15928113204";
//        //send code
//        String responseString = mvc.perform(MockMvcRequestBuilders.post("/other/sendCode")
//                .contentType(MediaType.APPLICATION_JSON_UTF8)
//                .param("phone", phone)
//                .param("type", String.valueOf(DynamicTypeEnum.LOGIN.getCode()))
//                .accept(MediaType.APPLICATION_JSON))
//                .andExpect(MockMvcResultMatchers.status().isOk())
//                .andExpect(MockMvcResultMatchers.jsonPath("code").value("200"))
//                .andDo(MockMvcResultHandlers.print())
//                .andReturn().getResponse().getContentAsString();
//        Map<String, String> map = JSON.parseObject(responseString, HashMap.class);
//        String loginCode = String.valueOf(map.get("content"));
//        //send new phone code
//        responseString = mvc.perform(MockMvcRequestBuilders.post("/other/sendCode")
//                .contentType(MediaType.APPLICATION_JSON_UTF8)
//                .param("phone", phone)
//                .param("type", String.valueOf(DynamicTypeEnum.UPDATE_PHONE.getCode()))
//                .accept(MediaType.APPLICATION_JSON))
//                .andExpect(MockMvcResultMatchers.status().isOk())
//                .andExpect(MockMvcResultMatchers.jsonPath("code").value("200"))
//                .andDo(MockMvcResultHandlers.print())
//                .andReturn().getResponse().getContentAsString();
//        map = JSON.parseObject(responseString, HashMap.class);
//        String updatePhoneCode = String.valueOf(map.get("content"));
//        //user login 用户
//        responseString = mvc.perform(MockMvcRequestBuilders.post("/other/loginByCode")
//                .contentType(MediaType.APPLICATION_JSON_UTF8)
//                .param("phone", phone)
//                .param("code", loginCode)
//                .accept(MediaType.APPLICATION_JSON))
//                .andExpect(MockMvcResultMatchers.status().isOk())
//                .andExpect(MockMvcResultMatchers.jsonPath("code").value("200"))
//                .andDo(MockMvcResultHandlers.print())
//                .andReturn().getResponse().getContentAsString();
//        map = JSON.parseObject(responseString, HashMap.class);
//        LoginInfoVO loginInfoVO = JSON.parseObject(map.get("content"), LoginInfoVO.class);
//        String token = loginInfoVO.getToken();
//        //update phone
//        responseString = mvc.perform(MockMvcRequestBuilders.post("/userInfo/updatePhone")
//                .contentType(MediaType.APPLICATION_JSON_UTF8)
//                .header(Constant.HEADER_PERMISSIONS, token)
//                .param("phone", newPhone)
//                .param("code", updatePhoneCode)
//                .accept(MediaType.APPLICATION_JSON))
//                .andExpect(MockMvcResultMatchers.status().isOk())
//                .andExpect(MockMvcResultMatchers.jsonPath("code").value("200"))
//                .andDo(MockMvcResultHandlers.print())
//                .andReturn().getResponse().getContentAsString();
//        System.out.println("------->" + responseString);
    }

    @Test
    public void adminLogin() throws Exception {
        String phone = "13678113250";
        //send code
        String responseString = mvc.perform(MockMvcRequestBuilders.post("/other/sendCode")
                .contentType(MediaType.APPLICATION_JSON_UTF8)
                .param("phone", phone)
                .param("type", String.valueOf(DynamicTypeEnum.LOGIN.getCode()))
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("code").value("200"))
                .andDo(MockMvcResultHandlers.print())
                .andReturn().getResponse().getContentAsString();
    }
}
