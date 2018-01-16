<script>
/*
 * Created by zhengji
 * Date: 2017/8/29
 */

import placeholderImg from '@/assets/images/placeholder.png'

import {
} from './api'

export default {
  name: 'orderDetail',
  components: {
  },
  data () {
    return {
      orderId: this.$route.params.orderId,
      orderFrom: {
        userId: null,
        productId: null,
        unitPrice: null,
        qty: null,
        paymentPrice: null,
        comments: null,
        paymentNumber: null
      },
      selectProduct: null,
      selectCategroy: null,
      categroyList: {'A': [{'name': '小六1', 'id': 1, 'price': 100.00}, {'name': '小六3', 'id': 3, 'price': 300.00}],
        'B': [{'name': '小六2', 'id': 2, 'price': 200.00}, {'name': '小六4', 'id': 4, 'price': 400.00}]}
    }
  },
  created () {
    this.placeholderImg = placeholderImg
  },
  watch: {
    selectCategroy (val) {
      this.selectProduct = null
    },
    selectProduct (val) {
      this.orderFrom.unitPrice = 0
      this.orderFrom.qty = 0
      if (val == null) { return }
      this.orderFrom.productId = val.id
      this.orderFrom.unitPrice = val.price
    },
    qty (newValue) {
      this.orderFrom.paymentPrice = this.orderFrom.unitPrice * newValue
    }
  },
  computed: {
    qty () {
      return this.orderFrom.qty
    }
  },
  methods: {
    // 根据选定的服务种类构造项目列表
    productList () {
      let index = this.selectCategroy
      if (index == null) {
        return []
      }
      return this.categroyList[this.selectCategroy]
    },
    createOrder () {
    },
    delOrder () {},
    updateOrder () {},
    // 请求商品列表，含每个sku的价格
    initProductInfo () {}
  }
}
</script>

<template>
  <div id="orderDetail">
    <div class="flex--vcenter page-top">
      <div class="page-title">
        <router-link to="/order"> 订单管理 </router-link to="/foo"> > {{ orderFrom ? '订单详情' : '添加订单' }} 
      </div>
    </div>
    <div class="flex--vcenter">
      <div class="tool-item">
        用户标识
        <el-input
          v-model.trim="orderFrom.userId"
          placeholder="请输入客户手机／就诊卡号"
          style="width: 290px;">
        </el-input>
      </div>
      <div class="tool-item">
        *服务种类 
        <el-select v-model="selectCategroy" placeholder="请选择">
          <el-option
            v-for="(key, value) in categroyList"
            :key="key"
            :label="value"
            :value="value">
          </el-option>
        </el-select>
      </div>
      <div class="tool-item">
        *项目名称
        <el-select v-model="selectProduct" placeholder="请选择">
          <el-option
            v-for="product in productList()"
            :key="product"
            :label="product.name"
            :value="product">
          </el-option>
        </el-select>
      </div>
    </div>
    
    <div class="flex--vcenter" style="margin-top: 20px; justify-content: space-between;">
      <div class="tool-item">
        服务单价
        {{orderFrom.unitPrice}}
      </div>
      <div class="tool-item">
        购买数量
        <el-input
          v-model="orderFrom.qty"
          :disabled="!orderFrom.unitPrice"
          placeholder="请输入数量"
          type="number"
          style="width: 290px;">
        </el-input>
      </div>
    </div>

    <div class="flex--vcenter" style="margin-top: 20px; justify-content: space-between;">
      <div class="tool-item">
        总金额
        {{orderFrom.qty * orderFrom.unitPrice}}
      </div>
      <div class="tool-item">
        支付金额
        <el-input
          v-model="orderFrom.paymentPrice"
          :disabled="!orderFrom.qty"
          type="number"
          style="width: 290px;">
        </el-input>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  @import "~@/assets/style/variables/index";

  #orderDetail {
    .btn-wrap {
      .el-button {
        border-radius: 18px;
      }
    }
    .btn--del {
      background: $bg5;
      color: #fff;
      &:hover {
        border-color: transparent;
      }
    }
    .visible-switch {
      color: $color3;
      font-size: 14px;
    }
  }
</style>
