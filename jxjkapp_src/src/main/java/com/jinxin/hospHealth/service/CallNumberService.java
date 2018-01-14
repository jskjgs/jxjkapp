package com.jinxin.hospHealth.service;

import com.doraemon.base.controller.bean.PageBean;
import com.doraemon.base.exceptions.ShowExceptions;
import com.doraemon.base.guava.DPreconditions;
import com.doraemon.base.language.Language;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.github.pagehelper.util.StringUtil;
import com.jinxin.hospHealth.dao.DaoEnumValid;
import com.jinxin.hospHealth.dao.mapper.HospCallNumberMapper;
import com.jinxin.hospHealth.dao.models.HospCallNumber;
import com.jinxin.hospHealth.dao.modelsEnum.CallNumberEnum;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;

/**
 * Created by zbs on 2018/1/5.
 */
@Service
public class CallNumberService implements BaseService<HospCallNumber,HospCallNumber> {

    @Autowired
    UserInfoService userInfoService;

    @Autowired
    HospCallNumberMapper hospCallNumberMapper;

    /**
     * 增加排队叫号信息
     * @param hospCallNumber
     * @throws Exception
     */
    @Override
    @Transactional
    public HospCallNumber add(HospCallNumber hospCallNumber) throws Exception {
        DPreconditions.checkNotNull(hospCallNumber.getPatientInfoId(),
                Language.get("call-number.patient-id-null"),
                true);
        DPreconditions.checkNotNull(userInfoService.selectOne(hospCallNumber.getPatientInfoId()),
                Language.get("patient.select-not-exist"),
                true);
        HospCallNumber callNumber = new HospCallNumber();
        callNumber.setPatientInfoId(hospCallNumber.getPatientInfoId());
        callNumber.setState(CallNumberEnum.NORMAL.getCode());
        callNumber.setCreateDate(new Date());
        callNumber.setUpdateDate(new Date());
        DPreconditions.checkState(hospCallNumberMapper.insertSelectiveReturnId(callNumber) == 1,
                Language.get("service.save-failure"),
                true);
        return callNumber;
    }

    /**
     * 更新排队叫号信息
     * @param hospCallNumber
     * @throws Exception
     */
    @Override
    @Transactional
    public void update(HospCallNumber hospCallNumber) throws Exception {
        DPreconditions.checkNotNull(hospCallNumber.getId(),
                Language.get("call-number.id-null"),
                true);
        DPreconditions.checkNotNull(selectOne(hospCallNumber.getId()),
                Language.get("call-number.select-not-exist"),
                true);
        HospCallNumber update = new HospCallNumber();
        update.setId(hospCallNumber.getId());
        if(hospCallNumber.getState() != null) {
            DaoEnumValid.checkCallNumberState(hospCallNumber.getState());
            update.setState(hospCallNumber.getState());
        }
        update.setUpdateDate(new Date());
        DPreconditions.checkState(hospCallNumberMapper.updateByPrimaryKey(hospCallNumber) == 1,
                Language.get("service.update-failure"),
                true);
    }

    /**
     * 删除一条排队叫号信息
     * @param id
     * @throws Exception
     */
    @Override
    @Transactional
    public void deleteOne(Long id) throws Exception {
        DPreconditions.checkNotNull(id,
                Language.get("call-number.id-null"),
                true);
        DPreconditions.checkNotNull(selectOne(id),
                Language.get("call-number.select-not-exist"),
                true);
        DPreconditions.checkState(hospCallNumberMapper.deleteByPrimaryKey(id) == 1,
                Language.get("service.delete-failure"),
                true);
    }

    /**
     * 排队叫号置为无效
     * @param id
     * @throws Exception
     */
    @Override
    public void setStateAsInvalid(Long id) throws Exception {
        throw new ShowExceptions(Language.get("service.invalid-method"));
    }

    /**
     * 查询一条排队叫号信息通过id
     * @param id
     * @return
     * @throws Exception
     */
    @Override
    public HospCallNumber selectOne(Long id) throws Exception {
        DPreconditions.checkNotNull(id,
                Language.get("call-number.id-null"),
                true);
        return hospCallNumberMapper.selectByPrimaryKey(id);
    }

    /**
     * 查询排队叫号信息
     * @param hospCallNumber
     * @return
     * @throws Exception
     */
    @Override
    public PageInfo<HospCallNumber> select(HospCallNumber hospCallNumber) throws Exception {
        PageHelper.startPage(hospCallNumber.getPageNum(), hospCallNumber.getPageSize());
        if (StringUtil.isNotEmpty(hospCallNumber.getField()))
            PageHelper.orderBy(hospCallNumber.getField());
        HospCallNumber select = new HospCallNumber();
        select.setId(hospCallNumber.getId());
        select.setPatientInfoId(hospCallNumber.getPatientInfoId());
        select.setState(hospCallNumber.getState());
        select.setUserIds(hospCallNumber.getUserIds());
        select.setStartTime(hospCallNumber.getStartTime());
        select.setStopTime(hospCallNumber.getStopTime());
        return new PageInfo(hospCallNumberMapper.selectByExampleByCustom(select));
    }

    /**
     * 查询全部排队叫号信息
     * @param pageBean
     * @return
     * @throws Exception
     */
    @Override
    public PageInfo<HospCallNumber> selectAll(PageBean pageBean) throws Exception {
        if(pageBean == null)
            pageBean = new PageBean();
        PageHelper.startPage(pageBean.getPageNum(), pageBean.getPageSize());
        if (StringUtil.isNotEmpty(pageBean.getField()))
            PageHelper.orderBy(pageBean.getField());
        return new PageInfo(hospCallNumberMapper.selectAll());
    }

    @Override
    public HospCallNumber selectOneAdmin(Long id) throws Exception {
        return selectOne(id);
    }

    @Override
    public PageInfo<HospCallNumber> selectAdmin(HospCallNumber hospCallNumber) throws Exception {
        return select(hospCallNumber);
    }

    @Override
    public PageInfo<HospCallNumber> selectAllAdmin(PageBean pageBean) throws Exception {
        return selectAll(pageBean);
    }
}
