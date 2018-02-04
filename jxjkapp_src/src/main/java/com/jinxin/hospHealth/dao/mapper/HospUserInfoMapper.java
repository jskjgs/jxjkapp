package com.jinxin.hospHealth.dao.mapper;

import com.doraemon.base.dao.base.MyMapper;
import com.jinxin.hospHealth.dao.models.HospUserInfo;
import org.apache.ibatis.annotations.Select;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Service;

import java.util.List;


public interface HospUserInfoMapper extends MyMapper<HospUserInfo> {

    /**
     * 模糊查询按: 用户ID/手机号/就诊人身份证号码/就诊卡号/就诊人姓名
     * @param text
     * @return
     */
    @Select({"select * from hosp_user_info " +
            " where phone LIKE CONCAT('%',#{text},'%') " +
            " or id in ( " +
            "         select user_id from hosp_patient_info " +
            "               where card_id LIKE CONCAT('%',#{text},'%') " +
            "               or patient_card LIKE CONCAT('%',#{text},'%') " +
            "               or name LIKE CONCAT('%',#{text},'%')" +
            "           ) " +
            " or id LIKE CONCAT('%',#{text},'%') " })
    List<HospUserInfo> selectFuzzy(@Param("text") String text);
}