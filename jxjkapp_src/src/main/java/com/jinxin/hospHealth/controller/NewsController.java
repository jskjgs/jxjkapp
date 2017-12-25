package com.jinxin.hospHealth.controller;

import com.alibaba.fastjson.JSONObject;
import com.doraemon.base.controller.bean.PageBean;
import com.jinxin.hospHealth.dao.models.HospNews;
import com.jinxin.hospHealth.service.NewsService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by zbs on 2017/12/24.
 */
@RestController
@RequestMapping("/news")
@Slf4j
@Api(description = "新闻相关接口")
public class NewsController extends MyBaseController {

    @Autowired
    NewsService newsService;


    @ApiOperation(value = "新增新闻信息")
    @RequestMapping(value="/", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject add(
            @ApiParam(value = "新闻信息", required = true) @RequestBody HospNews news) throws Exception {
        Map<String,Long> map = new HashMap<>();
        newsService.add(news);
        map.put("id", news.getId());
        return ResponseWrapperSuccess(map);
    }

    @ApiOperation(value = "更新新闻信息")
    @RequestMapping(value="/", method = RequestMethod.PUT)
    @ResponseBody
    public JSONObject update(
            @ApiParam(value = "新闻信息", required = true)  @RequestBody HospNews news) throws Exception {
        newsService.update(news);
        return ResponseWrapperSuccess(null);
    }

    @ApiOperation(value = "查询单个新闻信息",response = HospNews.class)
    @RequestMapping(value="/", method = RequestMethod.GET)
    @ResponseBody
    public JSONObject selectOne(
            @ApiParam(value = "新闻ID", required = true) @RequestParam(value = "id", required = true) Long id) throws Exception {
        return ResponseWrapperSuccess(newsService.selectOne(id));
    }

    @ApiOperation(value = "查询全部新闻信息",response = HospNews.class)
    @RequestMapping(value="/all", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject selectAll(
            @ApiParam(value = "分页信息", required = false)  @RequestBody(required = false) PageBean pageBean) throws Exception {
        return ResponseWrapperSuccess(newsService.selectAll(pageBean));
    }

    @ApiOperation(value = "根据条件查询新闻信息",response = HospNews.class)
    @RequestMapping(value="/query", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject select(
            @ApiParam(value = "新闻信息", required = true)  @RequestBody HospNews news) throws Exception {
        return ResponseWrapperSuccess(newsService.select(news));
    }

    @ApiOperation(value = "删除单个新闻信息")
    @RequestMapping(value="/", method = RequestMethod.DELETE)
    @ResponseBody
    public JSONObject deleteOne(
            @ApiParam(value = "新闻ID", required = true) @RequestParam(value = "id", required = true) Long id) throws Exception {
        newsService.deleteOne(id);
        return ResponseWrapperSuccess(null);
    }
}
