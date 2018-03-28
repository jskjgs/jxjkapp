<script>
/*
 * Created by zhengji
 * Date: 2017/8/29
 */
import placeholderImg from '@/assets/images/placeholder.png'

import SearchTable from '@/components/_common/searchTable/SearchTable'

import { convertDate, payStateFormat, userStateFormat } from '@/utils/index'

import {
  queryOrderApi
} from './api'

export default {
  name: 'order',
  components: {
    SearchTable
  },
  data () {
    this.tableAttrs = {
      'props': {
        'tooltip-effect': 'dark',
        'style': 'width: 100%',
        'align': 'center'
      }
    }
    this.columnData = [{
      attrs: {
        'prop': 'orderCode',
        'label': '订单号',
        'min-width': '120',
        'show-overflow-tooltip': true
      }
    }, {
      attrs: {
        'prop': 'orderAmount',
        'label': '金额',
        'width': '100',
        'show-overflow-tooltip': true
      }
    }, {
      attrs: {
        'prop': 'createTime',
        'label': '创建时间',
        'min-width': '120',
        'show-overflow-tooltip': true,
        'formatter' (row, col) {
          return row.createTime ? convertDate(row.createTime, 'Y-M-D h:m') : '--'
        }
      }
    }, {
      attrs: {
        'prop': 'orderState',
        'label': '状态',
        'min-width': '80'
      }
    }, {
      attrs: {
        'prop': 'userLevel',
        'label': '权限',
        'min-width': '70'
      }
    }, {
      attrs: {
        'prop': 'patientName',
        'label': '就诊人',
        'min-width': '70'
      }
    }, {
      attrs: {
        'prop': 'phoneNumber',
        'label': '手机',
        'min-width': '70'
      }
    }, {
      attrs: {
        'min-width': '120',
        'label': '操作'
      },
      scopedSlots: {
        default: (scope) => {
          return (
            <div class="flex--center operate-items">
              <span
                class="operate-item">
                <el-button
                  type="text"
                  onClick={() => this.openDetail(scope.row)}>详情</el-button>
              </span>
              <span v-show={ !scope.row.state }
                class="operate-item">
                <el-button
                  type="text"
                  onClick={() => this.openServiceRecord(scope.row)}>记录</el-button>
              </span>
            </div>
          )
        }
      }
    }]
    this.listApi = {
      requestFn: queryOrderApi,
      responseFn (data) {
        let content = data.content || {}
        console.log(1)
        this.tableData = (content.records || []).map((item) => ({
          orderId: item.id,
          orderCode: item.code,
          orderAmount: ('￥' + item.payPrice),
          createTime: item.createDate,
          orderState: payStateFormat(item.paymentState),
          userName: item.name,
          patientName: item.patientName,
          phoneNumber: item.phone,
          userLevel: userStateFormat(item.isVip)
        }))
        this.total = content.total || 0
      }
    }
    return {
      keyWords: '',
      apiKeysMap: {
        paymentState: {
          value: '1'
        }
      }
    }
  },
  created () {
    this.placeholderImg = placeholderImg
  },
  watch: {
    editDialogVisible (val) {
      if (!val) {
        this.editData = null
      }
    }
  },
  methods: {
    handleSearch () {
      this.apiKeysMap = Object.assign({}, this.apiKeysMap, {
        keyWords: {
          value: this.keyWords || undefined
        }
      })
    },
    newOrder (rowData) {
      this.$router.push({name: 'order/add_root'})
    },
    openDetail (rowData) {
      this.$router.push({name: 'order/detail_root', params: {orderId: rowData.orderId}})
    },
    openServiceRecord (rowData) {
      this.$router.push({name: 'order/serviceRecord_root', params: {orderId: rowData.orderId}})
    }
  }
}
</script>

<template>
  <div id="order">
    <search-table
      ref="searchTable"
      :table-attrs="tableAttrs"
      :column-data="columnData"
      :list-api="listApi"
      :api-keys-map="apiKeysMap">
      <div slot="table-tools">
        <div class="table-tools flex--vcenter">
          <div class="search-wrap flex--vcenter">
            <div class="tool-item">
              搜索关键字：
              <el-input v-model="keyWords" style="width: auto;" placeholder="请填入关键字"></el-input>
            </div>
            <el-button
              class="tool-item"
              type="primary"
              @click="handleSearch">搜索
            </el-button>
          </div>
          <div class="btn-wrap">
            <el-button
              class="btn--add"
              type="primary"
              @click="newOrder()">
              新增 <i class="el-icon-plus"></i>
            </el-button>
          </div>
        </div>
        <el-tabs 
          v-model="apiKeysMap.paymentState.value"
          style="margin-top: 10px;">
          <el-tab-pane label="已支付" name="1"></el-tab-pane>
          <el-tab-pane label="未支付" name="0"></el-tab-pane>
        </el-tabs>
      </div>
    </search-table>
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
    }
    .search-label {
      color: $color3;
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
