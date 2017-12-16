package com.jinxin.hospHealth.dao.models;

import io.swagger.annotations.ApiModel;
import lombok.Data;

import javax.persistence.Id;
import javax.persistence.Table;


@Data
@ApiModel("用户地址信息")
@Table(name="hosp_address")
public class HospAddress {
    @Id
    private Long id;

    private Long userId;

    private String phone;

    private String userAddress;

}