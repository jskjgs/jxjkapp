package com.jinxin.hospHealth.dao.mapper;

import com.doraemon.base.dao.base.MyMapper;
import com.jinxin.hospHealth.dao.models.HospPrecontract;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import java.util.List;

public interface HospPrecontractMapper extends MyMapper<HospPrecontract> {

    @Select({"<script>" +
            "    select * from hosp_precontract where 1=1 " +
            " <if test = 'hospPrecontract.id != null and hospPrecontract.id != \"\"'> " +
            "    and id = #{hospPrecontract.id}" +
            " </if>  " +
            " <if test = 'hospPrecontract.userIds != null '> " +
            "   and user_id in " +
            "      <foreach item='id' index='index' collection='hospPrecontract.userIds' open='(' separator=',' close=')'>" +
            "           #{id}" +
            "       </foreach>" +
            " </if>  " +
            " <if test = 'hospPrecontract.userId != null and hospPrecontract.userId != \"\"'> " +
            "   and user_id = #{hospPrecontract.userId}" +
            " </if>  " +
            " <if test = 'hospPrecontract.areaId != null and hospPrecontract.areaId != \"\"'> " +
            "   and area_id = #{hospPrecontract.areaId}" +
            " </if>  " +
            " <if test = 'hospPrecontract.productSkuIds != null '> " +
            "   and product_sku_id in " +
            "      <foreach item='id' index='index' collection='hospPrecontract.productSkuIds' open='(' separator=',' close=')'>" +
            "           #{id}" +
            "       </foreach>" +
            " </if>  " +
            " <if test = 'hospPrecontract.status != null and hospPrecontract.status != \"\"'> " +
            "   and status = #{hospPrecontract.status}" +
            " </if>  " +
            " <if test = 'hospPrecontract.startTime != null and hospPrecontract.startTime != \"\"'> " +
            "   and precontract_date &gt;= #{hospPrecontract.startTime}" +
            " </if>" +
            " <if test = 'hospPrecontract.stopTime != null and hospPrecontract.stopTime != \"\"'> " +
            "   and precontract_date &lt;= #{hospPrecontract.stopTime}" +
            " </if>" +
            " </script>"})
    List<HospPrecontract> selectByExampleByCustom(@Param("hospPrecontract")HospPrecontract hospPrecontract);

}