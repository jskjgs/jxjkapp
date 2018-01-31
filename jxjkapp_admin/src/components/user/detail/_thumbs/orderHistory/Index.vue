<script>
  /*
   * Created by zhengji
   * Date: 2017/10/20
   */
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
        }
      }
    },
    methods: {
      search () {
        this.apiKeysMap = Object.assign({}, this.apiKeysMap)
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
        <div class="search-wrap flex--vcenter">
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
        </div>
        <div class="btn-wrap">
          <el-button
            type="primary"
            @click="">添加订单</el-button>
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
                type="text">
                详情
              </el-button>
            </span>
            <span
              class="operate-item">
              <el-button 
                type="text">
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
