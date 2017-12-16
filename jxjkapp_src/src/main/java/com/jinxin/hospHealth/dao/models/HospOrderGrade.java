package com.jinxin.hospHealth.dao.models;

import lombok.Data;

import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;

@Data
@Table(name="hosp_order_grade")
public class HospOrderGrade {
    @Id
    private Long id;

    private Integer level;

    private Date createDate;

    private Date updateDate;

    private Integer enable;

    private String comment;

}