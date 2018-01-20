package com.jinxin.hospHealth.service;

import com.jinxin.hospHealth.Main;
import com.jinxin.hospHealth.dao.models.HospUserBalance;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.math.BigDecimal;

/**
 * Created by zbs on 2017/12/29.
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = Main.class)
public class UserBalanceServiceTest {

    @Autowired
    UserBalanceService userBalanceService;

    @Test
    public void curdTest() throws Exception {
        HospUserBalance addHospUserBalance =new HospUserBalance();
        addHospUserBalance.setUserId(999L);
        userBalanceService.add(addHospUserBalance);

        HospUserBalance updateHospUserBalance_balance1 =new HospUserBalance();
        updateHospUserBalance_balance1.setUserId(999L);
        updateHospUserBalance_balance1.setBalance(new BigDecimal(100));
        userBalanceService.update(updateHospUserBalance_balance1);

        HospUserBalance updateHospUserBalance_lock1 =new HospUserBalance();
        updateHospUserBalance_lock1.setUserId(999L);
        updateHospUserBalance_lock1.setLockBalance(new BigDecimal(50));
        userBalanceService.update(updateHospUserBalance_lock1);

        HospUserBalance updateHospUserBalance_lock2 =new HospUserBalance();
        updateHospUserBalance_lock2.setUserId(999L);
        updateHospUserBalance_lock2.setLockBalance(new BigDecimal(60));
        try {
            userBalanceService.update(updateHospUserBalance_lock2);
            throw new Exception("错误");
        }catch (Exception e){
            System.out.print("ok");
        }

        HospUserBalance updateHospUserBalance_balance2 =new HospUserBalance();
        updateHospUserBalance_balance2.setUserId(999L);
        updateHospUserBalance_balance2.setBalance(new BigDecimal(-20));
        userBalanceService.update(updateHospUserBalance_balance2);


        HospUserBalance updateHospUserBalance_balance3 =new HospUserBalance();
        updateHospUserBalance_balance3.setUserId(999L);
        updateHospUserBalance_balance3.setBalance(new BigDecimal(-60));
        try {
            userBalanceService.update(updateHospUserBalance_balance3);
            throw new Exception("错误");
        }catch (Exception e){
            System.out.print("ok");
        }

        HospUserBalance selectHospUserBalance = userBalanceService.selectOne(999L);
        BigDecimal bigDecimal = new BigDecimal(80);
        Assert.assertTrue(bigDecimal.compareTo(selectHospUserBalance.getBalance()) == 0);


        try {
            userBalanceService.deleteOne(addHospUserBalance.getUserId());
            throw new Exception("错误");
        }catch (Exception e){
            System.out.print("ok");
        }

        HospUserBalance updateHospUserBalance_lock3 =new HospUserBalance();
        updateHospUserBalance_lock3.setUserId(999L);
        updateHospUserBalance_lock3.setLockBalance(new BigDecimal(-50));
        userBalanceService.update(updateHospUserBalance_lock3);
        HospUserBalance updateHospUserBalance_balance4 =new HospUserBalance();
        updateHospUserBalance_balance4.setUserId(999L);
        updateHospUserBalance_balance4.setBalance(new BigDecimal(-80));
        userBalanceService.update(updateHospUserBalance_balance4);
        userBalanceService.deleteOne(addHospUserBalance.getUserId());
        Assert.assertNull(userBalanceService.selectOneAdmin(addHospUserBalance.getUserId()));
    }
}
