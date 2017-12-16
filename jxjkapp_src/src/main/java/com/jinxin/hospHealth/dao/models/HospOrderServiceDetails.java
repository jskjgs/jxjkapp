package com.jinxin.hospHealth.dao.models;

import lombok.Data;

import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;

@Data
@Table(name="hosp_order_service_details")
public class HospOrderServiceDetails {
    @Id
    private Long id;

    private String code;

    private Long orderProductId;

    private Integer qty;

    private Long doctorId;

    private String doctorName;

    private String doctorComment;

    private Long gradeId;

    private Integer state;

    private Date createDate;

    private Date updateDate;

    private String address;


}