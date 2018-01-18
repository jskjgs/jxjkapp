<script>
/*
 * Created by zhengji
 * Date: 2017/8/29
 */
import SearchTable from '@/components/_common/searchTable/SearchTable'

import tableCfgMaker from './_consts/tableCfg'

export default {
  name: 'Queue',
  components: {
    SearchTable
  },
  data () {
    const tableCfg = tableCfgMaker.call(this)
    this.tableAttrs = tableCfg.tableAttrs
    this.columnData = tableCfg.columnData
    this.listApi = {
      requestFn: () => {
        return this.$api({
          res: {
            content: {
              list: [{
                id: 1,
                queueNum: '867367',
                type: '书法',
                userName: '王小明',
                phone: '14343242424',
                status: '排队中',
                remark: '备注。。。'
              }]
            }
          }
        })
      },
      responseFn (data) {
        let content = data.content || {}
        this.tableData = (content.list || []).map((item) => {
          return {
            id: item.id,
            queueNum: item.queueNum,
            type: item.type,
            userName: item.userName,
            phone: item.phone,
            status: item.status,
            remark: item.remark
          }
        })
        this.total = content.total || 0
      }
    }

    return {
      queueForm: {
        user: '', // 用户
        type: '', // 操作类型
        remark: '' // 备注
      },
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
    console.log('$uploadFile', this.$uploadFile)
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
    // 取消排队
    cancelQueue (rowData) {
      this.$confirm('确定取消排队？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        beforeClose: (action, instance, done) => {
          if (action === 'confirm') {
          } else {
            done()
          }
        }
      })
    },
    // 跳过排队
    skipQueue (rowData) {
      this.$confirm('确定执行过号操作？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        beforeClose: (action, instance, done) => {
          if (action === 'confirm') {
          } else {
            done()
          }
        }
      })
    }
  }
}
</script>

<template>
  <div id="page-queue">
    <div class="flex--vcenter page-top">
      <div class="page-title">
        排队管理
      </div>
    </div>
    <div class="top-box flex--vcenter">
      <div class="input-items flex-item">
        <el-form ref="form" :model="queueForm" label-width="100px">
          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="添加用户">
                <el-input v-model="queueForm.user"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="操作类型">
                <el-input v-model="queueForm.type"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-form-item label="备注" style="margin-bottom: 0;">
                <el-input v-model="queueForm.remark"></el-input>
              </el-form-item>
          </el-row>
        </el-form>
      </div>
      <div class="btn-wrap flex-item--none">
        <el-button type="primary" style="margin-left: 20px;width: 120px;border-radius: 4px;">排号</el-button>
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

  #page-queue {
    .top-box {
      .input-items {
        padding: 10px;
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
