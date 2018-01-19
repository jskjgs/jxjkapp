package com.jinxin.hospHealth.controller;

import com.alibaba.fastjson.JSON;
import com.jinxin.hospHealth.dao.models.HospProduct;
import com.jinxin.hospHealth.dao.models.HospProductSku;
import org.junit.Test;

import java.math.BigDecimal;

/**
 * Created by zbs on 2018/1/19.
 */
public class ProductControllerTest {

    @Test
    public void test(){
        HospProduct hospProduct = new HospProduct();
        hospProduct.setName("养生减肥");
        hospProduct.setProductTypeId(3L);
        hospProduct.setImages("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516362294748&di=39e3863fc707c2968253642abe438705&imgtype=0&src=http%3A%2F%2Fs.114chn.com%2FCouponsPic%2F201309270000114%2F201402200839202922.jpg");
        hospProduct.setDescription("");
        hospProduct.setInformation("中医减肥专家指出，在中医减肥的理念里：调理、养生、祛脂、塑形于一体才是最科学的方法。");
        hospProduct.setSortNumber(3);
        System.out.println(JSON.toJSON(hospProduct));
        System.out.println();
        HospProductSku sku = new HospProductSku();
        sku.setProductId(4L);
        sku.setImages("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516362745269&di=bc46683e2490140f5d9fce59734b6ab7&imgtype=0&src=http%3A%2F%2Fs2.nuomi.bdimg.com%2Fupload%2Fdeal%2F2013%2F6%2FV_L%2F282059-1371218556647.jpg");
        sku.setName("韩式减肥-10次");
        sku.setDescription("韩氏专业养生减肥中心整合内外、中医祖传秘方独创专利减肥产品，辅以配合现代减肥瘦身理念，并针对顾客进行区别化瘦身疗法，达到令人惊奇的瘦身养生效果。");
        sku.setServiceQuantity(10);
        sku.setSalesPrice(new BigDecimal(1));
        sku.setShowPrice(new BigDecimal(2));
        System.out.println(JSON.toJSON(sku));



    }
}
