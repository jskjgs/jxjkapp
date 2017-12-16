package com.jinxin.hospHealth.controller;

import com.alibaba.fastjson.JSONObject;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;
import springfox.documentation.annotations.ApiIgnore;

import java.util.List;

/**
 * Created by zbs on 2017/12/12.
 */

@RestController
@RequestMapping("/test")
@Slf4j
@Api(description = "test")
public class TestController extends MyBaseController{

    @RequestMapping(value="a", method = RequestMethod.GET)
    @ResponseBody
    public JSONObject test() throws Exception {
       return ResponseWrapperSuccess("测测试测试");
    }
}
