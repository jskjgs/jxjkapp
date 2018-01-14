package com.jinxin.hospHealth.controller;

import com.alibaba.fastjson.JSONObject;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

/**
 * Created by zbs on 2018/1/15.
 */
@RestController
@RequestMapping("/admin")
@Slf4j
@Api(description = "admin相关接口")
public class AdminController extends MyBaseController{

    @ApiOperation(value = "新增banner信息")
    @RequestMapping(value="/login", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject login(
            @ApiParam(value = "账号", required = true) @RequestBody String account,
            @ApiParam(value = "密码", required = true) @RequestBody String password) throws Exception {
        return ResponseWrapperSuccess(null);
    }
}
