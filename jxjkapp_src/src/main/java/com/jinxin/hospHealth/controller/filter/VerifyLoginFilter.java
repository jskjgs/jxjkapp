package com.jinxin.hospHealth.controller.filter;

import com.doraemon.base.redis.RedisOperation;
import com.jinxin.hospHealth.controller.MyBaseController;
import lombok.extern.log4j.Log4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.annotation.Order;

import java.io.IOException;
import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;

/**
 * Created by zbs on 2017/12/12.
 */
@Order(2)
@WebFilter(filterName = "VerifyLoginFilter", urlPatterns = {"/*"})
@Log4j
public class VerifyLoginFilter implements Filter {

    @Autowired
    private RedisOperation redisOperation;

    @Autowired
    private MyBaseController myBaseController;


    @Override
    public void init(FilterConfig filterConfig) throws ServletException {

    }

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        String token = ((HttpServletRequest) servletRequest).getHeader("Authorization");
        System.out.print("fdffdsfsdfds");
        filterChain.doFilter(servletRequest, servletResponse);
        try {
            if (token != null) {
                String userId = redisOperation.get(token);
                log.info("*******登录用户*****:" + userId);
                servletRequest.setAttribute("userId", userId);
                servletRequest.setAttribute("token", token);
                filterChain.doFilter(servletRequest, servletResponse);
            }
        } catch (Exception e) {
            servletResponse.getWriter().print(myBaseController.ResponseWrapperError(e,null));
        }
        servletResponse.getWriter().print(myBaseController.ResponseWrapperNotPermissions("用户没有登录."));
    }

    @Override
    public void destroy() {

    }
}
