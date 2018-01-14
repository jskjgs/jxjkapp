package com.jinxin.hospHealth.controller;

import com.alibaba.fastjson.JSONObject;
import com.jinxin.hospHealth.service.OssFileService;
import com.jinxin.hospHealth.utils.FileCheckUtil;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;

/**
 * Created by zbs on 2018/1/14.
 */


@RestController
@RequestMapping("/fileUpload")
@Slf4j
@Api(description = "文件上传相关接口")
public class FileUploadController extends MyBaseController{

    @Autowired
    OssFileService fileService;

    @ApiOperation(value = "image文件上传接口")
    @RequestMapping(value="/image", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject upload(
            @ApiParam(value = "文件内容", required = true) @RequestBody MultipartFile file,
            @ApiParam(value = "类型", required = true) @RequestBody String type) throws Exception {
        if(file == null){
            return ResponseWrapperShowError(null,"上传的文件内容不能为空.");
        }
        String path = fileService.uploadImage(file,"images/"+type);
        return ResponseWrapperSuccess(path);
    }

}
