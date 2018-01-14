package com.jinxin.hospHealth.service;

import com.doraemon.base.controller.bean.PageBean;
import com.doraemon.base.guava.DPreconditions;
import com.doraemon.base.language.Language;
import com.github.pagehelper.PageInfo;
import com.jinxin.hospHealth.dao.models.HospOrderServiceDetails;

/**
 * Created by zbs on 2018/1/11.
 */
public class OrderServiceDetailsService implements BaseService<HospOrderServiceDetails,HospOrderServiceDetails>{

    @Override
    public HospOrderServiceDetails add(HospOrderServiceDetails hospOrderServiceDetails) throws Exception {
      //  DPreconditions.checkNotNull(hospOrderServiceDetails.getUserId(),
       //         Language.get("user.id-null"),
        //        true);
        return null;
    }

    @Override
    public void update(HospOrderServiceDetails t) throws Exception {

    }

    @Override
    public void deleteOne(Long id) throws Exception {

    }

    @Override
    public void setStateAsInvalid(Long id) throws Exception {

    }

    @Override
    public HospOrderServiceDetails selectOne(Long id) throws Exception {
        return null;
    }

    @Override
    public PageInfo<HospOrderServiceDetails> select(HospOrderServiceDetails t) throws Exception {
        return null;
    }

    @Override
    public PageInfo<HospOrderServiceDetails> selectAll(PageBean pageBean) throws Exception {
        return null;
    }

    @Override
    public HospOrderServiceDetails selectOneAdmin(Long id) throws Exception {
        return null;
    }

    @Override
    public PageInfo<HospOrderServiceDetails> selectAdmin(HospOrderServiceDetails t) throws Exception {
        return null;
    }

    @Override
    public PageInfo<HospOrderServiceDetails> selectAllAdmin(PageBean pageBean) throws Exception {
        return null;
    }
}
