<script>
/*
 * Created by zhengji
 * Date: 2017/8/29
 */
import placeholderImg from '@/assets/images/placeholder.png'

import { convertDate, convertServiceState } from '@/utils/index'
import {
  queryServiceRecordApi,
  rejcetServiceApi
} from './api'

export default {
  name: 'ServiceRecord',
  components: {
  },
  data () {
    return {
      serviceId: this.$route.params.serviceId,
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
          id: this.$route.params.serviceId,
          rejectState: 1
        }
      }
    }
  },
  created () {
    this.placeholderImg = placeholderImg
    if (this.$route.params.serviceId) {
      this.getServiceDetail()
    }
  },
  mounted () {
    this.userSignCtx = this.$refs.userSign.getContext('2d')
    this.doctorSignCtx = this.$refs.doctorSign.getContext('2d')
  },
  watch: {
    userAutograph (newVal) {
      if (newVal) {
        try {
          this.drawSign(this.userSignCtx, JSON.parse(newVal))
        } catch (e) {
        }
      }
    },
    providerAutograph (newVal) {
      if (newVal) {
        try {
          this.drawSign(this.doctorSignCtx, JSON.parse(newVal))
        } catch (e) {
        }
      }
    }
  },
  methods: {
    drawSign (ctx, touchList) {
      touchList = touchList || []
      touchList.forEach((item) => {
        if (item.type === 'start') {
          ctx.moveTo(item.x, item.y)
        } else if (item.type === 'move') {
          ctx.lineTo(item.x, item.y)
        }
      })
      ctx.stroke()
    },
    rejcetService () {
      let data = this.reject.form
      console.log(data)
      rejcetServiceApi(data).then((res) => {
        console.log(res)
        this.$message({
          type: 'success',
          message: '创建成功'
        })
        this.getServiceDetail()
      })
    },
    getServiceDetail () {
      queryServiceRecordApi({id: this.$route.params.serviceId}).then((res) => {
        let data = res.content.list[0]
        console.log(data)
        this.serviceName = data.serviceName
        this.recordNumber = data.recordNumber
        this.userName = data.userInfo.name
        this.userPhone = data.userInfo.phone
        this.providerName = data.adminInfo ? data.adminInfo.name : null
        this.serviceDate = convertDate(data.createDate)
        this.serviceState = convertServiceState(data.state)
        this.serviceComments = data.doctorComment
        this.userAutograph = data.userSign

        this.providerAutograph = data.doctorSign

        this.feedback.serviceScore = data.grade ? data.grade.level : 0
        this.feedback.userComments = data.grade ? data.grade.comment : null

        this.reject.rejectComments = data.rejectComments
        this.reject.rejectState = data.rejectState
        this.reject.form.rejectState = data.rejectState
        this.reject.rejectDate = data.rejectDate

        const userSignEl = this.$refs.userSign
        const doctorSignEl = this.$refs.doctorSignEl
        if (userSignEl) {
          this.drawSign(userSignEl.getContext('2d'), JSON.parse(data.userSign))
        }
        if (doctorSignEl) {
          this.drawSign(userSignEl.getContext('2d'), JSON.parse(data.doctorSign))
        }
      })
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
    <div class="info-item flex--vcenter">
      <span class="info-item__label">用户名称</span>:
      <span class="info-item__content">{{userName}}</span>
    </div>
    <div class="info-item flex--vcenter">
      <span class="info-item__label">用户电话</span>:
      <span class="info-item__content">{{userPhone}}</span>
    </div>
    <div class="info-item flex--vcenter">
      <span class="info-item__label">服务人员</span>:
      <span class="info-item__content">{{providerName}}</span>
    </div>
    <div class="info-item flex--vcenter">
      <span class="info-item__label">治疗时间</span>:
      <span class="info-item__content">{{serviceDate}}</span>
    </div>
    <div class="info-item flex--vcenter">
      <span class="info-item__label">订单类型</span>:
      <span class="info-item__content">{{serviceState}}</span>
    </div>
    <div class="info-item flex--vcenter">
      <span class="info-item__label">当日症状</span>:
      <span class="info-item__content">{{serviceComments}}</span>
    </div>
    <div class="flex--vcenter">
      <div class="info-item flex-item flex">
        <span class="info-item__label">客户签名</span>:
        <span class="info-item__content sign-panel-wrap">
          <canvas id="userSign" class="sign-panel" ref="userSign" width="375" height="600"></canvas>
        </span>
      </div>
      <div class="info-item flex-item flex">
        <span class="info-item__label">医生签名</span>:
        <span class="info-item__content sign-panel-wrap">
          <canvas id="doctorSign" class="sign-panel" ref="doctorSign" width="375" height="600"></canvas>
        </span>
      </div>
    </div>
    <div class="info-item flex--vcenter">
      <span class="info-item__label">用户反馈</span>:
      <span class="info-item__content">{{!feedback.userComments?'用户没有发表评论':feedback.userComments}}</span>
    </div>
    <h3>申请作废</h3>
    <div class="info-item flex-item flex--vcenter">
      <span class="info-item__label">作废理由</span>:
      <span class="info-item__content">
        {{reject.rejectComments}}
      </span>
    </div>
    <div class="info-item flex-item flex--vcenter">
      <span class="info-item__label">审核状态</span>:
      <span class="info-item__content">
        <el-select v-model="reject.form.rejectState"  :disabled="reject.rejectState > 0" placeholder="请选择">
          <el-option
            v-for="(item,key,value) in reject.state"
            :key="key"
            :label="key"
            :value="value">
          </el-option>
        </el-select>
      </span>
    </div>
    <div class="info-item flex-item flex--vcenter" v-show="reject.rejectState > 0">
      <span class="info-item__label">审核时间</span>:
      <span class="info-item__content">
        {{reject.rejectDate}}
      </span>
    </div>
    <el-button
      style="margin-top: 20px;"
      v-show="!this.reject.rejectState"
      type="primary"
      @click="rejcetService">提交
    </el-button>
  </div>
</template>

<style lang="scss">
@import "~@/assets/style/variables/index";

#serviceDetail {
  .info-item {
    margin-top: 20px;
    &__label {
      flex: none;
      width: 70px;
    }
    &__content {
      margin-left: 10px;
    }
  }

  .sign-panel-wrap {
    width: 190px;
    height: 300px;
    overflow: hidden;
  }
  .sign-panel {
    transform-origin: left top;
    transform: scale(0.5);
  }
}
</style>
