package com.jinxin.hospHealth.service;

import com.doraemon.base.controller.bean.PageBean;
import com.doraemon.base.guava.DPreconditions;
import com.doraemon.base.language.Language;
import com.doraemon.base.util.MD5Encryption;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.github.pagehelper.StringUtil;
import com.jinxin.hospHealth.dao.DaoEnumValid;
import com.jinxin.hospHealth.dao.mapper.HospUserBalanceMapper;
import com.jinxin.hospHealth.dao.models.HospUserBalance;
import com.jinxin.hospHealth.dao.modelsEnum.EnableEnum;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.security.NoSuchAlgorithmException;
import java.util.Date;

/**
 * Created by zbs on 2017/12/29.
 */
@Service
public class UserBalanceService implements BaseService<HospUserBalance> {

    @Autowired
    HospUserBalanceMapper hospUserBalanceMapper;

    @Autowired
    UserInfoService userInfoService;

    @Value("${default.checkSumKey}")
    String CHECK_SUM_KEY;

    /**
     * 获取金额验证MD5
     *
     * @param bigDecimal
     * @param userId
     * @return
     * @throws NoSuchAlgorithmException
     */
    private String getChecksum(BigDecimal bigDecimal, Long userId) throws NoSuchAlgorithmException {
        String value = String.valueOf(bigDecimal) + String.valueOf(userId) + CHECK_SUM_KEY;
        return MD5Encryption.getMD5(value);
    }

    /**
     * 查询表中金额是否被人工修改 (通过 checkSum 字段)
     *
     * @param userId
     * @return
     */
    private boolean verifyCheckSum(Long userId) throws Exception {
        HospUserBalance userBalance = selectOne(userId);
        DPreconditions.checkNotNull(userBalance,
                Language.get("user-balance.select-not-exist"),
                true);
        boolean resp = false;
        if (userBalance != null && userBalance.getChecksum().equals(getChecksum(userBalance.getBalance(), userId)))
            resp = true;
        return resp;
    }

    /**
     * 用于余额的金额计算 和 校验
     *
     * @param oldBalance  查询出的原金额
     * @param lockBalance 锁定金额
     * @param newBalance  参与计算的金额,可能为正可能为负
     * @return
     */
    private BigDecimal calculate(BigDecimal oldBalance, BigDecimal lockBalance, BigDecimal newBalance) {
        DPreconditions.checkState(oldBalance != null && lockBalance != null && newBalance != null,
                "用于余额的金额计算中的参数不能为空.");
        DPreconditions.checkState(oldBalance.compareTo(BigDecimal.ZERO) >= 0,
                "用于计算的原金额不能小于0.");
        DPreconditions.checkState(oldBalance.compareTo(lockBalance) >= 0,
                "原金额不能小于被锁定的金额.");
        //如果传入的金额为负数,代表扣减,需要校验是否能被扣减
        if (newBalance.compareTo(BigDecimal.ZERO) < 0) {
            BigDecimal tempBalance = oldBalance.subtract(lockBalance);
            tempBalance = tempBalance.add(newBalance);
            DPreconditions.checkState(tempBalance.compareTo(BigDecimal.ZERO) >= 0,
                    Language.get("user-balance.lack-balance"),
                    true);
        }
        BigDecimal balance = oldBalance.add(newBalance);
        return balance;
    }


    /**
     * 用于锁定余额的金额计算 和 校验
     *
     * @param oldBalance     查询出的原金额
     * @param oldLockBalance 查询出的原锁定金额
     * @param newLockBalance 参与计算的新锁定金额,只可能为正
     * @return
     */
    private BigDecimal lockCalculate(BigDecimal oldBalance, BigDecimal oldLockBalance, BigDecimal newLockBalance) {
        DPreconditions.checkState(oldBalance != null && oldLockBalance != null && newLockBalance != null,
                "用于锁定余额的金额计算中的参数不能为空.");
        DPreconditions.checkState(oldBalance.compareTo(BigDecimal.ZERO) >= 0,
                "用于计算的原金额不能小于0.");
        DPreconditions.checkState(oldLockBalance.compareTo(BigDecimal.ZERO) >= 0,
                "查询出的原锁定金额不能小于0.");
        if (newLockBalance.compareTo(BigDecimal.ZERO) < 0) {
            BigDecimal tempLockBalance = oldLockBalance.add(newLockBalance);
            DPreconditions.checkState(tempLockBalance.compareTo(BigDecimal.ZERO) <= 0,
                    Language.get("user-balance.lack-lock-balance"),
                    true);
        }
        BigDecimal lockBalance = oldLockBalance.add(newLockBalance);
        DPreconditions.checkState(oldBalance.subtract(lockBalance).compareTo(BigDecimal.ZERO) >= 0,
                "被锁定的余额不能大于用户所持有的余额");
        return lockBalance;
    }

    /**
     * 增加用户余额信息
     *
     * @param hospUserBalance
     * @throws Exception
     */
    @Override
    @Transactional
    public HospUserBalance add(HospUserBalance hospUserBalance) throws Exception {
        DPreconditions.checkNotNull(hospUserBalance.getUserId() != null,
                Language.get("user.id-null"),
                true);
        DPreconditions.checkState(selectOneAdmin(hospUserBalance.getUserId()) == null,
                Language.get("user-balance.id-repeat"),
                true);
        //todo zhoubinshan 是否需要判断用户的信息为空
        DPreconditions.checkState(userInfoService.selectOne(hospUserBalance.getUserId()) != null,
                Language.get("user.id-null"),
                true);
        hospUserBalance.setBalance(BigDecimal.ZERO);
        hospUserBalance.setLockBalance(BigDecimal.ZERO);
        hospUserBalance.setChecksum(getChecksum(BigDecimal.ZERO, hospUserBalance.getUserId()));
        hospUserBalance.setEnable(EnableEnum.ENABLE_NORMAL.getCode());
        hospUserBalance.setUpdateDate(new Date());
        hospUserBalance.setCreateDate(new Date());
        DPreconditions.checkState(hospUserBalanceMapper.insertReturnId(hospUserBalance) == 1,
                Language.get("service.save-failure"),
                true);
        return hospUserBalance;
    }

    /**
     * 更新用户余额信息
     *
     * @param updateUserBalance
     * @throws Exception
     */
    @Override
    @Transactional
    public void update(HospUserBalance updateUserBalance) throws Exception {
        DPreconditions.checkNotNull(updateUserBalance.getUserId() != null,
                Language.get("user.id-null"),
                true);
        DPreconditions.checkState(
                updateUserBalance.getBalance() != null && updateUserBalance.getLockBalance() != null,
                "user-balance.cannot-same-time-lockAndTopup",
                true
        );
        HospUserBalance oldUserBalance = DPreconditions.checkNotNull(
                selectOne(updateUserBalance.getUserId()),
                Language.get("user-balance.select-not-exist"),
                true
        );
        HospUserBalance update = new HospUserBalance();
        update.setUserId(updateUserBalance.getUserId());
        //更新--锁定余额 或 更新余额 不能同时更新
        if (updateUserBalance.getLockBalance() != null) {
            DPreconditions.checkNotNull(oldUserBalance.getBalance() != null,
                    Language.get("user.balance-null"),
                    true);
            update.setLockBalance(lockCalculate(oldUserBalance.getBalance(), oldUserBalance.getLockBalance(), updateUserBalance.getLockBalance()));
        } else if (updateUserBalance.getBalance() != null) {
            verifyCheckSum(updateUserBalance.getUserId());
            BigDecimal updateBalance = calculate(oldUserBalance.getBalance(), oldUserBalance.getLockBalance(), updateUserBalance.getBalance());
            update.setBalance(updateBalance);
            update.setChecksum(getChecksum(updateBalance, updateUserBalance.getUserId()));
        }
        //校验enable是否符合规则
        DaoEnumValid.checkDisableEnable(updateUserBalance.getEnable());
        update.setEnable(updateUserBalance.getEnable());
        update.setUpdateDate(new Date());
        DPreconditions.checkState(hospUserBalanceMapper.updateByPrimaryKeySelective(update) == 1,
                "用户余额信息更新失败.",
                true);
    }

    /**
     * 删除用户余额信息,如果余额不为空的话,不能被真实删除
     *
     * @param id
     * @throws Exception
     */
    @Override
    @Transactional
    public void deleteOne(Long id) throws Exception {
        //校验--传入用户ID为空
        DPreconditions.checkNotNull(id != null,
                Language.get("user.id-null"),
                true);
        //校验--该用户ID的数据是否存在
        HospUserBalance userBalance = DPreconditions.checkNotNull(selectOne(id),
                Language.get("user-balance.select-not-exist"),
                true);
        //校验--用户金额必须为空
        DPreconditions.checkState(BigDecimal.ZERO.compareTo(userBalance.getBalance()) == 0,
                "用户余额不为空的用户余额信息不能被删除",
                true);
        DPreconditions.checkState(hospUserBalanceMapper.deleteByPrimaryKey(id) == 1,
                "删除用户余额信息失败.",
                true);
    }

    /**
     * 把用户余额信息置为无效
     *
     * @param id
     * @throws Exception
     */
    @Override
    public void setStateAsInvalid(Long id) throws Exception {
        //校验--传入用户ID为空
        DPreconditions.checkNotNull(id != null,
                Language.get("user.id-null"),
                true);
        //校验--该用户ID的数据是否存在
        DPreconditions.checkNotNull(selectOne(id),
                Language.get("user-balance.select-not-exist"),
                true);
        HospUserBalance invalid = new HospUserBalance();
        invalid.setEnable(EnableEnum.ENABLE_DELETE.getCode());
        DPreconditions.checkState(hospUserBalanceMapper.updateByPrimaryKeySelective(invalid) == 1,
                "用户余额信息置为无效失败.",
                true);
    }

    /**
     * 根据id查询用户余额信息 -- 提供给客户端
     * @param id
     * @return
     * @throws Exception
     */
    @Override
    public HospUserBalance selectOne(Long id) throws Exception {
        DPreconditions.checkNotNull(id != null,
                Language.get("user.id-null"),
                true);
        HospUserBalance select = new HospUserBalance();
        select.setUserId(id);
        select.setEnable(EnableEnum.ENABLE_NORMAL.getCode());
        return hospUserBalanceMapper.selectOne(select);
    }

    /**
     * 根据条件查询用户余额信息 -- 提供给客户端
     * @param hospUserBalance
     * @return
     * @throws Exception
     */
    @Override
    public PageInfo<HospUserBalance> select(HospUserBalance hospUserBalance) throws Exception {
        PageHelper.startPage(hospUserBalance.getPageNum(), hospUserBalance.getPageSize());
        if (StringUtil.isNotEmpty(hospUserBalance.getField()))
            PageHelper.orderBy(hospUserBalance.getField());
        HospUserBalance select = new HospUserBalance();
        select.setUserId(hospUserBalance.getUserId());
        select.setEnable(EnableEnum.ENABLE_NORMAL.getCode());
        DaoEnumValid.checkAllEnable(hospUserBalance.getEnable());
        return new PageInfo(hospUserBalanceMapper.select(select));
    }

    /**
     * 查询全部用户余额信息-- 提供给客户端
     * @param pageBean
     * @return
     * @throws Exception
     */
    @Override
    public PageInfo<HospUserBalance> selectAll(PageBean pageBean) throws Exception {
        PageHelper.startPage(pageBean.getPageNum(), pageBean.getPageSize());
        if (StringUtil.isNotEmpty(pageBean.getField()))
            PageHelper.orderBy(pageBean.getField());
        HospUserBalance select = new HospUserBalance();
        select.setEnable(EnableEnum.ENABLE_NORMAL.getCode());
        return new PageInfo(hospUserBalanceMapper.select(select));
    }

    /**
     * 查询单个用户余额信息 -- 提供给客户端
     * @param id
     * @return
     * @throws Exception
     */
    @Override
    public HospUserBalance selectOneAdmin(Long id) throws Exception {
        DPreconditions.checkNotNull(id != null,
                Language.get("user.id-null"),
                true);
        return hospUserBalanceMapper.selectByPrimaryKey(id);
    }

    /**
     * 根据条件查询用户余额信息-- 提供给客户端
     * @param hospUserBalance
     * @return
     * @throws Exception
     */
    @Override
    public PageInfo<HospUserBalance> selectAdmin(HospUserBalance hospUserBalance) throws Exception {
        PageHelper.startPage(hospUserBalance.getPageNum(), hospUserBalance.getPageSize());
        if (StringUtil.isNotEmpty(hospUserBalance.getField()))
            PageHelper.orderBy(hospUserBalance.getField());
        return new PageInfo(hospUserBalanceMapper.select(hospUserBalance));
    }

    /**
     * 查询全部用户余额信息-- 提供给客户端
     * @param pageBean
     * @return
     * @throws Exception
     */
    @Override
    public PageInfo<HospUserBalance> selectAllAdmin(PageBean pageBean) throws Exception {
        PageHelper.startPage(pageBean.getPageNum(), pageBean.getPageSize());
        if (StringUtil.isNotEmpty(pageBean.getField()))
            PageHelper.orderBy(pageBean.getField());
        return new PageInfo(hospUserBalanceMapper.selectAll());
    }
}
