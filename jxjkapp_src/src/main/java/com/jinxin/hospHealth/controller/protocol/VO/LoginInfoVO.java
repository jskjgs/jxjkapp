package com.jinxin.hospHealth.controller.protocol.VO;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

/**
 * Created by zbs on 2017/12/25.
 */
@Data
@ApiModel("登陆用户信息")
public class LoginInfoVO {

    @ApiModelProperty("是否之前在系统中有注册过")
    boolean isEmpty;
    @ApiModelProperty("用户信息")
    UserInfoVO userInfo;
    @ApiModelProperty("token")
    String token;
    @ApiModelProperty("验证码---本手机")
    String code;
    @ApiModelProperty("验证码---新手机")
    String newCode;
}
