package com.jinxin.hospHealth.service;

import com.jinxin.hospHealth.Main;
import com.jinxin.hospHealth.dao.mapper.HospCallNumberMapper;
import com.jinxin.hospHealth.dao.mapper.HospDoctorInfoMapper;
import com.jinxin.hospHealth.dao.mapper.HospPrecontractMapper;
import com.jinxin.hospHealth.dao.models.HospCallNumber;
import com.jinxin.hospHealth.dao.models.HospDoctorInfo;
import com.jinxin.hospHealth.dao.models.HospPrecontract;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.text.SimpleDateFormat;
import java.util.List;

/**
 * Created by zbs on 2018/1/8.
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = Main.class)
public class SqlTest {

    @Autowired
    HospPrecontractMapper hospPrecontractMapper;

    @Test
    public  void select(){
        HospPrecontract precontract = new HospPrecontract();
       // SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
      //  precontract.setStartTime("1990-09-09 11:00:00");
      //  precontract.setStopTime("2990-09-09 11:00:00");
       List<HospPrecontract> req = hospPrecontractMapper.selectByExampleByCustom(precontract);
       for (HospPrecontract h : req){
           System.out.println("*******"+h.getId());
       }
    }
}
