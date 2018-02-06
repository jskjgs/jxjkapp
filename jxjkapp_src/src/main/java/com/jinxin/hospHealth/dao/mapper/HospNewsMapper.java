package com.jinxin.hospHealth.dao.mapper;

import com.doraemon.base.dao.base.MyMapper;
import com.jinxin.hospHealth.dao.models.HospNews;
import org.apache.ibatis.annotations.Select;
import org.springframework.data.repository.query.Param;

import java.util.List;


public interface HospNewsMapper extends MyMapper<HospNews> {

    @Select({
            " <script> ",
            " SELECT * FROM hosp_news where 1=1 ",
            " <if test='news.title != null and news.title != \"\"'> ",
            "   AND title LIKE CONCAT('%',#{news.title},'%')",
            " </if> ",
            " <if test='news.id != null and news.id != \"\"'> ",
            "   AND id = #{news.id} ",
            " </if> ",
            " <if test = 'news.startTime != null and news.startTime != \"\"'> ",
            "   and create_date &gt;= #{news.startTime}",
            " </if>",
            " <if test = 'news.stopTime != null and news.stopTime != \"\"'> ",
            "   and create_date &lt;= #{news.stopTime}",
            " </if>",
            " <if test='news.enable != null and news.enable != \"\"'> ",
            "   AND enable = #{news.enable} ",
            " </if> ",
            " </script> "
    })
    List<HospNews> selectByExampleByFuzzy(@Param("news") HospNews hospNews);

}