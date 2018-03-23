<script>
  /*
   * Created by zhengji
   * Date: 2017/10/21
   */
  import SearchTable from '@/components/_common/searchTable/SearchTable'
  import { Loading } from 'element-ui'
  import tableCfgMaker from './_consts/tableCfgMaker'

  import {
    delReserveApi
  } from './api'

  export default {
    name: 'Reverse',
    components: {
      SearchTable
    },
    data () {
      const tableCfg = tableCfgMaker.call(this)
      this.tableAttrs = tableCfg.tableAttrs
      this.columnData = tableCfg.columnData
      this.listApi = tableCfg.listApi

      return {
        hospAreaList: [],
        productTypeList: [],
        productList: [],
        categoryId: undefined,
        productId: undefined,
        createTimeRange: [], // 预约时间
        searchKeyword: '',
        apiKeysMap: {
          categoryId: {
            value: undefined
          },
          productId: {
            value: undefined
          },
          startDate: {
            value: undefined
          },
          stopDate: {
            value: undefined
          }
        }
        // areaId: this.$store.state.pickedArea.id, // 院区
      }
    },
    created () {
      // if (this.userType !== 3) {
      //   this.$_getAreaList().then(list => {
      //     this.hospAreaList = list
      //   })
      // }
      this.$_getProductTypeList().then(list => {
        this.productTypeList = list
      })
    },
    computed: {
      userType () {
        return this.$store.state.accountInfo.author
      },
      areaList () {
        const state = this.$store.state
        return this.userType === 3 ? state.areaList : this.hospAreaList
      }
    },
    watch: {
      categoryId (id) {
        this.productId = undefined
        this.getProductList(id)
      }
    },
    methods: {
      getProductList (typeId) {
        return this.$_getProductList(typeId || this.categoryId).then(list => {
          this.productList = list
        })
      },
      handleSearch () {
        const createTimeRange = this.createTimeRange || []
        this.apiKeysMap = Object.assign({}, this.apiKeysMap, {
          categoryId: {
            value: this.categoryId || undefined
          },
          productId: {
            value: this.productId || undefined
          },
          startDate: {
            value: new Date(createTimeRange[0] || '').getTime() || undefined
          },
          stopDate: {
            value: new Date(createTimeRange[1] || '').getTime() || undefined
          }
        })
      },
      // 取消预约
      cancelReserve (rowData) {
        this.$confirm(`确定取消本次预约？`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          beforeClose: (action, instance, done) => {
            if (action === 'confirm') {
              const loading = Loading.service({ fullscreen: true })
              delReserveApi(rowData.id).then(() => {
                this.$message({
                  type: 'success',
                  message: '取消成功!'
                })
                done()
                this.$refs.searchTable.getList()
              }).finally(() => {
                loading.close()
              })
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
  <div id="reverse-manage">
    <search-table
      ref="searchTable"
      :table-attrs="tableAttrs"
      :column-data="columnData"
      :list-api="listApi"
      :api-keys-map="apiKeysMap">
      <div class="table-tools" slot="table-tools">
        <el-row :gutter="20">
          <el-col :span="8">
            <div class="tool-item">
              <span class="tool-item__label">服务分类</span>：
              <el-select 
                class="tool-item__content" 
                v-model="categoryId" 
                placeholder="选择分类"
                clearable>
                <el-option
                  v-for="item in productTypeList"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="tool-item">
              <span class="tool-item__label">项目名称</span>：
              <el-select 
                v-model="productId"
                class="tool-item__content"
                placeholder="选择项目"
                :disabled="categoryId === undefined || categoryId === ''"
                clearable>
                <el-option
                  v-for="item in productList"
                  :key="item.id"
                  :label="item.productName"
                  :value="item.id">
                </el-option>
              </el-select>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="tool-item">
              <span class="tool-item__label">预约时间</span>：
              <el-date-picker
                class="tool-item__content"
                v-model="createTimeRange"
                type="daterange"
                style="width: 230px;"
                placeholder="选择日期范围">
              </el-date-picker>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" style="margin-top: 20px;">
          <!-- <el-col :span="8">
            <div class="tool-item" v-if="userType !== 3">
              <span class="tool-item__label">院区</span>：
              <el-select 
                class="tool-item__content"
                v-model="areaId" 
                placeholder="院区"
                clearable>
                <el-option
                  v-for="item in hospAreaList"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
          </el-col> -->
          <el-col :span="8">
            <div class="tool-item">
              <span class="tool-item__label">搜索关键字</span>：
              <el-input
                class="tool-item__content"
                v-model="searchKeyword"
                placeholder="请输入客户姓名／卡号..."
                style="width: 290px;">
              </el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="tool-item">
              <el-button type="primary" @click="handleSearch">搜索</el-button>
            </div>
          </el-col>
        </el-row>
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
                @click="cancelReserve(scope.row)">
                取消预约
              </el-button>
            </span>
          </div>     
        </template>
      </el-table-column>
    </search-table>
  </div>
</template>

<style lang="scss">
  #reverse-manage {
    .tool-item {
      display: flex;
      align-items: center;
      &__label {
        width: 76px;
        flex: none;
      }
      &__content {
        margin-left: 10px;
        flex: 1;
      }
    }
  }
</style>
