<script>
/*
 * Created by zhengji
 * Date: 2017/8/29
 */
import placeholderImg from '@/assets/images/placeholder.png'

import {
  queryServiceRecordApi
} from './api'

export default {
  name: 'ServiceRecord',
  components: {
  },
  data () {
    return {
      serviceId: this.$route.params.orderId,
      serviceName: null,
      recordNumber: null,
      userName: null,
      userPhone: null,
      providerName: null,
      serviceDate: null,
      serviceState: null,
      serviceComments: null,

      userAutograph: null,

      providerAutograph: null,
      feedback: {
        serviceScore: '',
        userComments: ''
      },
      reject: {
        rejectComments: '',
        rejectState: 0,
        rejectDate: null,
        state: { '通过': 1, '拒绝': 2 },
        form: {
          rejectState: 1
        }
      }
    }
  },
  created () {
    this.placeholderImg = placeholderImg
  },
  watch: {
  },
  methods: {
    getServiceDetail () {
      let data = queryServiceRecordApi()
      this.serviceName = data.serviceName
      this.recordNumber = data.recordNumber
      this.userName = data.userName
      this.userPhone = data.userPhone
      this.providerName = data.providerName
      this.serviceDate = data.serviceDate
      this.serviceState = data.serviceState
      this.serviceComments = data.serviceComments

      this.userAutograph = data.userAutograph

      this.providerAutograph = data.providerAutograph

      this.feedback.serviceScore = data.serviceScore
      this.feedback.userComments = data.userComments

      this.reject.rejectComments = data.rejectComments
      this.reject.rejectState = data.rejectState
      this.reject.form.rejectState = this.reject.rejectState
      this.reject.rejectDate = data.rejectDate
    },
    rejectState () {
      switch (this.reject.rejectState) {
        case 1:
          return '通过'
        case 2:
          return '拒绝'
      }
    }
  }
}
</script>

<template>
  <div id="serviceDetail">
    <div class="flex--vcenter page-top">
      <div class="page-title">
        <router-link to="/order"> 订单管理 </router-link> 
        {{serviceName ? '>'+serviceName :''}} 
        {{recordNumber ? '>'+recordNumber :''}}
      </div>
    </div>
    <div class="flex--vcenter"  style="margin-top: 20px;">
        <div>
          <p>用户名称: {{userName}}</p>
          <p>用户电话: {{userPhone}}</p>
          <p>服务人员: {{providerName}}</p>
          <p>治疗时间: {{serviceDate}}</p>
          <p>订单类型: {{serviceState}}</p>
          <p>当日症状: {{serviceComments}}</p>
        </div>
    </div>
    <div class="flex--vcenter"  style="margin-top: 20px;">
        <h3>客户签名</h3>
        <div>
          <p>{{userAutograph}}</p>
        </div>
    </div>
    <div class="flex--vcenter"  style="margin-top: 20px;">
        <h3>医生签名</h3>
        <div>
          <p>{{providerAutograph}}</p>
        </div>
    </div>
    <div class="flex--vcenter"  style="margin-top: 20px;">
        <h3>用户反馈</h3>
        <div>
          <p>{{feedback.serviceScore}}</p>
          <p>评价内容：{{!feedback.userComments?'用户没有发表评论':feedback.userComments}}</p>
        </div>
    </div>
    <div class="flex--vcenter"  style="margin-top: 20px;">
        <div>
          <h3>申请作废</h3>
          <p>申请作废理由：{{reject.rejectComments}}</p>
          <p>审核状态:
            <el-select v-model="reject.form.rejectState"  :disabled="reject.rejectState > 0" placeholder="请选择">
              <el-option
                v-for="(item,key,value) in reject.state"
                :key="key"
                :label="key"
                :value="value">
              </el-option>
            </el-select>
          </p>
          <p v-show="reject.rejectState > 0">审核时间：{{reject.rejectDate}}</p>
          <el-button
            v-show="!this.reject.rejectState"
            type="primary"
            @click="">退款
          </el-button>
        </div>
    </div>
  </div>
</template>

<style lang="scss">
  @import "~@/assets/style/variables/index";

  #order {
    .display-num-control {
      margin-left: 60px;
      .label {
        color: $color3;
      }

      .el-icon-edit {
        color: #adb9ca;
        cursor: pointer;
      }
    }

    .table-tools {
      justify-content: space-between;
    }

    .search-input {
      width: 300px;
      input {
        border-radius: 18px;
      }
    }
    .search-label {
      color: $color3;
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

    .el-table {
      margin-top: 20px;
      td {
        height: 80px;
      }
    }
    .cover-img {
      vertical-align: middle;
      display: inline-block;
      background: $bg6;
    }
    .cover-noimg {
      background: $bg6 url('~@/assets/images/placeholder.png') center no-repeat;
      background-size: 40px 30px;
    }

    .operate-item {
      color: $color4;
      font-size: 18px;
      cursor: pointer;
      & + .operate-item {
        margin-left: 20px;
      }

      .el-switch {
        margin-right: 10px;
      }
    }
    .top-switch {
      display: inline-block;
      width: 124px;
      text-align: left;
      color: $color3;
      font-size: 14px;
    }

    .pagination-wrap {
      margin-top: 30px;
      text-align: right;
    }
  }
</style>
