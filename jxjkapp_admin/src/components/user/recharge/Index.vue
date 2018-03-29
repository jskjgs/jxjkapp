<script>
import SearchTable from '@/components/_common/searchTable/SearchTable'
import DialogWrap from '@/components/_common/dialogWrap/Index'
import tableCfgMaker from './_consts/tableCfgMaker'

import {
  rechargeApi
} from './api'

export default {
  name: 'User_Recharge',
  components: {
    SearchTable,
    DialogWrap
  },
  data () {
    // searchTable配置
    const tableCfg = tableCfgMaker.call(this)
    this.tableAttrs = tableCfg.tableAttrs
    this.columnData = tableCfg.columnData
    this.listApi = tableCfg.listApi
    return {
      timeRange: undefined,
      dialogVisible: false,
      rechargeForm: {
        balance: undefined,
        amount: undefined,
        billNum: undefined,
        remark: undefined
      },
      apiKeysMap: {
        userId: {
          value: this.$route.params.id
        },
        startDate: {
          value: undefined
        },
        stopDate: {
          value: undefined
        }
      }
    }
  },
  methods: {
    handleSearch () {
      this.apiKeysMap.startDate.value = new Date(this.timeRange[0]).getTime()
      this.apiKeysMap.stopDate.value = new Date(this.timeRange[1]).getTime()
    },
    openRechargeDialog () {
      this.dialogVisible = true
    },
    handleRechargeFormSubmit () {
      rechargeApi({
        userId: this.$route.params.id,
        amount: this.rechargeForm.amount
      }).then(() => {
        this.$message({
          type: 'success',
          message: '充值成功'
        })
        this.dialogVisible = false
        this.apiKeysMap = {
          ...this.apiKeysMap
        }
      })
    }
  }
}
</script>

<template>
  <div id="user-recharge">
    <search-table
      ref="searchTable"
      :table-attrs="tableAttrs"
      :column-data="columnData"
      :list-api="listApi"
      :api-keys-map="apiKeysMap">
      <div class="table-tools flex--vcenter" slot="table-tools" style="justify-content: space-between;">
        <div class="search-wrap flex--vcenter">
          <div class="tool-item">
            <span class="tool-item__label">充值时间</span>：
            <el-date-picker
              class="tool-item__content"
              v-model="timeRange"
              type="daterange"
              style="width: 230px;"
              placeholder="选择日期范围">
            </el-date-picker>
          </div>
          <div class="tool-item">
            <el-button
              type="primary"
              style="margin-left: 30px;"
              @click="handleSearch">
              搜索
            </el-button>
          </div>
        </div>
        <div class="btn-wrap">
          <el-button
            type="primary"
            @click="openRechargeDialog(null, true)">
            充值
          </el-button>
        </div>
      </div>
    </search-table>
    <DialogWrap
      :visible.sync="dialogVisible"
      :attrs="{ title: '充值' }"
      @submit="handleRechargeFormSubmit">
      <el-form 
        :model="rechargeForm" 
        ref="ruleForm" 
        label-width="80px">
        <el-form-item label="余额">
          ¥{{ rechargeForm.balance }}
        </el-form-item>
        <el-form-item label="充值金额" prop="amount">
          <div class="flex">
            ¥<el-input style="margin-left: 10px;" v-model="rechargeForm.amount"></el-input>
          </div>
        </el-form-item>
        <el-form-item label="缴费单号" prop="billNum">
          <el-input v-model="rechargeForm.billNum"></el-input>
        </el-form-item>
        <el-form-item label="备注" prop="remark">
          <el-input v-model="rechargeForm.remark"></el-input>
        </el-form-item>
      </el-form>
    </DialogWrap>
  </div>
</template>

<style lang="scss">
</style>

