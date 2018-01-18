package com.jinxin.hospHealth.controller.protocol.VO;

import com.jinxin.hospHealth.dao.models.HospArea;
import com.jinxin.hospHealth.dao.models.HospDoctorInfo;
import com.jinxin.hospHealth.dao.models.HospDoctorType;
import com.jinxin.hospHealth.service.HospAreaService;
import com.jinxin.hospHealth.service.DoctorTypeService;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Configurable;

import java.util.Date;

/**
 * Created by zbs on 2017/12/25.
 */
@Data
@ApiModel("医生信息")
public class DoctorInfoVO {

    @ApiModelProperty("医生的ID")
    private Long id;
    @ApiModelProperty("医生的名称")
    private String name;
    @ApiModelProperty("医院院区")
    private HospArea hospArea;
    @ApiModelProperty("医生类别")
    private HospDoctorType doctorType;
    @ApiModelProperty("医生的头像")
    private String headPortrait;
    @ApiModelProperty("医生的性别 性别 女/男")
    private String sex;
    @ApiModelProperty("医生的电话")
    private String phone;
    @ApiModelProperty("医生的邮箱")
    private String email;
    @ApiModelProperty("医生的年龄")
    private Integer age;
    @ApiModelProperty("医生的生日")
    private Date birthday;
    @ApiModelProperty("医生的描述")
    private String description;

}
