package com.jinxin.hospHealth.controller;

import com.alibaba.fastjson.JSON;
import com.jinxin.hospHealth.controller.protocol.PO.OrderInfoPO;
import com.jinxin.hospHealth.controller.protocol.PO.OrderProductPO;
import com.jinxin.hospHealth.controller.protocol.PO.OrderServiceDetailsPO;
import com.jinxin.hospHealth.dao.modelsEnum.DynamicTypeEnum;
import org.junit.Test;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by zbs on 2018/1/19.
 */
public class OrderControllerTest  {

    @Test
    public void add() throws Exception {
//        List<OrderProductPO> productSkuList = new ArrayList<>();
//        OrderProductPO p1 = new OrderProductPO();
//        p1.setQuantity(2);
//        p1.setProductSkuId(23L);
//        productSkuList.add(p1);
//        OrderInfoPO orderInfoPO = new OrderInfoPO();
//        orderInfoPO.setUserId(12L);
//        orderInfoPO.setOperationName("西米");
//        orderInfoPO.setAreaId(1L);
//        orderInfoPO.setType(0);
//        orderInfoPO.setOrderProductPOList(productSkuList);
//        String value = JSON.toJSONString(orderInfoPO);
//
//        System.out.print(value);


        OrderServiceDetailsPO po = new OrderServiceDetailsPO();
        po.setDoctorUserId(1L);
        po.setOrderProductId(3L);
        po.setAddress("成都高新区软件园1号");
        po.setDoctorAreaId(1L);
        po.setDoctorComment("多喝水,少熬夜,多休息,少看手机.");
        po.setQty(1);
        System.out.print(JSON.toJSONString(po));
//
//        mvc.perform(MockMvcRequestBuilders.post("/order/admin")
//                .contentType(MediaType.APPLICATION_JSON_UTF8)
//                .param("orderInfoPO",value)
//                .accept(MediaType.APPLICATION_JSON))
//                .andExpect(MockMvcResultMatchers.status().isOk())
//                //.andExpect(MockMvcResultMatchers.jsonPath("code").value("200"))
//                .andDo(MockMvcResultHandlers.print())
//                .andReturn().getResponse().getContentAsString();
    }
}
