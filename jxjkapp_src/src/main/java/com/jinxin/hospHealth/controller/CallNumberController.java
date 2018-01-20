package com.jinxin.hospHealth.controller;

import com.alibaba.fastjson.JSONObject;
import com.doraemon.base.controller.bean.PageBean;
import com.doraemon.base.guava.DPreconditions;
import com.doraemon.base.language.Language;
import com.github.pagehelper.PageInfo;
import com.jinxin.hospHealth.dao.models.HospPatientInfo;
import com.jinxin.hospHealth.dao.models.HospUserInfo;
import com.jinxin.hospHealth.service.CallNumberService;
import com.jinxin.hospHealth.service.PatientInfoService;
import com.jinxin.hospHealth.service.UserInfoService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by zbs on 2018/1/5.
 */
@RestController
@RequestMapping("/call")
@Slf4j
@Api(description = "排队叫号")
public class CallNumberController extends MyBaseController{

    @Autowired
    CallNumberService callNumberService;

    @Autowired
    PatientInfoService patientInfoService;

    @Autowired
    UserInfoService userInfoService;

}
