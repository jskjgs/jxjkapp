package com.jinxin.hospHealth.dao.mapper;

import com.doraemon.base.dao.base.MyMapper;
import com.jinxin.hospHealth.dao.models.HospOrderServiceDetails;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;


public interface HospOrderServiceDetailsMapper extends MyMapper<HospOrderServiceDetails> {


    /**
     * 统计已经使用的数量
     * @param orderProductId
     * @param state
     * @return
     */
    @Select({"select count(*) from hosp_order_service_details" +
            " where order_product_id = #{orderProductId} " +
            " and state != #{state};"})
    int countUseNumber(@Param("orderProductId") Long orderProductId,@Param("state") Integer state);

}