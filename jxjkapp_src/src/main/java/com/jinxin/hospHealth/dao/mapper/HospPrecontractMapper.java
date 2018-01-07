package com.jinxin.hospHealth.dao.mapper;

import com.doraemon.base.dao.base.MyMapper;
import com.jinxin.hospHealth.dao.models.HospPrecontract;
import org.apache.ibatis.annotations.Select;

import java.util.List;

public interface HospPrecontractMapper extends MyMapper<HospPrecontract> {

    @Select({"<script>" +
            " select * from hosp_precontract where 1=1 " +
            " <if test = \"id != null \"> and id = #{id}</if>  " +
            " <if test = \"userIds != null \"> and user_id in (#{userIds})</if>  " +
            " <if test = \"productSkuIds != null \"> and product_sku_id in (#{productSkuIds})</if>  " +
            " <if test = \"status != null \"> and status = #{status}</if>  " +
            " <if test = \"startTime != null and stopTime != null \"> and  precontract_date BETWEEN #{startTime} AND #{stopTime}</if>  " +
            " </script>"})
    List<HospPrecontract> selectByExampleByCustom(HospPrecontract hospPrecontract);

}