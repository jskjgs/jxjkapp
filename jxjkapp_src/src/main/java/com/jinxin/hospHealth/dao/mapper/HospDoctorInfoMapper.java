package com.jinxin.hospHealth.dao.mapper;

import com.doraemon.base.dao.base.MyMapper;
import com.jinxin.hospHealth.dao.models.HospDoctorInfo;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Service;

import java.util.List;


public interface HospDoctorInfoMapper extends MyMapper<HospDoctorInfo> {


     @Select({"<script>" +
             " select * from hosp_doctor_info where 1=1 " +
             " <if test = \"id != null \"> and id = #{id}</if>  " +
             " <if test = \"name != null \"> and name like CONCAT('%','%#{name}%','%')</if>  " +
             " <if test = \"hospAreaId != null \"> and hosp_area_id = #{hospAreaId}</if>  " +
             " <if test = \"doctorTypeId != null \"> and doctor_type_id = #{doctorTypeId}</if>  " +
             " <if test = \"headPortrait != null \"> and head_portrait like CONCAT('%','%#{headPortrait}%','%')</if>  " +
             " <if test = \"sex != null \"> and sex = #{sex}</if>  " +
             " <if test = \"phone != null \"> and phone = #{phone}</if>  " +
             " <if test = \"email != null \"> and email = #{email}</if>  " +
             " <if test = \"age != null \"> and age = #{age}</if>  " +
             " </script>"})
    List<HospDoctorInfo> selectByExampleByFuzzy(HospDoctorInfo hospDoctorInfo);
}