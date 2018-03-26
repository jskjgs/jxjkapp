<script>
  /*
   * Created by zhengji
   * Date: 2017/10/20
   */
  import UserDetails from './_thumbs/Details'
  import OrderHistory from './_thumbs/orderHistory/Index'
  import RechargeRecord from './_thumbs/Recharge'
  import _merge from 'lodash/merge'

  import {
    getPaientsApi
  } from './api'

  export default {
    name: 'UserDetail',
    components: {
      UserDetails,
      OrderHistory,
      RechargeRecord
    },
    created () {
      this.getPaientList()
    },
    data () {
      this.tabs = {
        UserDetails,
        OrderHistory,
        RechargeRecord
      }
      return {
        patientList: []
      }
    },
    computed: {
      activePatientId: {
        get () {
          return this.$route.query.patientId
        },
        set (val) {
          if (+val) {
            const {name, query, params} = this.$route
            this.$router.replace(_merge({}, {name, query, params}, {
              query: {
                patientId: val
              }
            }))
          }
        }
      },
      userId () {
        return this.$route.params.id
      },
      activeTab: {
        get () {
          return this.$route.query.tab || 'UserDetails'
        },
        set (val) {
          this.$router.replace({
            ...this.$route,
            query: {
              ...this.$route.query,
              tab: val
            }
          })
        }
      }
    },
    methods: {
      // 获取就诊人列表
      getPaientList () {
        return getPaientsApi(this.userId).then(res => {
          const content = res.content || {}
          const list = content.records || []
          this.patientList = list
          this.activePatientId = +this.$route.query.patientId || (list[0].id + '')
        })
      }
    }
  }
</script>
<template>
  <div id="user-detail-wrap">
    <el-tabs class="patient-tabs" v-model="activePatientId">
      <el-tab-pane 
        v-for="patient in patientList"
        :key="patient.id + ''"
        :label="patient.name" 
        :name="patient.id + ''" />
    </el-tabs>
    <div class="user-info-wrap">
      <el-tabs v-model="activeTab">
        <el-tab-pane label="详细资料" name="UserDetails"></el-tab-pane>
        <el-tab-pane label="订单记录" name="OrderHistory"></el-tab-pane>
      </el-tabs>
      <div class="activeTab-wrap">
        <keep-alive>
          <component :is="activeTab" :patientId="activePatientId"></component>
        </keep-alive>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
#user-detail-wrap {
  .patient-tabs {
    .el-tabs__active-bar {
      display: none;
    }
  }

  .user-info-wrap {
    margin-top: 20px;
    border: 1px solid #ccc;
    padding: 20px;
    min-height: 500px;
  }
}
</style>

