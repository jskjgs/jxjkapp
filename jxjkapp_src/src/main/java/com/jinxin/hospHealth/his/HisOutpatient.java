package com.jinxin.hospHealth.his;

import com.jinxin.hospHealth.his.webservice.*;
import com.jinxin.hospHealth.his.bean.*;
import lombok.extern.log4j.Log4j;
import org.apache.axis.message.MessageElement;
import org.springframework.stereotype.Service;

import javax.xml.rpc.ServiceException;
import java.rmi.RemoteException;

/**
 * 门诊业务
 * Created by wang on 2017/9/28.
 */
@Log4j
@Service
public class HisOutpatient {

    /**
     * 	获取挂号号源
     * @param brid 病人ID
     * @param rq 日期，格式 (YYYY-MM-DD HH24:MI:SS),为空表示当天
     * @param zd 站点
     * @param ksid 科室ID
     * @param ysid 医生ID
     * @param ysxm 医生姓名
     * @param hzdw 合作单位，固定传入第三方名称
     * @param sjjg 时间段间隔,单位:分钟。传入此节点时，按此间隔返回时间段；不传入此接点时，按HIS中设置的号源时间段返回
     * @return
     * @throws Exception
     */
    public RegisteredNumberInfo queryRegisteredNumber(String brid, String rq, String zd,String ksid,String ysid,String ysxm,String hzdw,String sjjg) throws Exception {
        StringBuffer sb = new StringBuffer();
        sb.append("<ZD>").append(zd).append("</ZD>");
        sb.append("<BRID>").append(brid).append("</BRID>");
        sb.append("<RQ>").append(rq).append("</RQ>");
        sb.append("<KSID>").append(ksid).append("</KSID>");
        sb.append("<YSID>").append(ysid).append("</YSID>");
        sb.append("<YSXM>").append(ysxm).append("</YSXM>");
        sb.append("<HZDW>").append(hzdw).append("</HZDW>");
        sb.append("<SJJG>").append(sjjg).append("</SJJG>");
        String reData = HisTool.toXMLString("Register.SignalSource.Query", sb.toString());
        OutPatientResponseOutPatientResult result = execute(reData);
        for (MessageElement me : result.get_any()) {
            String xml = HisTool.getHisDataparam(me);
            return (RegisteredNumberInfo) HisTool.toBean(RegisteredNumberInfo.class, xml);
        }
        return null;
    }

    /**
     * 获取挂号限制条件
     * @param brid 病人id
     * @param ghhm 挂号号码
     * @return
     * @throws Exception
     */
    public Boolean checkIsValid(String brid,String ghhm) throws Exception {


        StringBuffer sb = new StringBuffer();
        sb.append("<BRID>").append(brid).append("</BRID>");
        sb.append("<GHHM>").append(ghhm).append("</GHHM>");

        String reData = HisTool.toXMLString("Register.LimitInfo.Query", sb.toString());
        OutPatientResponseOutPatientResult result = execute(reData);
        for (MessageElement me : result.get_any()) {
            HisTool.getHisDataparam(me);
            return true;
        }
        return false;
    }


    /**
     * 对病人住院费用进行结算
     * @param hm 号码
     * @param yysj
     * @param hzdw
     * @param jqm
     * @return
     * @throws Exception
     */
    public LockRegister lockRegister(
            String hm,String yysj,String hzdw,String jqm
    ) throws Exception {

        StringBuffer sb = new StringBuffer();
        sb.append("<HM>").append(hm).append("</HM>");
        sb.append("<YYSJ>").append(yysj).append("</YYSJ>");
        sb.append("<CZ>").append("1").append("</CZ>");
        sb.append("<HZDW>").append(hzdw).append("</HZDW>");
        sb.append("<JQM>").append(jqm).append("</JQM>");

        String reData = HisTool.toXMLString("Register.Lock.Modify", sb.toString());


        OutPatientResponseOutPatientResult result = execute(reData);
        for (MessageElement me : result.get_any()) {
            log.info(me.getAsString());
            String xml = HisTool.getHisDataparam(me);
            return (LockRegister)HisTool.toBean(LockRegister.class,xml);
        }

        return null;
    }

    /**
     * 取消预约
     * @param ghdh  挂号单号
     * @param jsklb  结算卡类别，固定传入第三方名称
     * @param yyfs  预约方式，固定传入第三方名称
     * @return
     * @throws Exception
     */
    public boolean cancelSubscribeRegister(String ghdh, String jsklb, String yyfs) throws Exception {
        StringBuffer sb = new StringBuffer();
        sb.append("<GHDH>").append(ghdh).append("</GHDH>");
        sb.append("<JSKLB>").append(jsklb).append("</JSKLB>");
        sb.append("<JCFP>").append("").append("</JCFP>");
        sb.append("<GHJE>").append("").append("</GHJE>");
        sb.append("<LSH>").append("").append("</LSH>");
        sb.append("<SFYY>").append("1").append("</SFYY>");
        sb.append("<YYFS>").append(yyfs).append("</YYFS>");
        String reData = HisTool.toXMLString("Register.SubScribeCancel.Modify", sb.toString());
        OutPatientResponseOutPatientResult result = execute(reData);
        for (MessageElement me : result.get_any()) {
            HisTool.getHisDataparam(me);
            return true;
        }
        return false;
    }

    /**
     * 预约(未缴费)
     * @param confirmRegister
     * @return
     * @throws Exception
     */
    public String subscribeRegister(ConfirmRegister confirmRegister) throws Exception {
        StringBuffer sb = new StringBuffer();
        sb.append("<SFYY>").append("1").append("</SFYY>");
        sb.append("<CZFS>").append("3").append("</CZFS>");
        sb.append("<CZJLID>").append(confirmRegister.getCzjlid()).append("</CZJLID>");
        sb.append("<HM>").append(confirmRegister.getHm()).append("</HM>");
        sb.append("<HX>").append(confirmRegister.getHx()).append("</HX>");
        sb.append("<HZDW>").append(confirmRegister.getHzdw()).append("</HZDW>");
        sb.append("<YYFS>").append(confirmRegister.getYyfs()).append("</YYFS>");
        sb.append("<FB>").append(confirmRegister.getFb()).append("</FB>");
        sb.append("<YYSJ>").append(confirmRegister.getYysj()).append("</YYSJ>");
        sb.append("<JE>").append(confirmRegister.getJe()).append("</JE>");
        sb.append("<SM>").append(confirmRegister.getSm()).append("</SM>");
        sb.append("<BRID>").append(confirmRegister.getBrid()).append("</BRID>");
        sb.append("<BRLX>").append(confirmRegister.getBrlx()).append("</BRLX>");
        sb.append("<JQM>").append(confirmRegister.getJqm()).append("</JQM>");
        sb.append("<JSLIST><JS>");
        sb.append("<JSKLB>").append(confirmRegister.getJsklb()).append("</JSKLB>");
        sb.append("<JSKH>").append(confirmRegister.getJskh()).append("</JSKH>");
        sb.append("<JSFS>").append(confirmRegister.getJsfs()).append("</JSFS>");
        sb.append("<JSJE>").append(confirmRegister.getJsje()).append("</JSJE>");
        sb.append("<JYLSH>").append(confirmRegister.getJylsh()).append("</JYLSH>");
        sb.append("<EXPENDLIST><EXPEND>");
        sb.append("<JYMC>").append(confirmRegister.getJymc()).append("</JYMC>");
        sb.append("<JYLR>").append(confirmRegister.getJylr()).append("</JYLR>");
        sb.append("</EXPEND></EXPENDLIST>");
        sb.append("</JS></JSLIST>");
        String reData = HisTool.toXMLString("Register.Subscribe.Modify", sb.toString());
        OutPatientResponseOutPatientResult result = execute(reData);
        for (MessageElement me : result.get_any()) {
            String xml = HisTool.getHisDataparam(me);
            return HisTool.getXmlAttribute(xml,"GHDH");
        }
        return null;
    }



    /**
     * 	挂号
     * @param confirmRegister
     * @return
     * @throws Exception
     */
    public String confirmRegister(ConfirmRegister confirmRegister) throws Exception {
        StringBuffer sb = new StringBuffer();
        sb.append("<SFYY>").append("0").append("</SFYY>");
        sb.append("<CZFS>").append("3").append("</CZFS>");
        sb.append("<CZJLID>").append(confirmRegister.getCzjlid()).append("</CZJLID>");
        sb.append("<HM>").append(confirmRegister.getHm()).append("</HM>");
        sb.append("<HX>").append(confirmRegister.getHx()).append("</HX>");
        sb.append("<HZDW>").append(confirmRegister.getHzdw()).append("</HZDW>");
        sb.append("<YYFS>").append(confirmRegister.getYyfs()).append("</YYFS>");
        sb.append("<FB>").append(confirmRegister.getFb()).append("</FB>");
        sb.append("<YYSJ>").append(confirmRegister.getYysj()).append("</YYSJ>");
        sb.append("<JE>").append(confirmRegister.getJe()).append("</JE>");
        sb.append("<SM>").append(confirmRegister.getSm()).append("</SM>");
        sb.append("<BRID>").append(confirmRegister.getBrid()).append("</BRID>");
        sb.append("<BRLX>").append(confirmRegister.getBrlx()).append("</BRLX>");
        sb.append("<JQM>").append(confirmRegister.getJqm()).append("</JQM>");
        sb.append("<JSLIST><JS>");
        sb.append("<JSKLB>").append(confirmRegister.getJsklb()).append("</JSKLB>");
        sb.append("<JSKH>").append(confirmRegister.getJskh()).append("</JSKH>");
        sb.append("<JSFS>").append(confirmRegister.getJsfs()).append("</JSFS>");
        sb.append("<JSJE>").append(confirmRegister.getJsje()).append("</JSJE>");
        sb.append("<JYLSH>").append(confirmRegister.getJylsh()).append("</JYLSH>");
        sb.append("<EXPENDLIST><EXPEND>");
        sb.append("<JYMC>").append(confirmRegister.getJymc()).append("</JYMC>");
        sb.append("<JYLR>").append(confirmRegister.getJylr()).append("</JYLR>");
        sb.append("</EXPEND></EXPENDLIST>");
        sb.append("</JS></JSLIST>");
        String reData = HisTool.toXMLString("Register.Confirm.Modify", sb.toString());
        OutPatientResponseOutPatientResult result = execute(reData);
        for (MessageElement me : result.get_any()) {
            String xml = HisTool.getHisDataparam(me);
            return HisTool.getXmlAttribute(xml,"GHDH");
        }
        return null;
    }


    /**
     * 查询指定天数内的可挂号科室列表
     * @param hzdw 合作单位
     * @param cxts 查询天数
     * @param zd  站点
     */
    public DepartmentList selectDepartments(String hzdw,String cxts,String zd) throws Exception {
        StringBuffer sb = new StringBuffer();
        sb.append("<HZDW>").append(hzdw).append("</HZDW>");
        sb.append("<CXTS>").append(cxts).append("</CXTS>");
        sb.append("<ZD>").append(zd).append("</ZD>");
        String reData = HisTool.toXMLString("Register.Depart.Query", sb.toString());
        OutPatientResponseOutPatientResult result = execute(reData);
        for (MessageElement me : result.get_any()) {
            log.info(me.getAsString());
            String xml = HisTool.getHisDataparam(me);
            return (DepartmentList)HisTool.toBean(DepartmentList.class,xml);
        }
        return null;
    }







    /**
     * 对号源进行锁定，以保证有足够的付款时间
     */
    public DepartmentList lockRegister(String hm,String cxts,String zd) throws Exception {

        return null;
    }




    /**
     * 获取未缴费/已缴费的挂号单据信息。对于已缴费挂号单仅返回指定第三方缴费的挂号单
     *
     * @param brid
     * @param cxts
     * @return
     * @throws Exception
     */
    public RegisterRegReceiptInfo queryRegisterRegReceipt(String brid, String cxts) throws Exception {
        StringBuffer sb = new StringBuffer();
        sb.append("<BRID>").append(brid).append("</BRID>");
        sb.append("<CXTS>").append(cxts).append("</CXTS>");
        String reData = HisTool.toXMLString("Register.RegReceipt.Query", sb.toString());
        OutPatientResponseOutPatientResult result = execute(reData);
        for (MessageElement me : result.get_any()) {
            String xml = HisTool.getHisDataparam(me);
            return (RegisterRegReceiptInfo)HisTool.toBean(RegisterRegReceiptInfo.class,xml);
        }
        return null;
    }







    /**
     * 获取缴费单据信息
     * @param brid 病人ID
     * @param jsklb 结算卡类别，固定传入第三方名称
     * @param cxts 查询天数，查询N天内的缴费记录。N由第三方后台设置
     * @param zd 站点（用于区分多院区）
     * @return
     * @throws Exception
     */
    public OutpatientPaymentInfo queryPayReceipt(String brid, String jsklb, String cxts, String zd) throws Exception {
        StringBuffer sb = new StringBuffer();
        sb.append("<BRID>").append(brid).append("</BRID>");
        sb.append("<CXTS>").append(cxts).append("</CXTS>");
        sb.append("<JSKLB>").append(jsklb).append("</JSKLB>");
        sb.append("<ZD>").append(zd).append("</ZD>");
        String reData = HisTool.toXMLString("Payment.PayReceipt.Query", sb.toString());
        OutPatientResponseOutPatientResult result = execute(reData);
        for (MessageElement me : result.get_any()) {
            String xml = HisTool.getHisDataparam(me);
            return (OutpatientPaymentInfo)HisTool.toBean(OutpatientPaymentInfo.class,xml);
        }
        return null;
    }


    private OutPatientResponseOutPatientResult execute(String reData) throws RemoteException, ServiceException {
        ZL_InformationServiceLocator locator = new ZL_InformationServiceLocator();
        ZL_InformationServiceSoap_PortType service = locator.getZL_InformationServiceSoap();
        return service.outPatient(reData);
    }

}
