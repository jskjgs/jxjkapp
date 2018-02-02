package com.jinxin.hospHealth.his.bean;

import com.thoughtworks.xstream.annotations.XStreamAlias;
import com.thoughtworks.xstream.annotations.XStreamImplicit;
import lombok.Data;

import java.util.List;

/**
 * 住院结帐数据
 * Created by zbs on 2017/10/20.
 */
@XStreamAlias("ROOT")
@Data
public class InsettlementInfo {

    //基本信息
    @XStreamAlias("JBXX")
    Jbxx jbxx;

    //预交款信息
    @XStreamAlias("YJKLIST")
    YjkList yjkList;

    //退补信息
    @XStreamAlias("TBQK")
    Tbqk tbqk;

    @Data
    public class Tbqk{
        //退补类型（1-个人补款，2-医院退款）
        @XStreamAlias("TBLX")
        String tblx;
        //退补金额
        @XStreamAlias("TBJE")
        String tbje;
    }

    @Data
    public class YjkList{
        @XStreamImplicit(itemFieldName="ITEM")
        List<Item> itemList;
    }

    @Data
    public class Item{
        //预交款单据号
        @XStreamAlias("DJH")
        String djh;
        //结算方式
        @XStreamAlias("JSFS")
        String jsfs;
        //预交款金额
        @XStreamAlias("JE")
        String je;
        //交易流水号
        @XStreamAlias("JYLSH")
        String jylsh;
        //是否结算卡
        @XStreamAlias("SFJSK")
        String sfjsk;
    }

    @Data
    public class Jbxx{
        //姓名
        @XStreamAlias("XM")
        String xm;
        //性别
        @XStreamAlias("XB")
        String xb;
        //年龄
        @XStreamAlias("NL")
        String nl;
        //住院号
        @XStreamAlias("ZYH")
        String zyh;
        //住院科室
        @XStreamAlias("ZYKS")
        String zyks;
        //科室ID
        @XStreamAlias("KSID")
        String ksid;
        //主治医生
        @XStreamAlias("ZZYS")
        String zzys;
        //入院时间
        @XStreamAlias("RYSJ")
        String rysj;
        //出院时间
        @XStreamAlias("CYSJ")
        String cysj;
        //结帐时间（未结帐为空）
        @XStreamAlias("JZSJ")
        String jzsj;
        //单据号（未结帐为空）
        @XStreamAlias("DJH")
        String djh;
        //结算总费用
        @XStreamAlias("JSZFY")
        String jszfy;
    }
}
