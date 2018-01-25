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

    @Value("${token.adminToken-prefix}")
    String adminTokenPrefix;
    @Value("${token.userToken-prefix}")
    String userTokenPrefix;
    @Value("${token.doctorToken-prefix}")
    String doctorTokenPrefix;

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {}

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        HttpServletRequest request = (HttpServletRequest) servletRequest;
        Result result = new Result();
        if (validation(request,userTokenPrefix)
                || validation(request,adminTokenPrefix)) {
            filterChain.doFilter(servletRequest, servletResponse);
        } else {
            servletResponse.getWriter().print(result.addMessage("Please log in.").ExeFaild(401));
            return;
        }
    }

    private boolean validation(HttpServletRequest request,String tokenPrefix) {
        String token = request.getHeader(Constant.HEADER_PERMISSIONS);
        if (token == null || "".equals(token))
            return false;
        try {
            String id = redisOperation.usePool().get(tokenPrefix+token);
            if (id == null || "".equals(id))
                return false;
            if (!token.equals(redisOperation.usePool().get(tokenPrefix + id)))
                return false;
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

  //  private boolean user(HttpServletRequest request) {
//        String token = request.getHeader(Constant.HEADER_PERMISSIONS);
//        if (token == null)
//            return false;
//        try {
//            String userId = redisOperation.get(token);
//            if (userId == null || "".equals(userId))
//                return false;
//            return true;
//        } catch (Exception e) {
//            e.printStackTrace();
//            return false;
//        }

//        String token = request.getHeader(Constant.HEADER_PERMISSIONS);
//        if (token == null || "".equals(token))
//            return false;
//        try {
//            String adminUserId = redisOperation.usePool().get(token);
//            if (adminUserId == null || "".equals(adminUserId))
//                return false;
//            if (!token.equals(redisOperation.usePool().get(adminTokenPrefix + adminUserId)))
//                return false;
//            return true;
//        } catch (Exception e) {
//            e.printStackTrace();
//            return false;
//        }
//    }


    @Override
    public void destroy() {

    }

}
