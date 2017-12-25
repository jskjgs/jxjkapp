package com.jinxin.hospHealth.service;

import com.doraemon.base.controller.bean.PageBean;
import com.doraemon.base.guava.DPreconditions;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.github.pagehelper.StringUtil;
import com.jinxin.hospHealth.dao.mapper.HospNewsMapper;
import com.jinxin.hospHealth.dao.models.HospNews;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;

/**
 * 新闻信息service
 * Created by zbs on 2017/12/24.
 */
@Service
public class NewsService {

    @Autowired
    HospNewsMapper hospNewsMapper;

    /**
     * 增加新闻信息
     *
     * @param hospNews
     */
    public void add(HospNews hospNews) {
        DPreconditions.checkState(hospNews.getId() == null, "新闻的id不能填写.", true);
        DPreconditions.checkNotNullAndEmpty(hospNews.getTitle(), "新闻的标题不能为空.", true);
        DPreconditions.checkNotNullAndEmpty(hospNews.getContent(), "新闻的内容不能为空.", true);
        if (hospNews.getSortNumber() == null)
            hospNews.setSortNumber(1);
        if (hospNews.getCreateDate() == null)
            hospNews.setCreateDate(new Date());
        if (hospNews.getEnable() == null)
            hospNews.setEnable(0);
       DPreconditions.checkState(hospNewsMapper.insertSelectiveReturnId(hospNews) == 1, "增加新闻失败", true);
    }

    /**
     * 更新新闻信息
     *
     * @param hospNews
     */
    public void update(HospNews hospNews) {
        DPreconditions.checkNotNull(hospNews.getId(), "新闻的id不能为空.", true);
        HospNews selectNews = selectOne(hospNews.getId());
        DPreconditions.checkNotNull(selectNews, "该ID的新闻未查询到.", true);
        DPreconditions.checkState(hospNewsMapper.updateByPrimaryKeySelective(hospNews) == 1, "更新新闻信息失败.", true);
    }

    /**
     * 删除单个新闻信息
     *
     * @param id
     */
    public void deleteOne(Long id) {
        HospNews hospNews = selectOne(id);
        DPreconditions.checkNotNull(hospNews, "该ID的新闻未查询到.", true);
        DPreconditions.checkState(hospNewsMapper.deleteByPrimaryKey(id) == 1, "删除该新闻信息失败.");
    }

    /**
     * 查询单个新闻信息
     *
     * @return
     */
    public HospNews selectOne(Long id) {
        DPreconditions.checkNotNull(id, "新闻的id不能为空");
        return hospNewsMapper.selectByPrimaryKey(id);
    }

    /**
     * 根据条件查询新闻信息
     *
     * @param hospNews
     * @return
     */
    public PageInfo<HospNews> select(HospNews hospNews) {
        PageHelper.startPage(hospNews.getPageNum(), hospNews.getPageSize());
        if (StringUtil.isNotEmpty(hospNews.getField()))
            PageHelper.orderBy(hospNews.getField());
        HospNews select = new HospNews();
        select.setEnable(hospNews.getEnable());
        select.setSource(hospNews.getSource());
        select.setTitle(hospNews.getTitle());
        return new PageInfo(hospNewsMapper.select(select));
    }

    /**
     * 查询全部新闻信息
     *
     * @param pageBean
     * @return
     */
    public PageInfo<HospNews> selectAll(PageBean pageBean) {
        PageHelper.startPage(pageBean.getPageNum(), pageBean.getPageSize());
        if (StringUtil.isNotEmpty(pageBean.getField()))
            PageHelper.orderBy(pageBean.getField());
        return new PageInfo(hospNewsMapper.selectAll());
    }
}
