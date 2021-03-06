package com.jinxin.hospHealth.service;

import com.doraemon.base.controller.bean.PageBean;
import com.doraemon.base.exceptions.ShowExceptions;
import com.doraemon.base.guava.DPreconditions;
import com.doraemon.base.language.Language;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.github.pagehelper.util.StringUtil;
import com.jinxin.hospHealth.dao.mapper.HospAreaMapper;
import com.jinxin.hospHealth.dao.models.HospArea;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by zbs on 2017/12/25.
 */
@Service
public class HospAreaService implements BaseService<HospArea,HospArea>{

    @Autowired
    HospAreaMapper hospAreaMapper;

    /**
     * 增加院区信息
     *
     * @param hospArea
     */
    public HospArea add(HospArea hospArea) {
        DPreconditions.checkState(hospArea.getId() == null,
                "院区的id不能填写.",
                true);
        DPreconditions.checkNotNullAndEmpty(hospArea.getName(),
                "院区的名称不能为空.",
                true);
        DPreconditions.checkNotNullAndEmpty(hospArea.getDescription(),
                "院区的说明不能为空.",
                true);
        DPreconditions.checkState(hospAreaMapper.insertSelectiveReturnId(hospArea) == 1,
                Language.get("service.save-failure"),
                true);
        return hospArea;
    }

    /**
     * 更新院区信息
     *
     * @param hospArea
     */
    public void update(HospArea hospArea) {
        DPreconditions.checkNotNull(hospArea.getId(),
                "院区的id不能为空.",
                true);
        HospArea select = selectOne(hospArea.getId());
        DPreconditions.checkNotNull(select,
                "该ID的院区未查询到.",
                true);
        DPreconditions.checkState(hospAreaMapper.updateByPrimaryKeySelective(hospArea) == 1,
                "更新院区信息失败.",
                true);
    }

    /**
     * 删除单个院区信息
     *
     * @param id
     */
    public void deleteOne(Long id) {
        HospArea select = selectOne(id);
        DPreconditions.checkNotNull(select,
                "该ID的院区未查询到.",
                true);
        DPreconditions.checkState(hospAreaMapper.deleteByPrimaryKey(id) == 1,
                "删除院区信息失败.",
                true);
    }

    @Override
    public void setStateAsInvalid(Long id) throws Exception {
        throw new ShowExceptions(Language.get("service.invalid-method"));
    }

    /**
     * 查询单个院区信息
     *
     * @return
     */
    public HospArea selectOne(Long id) {
        DPreconditions.checkNotNull(id, "院区的id不能为空");
        return hospAreaMapper.selectByPrimaryKey(id);
    }

    /**
     * 根据条件查询院区信息
     *
     * @param hospAddress
     * @return
     */
    public PageInfo<HospArea> select(HospArea hospAddress) {
        if(hospAddress == null)
            return  null;
        PageHelper.startPage(hospAddress.getPageNum(), hospAddress.getPageSize());
        if (StringUtil.isNotEmpty(hospAddress.getField()))
            PageHelper.orderBy(hospAddress.getField());
        HospArea select = new HospArea();
        select.setName(hospAddress.getName());
        return new PageInfo(hospAreaMapper.select(select));
    }

    /**
     * 查询全部院区信息
     *
     * @param pageBean
     * @return
     */
    public PageInfo<HospArea> selectAll(PageBean pageBean) {
        if(pageBean == null)
            pageBean = new PageBean();
        PageHelper.startPage(pageBean.getPageNum(), pageBean.getPageSize());
        if (StringUtil.isNotEmpty(pageBean.getField()))
            PageHelper.orderBy(pageBean.getField());
        return new PageInfo(hospAreaMapper.selectAll());
    }

    @Override
    public HospArea selectOneAdmin(Long id) throws Exception {
        return selectOne(id);
    }

    @Override
    public PageInfo<HospArea> selectAdmin(HospArea hospArea) throws Exception {
        return select(hospArea);
    }

    @Override
    public PageInfo<HospArea> selectAllAdmin(PageBean pageBean) throws Exception {
        if(pageBean == null)
            pageBean = new PageBean();
        return selectAll(pageBean);
    }
}
