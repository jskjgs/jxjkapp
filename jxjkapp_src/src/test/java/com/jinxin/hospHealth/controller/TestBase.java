package com.jinxin.hospHealth.controller;

import com.jinxin.hospHealth.Main;
import org.junit.Before;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

/**
 * Created by zbs on 2018/1/19.
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = Main.class)
public class TestBase {

    @Autowired
    protected WebApplicationContext context;

    protected MockMvc mvc;

    @Before // 在测试开始前初始化工作
    public void before() {
        this.mvc = MockMvcBuilders.webAppContextSetup(this.context).build();
    }
}
