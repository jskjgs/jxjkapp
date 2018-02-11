<script>
/*
 * Created by zhengji
 * Date: 2017/8/29
 */

import placeholderImg from '@/assets/images/placeholder.png'

import {
  orderCheckoutApi, addOrderApi, updateOrderApi, getPatientListApi
} from './api'
export default {
  name: 'orderDetail',
  components: {
  },
  data () {
    return {
      userId: this.$route.params.userId,
      userPhone: null,
      userIdNumber: null,
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
      selectPatient: null,
      selectCategroy: null,
      patientList: null
      // categroyList: {}
    }
  },
  created () {
    this.placeholderImg = placeholderImg
    // this.initProductInfo()
  },
  computed: {
    categroyList () {
      return this.$_getters.productTypeList || []
    },
    productList () {
      let selectCategroy = this.categroyList.find(item => item.value === this.selectCategroy) || {}
      return selectCategroy.list || []
    }
  },
  watch: {
    selectCategroy (val) {
      this.selectSku = null
    },
    selectSku (val) {
      this.unitPrice = 0
      this.qty = 0
      if (val == null) { return }
      console.log(val)
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
    handleGetPaymentPrice () {
      let data = this.getOrderData()
      orderCheckoutApi(data).then((res) => {
        this.paymentPrice = !res.content ? 0 : res.content.orderPayPrice
      })
    },
    getOrderData () {
      let data = {
        userId: this.userId,
        patientId: !this.selectPatient ? null : this.selectPatient.id,
        type: 0,
        orderProductPOList: [{
          productSkuId: !this.selectSku ? null : this.selectSku.id,
          quantity: this.qty,
          discontPrice: this.discontPrice}]
      }
      console.log(this.userId)
      return data
    },
    handleCreateOrder () {
      let data = this.getOrderData()
      addOrderApi(data).then((res) => {
        this.$message({
          type: 'success',
          message: '创建成功'
        })
        this.$router.push({path: '/order'})
      })
    },
    handleGetPatientList () {
      getPatientListApi({phone: this.userPhone}).then((res) => {
        let user = res.content
        if (!user) {
          this.$message({
            type: 'error',
            message: '没有该手机号用户的信息'
          })
        }
        this.userId = user.id
        this.patientList = user.patientInfoList
      })
    },
    handleUpdateOrder () {
      let data = this.getOrderData()
      updateOrderApi(data).then((res) => {
        this.$message({
          type: 'success',
          message: '更新成功'
        })
      })
    }
  }
}
</script>

<template>
  <div id="orderDetail">
    <div class="flex--vcenter page-top">
      <div class="page-title">
        添加订单
      </div>
    </div>
    <div class="form-wrap">
      <el-row :gutter="20">
        <el-col :span="8">
          <div class="info-item">
            <span class="info-item__label">
              用户手机号
            </span>
            <el-input
              class="info-item__content"
              v-model.trim="userPhone"
              style="width: 50%"
              placeholder="请输用户手机号">
            </el-input>
            <el-button
              class="info-item"
              type="primary"
              style="margin-left: 20px; margin-bottom: 0;"
              @click="handleGetPatientList">查询就诊人
            </el-button>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="8">
          <div class="info-item">
            <span class="info-item__label">
              就诊人
            </span>
            <el-select 
              class="info-item__content"
              v-model="selectPatient" 
              :disabled="!patientList"
              placeholder="请选择">
              <el-option
                v-for="item in patientList"
                :key="item.id"
                :label="item.patientCard"
                :value="item">
              </el-option>
            </el-select>
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
                v-for="categroy in categroyList"
                :key="categroy.value"
                :label="categroy.label"
                :value="categroy.value">
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
              v-model="selectSku" placeholder="请选择"
              :disabled="selectCategroy == null">
              <el-option
                v-for="product in productList"
                :key="product.value"
                :label="product.label"
                :value="product.value">
              </el-option>
            </el-select>
          </div>
        </el-col>
      </el-row>
      <div class="price-wrap">
        <el-row :gutter="20">
          <el-col :span="8">
            <div class="info-item">
              <span class="info-item__label">
                服务单价
              </span>
              <el-input
                class="info-item__content"
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
  </div>
</template>

<style lang="scss">
  @import "~@/assets/style/variables/index";

  #orderDetail {
    .form-wrap {
      margin: 20px 0;
      border: 1px solid #ccc;
      padding: 20px;
    }
    .price-wrap {
      border: 1px solid #ccc;
      border-width: 1px 0;
      padding: 20px 0;
    }

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
