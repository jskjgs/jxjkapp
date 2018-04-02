<script>
/*
 * Created by zhengji
 * Date: 2017/8/29
 */
import placeholderImg from '@/assets/images/placeholder.png'
import SearchTable from '@/components/_common/searchTable/SearchTable'

import {
  getUserInfoApi,
  addToQueueApi,
  getServiceListApi
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
        'prop': 'orderId',
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
                class="operate-item">
                  <el-button
                    type="text"
                    onClick={() => this.addToQueue(scope.row)}>
                    排队
                  </el-button>
              </span>
            </div>
          )
        }
      }
    }]
    return {
      userId: null,
      userName: null,
      userPhone: null,
      userType: null,
      tableData: [],
      keyWords: null
    }
  },
  created () {
    this.placeholderImg = placeholderImg
  },
  computed: {
    loginUserType () {
      return this.$store.state.accountInfo && this.$store.state.accountInfo.author
    },
    listParams () {
      return {
        userId: this.userId,
        areaId: this.loginUserType === 3 ? (this.$store.state.pickedArea && this.$store.state.pickedArea.id) : undefined
      }
    }
  },
  watch: {
    listParams (newParams) {
      this.getServiceList(newParams)
    }
  },
  methods: {
    // 查询用户信息
    getUserInfoApi () {
      return getUserInfoApi({phone: this.keyWords}).then((res) => {
        const content = res.content || {}
        const list = content.records || []
        const user = list[0]
        if (!user) {
          this.$message({
            type: 'error',
            message: '用户数据异常'
          })
          return false
        }
        this.userId = user.id
        this.userName = user.name
        this.userPhone = user.phone
        this.userType = typeof user.type === 'number' ? user.type : ['一般用户', 'VIP'].findIndex(item => item === user.type)
      })
    },
    // 获取订单列表
    getServiceList (params) {
      return getServiceListApi(params).then((res) => {
        res = res || {}
        const content = res.content || {}
        const list = content.records || []
        this.tableData = list.map(item => {
          return {
            orderId: item.orderId,
            orderDetailId: item.orderDetailId,
            orderAmount: item.payPrice,
            storage: item.remainQty,
            serviceName: item.skuName,
            skuId: item.skuId,
            userId: item.userId
          }
        })
      })
    },
    handleSearch () {
      this.getUserInfoApi()
    },
    addToQueue (rowData) {
      addToQueueApi({
        userId: rowData.userId,
        orderDetailId: rowData.orderDetailId
      }).then((res) => {
        this.$message({
          type: 'success',
          message: '排队成功'
        })
        this.$router.push({name: 'queue_root'})
      })
    }
  }
}
</script>

<template>
  <div id="order">
    <div class="top-box flex--vcenter" style="margin-top: 20px;">
      <div class="tool-item">
        搜索用户：
        <el-input v-model="keyWords" style="width: auto;" placeholder="请填入用户手机号"></el-input>
      </div>
      <el-button
        class="tool-item"
        type="primary"
        style="margin-left: 20px;"
        @click="handleSearch">搜索
      </el-button>
    </div>
    <div class="top-box flex--vcenter" style="margin-top: 20px;">
      <div class="tool-item">
        <span style="margin-right:50px">用户名:{{userName}}</span>
        <span style="margin-right:50px">手机号:{{userPhone}}</span>
        <span style="margin-right:50px">用户类型:{{ ['VIP', '一般用户'][userType] }}</span>
      </div>
    </div>
    <div class="top-box" style="margin-top: 20px;">
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
