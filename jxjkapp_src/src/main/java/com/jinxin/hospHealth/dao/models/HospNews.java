package com.jinxin.hospHealth.dao.models;

import com.doraemon.base.controller.bean.PageBean;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;

@Data
@ApiModel("新闻")
@Table(name="hosp_news")
public class HospNews extends PageBean {
    @Id
    @ApiModelProperty("新闻ID")
    private Long id;
    @ApiModelProperty("标题")
    private String title;
    @ApiModelProperty("图片，使用逗号分隔")
    private String images;
    @ApiModelProperty("来源")
    private String source;
    @ApiModelProperty("内容")
    private String content;
    @ApiModelProperty("排序")
    private Integer sortNumber;
    @ApiModelProperty("创建时间")
    private Date createDate;
    @ApiModelProperty("0:正常 1:禁用  99:删除")
    private Integer enable;

}