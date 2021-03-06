/**
 * CustomResponse.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package com.jinxin.hospHealth.his.webservice;

public class CustomResponse  implements java.io.Serializable {
    private CustomResponseCustomResult customResult;

    public CustomResponse() {
    }

    public CustomResponse(
           CustomResponseCustomResult customResult) {
           this.customResult = customResult;
    }


    /**
     * Gets the customResult value for this CustomResponse.
     * 
     * @return customResult
     */
    public CustomResponseCustomResult getCustomResult() {
        return customResult;
    }


    /**
     * Sets the customResult value for this CustomResponse.
     * 
     * @param customResult
     */
    public void setCustomResult(CustomResponseCustomResult customResult) {
        this.customResult = customResult;
    }

    private Object __equalsCalc = null;
    public synchronized boolean equals(Object obj) {
        if (!(obj instanceof CustomResponse)) return false;
        CustomResponse other = (CustomResponse) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true &&
            ((this.customResult==null && other.getCustomResult()==null) ||
             (this.customResult!=null &&
              this.customResult.equals(other.getCustomResult())));
        __equalsCalc = null;
        return _equals;
    }

    private boolean __hashCodeCalc = false;
    public synchronized int hashCode() {
        if (__hashCodeCalc) {
            return 0;
        }
        __hashCodeCalc = true;
        int _hashCode = 1;
        if (getCustomResult() != null) {
            _hashCode += getCustomResult().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(CustomResponse.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://tempuri.org/", ">CustomResponse"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("customResult");
        elemField.setXmlName(new javax.xml.namespace.QName("http://tempuri.org/", "CustomResult"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://tempuri.org/", ">>CustomResponse>CustomResult"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
    }

    /**
     * Return type metadata object
     */
    public static org.apache.axis.description.TypeDesc getTypeDesc() {
        return typeDesc;
    }

    /**
     * Get Custom Serializer
     */
    public static org.apache.axis.encoding.Serializer getSerializer(
           String mechType,
           Class _javaType,
           javax.xml.namespace.QName _xmlType) {
        return
          new  org.apache.axis.encoding.ser.BeanSerializer(
            _javaType, _xmlType, typeDesc);
    }

    /**
     * Get Custom Deserializer
     */
    public static org.apache.axis.encoding.Deserializer getDeserializer(
           String mechType,
           Class _javaType,
           javax.xml.namespace.QName _xmlType) {
        return 
          new  org.apache.axis.encoding.ser.BeanDeserializer(
            _javaType, _xmlType, typeDesc);
    }

}
