package com.jinxin.hospHealth.service;

import com.doraemon.base.controller.bean.PageBean;
import com.github.pagehelper.PageInfo;

/**
 * Created by zbs on 2017/12/28.
 */
public interface  BaseService<T> {

    /**
     * 增加基本接口
     *
     * @param t
     * @throws Exception
     */
     void add(T t) throws Exception;

    /**
     * 修改基本接口
     *
     * @param t
     * @throws Exception
     */
     void update(T t) throws Exception;

    /**
     * 删除基本接口
     *
     * @param id
     * @throws Exception
     */
     void deleteOne(Long id) throws Exception;

    /**
     * 置为无效基本接口
     *
     * @param id
     * @throws Exception
     */
     void setStateAsInvalid(Long id) throws Exception;

    /**
     * 查询一个基本接口(过滤掉一切用户不关系的无效等) -- 提供给客户端
     *
     * @param id
     * @throws Exception
     */
     T selectOne(Long id) throws Exception;

    /**
     * 按条件查询(过滤掉一切用户不关系的无效等) -- 提供给客户端
     *
     * @param t
     * @throws Exception
     */
     PageInfo<T> select(T t) throws Exception;

    /**
     * 查询全部(过滤掉一切用户不关系的无效等) -- 提供给客户端
     *
     * @param pageBean
     * @throws Exception
     */
     PageInfo<T> selectAll(PageBean pageBean) throws Exception;

    /**
     * 查询一个基本接口-- 提供给admin端
     *
     * @param id
     * @throws Exception
     */
     T selectOneAdmin(Long id) throws Exception;

    /**
     * 按条件查询接口-- 提供给admin端
     *
     * @param t
     * @throws Exception
     */
     PageInfo<T> selectAdmin(T t) throws Exception;


    /**
     * 按查询全部接口-- 提供给admin端
     *
     * @param pageBean
     * @throws Exception
     */
     PageInfo<T> selectAllAdmin(PageBean pageBean) throws Exception;

}
