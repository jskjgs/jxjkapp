package com.jinxin.hospHealth.controller.filter;

import lombok.extern.log4j.Log4j;

import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import java.io.IOException;

/**
 * Created by zbs on 2018/1/15.
 */

@WebFilter(filterName = "AdminLoginFilter", urlPatterns = {
        "/hospHealth/order/*",
        "/hospHealth/patientInfo/*",
        "/hospHealth/precontract/*",
        "/hospHealth/userBalance/*"})
@Log4j
public class AdminLoginFilter implements Filter {

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {

    }

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {

    }

    @Override
    public void destroy() {

    }
}
