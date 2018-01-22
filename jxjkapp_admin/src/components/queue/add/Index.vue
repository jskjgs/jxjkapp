<script>
/*
 * Created by zhengji
 * Date: 2017/8/29
 */
import placeholderImg from '@/assets/images/placeholder.png'
import SearchTable from '@/components/_common/searchTable/SearchTable'
import { userStateFormat } from '@/utils/index'

import {
  getUserInfoApi,
  addToQueueApi,
  getUserOrdersApi
} from './api'

export default {
  name: 'addQueue',
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
        'prop': 'serviceName',
        'label': '项目名称',
        'min-width': '120',
        'show-overflow-tooltip': true
      }
    }, {
      attrs: {
        'prop': 'storage',
        'label': '剩余次数',
        'min-width': '80'
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
                onClick={() => this.addToQueue(scope.row)}>
                  排队
              </span>
            </div>
          )
        }
      }
    }]
    return {
      userName: null,
      userPhone: 15928113204,
      userType: null,
      tableData: [{orderId: 12, orderCode: 1213123, serviceId: 11111},
      {orderCode: 1213123, serviceId: 22222, orderId: 14}],
      keyWords: ''
    }
  },
  created () {
    this.placeholderImg = placeholderImg
  },
  watch: {
  },
  methods: {
    handleSearch () {
      getUserInfoApi({phone: this.keyWords}).then((res) => {
        console.log(res.content)
        let user = res.content
        if (!user) {
          this.$message({
            type: 'error',
            message: '用户数据异常'
          })
          return false
        }
        this.userName = user.name
        this.userPhone = user.phone
        this.userType = userStateFormat(user.isVip)
        getUserOrdersApi().then((res) => {
          console.log(res.content.list)
          let data = res.content.list
          data.forEach(function (value) {
            let option = Object.create(null)
            option.orderId = value.id
            option.orderCode = value.code
            option.orderAmount = value.orderPayPrice
            let product = value.orderProductList ? value.orderProductList[0] : []
            option.storage = product.remainingServiceNumber
            option.serviceName = product.productSkuName
            option.serviceId = product.id
            this.tableData.push(option)
          })
        })
      })
    },
    addToQueue (rowData) {
      addToQueueApi({phone: this.userPhone, orderProductId: rowData.orderId}).then((res) => {
        this.$message({
          type: 'success',
          message: '排队成功'
        })
        this.$router.push({name: 'queue_root'})
      })
      console.log(rowData.serviceId)
    }
  }
}
</script>

<template>
  <div id="order">
    <div class="flex--vcenter page-top">
      <div class="page-title">
        新增排队
      </div>
    </div>
    <div class="top-box flex--vcenter" style="margin-top: 20px;">
      <div class="tool-item">
        搜索关键字：
        <el-input v-model="keyWords" style="width: auto;" placeholder="请填入用户手机号"></el-input>
      </div>
      <el-button
        class="tool-item"
        type="primary"
        @click="handleSearch">搜索
      </el-button>
    </div>
    <div class="top-box flex--vcenter" style="margin-top: 20px;">
      <div class="tool-item">
        <span style="margin-right:50px">用户名:{{userName}}</span>
        <span style="margin-right:50px">手机号:{{userPhone}}</span>
        <span style="margin-right:50px">用户类型:{{userType}}</span>
      </div>
    </div>
    <div class="top-box flex--vcenter" style="margin-top: 20px;">
      <search-table
        ref="SearchTable"
        :table-attrs="tableAttrs"
        :column-data="columnData"
        :initData="tableData">
      </search-table>
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
