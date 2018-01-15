package com.jinxin.hospHealth.worker;

import com.doraemon.base.redis.RedisOperation;
import com.github.pagehelper.PageInfo;
import com.jinxin.hospHealth.controller.protocol.PO.OrderInfoPO;
import com.jinxin.hospHealth.controller.protocol.VO.OrderVO;
import com.jinxin.hospHealth.dao.models.HospOrder;
import com.jinxin.hospHealth.dao.modelsEnum.EnableEnum;
import com.jinxin.hospHealth.dao.modelsEnum.OrderStateEnum;
import com.jinxin.hospHealth.service.OrderService;
import lombok.extern.log4j.Log4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import java.util.Date;
import java.util.List;

/**
 * 未支付订单失效
 * <p>
 * Created by zbs on 2018/1/10.
 */
@Component
@Log4j
public class OrderFailureWork {

    @Autowired
    OrderService orderService;
    @Autowired
    RedisOperation redisOperation;
    @Value("${order.close-time}")
    String orderCloseTime;
    @Value("${order.clone-que}")
    String orderCloneQue;

    @Scheduled(cron="${cron.send-close-order-time}")
    public void sendCloseOrder() throws Exception {
        OrderInfoPO select = new OrderInfoPO();
        select.setState(OrderStateEnum.NON_PAYMENT.getCode());
        PageInfo<OrderVO> pageInfo = orderService.select(select);
        List<OrderVO> hospOrderList = pageInfo.getList();
        if (hospOrderList == null)
            return;
        for (OrderVO orderVO : hospOrderList) {
            Long createTime = orderVO.getCreateDate().getTime();
            Long newTime = (new Date()).getTime();
            if ((newTime - createTime) >= Long.valueOf(orderCloseTime)) {
                log.info("send clone order id = " + orderVO.getId());
                redisOperation.usePool().push(orderCloneQue, String.valueOf(orderVO.getId()));
            }
        }
    }

    @Scheduled(cron="${cron.clone-order-time}")
    public void cloneOrder() throws Exception {
        String id = redisOperation.pop(orderCloneQue);
        while (id != null && !"".equals(id)){
            log.info("run clone order id = "+id);
            orderService.close(Long.valueOf(id));
            id = redisOperation.pop(orderCloneQue);
        }
    }
}
