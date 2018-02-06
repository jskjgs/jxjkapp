package com.jinxin.hospHealth.dao.mapper;

import com.doraemon.base.dao.base.MyMapper;
import com.jinxin.hospHealth.controller.protocol.PO.OrderServiceDetailsPO;
import com.jinxin.hospHealth.dao.models.HospOrderProduct;
import com.jinxin.hospHealth.dao.models.HospOrderServiceDetails;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import java.util.List;


public interface HospOrderServiceDetailsMapper extends MyMapper<HospOrderServiceDetails> {


    @Select({"<script>" +
            " select * from hosp_order_service_details where 1=1" +
            " <if test = 'value.states!= null '> " +
            "   and state in " +
            "      <foreach item='id' index='index' collection='value.states' open='(' separator=',' close=')'>" +
            "           #{id}" +
            "       </foreach>" +
            " </if>  " +
            " <if test = 'value.state!= null and value.state!= \"\"'> " +
            "   and state = #{value.state}" +
            " </if>  " +
            " <if test = 'value.id!= null and value.id!= \"\"'> " +
            "   and id = #{value.id}" +
            " </if>  " +
            " <if test = 'value.code!= null and value.code!= \"\"'> " +
            "   and code = #{value.code}" +
            " </if>  " +
            " <if test = 'value.orderProductId!= null and value.orderProductId!= \"\"'> " +
            "   and order_product_id = #{value.orderProductId}" +
            " </if>  " +
            " <if test = 'value.doctorAreaId!= null and value.doctorAreaId!= \"\"'> " +
            "   and doctor_area_id = #{value.doctorAreaId}" +
            " </if>  " +
            " <if test = 'value.adminUserId!= null and value.adminUserId!= \"\"'> " +
            "   and admin_user_id = #{value.adminUserId}" +
            " </if>  " +
            " <if test = 'value.associatesId!= null and value.associatesId!= \"\"'> " +
            "   and associates_id = #{value.associatesId}" +
            " </if>  " +
            " <if test = 'value.gradeId!= null and value.gradeId!= \"\"'> " +
            "   and grade_id = #{value.gradeId}" +
            " </if>  " +
            " </script>"})
    List<HospOrderServiceDetails> selectByExampleByCustom(@Param("value") OrderServiceDetailsPO orderServiceDetailsPO);

    /**
     * 统计已经使用的数量
     *
     * @param orderProductId
     * @param state
     * @return
     */
    @Select({"select count(*) from hosp_order_service_details" +
            " where order_product_id = #{orderProductId} " +
            " and state != #{state};"})
    int countUseNumber(@Param("orderProductId") Long orderProductId, @Param("state") Integer state);

    @Select({"select a.* from hosp_order_service_details as a , hosp_order as b, hosp_order_product as c" +
            " where b.id = #{orderId}   and c.order_id = b.id and a.order_product_id = c.id"})
    List<HospOrderServiceDetails> queryByOrderId(@Param("orderId") Long orderId);



}