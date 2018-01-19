<script>
/*
 * Created by zhengji
 * Date: 2017/8/29
 */

import placeholderImg from '@/assets/images/placeholder.png'

import {
  getOrderInfoApi
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
        qty: 0,
        discontPrice: null,
        comments: null,
        paymentNumber: null,
        unUseNum: 0
      },
      refundment: {
        amount: '',
        comments: '',
        isRefund: false
      },
      totalPrice: 0.00,
      unitPrice: 0.00,
      paymentPrice: null,
      selectProduct: null,
      selectCategroy: null,
      categroyList: null
    }
  },
  created () {
    this.placeholderImg = placeholderImg
    this.initProductInfo()
    this.initOrderInfo()
  },
  watch: {
    selectCategroy (val) {
      this.selectProduct = null
    },
    selectProduct (val) {
      this.unitPrice = 0
      this.orderFrom.qty = 0
      if (val == null) { return }
      this.orderFrom.productId = val.id
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
  computed: {
    qty () {
      return this.orderFrom.qty
    },
    discontPrice () {
      return this.orderFrom.discontPrice
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
      // TODO 根据所填写的订单信息调取价格计算引擎计算实际支付价格。 以下代码为测试代码
      let pay = this.totalPrice - this.orderFrom.discontPrice
      this.paymentPrice = (pay < 0 ? 0 : pay)
    },
    handleCreateOrder () {
    },
    handleUpdateOrder () {},
    handleRefundment () {
      if (!this.refundment.isRefund) {
        this.refundment.isRefund = true
        return
      }
      // TODO 发起退款
      console.log('退款成功')
    },
    initOrderInfo () {
      if (!this.orderId) {
        return
      }
      getOrderInfoApi({
        id: this.orderId
      }).then((res) => {
        console.log(res)
      }).catch((err) => {
        console.log(err)
      })
      .finally(() => {
        this.loginLoading = false
      })
    },
    // 请求商品列表，含每个sku的价格
    initProductInfo () {
      // TODO 请求类目和产品列表
      this.categroyList = {'A': [{'name': '小六1', 'id': 1, 'price': 100.00}, {'name': '小六3', 'id': 3, 'price': 300.00}],
        'B': [{'name': '小六2', 'id': 2, 'price': 200.00}, {'name': '小六4', 'id': 4, 'price': 400.00}]}
    }
  }
}
</script>

<template>
  <div id="orderDetail">
    <div class="flex--vcenter page-top">
      <div class="page-title">
        <router-link to="/order"> 订单管理 </router-link> > {{ orderFrom ? '订单详情' : '添加订单' }} 
      </div>
    </div>
    <div class="flex--vcenter" style="margin-top: 20px; justify-content: space-between;">
      <div class="tool-item">
        用户标识
        <el-input
          v-model.trim="orderFrom.userId"
          :disabled="orderId!=null"
          placeholder="请输入客户手机／就诊卡号"
          style="width: 230px;">
        </el-input>
      </div>
      <div class="tool-item">
        *服务种类 
        <el-select v-model="selectCategroy" placeholder="请选择" :disabled="orderId!=null">
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
        <el-select v-model="selectProduct" placeholder="请选择" :disabled="orderId!=null">
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
        {{unitPrice}}
      </div>
      <div class="tool-item">
        *购买数量
        <el-input
          v-model="orderFrom.qty"
          :disabled="!unitPrice || orderId"
          placeholder="请输入数量"
          type="number"
          style="width: 200px;">
        </el-input>
      </div>
      <div class="tool-item" v-show="orderId!=null">
        剩余次数  {{orderFrom.unUseNum}}
      </div>
      <div class="tool-item">
        折扣金额
        <el-input
          v-model="orderFrom.discontPrice"
          :disabled="!orderFrom.qty"
          placeholder="打折请慎重"
          type="number"
          style="width: 200px;">
        </el-input>
      </div>
    </div>

    <div class="flex--vcenter" style="margin-top: 20px; justify-content: space-between;">
      <div class="tool-item">
        <b>总金额</b>
        <b>￥{{totalPrice}}</b>
      </div>
      <div class="tool-item">
        <el-button
          v-show="paymentPrice==null"
          class="tool-item"
          type="primary"
          @click="handleGetPaymentPrice">计算支付金额
        </el-button>
        <span v-show="paymentPrice!=null">
          <b>支付金额</b>
          <b style="color:red">￥{{paymentPrice}}</b>
        </span>
      </div>
    </div>
    <div class="flex--vcenter" style="margin-top: 20px;">
        <textarea
          v-model="orderFrom.commonts"
          placeholder="备注信息"
          style="width: 100%;height: 260px;font-size: 15px">
        </textarea>
    </div>
    <div class="flex--vcenter" style="margin-top: 20px;">
      <div class="tool-item">
        HIS缴费订单号
        <el-input
          v-model="orderFrom.paymentNumber"
          placeholder="用户如果是VIP可以不填"
          :disabled="!orderId"
          style="width: 490px;">
        </el-input>
      </div>
    </div>
    
    <div class="flex--vcenter"  style="margin-top: 20px;">
        <span v-show="refundment.isRefund" >
          <p>注意:</p>
          <p>VIP是退款会直接返回余额中</p>
          <p>非VIP用户退款需要通知线下财务人员操作，本系统仅做退款记录</p>
          <p>因本系统还无法与HIS的财务系统实时通讯，非VIP用户的退款操作请务必核对清楚，</p>
          <el-input
            v-model="refundment.amount"
            type="number"
            placeholder="请输入退款金额后再次点击退款按钮"
            style="width: 490px;">
          </el-input>
        </span>
        <el-button
          v-show="orderId==null"
          class="tool-item"
          type="primary"
          @click="handleGetPaymentPrice">创建订单
        </el-button>
        <el-button
          v-show="orderId!=null && !refundment.isRefund"
          class="tool-item"
          type="primary"
          @click="handleGetPaymentPrice">保存
        </el-button>
        <el-button
          v-show="orderId!=null"
          type="primary"
          @click="handleRefundment">退款
        </el-button>
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
