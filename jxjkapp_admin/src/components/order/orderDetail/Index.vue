<script>
/*
 * Created by zhengji
 * Date: 2017/8/29
 */
import {
  getOrderInfoApi, orderRefundmentApi, payOrderApi, queryBalanceApi
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
      label: '项目名称',
      valueKey: 'orderSkuName'
    }, {
      label: '订单状态',
      valueKey: 'paymentState',
      formatter (value) {
        const DICT = {
          0: '未支付',
          1: '支付',
          2: '申请中',
          3: '申请通过',
          99: '未申请通过'
        }
        return DICT[value]
      }
    }, {
      label: '购买数量',
      valueKey: 'qty'
    }]

    this.priceItems = [{
      label: '服务单价',
      valueKey: 'unitPrice',
      formatter (value) {
        return value == null ? '' : `￥${value}`
      }
    }, {
      label: '折扣',
      valueKey: 'discount'
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
      balance: undefined, // 余额
      orderId: this.$route.params.orderId,
      refundment: {
        id: this.$route.params.orderId,
        amount: null,
        comment: '',
        isRefund: false
      },
      discount: null,
      userId: null,
      userPhone: null,
      patientCard: null,
      isVip: false,
      paymentState: null,
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
    this.initOrderInfo()
  },
  watch: {
  },
  methods: {
    // 查询用户余额
    queryBalance () {
      return queryBalanceApi(this.userId).then((res) => {
        const content = res.content || {}
        this.balance = content.balance || undefined
        this.isVip = !!(content.balance || undefined)
      })
    },
    handlePaymentOrder () {
      return payOrderApi({
        id: this.orderId,
        payOrder: this.paymentNumber
      }).then((res) => {
        this.$message({
          type: 'success',
          message: '缴费成功'
        })
        this.$router.go(-1)
      })
    },
    handleRefundment () {
      if (!this.refundment.isRefund) {
        this.refundment.isRefund = true
        return
      }
      orderRefundmentApi(this.refundment.id, this.refundment.amount).then((res) => {
        this.$message({
          type: 'success',
          message: '退款成功'
        })
        this.initOrderInfo()
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
        data = data || {}
        this.name = data.userName
        this.userId = data.userId
        this.orderSkuName = data.skuName
        this.paymentState = data.paymentState
        this.qty = data.quantity
        this.unitPrice = data.salesPrice
        this.discount = data.discount
        this.totalPrice = data.price
        this.paymentPrice = data.payPrice
        this.queryBalance()
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
    <el-row :gutter="20" class="price-wrap">
      <template 
        v-for="(item, index) in priceItems" >
        <el-col
          :key="item.valueKey"
          :span="8"
          :style="{ clear: index === 2 ? 'left' : 'none' }">
          <div class="info-item flex" :style="item.style || ''">
            <span class="info-item__label flex-item--none">
              {{ item.label }}
            </span>:
            <span class="info-item__content">{{ item.formatter ? item.formatter($data[item.valueKey]) : $data[item.valueKey]}}</span>
          </div>
        </el-col>
      </template>
    </el-row>
    <div class="flex info-item" style="margin-top: 20px; align-items: flex-start;">
      <span class="flex-item--none info-item__label">备注信息</span>:
      <el-input
        type="textarea"
        class="info-item__content"
        v-model="comments"
        :readonly="true"
        placeholder="备注信息">
      </el-input>
    </div>
    <div 
      class="flex--vcenter info-item" 
      style="margin-top: 20px;"
      v-show="paymentState === 0">
      <span class="info-item__label"><span v-if="!balance" style="color: red;">*</span>缴费单号</span>:
      <el-input
        class="info-item__content flex-item--none"
        :disabled="paymentState === 1"
        v-model="paymentNumber"
        placeholder="请输入来自HIS系统的缴费单号"
        style="width: 300px;flex:none;"/>
      <div>
        <b v-show="isVip" style="color: red;margin-left: 20px;">*VIP用户如果不填写缴费单号则默认使用余额进行支付</b>
      </div>
    </div>
    <div class="flex--vcenter"  style="margin-top: 20px;" v-show="paymentState === 0">
        <el-button
          type="primary"
          :disabled="!balance && !paymentNumber"
          @click="handlePaymentOrder">缴费
        </el-button>
    </div>
    <div class="flex--vcenter"  style="margin-top: 20px;" v-show="paymentState === 1">
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
    .info-items {
      margin-top: 20px;
    }
    .price-wrap {
      border: 1px solid #ccc;
      border-width: 1px 0;
      padding: 20px 0 0;
    }
    .info-item {
      margin-bottom: 20px;
      &__label {
        width: 70px;
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
