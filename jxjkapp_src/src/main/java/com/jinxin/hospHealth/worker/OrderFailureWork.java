package com.jinxin.hospHealth.worker;

import com.doraemon.base.controller.bean.PageBean;
import com.doraemon.base.redis.RedisOperation;
import com.github.pagehelper.PageInfo;
import com.jinxin.hospHealth.controller.protocol.PO.OrderInfoPO;
import com.jinxin.hospHealth.dao.models.HospOrder;
import com.jinxin.hospHealth.dao.modelsEnum.OrderStateEnum;
import com.jinxin.hospHealth.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.validation.annotation.Validated;

import java.util.Date;
import java.util.List;

/**
 * 未支付订单失效
 *
 * Created by zbs on 2018/1/10.
 */
@Component
public class OrderFailureWork {

    @Autowired
    OrderService orderService;


    public void failure() throws Exception {
        OrderInfoPO select = new OrderInfoPO();
        select.setState(OrderStateEnum.NON_PAYMENT.getCode());
        PageInfo<HospOrder> pageInfo = orderService.select(select);
        List<HospOrder> hospOrderList = pageInfo.getList();
        if(hospOrderList != null) {
            for (HospOrder hospOrder : hospOrderList){
                Date createTime = hospOrder.getCreateDate();
//                if((newTime - createTime.getTimeInMillis()) > 1800000)
            }
        }
    }
}
