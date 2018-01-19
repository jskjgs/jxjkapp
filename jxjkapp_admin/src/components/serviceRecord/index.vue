<script>
/*
 * Created by zhengji
 * Date: 2017/8/29
 */
import placeholderImg from '@/assets/images/placeholder.png'

import SearchTable from '@/components/_common/searchTable/SearchTable'

import {
  queryServiceRecordApi
} from './api'

export default {
  name: 'ServiceRecord',
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
        'prop': 'provider',
        'label': '服务人员',
        'min-width': '100',
        'show-overflow-tooltip': true
      }
    }, {
      attrs: {
        'prop': 'completeTime',
        'label': '完成时间',
        'min-width': '100',
        'show-overflow-tooltip': true
      }
    }, {
      attrs: {
        'prop': 'serviceState',
        'label': '状态',
        'min-width': '100',
        'show-overflow-tooltip': true
      }
    }, {
      attrs: {
        'prop': 'index',
        'label': '服务次数',
        'min-width': '50'
      }
    }, {
      attrs: {
        'min-width': '180',
        'label': '操作'
      },
      scopedSlots: {
        default: (scope) => {
          return (
            <div class="flex--center operations">
              <span
                class="operate-item "
                onClick={() => this.openDetail(scope.row)}>
                  查看详情
              </span>
            </div>
          )
        }
      }
    }]
    this.listApi = {
      requestFn: queryServiceRecordApi,
      responseFn (data) {
        let content = data.content || {}
        console.log(content.list)
        this.tableData = (content.list || []).map((item) => ({
          serviceId: item.productSku.id,
          provider: item.doctorUserInfo.name,
          completeTime: item.doctorUserInfo.updateDate,
          index: item.productSku.serviceQuantity,
          serviceState: item.state
        }))
        this.total = content.total || 0
      }
    }
    return {
      orderId: this.$route.params.orderId,
      orderState: this.$route.params.orderState,
      apiKeysMap: {
        pageSize: {
          value: 10,
          innerKey: 'pageSize' // searchTable组件内部映射的key
        },
        id: {
          value: this.$route.params.orderId
        },
        currentPage: 'pageNum',
        orderBy: {
          value: 'service_index'
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
  },
  methods: {
    openDetail (rowData) {
      console.log(1)
      rowData = !rowData ? {} : rowData
      this.$router.push({name: 'order/serviceDetail_root', params: { serviceId: rowData.serviceId }})
      console.log(2)
    }
  }
}
</script>

<template>
  <div id="order">
    <div class="flex--vcenter page-top">
      <div class="page-title">
        <router-link to="/order"> 订单管理 </router-link> > 服务记录
      </div>
    </div>
    <search-table
      ref="searchTable"
      :table-attrs="tableAttrs"
      :column-data="columnData"
      :list-api="listApi"
      :api-keys-map="apiKeysMap">
      <div class="table-tools flex--vcenter" slot="table-tools" style="margin-top: 20px; justify-content: space-between;">
  
          <div class="tool-item">
            <span style="margin-right:50px">用户名:{{}}</span>
            <span>手机号:{{}}</span>
          </div>
          <!-- <div class="tool-item">
            <el-button
              style="width: 100%;"
              type="primary"
              @click="assginService">派发服务
            </el-button>
          </div> -->
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
