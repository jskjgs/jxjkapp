package com.jinxin.hospHealth.service;

import com.doraemon.base.protocol.mail.SendMail;
import com.doraemon.base.util.RandomUtil;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.mail.MailSender;
import org.springframework.test.context.junit4.SpringRunner;

/**
 * Created by zbs on 2018/1/17.
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = com.jinxin.hospHealth.Main.class)
public class Main {

    @Autowired
    SendMail sendMail;
    
    @Test
    public void mail() throws Exception {
        sendMail.setTo("zhoubinshan@bbdservice.com")
                .setSubject(RandomUtil.getRandomGBK(5))
                .setContext(" {0} " + RandomUtil.getRandomGBK(3) + " {1} " + RandomUtil.getRandomGBK(4))
                .setValues(new String[]{RandomUtil.getRandomGBK(2), RandomUtil.getRandomGBK(4)})
                .send();
    }
}
