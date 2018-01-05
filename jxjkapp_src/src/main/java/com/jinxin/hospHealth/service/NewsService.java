package com.jinxin.hospHealth.service;

import com.doraemon.base.controller.bean.PageBean;
import com.doraemon.base.guava.DPreconditions;
import com.doraemon.base.language.Language;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.github.pagehelper.StringUtil;
import com.jinxin.hospHealth.dao.mapper.HospNewsMapper;
import com.jinxin.hospHealth.dao.models.HospNews;
import com.jinxin.hospHealth.dao.modelsEnum.EnableEnum;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;

/**
 * 新闻信息service
 * Created by zbs on 2017/12/24.
 */
@Service
public class NewsService implements BaseService<HospNews>{

    @Autowired
    HospNewsMapper hospNewsMapper;

    /**
     * 增加新闻信息
     *
     * @param hospNews
     */
    public HospNews add(HospNews hospNews) {
        DPreconditions.checkState(hospNews.getId() == null,
                "新闻的id不能填写.",
                true);
        DPreconditions.checkNotNullAndEmpty(hospNews.getTitle(),
                "新闻的标题不能为空.",
                true);
        DPreconditions.checkNotNullAndEmpty(hospNews.getContent(),
                "新闻的内容不能为空.",
                true);
        if (hospNews.getSortNumber() == null)
            hospNews.setSortNumber(1);
        if (hospNews.getCreateDate() == null)
            hospNews.setCreateDate(new Date());
        if (hospNews.getEnable() == null)
            hospNews.setEnable(0);
       DPreconditions.checkState(hospNewsMapper.insertSelectiveReturnId(hospNews) == 1,
               Language.get("service.save-failure"),
               true);
        return hospNews;
    }

    /**
     * 更新新闻信息
     *
     * @param hospNews
     */
    public void update(HospNews hospNews) {
        DPreconditions.checkNotNull(hospNews.getId(),
                "新闻的id不能为空.",
                true);
        HospNews selectNews = selectOne(hospNews.getId());
        DPreconditions.checkNotNull(selectNews,
                "该ID的新闻未查询到.",
                true);
        hospNews.setEnable(null);
        DPreconditions.checkState(hospNewsMapper.updateByPrimaryKeySelective(hospNews) == 1,
                "更新新闻信息失败.",
                true);
    }

    /**
     * 删除单个新闻信息
     *
     * @param id
     */
    public void deleteOne(Long id) {
        HospNews hospNews = selectOne(id);
        DPreconditions.checkNotNull(hospNews,
                "该ID的新闻未查询到.",
                true);
        DPreconditions.checkState(hospNewsMapper.deleteByPrimaryKey(id) == 1,
                "删除该新闻信息失败.",
                true);
    }

    /**
     * 把新闻置为无效
     * @param id
     * @throws Exception
     */
    @Override
    public void setStateAsInvalid(Long id) throws Exception {
        DPreconditions.checkNotNull(id != null,
                Language.get("new.id-null"),
                true);
        DPreconditions.checkNotNull(selectOne(id),
                Language.get("new.select-not-exist"),
                true);
        HospNews invalid = new HospNews();
        invalid.setId(id);
        invalid.setEnable(EnableEnum.ENABLE_DISABLED.getCode());
        DPreconditions.checkState(hospNewsMapper.updateByPrimaryKeySelective(invalid) == 1,
                "新闻置为无效失败.",
                true);
    }

    /**
     * 查询单个新闻信息
     *
     * @return
     */
    public HospNews selectOne(Long id) {
        DPreconditions.checkNotNull(id,
                "新闻的id不能为空",
                true);
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

    /**
     * 查询一条新闻---admin
     * @param id
     * @return
     * @throws Exception
     */
    @Override
    public HospNews selectOneAdmin(Long id) throws Exception {
        DPreconditions.checkNotNull(id,
                Language.get("new.select-not-exist"),
                true);
        HospNews select = new HospNews();
        select.setId(id);
        select.setEnable(null);
        return hospNewsMapper.selectOne(select);
    }


    /**
     * 查询新闻---admin
     * @param hospNews
     * @return
     * @throws Exception
     */
    @Override
    public PageInfo<HospNews> selectAdmin(HospNews hospNews) throws Exception {
        PageHelper.startPage(hospNews.getPageNum(), hospNews.getPageSize());
        if (StringUtil.isNotEmpty(hospNews.getField()))
            PageHelper.orderBy(hospNews.getField());
        HospNews select = new HospNews();
        select.setSource(hospNews.getSource());
        select.setTitle(hospNews.getTitle());
        select.setEnable(hospNews.getEnable());
        return new PageInfo(hospNewsMapper.select(select));
    }

    /**
     * 查询全部新闻---admin
     * @param pageBean
     * @return
     * @throws Exception
     */
    @Override
    public PageInfo<HospNews> selectAllAdmin(PageBean pageBean) throws Exception {
        PageHelper.startPage(pageBean.getPageNum(), pageBean.getPageSize());
        if (StringUtil.isNotEmpty(pageBean.getField()))
            PageHelper.orderBy(pageBean.getField());
        HospNews select = new HospNews();
        select.setEnable(null);
        return new PageInfo(hospNewsMapper.select(select));
    }
}
