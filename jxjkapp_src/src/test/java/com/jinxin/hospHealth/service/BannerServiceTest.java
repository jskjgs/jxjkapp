package com.jinxin.hospHealth.service;

import com.doraemon.base.util.RandomUtil;
import com.jinxin.hospHealth.Main;
import com.jinxin.hospHealth.dao.models.HospBanner;
import com.jinxin.hospHealth.dao.modelsEnum.ShowEnum;
import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

/**
 * Created by zbs on 2018/1/11.
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = Main.class)
public class BannerServiceTest {

    @Autowired
    BannerService bannerService;

    @Test
    public HospBanner init() {
        HospBanner hospBanner = new HospBanner();
        hospBanner.setName(RandomUtil.getRandomStringByLength(5));
        hospBanner.setBannerUrl("https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2017546676,1257169761&fm=27&gp=0.jpg");
        hospBanner.setJumpUrl("https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2017546676,1257169761&fm=27&gp=0.jpg");
        hospBanner.setOrderNumber(Integer.valueOf(RandomUtil.getRandomIntByLength(2)));
        hospBanner.setDisplay(hospBanner.getOrderNumber() > 10
                ? ShowEnum.DISPLAY.getCode()
                : ShowEnum.NOT_DISPLAY.getCode());
        return hospBanner;
    }

    @Test
    public void service() throws Exception {
        HospBanner hospBanner = init();
        //valid add
        bannerService.add(hospBanner);
        Assert.assertNotNull(hospBanner.getId());
        //valid update
        String newName = "修改后的banner";
        Integer newOrderNumber = 1;
        hospBanner.setName(newName);
        hospBanner.setOrderNumber(newOrderNumber);
        bannerService.update(hospBanner);
        //valid select One
        HospBanner req = bannerService.selectOne(hospBanner.getId());
        if(hospBanner.getOrderNumber() > 10)
            Assert.assertNotNull(req);
        else
            Assert.assertNull(req);
        //valid update
        Assert.assertEquals(req.getName(),newName);
        Assert.assertEquals(req.getOrderNumber(),newOrderNumber);
        //valid select all
        hospBanner.setDisplay(ShowEnum.DISPLAY.getCode());
        bannerService.update(hospBanner);
        Integer size = bannerService.selectAll(null).getList().size();
        //valid select all show size
        Assert.assertTrue(size > 0);
        hospBanner.setDisplay(ShowEnum.NOT_DISPLAY.getCode());
        bannerService.update(hospBanner);
        Integer newSize = bannerService.selectAll(null).getList().size();
        //valid select all not show size
        Assert.assertTrue(size-1 == newSize);
        //vaild select
        HospBanner select = new HospBanner();
    }
}
