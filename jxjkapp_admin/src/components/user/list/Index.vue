<script>
  /*
   * Created by zhengji
   * Date: 2017/10/20
   */
  import SearchTable from '@/components/_common/searchTable/SearchTable'
  import {
    getListApi
  } from './api'
  import { userStateFormat } from '@/utils/index'
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
          'prop': 'isVip',
          'label': '用户等级',
          'min-width': '140'
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
          const list = content.list || []
          this.tableData = list.map(item => {
            return {
              userName: item.name,
              userId: item.id,
              userPhone: item.phone,
              isVip: userStateFormat(item.isVip)
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
          currentPage: 'pageNum'
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
      openDetail (userId) {
        console.log(userId)
        this.$router.push({name: 'user/detail_root', params: { id: userId }})
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
</style>
