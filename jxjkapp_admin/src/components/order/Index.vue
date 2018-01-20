<script>
/*
 * Created by zhengji
 * Date: 2017/8/29
 */
import placeholderImg from '@/assets/images/placeholder.png'

import SearchTable from '@/components/_common/searchTable/SearchTable'

import {
  queryOrderApi
} from './api'

import {
  convertDate
} from '@/utils/index'

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
        'min-width': '50',
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
        'prop': 'userName',
        'label': '用户名',
        'min-width': '70'
      }
    }, {
      attrs: {
        'prop': 'userLevel',
        'label': '权限',
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
            <div class="flex--center operations">
              <span
                class="operate-item "
                onClick={() => this.openDetail(scope.row)}>
                  详情
              </span>
              <span v-show={ !scope.row.state }
                class="operate-item "
                onClick={() => this.openServiceRecord(scope.row)}>
                  记录
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
        console.log(content.list)
        this.tableData = (content.list || []).map((item) => ({
          orderId: item.id,
          orderCode: item.code,
          orderAmount: ('￥' + item.orderSalesPrice),
          createTime: item.createDate,
          orderState: item.payState,
          userName: item.user.name,
          phoneNumber: item.user.phone,
          userLevel: ((isVip) => {
            if (isVip) {
              return 'VIP'
            }
            return '普通用户'
          })(item.user.isVip),
          areaId: item.area.id,
          areaName: item.area.name
        }))
        this.total = content.total || 0
      }
    }
    return {
      keyWords: '',
      apiKeysMap: {
        pageSize: {
          value: 10,
          innerKey: 'pageSize' // searchTable组件内部映射的key
        },
        currentPage: 'pageNum',
        orderBy: {
          value: 'create_time'
        },
        desc: {
          value: true
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
    },
    currentPage (newPageNum) {
      this.getList({
        pageNum: newPageNum
      })
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
    openDetail (rowData) {
      rowData = !rowData ? {} : rowData
      this.$router.push({name: 'order/detail_root', params: { orderId: rowData.orderId }})
    },
    openServiceRecord (rowData) {
      rowData = !rowData ? {} : rowData
      this.$router.push({name: 'order/serviceRecord_root', params: { orderId: rowData.orderId, orderState: rowData.orderState }})
    }
  }
}
</script>

<template>
  <div id="order">
    <div class="flex--vcenter page-top">
      <div class="page-title">
        订单管理
      </div>
    </div>
    <search-table
      ref="searchTable"
      :table-attrs="tableAttrs"
      :column-data="columnData"
      :list-api="listApi"
      :api-keys-map="apiKeysMap">
      <div class="table-tools flex--vcenter" slot="table-tools">
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
            @click="openDetail()">
            新增 <i class="el-icon-plus"></i>
          </el-button>
        </div>
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
