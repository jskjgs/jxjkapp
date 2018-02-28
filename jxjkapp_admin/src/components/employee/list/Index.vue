<script>
/*
 * Created by zhengji
 * Date: 2017/8/29
 */
import SearchTable from '@/components/_common/searchTable/SearchTable'
import EditDialog from './_thumbs/EditDialog.vue'
import {
  delEmployeeApi,
  modifyEmployeeApi,
  createEmployeeApi
} from './api'

import tableCfgMaker from './_consts/tableCfgMaker'
let adding = false

export default {
  name: 'Doctor',
  components: {
    SearchTable,
    EditDialog
  },
  data () {
    const tableCfg = tableCfgMaker.call(this)
    this.tableAttrs = tableCfg.tableAttrs
    this.columnData = tableCfg.columnData
    this.listApi = tableCfg.listApi

    return {
      editData: null,
      editDialogVisible: false,
      keyWords: null,
      apiKeysMap: {
        id: {
          value: undefined
        },
        keyWords: {
          value: ''
        },
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
        adding = false
      }
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
    // 编辑或新增
    openEditDialog (rowData, isAdd) {
      this.editDialogVisible = true
      adding = !!isAdd
      this.editData = rowData
    },
    handleViewDetail (id) {
      this.$router.push({name: 'employee/detail_root', params: { id: id }})
    },
    addEmployee () {
      this.$router.push({name: 'employee/detail_root'})
    },
    handleDel (id) {
      this.$confirm('是否删除该信息？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        beforeClose: (action, instance, done) => {
          if (action === 'confirm') {
            delEmployeeApi({ids: [id]}).then((res) => {
              this.$message({
                type: 'success',
                message: '删除成功'
              })
              this.$refs.searchTable.getList()
            }).finally(() => {
              done()
            })
          } else {
            done()
          }
        }
      })
    },
    // 提交编辑或新增
    handleEditSubmit (data, respondCb) {
      let requestFn = adding ? createEmployeeApi : modifyEmployeeApi
      data = Object.assign({}, data, {
        author: data.authorId,
        nickname: data.name
      })
      return requestFn(data).then(res => {
        this.$message({
          type: 'success',
          message: adding ? '添加成功' : '修改成功'
        })
        this.editDialogVisible = false
        this.$refs.searchTable.init()
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
            @click="openEditDialog(null, true)">
            新增 <i class="el-icon-plus"></i>
          </el-button>
        </div>
      </div>
      <el-table-column
        slot="column-operate"
        align="center"
        label="操作"
        width="220">
        <template scope="scope">
          <div class="flex--center operate-items">
            <span
              class="operate-item">
              <el-button 
                type="text" 
                @click="openEditDialog(scope.row)">
                编辑
              </el-button>
            </span>
            <span
              class="operate-item">
              <el-button 
                type="text" 
                @click="handleDel(scope.row.no)">
                删除
              </el-button>
            </span>
          </div>     
        </template>
      </el-table-column>
    </search-table>
    <edit-dialog
      v-model="editDialogVisible"
      :data="editData"
      @submit="handleEditSubmit"/>
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
