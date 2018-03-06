<script>
  import SearchTable from '@/components/_common/searchTable/SearchTable'
  import DialogWrap from '@/components/_common/dialogWrap/Index'
  import {
    rechargeApi, getRechargeListApi
  } from '@/components/user/detail/api'

  export default {
    name: 'RechargeRecord',
    components: {
      SearchTable,
      DialogWrap
    },
    data () {
      this.tableCfg = {
        listApi: {
          requestFn: getRechargeListApi,
          responseFn (data) {
            let content = data.content || {}
            this.tableData = (content.records || []).map((item) => ({
              no: item.orderNumber,
              id: item.id,
              name: item.name,
              cover: item.bannerUrl,
              jumpUrl: item.jumpUrl,
              visible: !item.display  // display: 0表示显示 1表示隐藏
            }))
            this.total = content.total || 0
          }
        },
        tableAttrs: {
          'props': {
            'tooltip-effect': 'dark',
            'style': 'width: 100%',
            'align': 'center'
          }
        },
        columnData: [{
          attrs: {
            'prop': 'no',
            'label': '充值时间',
            'min-width': '120'
          }
        }, {
          attrs: {
            'prop': 'no',
            'label': '充值金额',
            'min-width': '100'
          }
        }, {
          attrs: {
            'prop': 'no',
            'label': '备注',
            'min-width': '200'
          }
        }]
      }
      return {
        createTimeRange: '',
        apiKeysMap: {},
        rechargeForm: {
          balance: '',
          amount: '',
          billNum: '',
          remark: ''
        },
        dialogVisible: false
      }
    },
    methods: {
      openRechargeDialog () {
        this.dialogVisible = true
      },
      handleRechargeFormSubmit () {
        return rechargeApi(this.rechargeForm.amount).then(() => {
          this.$message({
            type: 'success',
            message: '充值成功'
          })
        })
      }
    }
  }
</script>
<template>
  <div id="recharge-record">
    <SearchTable
      :table-attrs="tableCfg.tableAttrs"
      :column-data="tableCfg.columnData"
      :list-api="tableCfg.listApi"
      :api-keys-map="apiKeysMap">
      <div 
        class="table-tools flex--vcenter--sb" 
        slot="table-tools">
        <div class="search-wrap">
          <span class="search-label">充值时间：</span>
          <el-date-picker
            v-model="createTimeRange"
            type="daterange"
            style="width: 230px;"
            placeholder="选择日期范围">
          </el-date-picker>
        </div>
        <div class="btn-wrap">
          <el-button
            type="primary"
            @click="openRechargeDialog">
            充值
          </el-button>
        </div>
      </div>
    </SearchTable>
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
#recharge-record {
}
</style>
