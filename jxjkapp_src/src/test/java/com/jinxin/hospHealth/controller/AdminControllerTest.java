package com.jinxin.hospHealth.controller;

import com.jinxin.hospHealth.Main;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import javax.servlet.http.HttpServletResponse;
import java.io.OutputStream;
import java.io.PrintWriter;

/**
 * Created by zbs on 2018/1/18.
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = Main.class)
public class AdminControllerTest {

    @Autowired
    private WebApplicationContext context;

    private MockMvc mvc;

    @Before // 在测试开始前初始化工作
    public void before() {
        this.mvc = MockMvcBuilders.webAppContextSetup(this.context).build();
    }

    @Test
    public void normalProcess() throws Exception {
        //login
        MvcResult result = mvc.perform(MockMvcRequestBuilders.post("/admin/login")
                .contentType(MediaType.APPLICATION_JSON_UTF8)
                .param("account", "13678113250")
                .param("password", "222222")
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("code").value("200"))
                .andDo(MockMvcResultHandlers.print())
                .andReturn();
    }
}
