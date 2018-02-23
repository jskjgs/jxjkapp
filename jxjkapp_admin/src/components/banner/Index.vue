<script>
/*
 * Created by zhengji
 * Date: 2017/8/29
 */
import placeholderImg from '@/assets/images/placeholder.png'
import SearchTable from '@/components/_common/searchTable/SearchTable'
import {
  deleteBannerApi,
  deleteBannerBatchApi,
  addBanenrApi,
  modifyBannerApi,
  switchVisibleApi
} from './api'
let adding = false

import { Loading } from 'element-ui'
import EditDialog from './_thumbs/EditDialog.vue'
import ImgZoom from '@/components/_common/imgZoom/ImgZoom.vue'
import tableCfgMaker from './_consts/tableCfgMaker'

export default {
  name: 'Banner',
  components: {
    EditDialog,
    ImgZoom,
    SearchTable
  },
  data () {
    // searchTable配置
    const tableCfg = tableCfgMaker.call(this)
    this.tableAttrs = tableCfg.tableAttrs
    this.columnData = tableCfg.columnData
    this.listApi = tableCfg.listApi
    return {
      searchKeyword: '',
      currentPage: 1,
      pageSize: 10,
      total: 0,
      multipleSelection: [],
      editDialogVisible: false,
      editData: null,
      apiKeysMap: {
        pageSize: {
          value: 10,
          innerKey: 'pageSize' // searchTable组件内部映射的key
        },
        name: {
          value: undefined
        },
        currentPage: 'pageNum'
      }
    }
  },
  created () {
    this.placeholderImg = placeholderImg
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
    // 修改展示数量
    changeDisplayNum () {
      this.$prompt('新展示个数', '修改展示数量', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputPattern: /^\s*\d+\s*$/,
        inputErrorMessage: '请填入数字',
        confirmButtonClass: 'dialog-confirm-btn',
        beforeClose (action, instance, done) {
          if (action === 'confirm') {
            const loading = Loading.service({ fullscreen: true })
            setTimeout(() => {
              loading.close()
              console.log(loading)
              done()
            }, 2000)
          } else {
            done()
          }
        }
      }).then(({ value }) => {
        this.$message({
          type: 'success',
          message: '修改成功'
        })
      })
    },
    // 搜索banner
    handleSearch (e) {
      this.apiKeysMap = Object.assign({}, this.apiKeysMap, {
        name: {
          value: this.searchKeyword || undefined
        }
      })
    },
    // 多选
    handleSelectionChange (val) {
      console.log('handleSelectionChange')
      this.multipleSelection = val
    },
    // 编辑或新增
    openEditDialog (rowData, isAdd) {
      this.editDialogVisible = true
      adding = !!isAdd
      if (rowData) {
        this.editData = {
          id: rowData.id,
          name: rowData.name,
          no: rowData.no,
          cover: rowData.cover
        }
      }
    },
    // 删除单个banner
    delRow (row) {
      this.$confirm('是否删除该信息？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        beforeClose: (action, instance, done) => {
          if (action === 'confirm') {
            deleteBannerApi({
              id: row.id
            }).then(res => {
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
    // 批量删除
    batchRemove () {
      deleteBannerBatchApi({
        ids: this.multipleSelection.map(item => item.id).join(',')
      }).then(res => {
        this.$message({
          type: 'success',
          message: '删除成功'
        })
        this.editDialogVisible = false
        this.$refs.searchTable.getList()
      })
    },
    // 提交编辑或新增
    handleEditSubmit (data, respondCb) {
      let formData
      const uploadForm = (imageUrl) => {
        let sendData = {
          name: data.name,
          imageUrl: imageUrl || '',
          bannerUrl: data.link || 'https://www.baidu.com',
          sort: data.no,
          id: data.id
        }
        let requestFn = adding ? addBanenrApi : modifyBannerApi
        return requestFn(sendData).then(res => {
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
      if (data.file) {
        formData = new FormData()
        formData.append('file', data.file)
        // 上传图片后获取地址再上传表单数据
        this.$uploadFile(formData).then(res => {
          uploadForm(res.content)
        })
      } else {
        uploadForm(data.cover)
      }
    },
    // 显示／隐藏
    switchVisible (rowData) {
      console.log(rowData)
      switchVisibleApi({
        id: rowData.id,
        isDisplay: rowData.visible ? 0 : 1
      }).then(res => {
        this.$message({
          type: 'success',
          message: rowData.isDisplay ? '显示成功' : '隐藏成功'
        })
      }).finally(() => {
        this.$refs.searchTable.getList()
      })
    }
  }
}
</script>

<template>
  <div id="page-banner">
    <div class="flex--vcenter page-top">
      <div class="page-title">
        BANNER管理
      </div>
      <!-- <div class="display-num-control">
        <span class="label">展示数量 ：</span>
        <span class="display-num">4个</span>
        <span
          class="el-icon-edit"
          @click="changeDisplayNum">
        </span>
      </div> -->
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
            placeholder="请在此输入名称／ID"
            icon="search"
            v-model="searchKeyword"
            @keyup.enter.native="handleSearch"
            :on-icon-click="handleSearch">
          </el-input>
        </div>
        <div class="btn-wrap">
          <el-button
            class="btn--add"
            type="primary"
            @click="openEditDialog(null, true)">
            新增 <i class="el-icon-plus"></i>
          </el-button>
          <el-button
            :disabled="!multipleSelection.length"
            @click="batchRemove">
            批量删除
          </el-button>
        </div>
      </div>
      <el-table-column
        slot="column-cover"
        align="center"
        prop="cover"
        label="封面图"
        min-width="140">
        <template scope="scope">
          <img-zoom
            :src="scope.row.cover"
            style="width: 80px;height: 60px;">
          </img-zoom>
        </template>
      </el-table-column>
      <el-table-column
        slot="column-jumpUrl"
        align="center"
        label="跳转链接"
        min-width="120">
        <template scope="scope">
          <a v-if="scope.row.jumpUrl" :href="scope.row.jumpUrl" target="_blank">{{ scope.row.jumpUrl }}</a>
          <template v-else>--</template>
        </template>
      </el-table-column>
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
                @click="delRow(scope.row)">
                删除
              </el-button>
            </span>
            <span class="operate-item visible-switch flex--vcenter">
              <el-switch
                on-text=""
                off-text=""
                v-model="scope.row.visible"
                @change="switchVisible(scope.row)">
              </el-switch>
              {{ scope.row.visible ? '显示' : '隐藏' }}
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
  #page-banner {
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
    .table-tools {
      margin-top: 30px;
      justify-content: space-between;
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
    .el-table__header {
      th:first-child {
        .cell {
          &:after {
            content: '全选';
            margin-left: 5px;
          }
        }
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
      .el-switch {
        margin-right: 10px;
      }
    }
    .visible-switch {
      color: $color3;
      font-size: 14px;
    }
    .pagination-wrap {
      margin-top: 30px;
      text-align: right;
    }
  }
</style>
