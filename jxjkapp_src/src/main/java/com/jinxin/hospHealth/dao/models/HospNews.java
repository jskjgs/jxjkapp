package com.jinxin.hospHealth.dao.models;

import io.swagger.annotations.ApiModel;
import lombok.Data;

import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;

@Data
@ApiModel("新闻")
@Table(name="hosp_news")
public class HospNews {
    @Id
    private Long id;

    private String title;

    private String images;

    private String source;

    private String content;

    private Integer sortNumber;

    private Date createDate;

    private Integer enable;

}