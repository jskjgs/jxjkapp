package com.jinxin.hospHealth.controller;

import com.alibaba.fastjson.JSONObject;
import com.doraemon.base.guava.DPreconditions;
import com.doraemon.base.language.Language;
import com.jinxin.hospHealth.controller.protocol.VO.UserBalanceVO;
import com.jinxin.hospHealth.dao.models.HospUserBalance;
import com.jinxin.hospHealth.dao.models.HospUserInfo;
import com.jinxin.hospHealth.service.UserBalanceService;
import com.jinxin.hospHealth.service.UserInfoService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.math.BigDecimal;

/**
 * Created by zbs on 2018/1/2.
 */
@RestController
@RequestMapping("/userBalance")
@Slf4j
@Api(description = "用户余额相关接口")
public class UserBalanceController extends MyBaseController{

    @Autowired
    UserBalanceService userBalanceService;
    @Autowired
    UserInfoService userInfoService;

    @ApiOperation(value = "查询用户余额信息")
    @RequestMapping(value="/", method = RequestMethod.GET)
    @ResponseBody
    public JSONObject select() throws Exception {
        DPreconditions.checkNotNull(getCurrentUserId(),
                Language.get("user.id-null"),
                true);
        return ResponseWrapperSuccess(userBalanceService.selectOne(getCurrentUserId()));
    }

    @ApiOperation(value = "充值余额")
    @RequestMapping(value="/pay", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject pay(
            @ApiParam(value = "金额 ", required = true) @RequestParam(required = true) double amount) throws Exception {
        Long userId = DPreconditions.checkNotNull(getCurrentUserId(),
                Language.get("user.id-null"),
                true);
        DPreconditions.checkNotNull(amount,
                Language.get("user-balance.amount-null"),
                true);
        DPreconditions.checkState(BigDecimal.valueOf(amount).compareTo(BigDecimal.ZERO) > 0,
                Language.get("user-balance.capacity"),
                true);
        HospUserInfo hospUserInfo = DPreconditions.checkNotNull(
                        userInfoService.selectOne(userId),
                Language.get("user.select-not-exist"),
                true);
        //如果用户信息存在,用户余额信息不存在,先创建用户余额信息.
        if(userBalanceService.selectOne(hospUserInfo.getId()) == null){
            HospUserBalance addHospBanner = new HospUserBalance();
            addHospBanner.setUserId(hospUserInfo.getId());
            userBalanceService.add(addHospBanner);
        }
        //更新用户余额
        HospUserBalance updateUserBalance = new HospUserBalance();
        updateUserBalance.setUserId(hospUserInfo.getId());
        updateUserBalance.setBalance(BigDecimal.valueOf(amount));
        userBalanceService.update(updateUserBalance);
        return ResponseWrapperSuccess(new UserBalanceVO(
                updateUserBalance.getUserId(),
                updateUserBalance.getBalance(),
                updateUserBalance.getLockBalance()));
    }


    @ApiOperation(value = "锁定余额")
    @RequestMapping(value="/lock", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject lock(
            @ApiParam(value = "金额", required = true) @RequestBody double amount) throws Exception {
        Long userId = DPreconditions.checkNotNull(getCurrentUserId(),
                Language.get("user.id-null"),
                true);
        DPreconditions.checkNotNull(amount,
                Language.get("user-balance.amount-null"),
                true);
        HospUserInfo hospUserInfo = DPreconditions.checkNotNull(
                userInfoService.selectOne(userId),
                Language.get("user.select-not-exist"),
                true);
        DPreconditions.checkNotNull(userBalanceService.selectOne(hospUserInfo.getId()) == null,
                Language.get("user-balance.select-not-exist"),
                true);
        //锁定用户余额
        HospUserBalance updateUserBalance = new HospUserBalance();
        updateUserBalance.setUserId(hospUserInfo.getId());
        updateUserBalance.setLockBalance(BigDecimal.valueOf(amount));
        userBalanceService.update(updateUserBalance);
        return ResponseWrapperSuccess(new UserBalanceVO(
                updateUserBalance.getUserId(),
                updateUserBalance.getBalance(),
                updateUserBalance.getLockBalance()));
    }

}
