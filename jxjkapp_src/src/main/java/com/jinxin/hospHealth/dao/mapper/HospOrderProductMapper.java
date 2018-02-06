package com.jinxin.hospHealth.dao.mapper;

import com.doraemon.base.dao.base.MyMapper;
import com.jinxin.hospHealth.dao.models.HospOrderProduct;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import java.util.List;


public interface HospOrderProductMapper extends MyMapper<HospOrderProduct> {

    @Select({
            " select distinct a.* from hosp_order_product as a,hosp_order as b ",
            " where a.id in  (",
            "    select distinct a.id from hosp_order_product as a, hosp_order as b where a.order_id = b.id ",
            "    and a.state = 0 and b.pay_state = 1",
            " )",
            " and b.patient_info_id = #{patientId}"
    })
    List<HospOrderProduct> queryByPatientId(@Param("patientId") Long patientId);
}