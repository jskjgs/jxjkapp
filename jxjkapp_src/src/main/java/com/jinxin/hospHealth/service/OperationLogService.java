package com.jinxin.hospHealth.service;

import com.doraemon.base.controller.bean.PageBean;
import com.doraemon.base.guava.DPreconditions;
import com.doraemon.base.language.Language;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.jinxin.hospHealth.dao.mapper.HospOperationLogMapper;
import com.jinxin.hospHealth.dao.models.HospOperationLog;
import com.jinxin.hospHealth.dao.modelsEnum.ModuleEnum;
import com.jinxin.hospHealth.dao.modelsEnum.OperationType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tk.mybatis.mapper.util.StringUtil;

/**
 * Created by zbs on 2018/1/31.
 */
@Service
public class OperationLogService {

    @Autowired
    HospOperationLogMapper hospOperationLogMapper;

    /**
     * 增加日志
     *
     * @param hospOperationLog
     * @return
     * @throws Exception
     */
    public HospOperationLog add(HospOperationLog hospOperationLog) throws Exception {
        DPreconditions.checkNotNull(
                hospOperationLog,
                "日志内容对象不能为空.",
                true);
        DPreconditions.checkNotNull(
                hospOperationLog.getModule(),
                "操作模块不能为空.",
                true);
        DPreconditions.checkNotNull(
                hospOperationLog.getOperationId(),
                "操作人不能为空.",
                true);
        DPreconditions.checkNotNull(
                hospOperationLog.getOperationType(),
                "操作人类型不能为空.",
                true);
        DPreconditions.checkState(
                hospOperationLogMapper.insertReturnId(hospOperationLog) == 1,
                Language.get("service.save-failure"),
                true);
        return hospOperationLog;
    }

    /**
     * 查询日志
     *
     * @param pageBean
     * @param operationId
     * @param operationType
     * @param modules
     * @return
     * @throws Exception
     */
    public PageInfo<HospOperationLog> selectByModule(PageBean pageBean,
                                                     Long operationId,
                                                     Long userId,
                                                     Integer operationType,
                                                     Long areaId,
                                                     String modules) throws Exception {
        DPreconditions.checkState(
                operationId == null && operationType == null && userId == null && areaId == null && modules == null,
                "日志查询参数不能都为空.",
                true);
        if (pageBean == null)
            pageBean = new PageBean();
        PageHelper.startPage(pageBean.getPageNum(), pageBean.getPageSize());
        if (StringUtil.isNotEmpty(pageBean.getField()))
            PageHelper.orderBy(pageBean.getField());
        HospOperationLog select = new HospOperationLog();
        select.setOperationId(operationId);
        select.setOperationType(OperationType.getByCode(operationType).getCode());
        select.setModule(ModuleEnum.getByCode(modules).getCode());
        select.setUserId(userId);
        select.setAreaId(areaId);
        return new PageInfo<>(hospOperationLogMapper.select(select));
    }

}
