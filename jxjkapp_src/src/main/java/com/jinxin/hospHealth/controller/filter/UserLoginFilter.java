package com.jinxin.hospHealth.controller.filter;

import com.alibaba.fastjson.JSON;
import com.doraemon.base.controller.Result;
import com.doraemon.base.redis.RedisOperation;
import com.doraemon.base.util.IpTool;
import com.jinxin.hospHealth.utils.Constant;
import lombok.Data;
import lombok.extern.log4j.Log4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.annotation.Order;

import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import javax.servlet.annotation.WebInitParam;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.util.Map;

/**
 * 对用户需要访问的页面进行拦截,判断是否有token
 * Created by zbs on 2017/12/12.
 */

@WebFilter(filterName = "UserLoginFilter", urlPatterns = {
        "/hospHealth/order/*",
        "/hospHealth/patientInfo/*",
        "/hospHealth/precontract/*",
        "/hospHealth/userBalance/*"})
@Log4j
public class UserLoginFilter implements Filter{

    @Autowired
    RedisOperation redisOperation;

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
    }

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        HttpServletRequest request = (HttpServletRequest) servletRequest;
        Result result = new Result();
        String token = request.getHeader("Authorization");
        if(token == null){
            servletResponse.getWriter().print(result.addMessage("Please log in.").ExeFaild(401));
            return;
        }
        try {
            String userId = redisOperation.get(token);
            if(userId == null || "".equals(userId)){
                servletResponse.getWriter().print(result.addMessage("Please log in.").ExeFaild(401));
                return;
            }
            servletRequest.setAttribute("userId",userId);
            filterChain.doFilter(servletRequest, servletResponse);
        }catch (Exception e){
            e.printStackTrace();
            servletResponse.getWriter().print(result.addMessage("Please log in.").ExeFaild(401));
            return;
        }
    }

    @Override
    public void destroy() {

    }

}
