package com.jinxin.hospHealth.dao.mapper;

import com.doraemon.base.dao.base.MyMapper;
import com.jinxin.hospHealth.dao.models.HospCallNumber;
import org.apache.ibatis.annotations.Select;

import java.util.List;

public interface HospCallNumberMapper extends MyMapper<HospCallNumber> {

    @Select({" <script>" +
            " select * from hosp_call_number where 1=1 " +
            " <if test = \"id != null \"> and id = #{id}</if>  " +
            " <if test = \"userId != null \"> and user_id = #{userId}</if>  " +
            " <if test = \"userIds != null \"> and user_id in (#{userIds})</if>  " +
            " <if test = \"state != null \"> and state = #{state}</if>  " +
            " <if test = \"startTime != null and stopTime != null \"> and  create_date BETWEEN #{startTime} AND #{stopTime}</if>  " +
            " </script>"})
    List<HospCallNumber> selectByExampleByCustom(HospCallNumber hospCallNumber);

}