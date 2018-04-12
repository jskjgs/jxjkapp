<script>
/*
 * Created by zhengji
 * Date: 2017/8/29
 */
import placeholderImg from '@/assets/images/placeholder.png'

import SearchTable from '@/components/_common/searchTable/SearchTable'

import { convertDate } from '@/utils/index'
import {
  queryServiceRecordApi
} from './api'
import {
  INDEX as SERVICE_DETAIL_INDEX
} from '../serviceDetail/_consts/routers'

export default {
  name: 'ServiceRecord',
  props: {
    detailPath: Function // 详情路径
  },
  components: {
    SearchTable
  },
  data () {
    const vm = this
    this.tableAttrs = {
      'props': {
        'tooltip-effect': 'dark',
        'style': 'width: 100%',
        'align': 'center'
      }
    }
    this.columnData = [{
      attrs: {
        'prop': 'employeeName',
        'label': '服务人员',
        'min-width': '100',
        'show-overflow-tooltip': true
      }
    }, {
      attrs: {
        'prop': 'createDate',
        'label': '开始时间',
        'min-width': '100',
        'show-overflow-tooltip': true,
        'formatter' (row, col) {
          return row.createDate ? convertDate(row.createDate, 'Y-M-D h:m') : '--'
        }
      }
    }, {
      attrs: {
        'prop': 'completeTime',
        'label': '完成时间',
        'min-width': '100',
        'show-overflow-tooltip': true,
        'formatter' (row, col) {
          return row.isComplete ? convertDate(row.updateDate, 'Y-M-D h:m') : '--'
        }
      }
    }, {
      attrs: {
        'prop': 'serviceState',
        'label': '状态',
        'min-width': '100',
        'show-overflow-tooltip': true,
        'formatter' (row, col) {
          return row.isComplete ? '已完成' : '待服务'
        }
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
                class="operate-item">
                <el-button
                  type="text"
                  onClick={() => this.openDetail(scope.row.id)}>
                  查看详情
                </el-button>
              </span>
            </div>
          )
        }
      }
    }]
    this.listApi = {
      listQueryParams: {orderId: this.$route.params.orderId},
      requestFn: queryServiceRecordApi,
      responseFn (data) {
        let content = data.content || {}
        this.tableData = (content.records || []).map((item) => {
          vm.userName = item.name
          vm.userPhone = item.phone
          return {
            createDate: item.createDate,
            updateDate: item.updateDate,
            orderDetailId: item.orderDetailId,
            id: item.id,
            patientId: item.userId,
            patientName: item.name,
            patientPhone: item.phone,
            employeeName: item.employeeName,
            employeeId: item.employeeId,
            isComplete: item.isComplete !== 0
          }
        })
        this.total = content.total || 0
      }
    }
    return {
      orderId: this.$route.params.orderId,
      userName: this.$route.params.userName,
      userPhone: this.$route.params.userPhone,
      apiKeysMap: {
        orderId: {
          value: this.$route.params.orderId
        },
        orderBy: {
          value: 'stop_time'
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
    openDetail (id) {
      this.$router.push(this.detailPath ? this.detailPath(id) : {
        name: SERVICE_DETAIL_INDEX.name,
        params: {id}
      })
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
      <div class="table-tools flex--vcenter" slot="table-tools" style="margin-top: 20px; justify-content: space-between;">
  
          <div class="tool-item">
            <span style="margin-right:50px">用户名:{{userName}}</span>
            <span>手机号:{{userPhone}}</span>
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
