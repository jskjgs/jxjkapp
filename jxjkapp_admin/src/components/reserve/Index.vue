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
  import {
    getListApi as getProductListApi
  } from '@/components/product/api'

  export default {
    name: 'Diary',
    components: {
      SearchTable
    },
    data () {
      const tableCfg = tableCfgMaker.call(this)
      this.tableAttrs = tableCfg.tableAttrs
      this.columnData = tableCfg.columnData
      this.listApi = tableCfg.listApi

      return {
        apiKeysMap: {
          projectId: {
            value: undefined
          },
          key: {
            value: undefined
          },
          status: {
            value: undefined
          },
          startTime: {
            value: undefined
          },
          endTime: {
            value: undefined
          },
          doctorId: {
            value: undefined
          },
          departmentId: {
            value: undefined
          },
          currentPage: 'pageNum'
        },
        productType: undefined, // 服务类型
        project: undefined, // 项目id
        createTimeRange: [], // 预约时间
        hospArea: undefined, // 院区
        productList: [], // 项目列表
        searchKeyword: ''
      }
    },
    created () {
    },
    computed: {
      productTypeList () {
        return this.$_getters.productTypeList
      },
      hospAreaList () {
        return this.$_getters.hospAreaList
      }
    },
    watch: {
      productType (type) {
        this.getProductList(type)
      }
    },
    methods: {
      getProductList (type) {
        return getProductListApi({
          productTypeId: type || this.productType
        }).then((res) => {
          const content = res.content || {}
          const list = content.list || []
          this.productList = list.map(item => {
            const sku = item.defaultSku || {}
            return {
              label: sku.name,
              value: sku.id
            }
          })
          console.log('content', content)
        })
      },
      handleSearch () {
        const createTimeRange = this.createTimeRange || []
        this.apiKeysMap = Object.assign({}, this.apiKeysMap, {
          startTime: {
            value: new Date(createTimeRange[0] || '').getTime() || undefined
          },
          endTime: {
            value: new Date(createTimeRange[1] || '').getTime() || undefined
          },
          key: {
            value: this.searchKeyword || undefined
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
    <div class="flex--vcenter page-top">
      <div class="page-title">
        预约管理
      </div>
    </div>
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
                v-model="productType" 
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
                v-model="project"
                class="tool-item__content"
                placeholder="选择项目"
                :disabled="productType === undefined || productType === ''"
                clearable>
                <el-option
                  v-for="item in productList"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
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
          <el-col :span="8">
            <div class="tool-item">
              <span class="tool-item__label">院区</span>：
              <el-select 
                class="tool-item__content"
                v-model="hospArea" 
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
          </el-col>
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
