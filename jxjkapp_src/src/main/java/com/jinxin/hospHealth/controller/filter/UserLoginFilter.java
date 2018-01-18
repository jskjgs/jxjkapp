package com.jinxin.hospHealth.controller.filter;

import com.doraemon.base.controller.Result;
import com.doraemon.base.redis.RedisOperation;
import com.jinxin.hospHealth.utils.Constant;
import lombok.extern.log4j.Log4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;

import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;

/**
 * 对用户需要访问的页面进行拦截,判断是否有token
 * Created by zbs on 2017/12/12.
 */

@WebFilter(filterName = "UserLoginFilter", urlPatterns = {
        "/hospHealth/order/*",
        "/hospHealth/patientInfo/*",
        "/hospHealth/precontract/*",
        "/hospHealth/userBalance/*",
        "/hospHealth/userInfo/admin/*"})
@Log4j
public class UserLoginFilter implements Filter {

    @Autowired
    RedisOperation redisOperation;

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
    }

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        HttpServletRequest request = (HttpServletRequest) servletRequest;
        Result result = new Result();
        if (adminUser(request) || user(request)) {
            filterChain.doFilter(servletRequest, servletResponse);
        } else {
            servletResponse.getWriter().print(result.addMessage("Please log in.").ExeFaild(401));
            return;
        }
    }


    private boolean adminUser(HttpServletRequest request) {
        String token = request.getHeader(Constant.HEADER_PERMISSIONS);
        if (request.getSession().getAttribute(token) == null) {
            log.error("session中没有获取到token  --> " + token);
            return false;
        }
        try {
            String adminUserId = redisOperation.get(token);
            if (adminUserId == null || "".equals(adminUserId)) {
                log.error("从redis获取到admin user id 为空  --> " + token);
                return false;
            }
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    private boolean user(HttpServletRequest request) {
        String token = request.getHeader(Constant.HEADER_PERMISSIONS);
        if (token == null)
            return false;
        try {
            String userId = redisOperation.get(token);
            if (userId == null || "".equals(userId))
                return false;
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }


    @Override
    public void destroy() {

    }

}
