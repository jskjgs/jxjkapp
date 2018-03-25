<script>
  /*
   * Created by zhengji
   * Date: 2017/10/20
   */
  import SearchTable from '@/components/_common/searchTable/SearchTable'
  import {
    getListApi,
    updateApi
  } from './api'
  export default {
    name: 'UserManage',
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
          'prop': 'userId',
          'label': 'ID',
          'min-width': '140'
        }
      }, {
        attrs: {
          'prop': 'userPhone',
          'label': '手机号',
          'min-width': '140'
        }
      }, {
        attrs: {
          'prop': 'userName',
          'label': '姓名',
          'min-width': '140'
        }
      }, {
        attrs: {
          'prop': 'userType',
          'label': '用户等级',
          'min-width': '140'
        },
        scopedSlots: {
          default: (scope) => {
            return (
              <button type="button"
              class="el-button el-button--text"
              onClick={() => this.openType(scope.row)}><span>{ ['一般用户', 'VIP'][scope.row.userType] }</span></button>
            )
          }
        }
      }, {
        attrs: {
          'label': '操作',
          'min-width': '140'
        },
        scopedSlots: {
          default: (scope) => {
            return (
              <button type="button"
              class="el-button el-button--text"
              onClick={() => this.openDetail(scope.row.userId)}><span>查看详情</span></button>
            )
          }
        }
      }]
      this.listApi = {
        requestFn: getListApi,
        responseFn (res) {
          const content = res.content || {}
          const list = content.records || []
          this.tableData = list.map(item => {
            return {
              userName: item.name,
              userId: item.id,
              userPhone: item.phone,
              userType: typeof item.type === 'number' ? item.type : ['一般用户', 'VIP'].findIndex(_item => _item === item.type)
            }
          })
          this.total = content.total || 0
        }
      }
      return {
        typeDialogVisible: false,
        searchKeyword: '',
        apiKeysMap: {
          key: {
            value: undefined
          }
        },
        pickedType: undefined
      }
    },
    methods: {
      handleSearch () {
        this.apiKeysMap = Object.assign({}, this.apiKeysMap, {
          key: {
            value: this.searchKeyword || undefined
          }
        })
      },
      openDetail (userId) {
        this.$router.push({name: 'user/detail_root', params: { id: userId }})
      },
      openType (rowData) {
        this.pickedRowData = rowData
        this.pickedType = rowData.userType
        this.typeDialogVisible = true
      },
      changeType () {
        return updateApi({
          id: this.pickedRowData.userId,
          type: this.pickedType
        }).then(() => {
          this.$message({
            type: 'success',
            message: '修改成功!'
          })
          this.typeDialogVisible = false
          this.pickedType = undefined
          this.$refs.searchTable.getList()
        })
      }
    }
  }
</script>

<template>
  <div id="user-manage">
    <search-table
      ref="searchTable"
      :table-attrs="tableAttrs"
      :column-data="columnData"
      :list-api="listApi"
      :api-keys-map="apiKeysMap">
      <div class="table-tools flex--vcenter" slot="table-tools">
        <div class="search-wrap">
          <span class="search-label">搜索关键字：</span>
          <el-input
            class="inline-block search-input"
            placeholder="请输入手机号和用户ID..."
            v-model="searchKeyword"
            @keyup.enter.native="handleSearch">
          </el-input>
          <el-button
            type="primary"
            style="margin-left: 30px;"
            @click="handleSearch">
            搜索
          </el-button>
        </div>
      </div>
    </search-table>
    <el-dialog 
      title="用户等级" 
      :visible.sync="typeDialogVisible"
      size="tiny"
      class="dialog--center">
      <el-radio-group v-model="pickedType">
        <el-radio :label="0">一般用户</el-radio>
        <el-radio :label="1">VIP</el-radio>
      </el-radio-group>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="changeType">保存</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<style lang="scss">
</style>
