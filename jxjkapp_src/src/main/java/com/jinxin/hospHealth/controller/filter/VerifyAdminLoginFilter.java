package com.jinxin.hospHealth.controller.filter;

import lombok.extern.log4j.Log4j;
import org.springframework.core.annotation.Order;

import javax.servlet.annotation.WebFilter;

/**
 * Created by zbs on 2018/1/2.
 */
@Order(2)
@WebFilter(filterName = "VerifyAdminLoginFilter", urlPatterns = {"/userInfo/*"})
@Log4j
public class VerifyAdminLoginFilter {
}
