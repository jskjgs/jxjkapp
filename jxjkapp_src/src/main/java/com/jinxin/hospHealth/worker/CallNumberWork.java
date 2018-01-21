package com.jinxin.hospHealth.worker;

import com.doraemon.base.redis.RedisOperation;
import com.github.pagehelper.PageInfo;
import com.jinxin.hospHealth.dao.models.HospArea;
import com.jinxin.hospHealth.service.HospAreaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

/**
 * 排队叫号,号码失效信息
 * Created by zbs on 2018/1/5.
 */
@Component
public class CallNumberWork {

    @Autowired
    HospAreaService hospAreaService;
    @Autowired
    RedisOperation redisOperation;

    @Value("${call-number.waiting-que-name}")
    String waitingQueName;

    /**
     * 每天晚上清理当天的排队叫号队列
     * @throws Exception
     */
    @Scheduled(cron="${cron.clean-call-number-que}")
    public void cleanCallNumberQue() throws Exception {
        PageInfo<HospArea> pageInfo = hospAreaService.selectAll(null);
        for(HospArea hospArea : pageInfo.getList()){
            redisOperation.usePool().del(waitingQueName+hospArea.getId());
        }
    }
}
