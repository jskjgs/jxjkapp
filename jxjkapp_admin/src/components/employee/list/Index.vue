<script>
/*
 * Created by zhengji
 * Date: 2017/8/29
 */
import SearchTable from '@/components/_common/searchTable/SearchTable'
import EditDialog from './_thumbs/EditDialog.vue'
import {
  getListApi,
  modifyDoctorApi
} from './api'

export default {
  name: 'Doctor',
  components: {
    EditDialog,
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
        'prop': 'no',
        'label': '员工编号',
        'min-width': '100',
        'show-overflow-tooltip': true
      }
    }, {
      attrs: {
        'prop': 'name',
        'label': '姓名',
        'min-width': '100',
        'show-overflow-tooltip': true
      }
    }, {
      attrs: {
        'prop': 'area',
        'label': '院区',
        'min-width': '100',
        'show-overflow-tooltip': true
      }
    }, {
      attrs: {
        'prop': 'title',
        'label': '职位',
        'min-width': '160',
        'show-overflow-tooltip': true
      }
    }, {
      attrs: {
        'prop': 'sex',
        'label': '性别',
        'min-width': '160',
        'show-overflow-tooltip': true
      }
    }, {
      attrs: {
        'prop': 'author',
        'label': '账号等级',
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
        console.log(content.list)
        this.tableData = (content.list || []).map((item) => {
          return {
            no: item.id,
            name: item.name,
            area: item.hospArea.name,
            phone: item.phone,
            title: item.title,
            author: item.author,
            sex: ((sex) => { sex === 0 ? '男' : '女' })(item.sex)
          }
        })
        this.total = content.total || 0
      }
    }

    return {
      editDialogVisible: false,
      editData: {},
      keyWords: null,
      apiKeysMap: {
        pageSize: {
          value: 10,
          innerKey: 'pageSize' // searchTable组件内部映射的key
        },
        departmentId: {
          value: undefined
        },
        keyWords: {
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
        departmentId: {
          value: this.departmentId || undefined
        }
      })
    },
    handleEditCancel () {
    },
    addEmployee () {
      this.$router.push({path: 'employee/add'})
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
    }
  }
}
</script>

<template>
  <div id="doctor">
    <div class="flex--vcenter page-top">
      <div class="page-title">
        员工管理
      </div>
    </div>
    <search-table
      ref="searchTable"
      :table-attrs="tableAttrs"
      :column-data="columnData"
      :list-api="listApi"
      :api-keys-map="apiKeysMap">
      <div class="table-tools flex--vcenter"  style="justify-content: space-between;" slot="table-tools">
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
            @click="addEmployee()">
            新增 <i class="el-icon-plus"></i>
          </el-button>
        </div>
      </div>
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
