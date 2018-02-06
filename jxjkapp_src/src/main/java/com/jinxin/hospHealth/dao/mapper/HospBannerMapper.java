package com.jinxin.hospHealth.dao.mapper;

import com.doraemon.base.dao.base.MyMapper;
import com.jinxin.hospHealth.dao.models.HospBanner;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import java.util.List;


public interface HospBannerMapper extends MyMapper<HospBanner>{

    @Select({
            " <script> ",
            " SELECT * FROM hosp_banner where 1=1 ",
            " <if test='banner.name != null and banner.name != \"\"'> ",
            "   AND name LIKE CONCAT('%',#{banner.name},'%')",
            " </if> ",
            " <if test='banner.id != null and banner.id != \"\"'> ",
            "   AND id = #{banner.id} ",
            " </if> ",
            " <if test='banner.display != null and banner.display != \"\"'> ",
            "   AND display = #{banner.display} ",
            " </if> ",
            " </script> "
    })
    List<HospBanner> selectByExampleByFuzzy(@Param("banner") HospBanner hospBanner);

}