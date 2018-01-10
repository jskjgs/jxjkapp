package com.jinxin.hospHealth.dao.mapper;

import com.doraemon.base.dao.base.MyMapper;
import com.jinxin.hospHealth.dao.models.HospCallNumber;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import java.util.List;

public interface HospCallNumberMapper extends MyMapper<HospCallNumber> {

    @Select({" <script>" +
            " select * from hosp_call_number where 1=1 " +
            " <if test = 'hospCallNumber.id != null and hospCallNumber.id != \"\"'> " +
            "  and id = #{hospCallNumber.id}" +
            " </if>  " +
            " <if test = 'hospCallNumber.userId != null and  hospCallNumber.userId != \"\"'> " +
            "  and user_id = #{hospCallNumber.userId}" +
            " </if>  " +
            " <if test = 'hospCallNumber.userIds != null and hospCallNumber.userIds != \"\"'> " +
            "  and user_id in (#{hospCallNumber.userIds})" +
            " </if>  " +
            " <if test = 'hospCallNumber.state != null and hospCallNumber.state != \"\"'> " +
            "  and state = #{hospCallNumber.state}" +
            " </if>  " +
            " <if test = 'hospCallNumber.startTime != null and hospCallNumber.startTime != \"\"'> " +
            "    and create_date &gt;= #{hospCallNumber.startTime} " +
            " </if> " +
            " <if test = 'hospCallNumber.stopTime != null and hospCallNumber.stopTime != \"\"'> " +
            "    and create_date &lt;= #{hospCallNumber.stopTime} " +
            " </if> " +
            " </script>"})
    List<HospCallNumber> selectByExampleByCustom(@Param("hospCallNumber") HospCallNumber hospCallNumber);

}