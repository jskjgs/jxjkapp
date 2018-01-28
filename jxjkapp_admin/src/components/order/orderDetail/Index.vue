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
    this.ITEMS = [{
      label: '病人姓名',
      valueKey: 'name'
    }, {
      label: '手机号',
      valueKey: 'userPhone'
    }, {
      label: '就诊卡号',
      valueKey: 'patientCard'
    }, {
      label: '服务种类',
      valueKey: 'orderCategroyName'
    }, {
      label: '项目名称',
      valueKey: 'orderSkuName'
    }, {
      label: '订单状态',
      valueKey: 'state'
    }, {
      label: '服务单价',
      valueKey: 'unitPrice'
    }, {
      label: '购买数量',
      valueKey: 'qty'
    }, {
      label: '折扣金额',
      valueKey: 'discontPrice'
    }, {
      label: '总金额',
      valueKey: 'totalPrice',
      formatter (value) {
        return value == null ? '' : `￥${value}`
      }
    }, {
      label: '支付金额',
      valueKey: 'paymentPrice',
      formatter (value) {
        return value == null ? '' : `￥${value}`
      },
      style: 'color: red;'
    }]

    return {
      orderId: this.$route.params.orderId,
      refundment: {
        id: this.$route.params.orderId,
        amount: null,
        comment: '',
        isRefund: false
      },
      userId: null,
      userPhone: null,
      patientCard: null,
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
        let data = res.content
        if (!data) {
          this.$message({
            type: 'error',
            message: '没有相关订单记录'
          })
          return
        }
        this.userId = data.user.id
        this.userPhone = data.user.phone
        this.patientCard = data.patientInfo.patientCard
        this.isVip = data.user.isVip
        this.state = payStateFormat(data.payState)
        let product = data.orderProductList[0]
        console.log(this.patientCard)
        this.orderCategroyName = product.productSkuName
        this.orderSkuName = product.productSku.name
        this.qty = product.quantity
        this.discontPrice = data.discount
        // this.comments = null,
        this.paymentNumber = data.paymentCode
        this.refundment.id = product.productSku.id
        this.orderSkuName = product.productSkuName
        this.orderCategroyName = product.productSku.name
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
        <router-link to="/order"> 订单管理 </router-link> &gt; 订单详情
      </div>
    </div>
    <el-row :gutter="20" class="info-items">
      <el-col 
        v-for="item in ITEMS" :key="item.valueKey"
        :span="8" 
        class="info-item-wrap">
        <div class="info-item flex" :style="item.style || ''">
          <span class="info-item__label flex-item--none">
            {{ item.label }}
          </span>:
          <span class="info-item__content">{{ item.formatter ? item.formatter($data[item.valueKey]) : $data[item.valueKey]}}</span>
        </div>
      </el-col>
    </el-row>
    <div class="flex info-item" style="margin-top: 20px;">
      <span style="width: 60px;" class="flex-item--none info-item__label">备注信息</span>:
      <el-input
        type="textarea"
        class="info-item__content"
        v-model="comments"
        :readonly="true"
        placeholder="备注信息">
      </el-input>
    </div>
    <div class="flex--vcenter info-item" style="margin-top: 20px;">
      <div>
        <b v-show="isVip" style="color: red">*VIP用户如果不填写缴费单号则默认使用余额进行支付</b>
      </div>
      <span class="info-item__label">缴费单号</span>:
      <el-input
        class="info-item__content"
        :disabled="state === '已支付'"
        v-model="paymentNumber"
        placeholder="请输入来自HIS系统的缴费单号"
        style="width: 300px;"/>
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
    .info-item-wrap {
      margin-top: 20px;
    }
    .info-item {
      &__label {
        width: 60px;
      }

      &__content {
        margin-left: 10px;

        textarea {
          height: 150px;
        }
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
