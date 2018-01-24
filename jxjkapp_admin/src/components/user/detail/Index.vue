<script>
  /*
   * Created by zhengji
   * Date: 2017/10/20
   */
  import SearchTable from '@/components/_common/searchTable/SearchTable'
  import {
    getOrderListApi
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
        listQueryParams: {userId: this.$route.params.userId},
        requestFn: getOrderListApi,
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
        activeName: 'second',
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
      handleClick (tab, event) {
        console.log(tab, event)
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
    <div style="margin-top: 30px">
    用户姓名：
    手机号：
    用户性别：
    用户ID：
    </div>
    <el-tabs v-model="activeName" @tab-click="handleClick" style="margin-top: 30px">
      <el-tab-pane label="就诊卡" name="first">就诊卡</el-tab-pane>
      <el-tab-pane label="订单记录" name="second">订单记录</el-tab-pane>
      <el-tab-pane label="充值记录" name="third">充值记录</el-tab-pane>
    </el-tabs>
  </div>
</template>
