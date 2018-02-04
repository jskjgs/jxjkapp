package com.jinxin.hospHealth.his;

import com.jinxin.hospHealth.his.webservice.UserManagerResponseUserManagerResult;
import com.jinxin.hospHealth.his.webservice.ZL_InformationServiceLocator;
import com.jinxin.hospHealth.his.webservice.ZL_InformationServiceSoap_PortType;
import com.jinxin.hospHealth.his.bean.Credentials;
import com.jinxin.hospHealth.his.bean.PatientsList;
import lombok.extern.log4j.Log4j;
import org.apache.axis.message.MessageElement;
import org.springframework.stereotype.Service;

import javax.xml.rpc.ServiceException;
import java.rmi.RemoteException;

/**
 * Created by wang on 2017/9/28.
 */
@Service
@Log4j
public class HisUserManager {

    /**
     * 获取用户信息
     *
     * @param idNumber 证件号
     * @param idNumberType 证件信息
     */
    public PatientsList getUserInfoByCode(String idNumber, String idNumberType) throws Exception {
        StringBuffer sb = new StringBuffer();
        sb.append("<ZJH>").append(idNumber).append("</ZJH>");
        sb.append("<ZJLX>").append(idNumberType).append("</ZJLX>");
        String reData = HisTool.toXMLString("BindCard.UserInfoByCardNO.Query", sb.toString());
        UserManagerResponseUserManagerResult result = execute(reData);
        for (MessageElement me : result.get_any()) {
            String xml = HisTool.getHisDataparam(me);
            return (PatientsList)HisTool.toBean(PatientsList.class,xml);
        }
        return null;
    }

    /**
     * 获取用户信息2,通过登记号  返回得有brid
     * @param idNumber
     * @param idNumberType
     * @param name
     * @param code
     * @param codeType
     * @return
     * @throws Exception
     */
    public Credentials getUserInfoByRegNO(String idNumber, String idNumberType, String name, String code, String codeType) throws Exception {
        StringBuffer sb = new StringBuffer();
        sb.append("<ZJH>").append(idNumber).append("</ZJH>");
        sb.append("<ZJLX>").append(idNumberType).append("</ZJLX>");
        sb.append("<XM>").append(name).append("</XM>");
        sb.append("<KH>").append(code).append("</KH>");
        sb.append("<KLB>").append(codeType).append("</KLB>");
        String reData = HisTool.toXMLString("BindCard.UserInfoByRegNO.Query", sb.toString());
        UserManagerResponseUserManagerResult result = execute(reData);
        for (MessageElement me : result.get_any()) {
            log.info(me.getAsString());
            String xml = HisTool.getHisDataparam(me);
            return (Credentials)HisTool.toBean(Credentials.class,xml);
        }
        return null;
    }


    /**
     * 增加病人信息
     * @param idNumber
     * @param idNumberType
     * @param name
     * @param phone
     * @return
     * @throws Exception
     */
    //todo 增加病人信息需要返回BRID和MZH ？？？？
    public Credentials addUserInfo(String idNumber,String idNumberType,String name,String phone) throws Exception {
        StringBuffer sb = new StringBuffer();
        sb.append("<ZJH>").append(idNumber).append("</ZJH>");
        sb.append("<ZJLX>").append(idNumberType).append("</ZJLX>");
        sb.append("<XM>").append(name).append("</XM>");
        sb.append("<SJH>").append(phone).append("</SJH>");
        String reData = HisTool.toXMLString("BindCard.CreateUser.Modify", sb.toString());
        UserManagerResponseUserManagerResult result = execute(reData);
        for (MessageElement me : result.get_any()) {
            log.info(me.getAsString());

            String xml = HisTool.getHisDataparam(me);
            return (Credentials)HisTool.toBean(Credentials.class,xml);

        }
       return null;
    }


    private UserManagerResponseUserManagerResult execute(String reData) throws RemoteException, ServiceException {
        ZL_InformationServiceLocator locator = new ZL_InformationServiceLocator();
        ZL_InformationServiceSoap_PortType service = locator.getZL_InformationServiceSoap();
        return service.userManager(reData);
    }


//    public static void main(String[] args) throws Exception {
//        HisUserManager hisUserManager = new HisUserManager();
//       // hisUserManager.addUserInfo("513823198408130042","二代身份证","周彬杉","13678113250");
//        //System.out.print(hisUserManager.getUserInfoByCode("510902198203193972","二代身份证"));
//        //System.out.print(hisUserManager.getUserInfoByRegNO("510902198203193972","二代身份证","尹勇","8696615","遂宁市医保"));
//    }
}
