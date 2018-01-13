<script>
  /*
   * Created by zhengji
   * Date: 2017/10/20
   */
  import SearchTable from '@/components/_common/searchTable/SearchTable'
  import {
    getListApi
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
          'prop': 'phone',
          'label': '手机号',
          'min-width': '140'
        }
      }, {
        attrs: {
          'prop': 'namefe',
          'label': '姓名',
          'min-width': '140'
        }
      }, {
        attrs: {
          'label': '操作',
          'min-width': '140'
        },
        scopedSlots: {
          default: (scope) => {
            // <span
            //   class="operate-item el-icon-edit"
            //   onClick={() => this.openEditDialog(scope.row)}>
            // </span>
            return (
              <div class="flex--center operations">
                <span class="operate-item top-switch flex--vcenter">
                  <el-switch
                    style="margin-right: 10px;"
                    value={!!scope.row.enable}
                    onInput={(enable) => (scope.row.enable = enable)}
                    onChange={() => this.switchEnable(scope.row)}
                    {...{props: { 'on-text': '', 'off-text': '' }}}>
                  </el-switch>
                  { scope.row.enable ? '启用' : '禁用' }
                </span>
              </div>
            )
          }
        }
      }]
      this.listApi = {
        requestFn: getListApi,
        responseFn (res) {
          console.log(res, 'res')
          const content = res.content || {}
          const list = content.list || []
          this.tableData = list.map(item => {
            return {
              no: item.no,
              userName: item.account,
              id: item.id,
              tel: item.phone,
              enable: !!item.enable
            }
          })
          this.total = content.total || 0
        }
      }
      return {
        searchKeyword: '',
        apiKeysMap: {
          key: {
            value: undefined
          },
          currentPage: 'startPage'
        }
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
      // 切换置顶状态
      switchEnable (rowData) {
        const enableUserApi = function () {
          return Promise.reject()
        }
        enableUserApi({
          doctorId: rowData.id
        }).then(res => {
          this.$message({
            type: 'success',
            message: rowData.enable ? '启用成功' : '禁用成功'
          })
        }).finally(() => {
          // this.$refs.searchTable.init()
        })
      }
    }
  }
</script>

<template>
  <div id="user-manage">
    <div class="flex--vcenter page-top">
      <div class="page-title">
        用户管理
      </div>
    </div>
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
  </div>
</template>

<style lang="scss">
  #user-manage {
  }
</style>
