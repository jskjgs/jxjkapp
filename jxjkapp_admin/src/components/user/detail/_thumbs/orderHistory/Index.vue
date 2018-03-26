<script>
  /*
   * Created by zhengji
   * Date: 2017/10/20
   */
  import {
    ORDER_ADD,
    ORDER_DETAIL,
    ORDER_RECORD
  } from '@/components/user/detail/_consts/routers'
  import SearchTable from '@/components/_common/searchTable/SearchTable'
  import tableCfgMaker from './tableCfgMaker'
  export default {
    name: 'OrderHistory',
    components: {
      SearchTable
    },
    data () {
      const tableCfg = tableCfgMaker.call(this)
      this.tableAttrs = tableCfg.tableAttrs
      this.columnData = tableCfg.columnData
      this.listApi = tableCfg.listApi

      return {
        keyword: '',
        apiKeysMap: {
          userId: {
            value: this.$route.params.id
          },
          patientInfoId: {
            value: this.$route.query.patientId
          }
        }
      }
    },
    created () {
    },
    watch: {
      '$route.query' (newQuery) {
        if (newQuery.patitentId) {
          this.apiKeysMap.patientInfoId = newQuery.patitentId
        }
      }
    },
    methods: {
      search () {
        this.apiKeysMap = Object.assign({}, this.apiKeysMap)
      },
      toOrderAdd () {
        console.log('ORDER_ADD.path', ORDER_ADD.path)
        this.$router.push(ORDER_ADD)
      },
      toDetail (orderId) {
        this.$router.push({
          name: ORDER_DETAIL.name,
          params: {
            ...this.$route.params,
            orderId
          }
        })
      },
      toRecord (orderId) {
        this.$router.push({
          name: ORDER_RECORD.name,
          params: {
            ...this.$route.params,
            orderId
          }
        })
      }
    }
  }
</script>
<template>
  <div id="user-order-history">
    <SearchTable
      ref="searchTable"
      :table-attrs="tableAttrs"
      :column-data="columnData"
      :list-api="listApi"
      :api-keys-map="apiKeysMap">
      <div class="table-tools flex--vcenter--sb" slot="table-tools">
        <!-- <div class="search-wrap flex--vcenter">
          <div class="tool-item">
            搜索关键字：
            <el-input 
              v-model="keyword" 
              style="width: 350px;"
              placeholder="用户ID／手机号／就诊卡号／身份证号／订单ID"/>
          </div>
          <el-button
            type="primary"
            style="margin-left: 20px;"
            @click="search">
            搜索
          </el-button>
        </div> -->
        <div class="btn-wrap">
          <el-button
            type="primary"
            @click="toOrderAdd">添加订单</el-button>
        </div>
      </div>
      <el-table-column
        slot="column-operate"
        align="center"
        label="操作"
        width="170">
        <template scope="scope">
          <div class="flex--center operate-items">
            <span
              class="operate-item">
              <el-button 
                type="text"
                @click="toDetail(scope.row.id)">
                详情
              </el-button>
            </span>
            <span
              class="operate-item">
              <el-button 
                type="text"
                @click="toRecord(scope.row.id)">
                记录
              </el-button>
            </span>
          </div>     
        </template>
      </el-table-column>
    </SearchTable>
  </div>
</template>
<style lang="scss">
#user-order-history {
}
</style>
