<script>
/*
 * Created by zhengji
 * Date: 2017/8/29
 */
import SearchTable from '@/components/_common/searchTable/SearchTable'

import {
  getListApi,
  modifyDoctorApi,
  topDoctorApi,
  queryDepartmentApi
} from './api'

export default {
  name: 'Doctor',
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
        'prop': 'name',
        'label': '类别',
        'min-width': '100',
        'show-overflow-tooltip': true
      }
    }, {
      attrs: {
        'prop': 'describe',
        'label': '描述',
        'min-width': '160',
        'show-overflow-tooltip': true
      }
    }, {
      attrs: {
        'min-width': '140',
        'label': '操作'
      },
      scopedSlots: {
        default: (scope) => {
          return (
            <div class="flex--center operations">
              <span
                  class="operate-item el-icon-edit"
                  onClick={() => this.openEditDialog(scope.row)}>
              </span>
            </div>
          )
        }
      }
    }]
    this.listApi = {
      requestFn: getListApi,
      responseFn (data) {
        let content = data.content || {}
        this.tableData = (content.list || []).map((item) => {
          let doctor = item.doctor || {}
          return {
            no: doctor.orderNumber,
            name: doctor.name,
            avatar: doctor.headPortrait,
            ksmc: doctor.ksmc,
            describe: doctor.goodDescribe,
            top: !!doctor.isTop,
            id: doctor.id
          }
        })
        this.total = content.total || 0
      }
    }

    return {
      departments: [],
      // project: '',
      department: '',
      departmentId: '',
      doctorName: '',
      editDialogVisible: false,
      editData: {},
      apiKeysMap: {
        pageSize: {
          value: 10,
          innerKey: 'pageSize' // searchTable组件内部映射的key
        },
        departmentId: {
          value: undefined
        },
        doctorName: {
          value: ''
        },
        currentPage: 'pageNum',
        orderBy: {
          value: 'order_number'
        },
        desc: {
          value: true
        }
      }
    }
  },
  created () {
    this.searchDepartment().then(departments => {
      this.departments = departments
    })
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
    searchProject () {
    },
    searchDepartment () {
      // console.log(queryString)
      return queryDepartmentApi({
        pageNum: 1,
        pageSize: this.pageSize
      }).then(res => {
        let content = res.content || []
        let departments = content.map(item => {
          return {
            value: item.id,
            label: item.name
          }
        })
        return departments
      })
    },
    handleProjectSelect () {},
    handleSearch () {
      this.apiKeysMap = Object.assign({}, this.apiKeysMap, {
        departmentId: {
          value: this.departmentId || undefined
        }
      })
    },
    openEditDialog (rowData, isAdd) {
      this.editDialogVisible = true
      this.editData = rowData
    },
    handleEditCancel () {
    },
    handleEditSubmit (data, respondCb) {
      let formData
      if (data.file) {
        formData = new FormData()
        formData.append('file', data.file)
      }
      let sendData = {
        goodDescribe: data.describe,
        doctorId: data.id
      }
      modifyDoctorApi(sendData, formData).then(res => {
        this.$message({
          type: 'success',
          message: '修改成功'
        })
        this.editDialogVisible = false
        this.$refs.searchTable.getList()
        respondCb(true)
      }).catch(() => {
        respondCb()
      })
    },
    // 切换置顶状态
    switchTop (rowData) {
      topDoctorApi({
        doctorId: rowData.id
      }).then(res => {
        this.$message({
          type: 'success',
          message: rowData.top ? '置顶成功' : '取消置顶成功'
        })
      }).finally(() => {
        this.$refs.searchTable.init()
      })
    }
  }
}
</script>

<template>
  <div id="doctor">
    <div class="flex--vcenter page-top">
      <div class="page-title">
        医护类别管理
      </div>
    </div>
    <search-table
      ref="searchTable"
      :table-attrs="tableAttrs"
      :column-data="columnData"
      :list-api="listApi"
      :api-keys-map="apiKeysMap">
    </search-table>
  </div>
</template>

<style lang="scss">
  @import "~@/assets/style/variables/index";

  #doctor {
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
