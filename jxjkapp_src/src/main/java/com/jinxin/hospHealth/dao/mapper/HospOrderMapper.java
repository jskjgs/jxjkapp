package com.jinxin.hospHealth.dao.mapper;

import com.doraemon.base.dao.base.MyMapper;
import com.jinxin.hospHealth.controller.protocol.PO.OrderInfoPO;
import com.jinxin.hospHealth.dao.models.HospOrder;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import java.util.List;

public interface HospOrderMapper extends MyMapper<HospOrder> {

    @Select({"<script>" +
            " select * from hosp_order where 1=1" +
            " <if test = 'order.display != null and order.display != \"\"'> " +
            "   and display = #{order.display}" +
            " </if>  " +
            " <if test = 'order.id != null and order.id != \"\"'> " +
            "   and id = #{order.id}" +
            " </if>  " +
            " <if test = 'order.code != null and order.code != \"\"'> " +
            "   and code = #{order.code}" +
            " </if>  " +
            " <if test = 'order.userId != null and order.userId != \"\"'> " +
            "   and user_id = #{order.userId}" +
            " </if>  " +
            " <if test = 'order.type != null and order.type != \"\"'> " +
            "   and type = #{order.type}" +
            " </if>  " +
            " <if test = 'order.payState != null and order.payState != \"\"'> " +
            "   and pay_state = #{order.payState}" +
            " </if>  " +
            " <if test = 'order.refundState != null and order.refundState != \"\"'> " +
            "   and refund_state = #{order.refundState}" +
            " </if>  " +
            " <if test = 'order.paymentType != null and order.paymentType != \"\"'> " +
            "   and payment_type = #{order.paymentType}" +
            " </if>  " +
            " <if test = 'order.startTime != null and order.startTime != \"\"'>" +
            "   and create_date &gt;= #{order.startTime}" +
            " </if>" +
            " <if test = 'order.stopTime != null and order.stopTime != \"\"'>" +
            "   and create_date &lt;= #{order.stopTime}" +
            " </if>" +
            " <if test = 'order.userIds != null and order.userIds != \"\"'>" +
            "   and user_id in (#{order.userIds})" +
            " </if>" +
            " </script>"})
    List<HospOrder> selectByExampleByCustom(@Param("order") OrderInfoPO orderInfoPO);

}