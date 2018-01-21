<script>
/*
 * Created by zhengji
 * Date: 2017/8/29
 */

import placeholderImg from '@/assets/images/placeholder.png'

import { payStateFormat } from '@/utils/index'

import {
  getOrderInfoApi, orderRefundmentApi, payOrderApi
} from './api'
export default {
  name: 'orderDetail',
  components: {
  },
  data () {
    return {
      orderId: this.$route.params.orderId,
      refundment: {
        id: this.$route.params.orderId,
        amount: null,
        comment: '',
        isRefund: false
      },
      userId: null,
      isVip: false,
      state: null,
      productId: null,
      qty: 0,
      discontPrice: 0,
      comments: null,
      paymentNumber: null,
      orderCategroyName: null,
      orderSkuName: null,
      totalPrice: null,
      unitPrice: null,
      paymentPrice: null
    }
  },
  created () {
    this.placeholderImg = placeholderImg
    this.initOrderInfo()
  },
  watch: {
  },
  methods: {
    handlePaymentOrder () {
      let data = {userId: this.userId, paymentNumber: this.paymentNumber}
      payOrderApi(data).then((res) => {
        this.$message({
          type: 'success',
          message: '缴费成功'
        })
      }).catch((err) => {
        console.log(err)
      })
    },
    handleRefundment () {
      if (!this.refundment.isRefund) {
        this.refundment.isRefund = true
        return
      }
      orderRefundmentApi(this.refundment).then((res) => {
        console.log(res)
        this.$message({
          type: 'success',
          message: '退款成功'
        })
      }).catch((err) => {
        console.log(err)
      })
      .finally(() => {
        this.loginLoading = false
      })
    },
    initOrderInfo () {
      if (!this.orderId) {
        return
      }
      getOrderInfoApi({
        id: this.orderId
      }).then((res) => {
        let data = res.content.list[0]
        this.userId = data.user.id
        this.isVip = data.user.isVip
        this.state = payStateFormat(data.payState)
        let product = data.orderProductList[0]
        console.log(product)
        this.qty = product.quantity
        // this.discontPrice: null,
        // this.comments = null,
        // this.paymentNumber:
        this.refundment.id = product.productSku.id
        this.orderSkuName = product.productSkuName
        this.orderCategroyName = product.productSku.product.name
        this.unitPrice = product.productSku.salesPrice
        this.totalPrice = data.orderSalesPrice
        this.paymentPrice = data.orderPayPrice
      }).catch((err) => {
        console.log(err)
      }).finally(() => {
        this.loginLoading = false
      })
    }
  }
}
</script>

<template>
  <div id="orderDetail">
    <div class="flex--vcenter page-top">
      <div class="page-title">
        <router-link to="/order"> 订单管理 </router-link> > 订单详情
      </div>
    </div>
    <div class="flex--vcenter" style="margin-top: 20px; justify-content: space-between;">
      <div class="tool-item">
        用户ID: <span>{{userId}}</span>
      </div>
      <div class="tool-item">
        服务种类: <span>{{orderCategroyName}}</span>
      </div>
      <div class="tool-item">
        项目名称: <span>{{orderSkuName}}</span>
      </div>
      <div class="tool-item">
        订单状态: <span>{{state}}</span>
      </div>
    </div>
    
    <div class="flex--vcenter" style="margin-top: 20px; justify-content: space-between;">
      <div class="tool-item">
        服务单价: <span>{{unitPrice}}</span>
      </div>
      <div class="tool-item">
        购买数量: <span>{{qty}}</span>
      </div>
      <div class="tool-item">
        折扣金额: <span>{{discontPrice}}</span>
      </div>
    </div>

    <div class="flex--vcenter" style="margin-top: 20px; justify-content: space-between;">
      <div class="tool-item">
        <b>总金额:</b>
        <b>￥{{totalPrice}}</b>
      </div>
      <div class="tool-item">
        <b>支付金额:</b>
        <b style="color:red">￥{{paymentPrice}}</b>
      </div>
    </div>
    <div class="flex--vcenter" style="margin-top: 20px;">
      <b>备注信息:</b>
        <textarea
          v-model="comments"
          readonly=true
          placeholder="备注信息"
          style="width: 100%;height: 260px;font-size: 15px">
        </textarea>
    </div>
    <div class="flex--vcenter" style="margin-top: 20px;">
      <div class="tool-item">
        缴费单号
        <el-input
          :disabled="state === '已支付'"
          v-model="paymentNumber"
          :placeholder="isVip?'VIP用户可用余额进行支付' : '普通用户请输入缴费单号'"
          style="width: 300px;">
        </el-input>
      </div>
    </div>
    <div class="flex--vcenter"  style="margin-top: 20px;" v-show="state === '未支付'">
        <el-button
          type="primary"
          @click="handlePaymentOrder">缴费
        </el-button>
    </div>
    <div class="flex--vcenter"  style="margin-top: 20px;" v-show="state === '已支付'">
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
