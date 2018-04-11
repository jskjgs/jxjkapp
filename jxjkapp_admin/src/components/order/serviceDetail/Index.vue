<script>
/*
 * Created by zhengji
 * Date: 2017/8/29
 */
import placeholderImg from '@/assets/images/placeholder.png'

import { convertServiceState } from '@/utils/index'
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
      state: null,
      activeName: 'first',
      serviceId: this.$route.params.serviceId,
      serviceName: null,
      recordNumber: null,
      userName: null,
      userPhone: null,
      providerName: null,
      serviceDate: null,
      serviceState: null,
      serviceComments: null,
      stateToString: null,
      userAutograph: null,

      providerAutograph: null,
      feedback: {
        serviceScore: 0,
        userComments: ''
      },
      reject: {
        rejectComments: '',
        rejectState: 0,
        rejectDate: null,
        state: { '通过': 1, '拒绝': 2 }
      }
    }
  },
  created () {
    this.placeholderImg = placeholderImg
    console.log(this.$route.params)
    if (this.$route.params.id) {
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
      let data = {id: this.$route.params.serviceId, rejectState: this.reject.rejectState}
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
      queryServiceRecordApi(this.$route.params.id).then((res) => {
        let data = res.content || {}
        this.state = data.state
        this.serviceName = data.serviceName
        this.recordNumber = data.recordNumber
        this.userName = data.name
        this.userPhone = data.phone
        this.providerName = data.employeeName
        this.serviceDate = data.isComplete ? '--' : this.$_convertDate(data.updateDate, 'Y-M-D h:m')
        this.serviceState = data.isComplete
        this.stateToString = convertServiceState(data.state)
        this.serviceComments = data.doctorComment || '--'
        this.userAutograph = data.userSign
        this.providerAutograph = data.doctorSign

        this.feedback.userComments = data.comment
        this.feedback.serviceScore = data.level
        this.reject.rejectComments = data.rollbackComment
        this.reject.rejectState = data.state
        this.reject.rejectDate = data.updateDate
        const userSignEl = this.$refs.userSign
        const doctorSignEl = this.$refs.doctorSignEl
        if (userSignEl) {
          this.drawSign(userSignEl.getContext('2d'), JSON.parse(data.userSign))
        }
        if (doctorSignEl) {
          this.drawSign(doctorSignEl.getContext('2d'), JSON.parse(data.doctorSign))
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
    },
    handleTab (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

<template>
  <div id="serviceDetail">
    <div style="margin-top: 20px;">
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="info-item">
            <span class="info-item__label">用户名称</span>:
            <span class="info-item__content">{{userName}}</span>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="info-item">
            <span class="info-item__label">用户电话</span>:
            <span class="info-item__content">{{userPhone}}</span>
          </div>
        </el-col>
      </el-row>
      
      <div class="info-item flex--vcenter">
        <span class="info-item__label">服务人员</span>:
        <span class="info-item__content">{{providerName}}</span>
      </div>
      <div class="info-item flex--vcenter">
        <span class="info-item__label">治疗时间</span>:
        <span class="info-item__content">{{serviceDate}}</span>
      </div>
      <div class="info-item flex--vcenter">
        <span class="info-item__label">状态</span>:
        <span class="info-item__content">{{ serviceState ? '已完成' : '待服务' }}</span>
      </div>
      <div class="info-item flex--vcenter">
        <span class="info-item__label">当日症状</span>:
        <span class="info-item__content">{{serviceComments}}</span>
      </div>
      <el-tabs 
        style="margin-top: 20px;width: 500px;"
        v-model="activeName" 
        @tab-click="handleTab" 
        type="border-card">
        <el-tab-pane label="客户签名" name="first" class="flex--center">
          <canvas id="userSign" class="sign-panel" ref="userSign"></canvas>
        </el-tab-pane>
        <el-tab-pane label="医生签名" name="second"  class="flex--center">
          <canvas id="doctorSign" class="sign-panel" ref="doctorSign"></canvas>
        </el-tab-pane>
        <el-tab-pane label="用户反馈" name="third" class="flex--center">
          <div>
            <el-rate
              v-model="feedback.serviceScore"
              style="margin-bottom: 10px;text-align: center;"
              :max="3"
              :show-text="false"
              disabled
              :texts="['差评', '一般', '满意']"
              :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
            </el-rate>
            <div class="text-center">{{ ['差评', '一般', '满意'][feedback.serviceScore - 1] || '' }}</div>
            <span class="info-item__content" style="margin-left: 0;">{{!feedback.userComments?'用户没有发表评论':feedback.userComments}}</span>
          </div>
        </el-tab-pane>
        <el-tab-pane label="申请作废" name="fourth">
          <div class="info-item flex-item flex--vcenter">
            <span class="info-item__label">作废理由</span>:
            <span class="info-item__content">
              {{reject.rejectComments || '--'}}
            </span>
          </div>
          <div class="info-item flex-item flex--vcenter">
            <span class="info-item__label">审核状态</span>:
            <span class="info-item__content">
              <el-select v-model="reject.rejectState"  :disabled="reject.rejectState == 1" placeholder="请选择">
                <el-option
                  v-for="(value, key, index) in reject.state"
                  :key="key"
                  :label="key"
                  :value="value">
                </el-option>
              </el-select>
            </span>
          </div>
          <div class="info-item flex-item flex--vcenter">
            <span class="info-item__label">审核时间</span>:
            <span class="info-item__content">
              {{ typeof state === 'number' ? this.$_convertDate(reject.rejectDate) : '--'}}
            </span>
          </div>
          <el-button
            style="margin-top: 20px;"
            v-show="serviceState != 1"
            type="primary"
            @click="rejcetService">提交
          </el-button>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<style lang="scss">
@import "~@/assets/style/variables/index";

#serviceDetail {
  .info-item {
    margin-bottom: 20px;
    &__label {
      flex: none;
      width: 70px;
    }
    &__content {
      margin-left: 10px;
    }
  }

  .el-tab-pane {
    height: 300px;
  }

  .sign-panel {
    width: 375px;
    height: 100%;
  }
}
</style>
