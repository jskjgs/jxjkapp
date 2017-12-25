package com.jinxin.hospHealth.controller.filter;

import com.alibaba.fastjson.JSON;
import com.doraemon.base.util.IpTool;
import lombok.Data;
import lombok.extern.log4j.Log4j;
import org.springframework.core.annotation.Order;

import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.util.Map;

/**
 * Created by zbs on 2017/12/12.
 */

//@Order(1)
//@WebFilter(filterName = "LoggerFilter", urlPatterns = {"/*"})
//@Log4j
public class LoggerFilter {}
//implements Filter{
//    @Override
//    public void init(FilterConfig filterConfig) throws ServletException {
//    }
//
//    @Override
//    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
//        HttpServletRequest request = (HttpServletRequest) servletRequest;
//        InfoMessage infoMessage = new InfoMessage();
//        infoMessage.setUrl(request.getRequestURI());
//        infoMessage.setData(request.getParameterMap());
//        infoMessage.setIp(IpTool.getIp(request));
//        log.info(JSON.toJSON(infoMessage));
//        filterChain.doFilter(servletRequest, servletResponse);
//    }
//
//    @Override
//    public void destroy() {
//
//    }
//
//    @Data
//    class InfoMessage {
//        String url;
//        Map<String, String[]> data;
//        String ip;
//    }
//}
