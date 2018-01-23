<script>
/*
 * Created by zhengji
 * Date: 2017/8/29
 */

import placeholderImg from '@/assets/images/placeholder.png'

import {
  productInfoApi, orderCheckoutApi, addOrderApi, updateOrderApi
} from './api'
export default {
  name: 'orderDetail',
  components: {
  },
  data () {
    return {
      userId: this.$route.params.userId,
      productId: null,
      qty: 0,
      discontPrice: null,
      comments: null,
      paymentNumber: null,
      totalPrice: 0.00,
      unitPrice: 0.00,
      paymentPrice: null,
      paymentAmount: null,
      selectSku: null,
      selectCategroy: null,
      categroyList: {}
    }
  },
  created () {
    this.placeholderImg = placeholderImg
    this.initProductInfo()
  },
  watch: {
    selectCategroy (val) {
      this.selectSku = null
    },
    selectSku (val) {
      this.unitPrice = 0
      this.qty = 0
      if (val == null) { return }
      this.productId = val.id
      this.unitPrice = val.price
    },
    qty (newValue) {
      this.totalPrice = this.unitPrice * newValue
    },
    totalPrice (newValue) {
      this.paymentPrice = null
    },
    discontPrice (newValue) {
      this.paymentPrice = null
    }
  },
  methods: {
    // 根据选定的服务种类构造项目列表
    productList () {
      let key = this.selectCategroy
      if (key == null) {
        return []
      }
      return this.categroyList[this.selectCategroy]
    },
    handleGetPaymentPrice () {
      let data = this.getOrderData()
      orderCheckoutApi(data).then((res) => {
        this.paymentPrice = !res.content ? 0 : res.content.orderPayPrice
      })
    },
    getOrderData () {
      let data = {
        userId: this.userId,
        type: 0,
        orderProductPOList: [{
          productSkuId: !this.selectSku ? null : this.selectSku.id,
          quantity: this.qty,
          discontPrice: this.discontPrice}]
      }
      return data
    },
    handleCreateOrder () {
      let data = this.getOrderData()
      addOrderApi(data).then((res) => {
          // TODO 添加操作成功的提示
      })
    },
    handleUpdateOrder () {
      let data = this.getOrderData()
      updateOrderApi(data).then((res) => {
          // TODO 更新操作成功的提示
      })
    },
    // 请求商品列表，含每个sku的价格
    initProductInfo () {
      productInfoApi().then((res) => {
        let data = res.content
        let categroyList = Object.create(null)
        data.forEach(function (value) {
          let cat = ((prodcutList) => {
            let pl = []
            prodcutList.forEach(function (product) {
              let option = Object.create(null)
              option['id'] = product.defaultSku.id
              option['name'] = product.name
              option['price'] = product.defaultSku.salesPrice
              pl.push(option)
            })
            return pl
          })(value.productVO)
          if (cat.length > 0) {
            categroyList[value.name] = cat
          }
        })
        console.log(categroyList)
        this.categroyList = categroyList
      })
      // 以下是测试数据
      // this.categroyList = {'A': [{'name': '小六1', 'id': 1, 'price': 100.00}, {'name': '小六3', 'id': 3, 'price': 300.00}],
      //   'B': [{'name': '小六2', 'id': 2, 'price': 200.00}, {'name': '小六4', 'id': 4, 'price': 400.00}]}
    }
  }
}
</script>

<template>
  <div id="orderDetail">
    <div class="flex--vcenter page-top">
      <div class="page-title">
        <h2> 添加订单</h2>
      </div>
    </div>
    <el-row :gutter="20">
      <el-col :span="8">
        <div class="info-item">
          <span class="info-item__label">
            用户ID
          </span>
          <el-input
            class="info-item__content"
            v-model.trim="userId"
            placeholder="请输就诊人身份证号">
          </el-input>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="info-item">
          <span class="info-item__label">
            *服务种类
          </span>
          <el-select 
            class="info-item__content"
            v-model="selectCategroy" 
            placeholder="请选择">
            <el-option
              v-for="(key, value) in categroyList"
              :key="key"
              :label="value"
              :value="value">
            </el-option>
          </el-select>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="info-item">
          <span class="info-item__label">
            *项目名称
          </span>
          <el-select 
            class="info-item__content"
            v-model="selectSku" placeholder="请选择">
            <el-option
              v-for="product in productList()"
              :key="product.id"
              :label="product.name"
              :value="product">
            </el-option>
          </el-select>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="info-item">
          <span class="info-item__label">
            服务单价
          </span>
          <el-input
            class="info-item__content">
            v-model="unitPrice"
            :readonly=true
            type="number">
          </el-input>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="info-item">
          <span class="info-item__label">
            *购买数量
          </span>
          <el-input
            class="info-item__content"
            v-model="qty"
            placeholder="请输入数量"
            type="number">
          </el-input>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="info-item">
          <span class="info-item__label">
            折扣金额
          </span>
          <el-input
            class="info-item__content"
            v-model="discontPrice"
            :disabled="!qty"
            placeholder="打折请慎重"
            type="number">
          </el-input>
        </div>
      </el-col>
    </el-row>
    <div class="flex--vcenter" style="margin-top: 20px; justify-content: space-between;">
      <div>
        <b>总金额</b>
        <b>￥{{totalPrice}}</b>
      </div>
      <div>
      <el-button
        v-show="paymentPrice==null"
        class="info-item"
        type="primary"
        style="margin-bottom: 0;"
        @click="handleGetPaymentPrice">计算支付金额
      </el-button>
      <span v-show="paymentPrice!=null">
        <b>订单金额</b>
        <b style="color:red">￥{{paymentPrice}}</b>
      </span>
      </div>
    </div>
    <el-input
      class="note-info"
      type="textarea"
      v-model="comments"
      placeholder="备注信息">
    </el-input>
    <div class="flex--vcenter"  style="margin-top: 20px;">
        <el-button
          class="info-item"
          type="primary"
          @click="handleCreateOrder">创建订单
        </el-button>
    </div>
  </div>
</template>

<style lang="scss">
  @import "~@/assets/style/variables/index";

  #orderDetail {
    .info-item {
      display: flex;
      align-items: center;
      margin-bottom: 20px;
      &__label {
        width: 80px;
        flex: none;
      }
      &__content {
        flex: 1;
      }
    }
    .note-info {
      margin-top: 20px;
      textarea {
        height: 150px;
      }
    }

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
