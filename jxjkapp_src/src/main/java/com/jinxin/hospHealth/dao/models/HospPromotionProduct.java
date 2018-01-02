package com.jinxin.hospHealth.dao.models;

import lombok.Data;

import javax.persistence.Id;
import javax.persistence.Table;

@Data
@Table(name="hosp_promotion_product")
public class HospPromotionProduct {

    private Long promotionId;

    private Long productId;

}