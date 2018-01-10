package com.jinxin.hospHealth.dao.mapper;

import com.doraemon.base.dao.base.MyMapper;
import com.jinxin.hospHealth.dao.models.HospDoctorInfo;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Param;

import java.util.List;


public interface HospDoctorInfoMapper extends MyMapper<HospDoctorInfo> {

     @Select({
             " <script> ",
             " SELECT * FROM `hosp_doctor_info` where 1=1 ",
             " <if test='doctorInfo.name != null and doctorInfo.name != \"\"'> ",
             "   AND name LIKE CONCAT('%',#{doctorInfo.name},'%')",
             " </if> ",
             " <if test='doctorInfo.id != null and doctorInfo.id != \"\"'> ",
             "   AND id=#{doctorInfo.id}",
             " </if> ",
             " <if test='doctorInfo.hospAreaId != null and doctorInfo.hospAreaId != \"\"'> ",
             "   AND hosp_area_id=#{doctorInfo.hospAreaId}",
             " </if> ",
             " <if test='doctorInfo.doctorTypeId != null and doctorInfo.doctorTypeId != \"\"'> ",
             "   AND doctor_type_id=#{doctorInfo.doctorTypeId}",
             " </if> ",
             " <if test='doctorInfo.sex != null and doctorInfo.sex != \"\"'> ",
             "   AND sex=#{doctorInfo.sex}",
             " </if> ",
             " <if test='doctorInfo.phone != null and doctorInfo.phone != \"\"'> ",
             "   AND phone=#{doctorInfo.phone}",
             " </if> ",
             " <if test='doctorInfo.email != null and doctorInfo.email != \"\"'> ",
             "   AND email=#{doctorInfo.email}",
             " </if> ",
             " <if test='doctorInfo.age != null and doctorInfo.age != \"\"'> ",
             "   AND age=#{doctorInfo.age}",
             " </if> ",
             " <if test='doctorInfo.description != null and doctorInfo.description != \"\"'> ",
             "   AND description LIKE CONCAT('%',#{doctorInfo.description},'%')",
             " </if> ",
             " </script> "
     })
    List<HospDoctorInfo> selectByExampleByFuzzy(@Param("doctorInfo") HospDoctorInfo hospDoctorInfo);
}