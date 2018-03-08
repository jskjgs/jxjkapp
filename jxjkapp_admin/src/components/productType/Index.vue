<script>
/*
 * Created by zhengji
 * Date: 2017/8/29
 */
import SearchTable from '@/components/_common/searchTable/SearchTable'

import {
  createTypeApi,
  updateTypeApi,
  delTypeApi
} from './api'

// import { Loading } from 'element-ui'
import EditDialog from './_thumbs/EditDialog.vue'
import ImgZoom from '@/components/_common/imgZoom/ImgZoom.vue'
import tableCfgMaker from './_consts/tableCfgMaker'

let adding = false
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
      multipleSelection: [],
      editDialogVisible: false,
      editData: null,
      apiKeysMap: {
        name: {
          value: undefined
        }
      }
    }
  },
  created () {
  },
  computed: {
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
    // 搜索banner
    // handleSearch (e) {
    //   this.apiKeysMap = Object.assign({}, this.apiKeysMap, {
    //     name: {
    //       value: this.searchKeyword || undefined
    //     }
    //   })
    // },
    // 多选
    handleSelectionChange (val) {
      console.log('handleSelectionChange')
      this.multipleSelection = val
    },
    // 编辑或新增
    openEditDialog (rowData, isAdd) {
      this.editDialogVisible = true
      this.editData = rowData
      adding = !!isAdd
    },
    // 删除
    delRow (rowData) {
      this.$confirm('是否删除该分类？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        beforeClose: (action, instance, done) => {
          if (action === 'confirm') {
            delTypeApi({ids: [rowData.id]}).then(res => {
              done()
              this.$message({
                type: 'success',
                message: '删除成功'
              })
              this.updated = true
              this.$refs.searchTable.getList()
            })
          } else {
            done()
          }
        }
      })
    },
    handleEditCancel () {
    },
    // 提交编辑或新增
    handleEditSubmit (data, respondCb) {
      let formData
      const uploadForm = (imageUrl) => {
        let sendData = {
          id: data.id,
          name: data.name,
          images: imageUrl,
          sort: data.no,
          description: '不需要描述'
        }
        let requestFn = adding ? createTypeApi : updateTypeApi
        return requestFn(sendData).then(res => {
          this.$message({
            type: 'success',
            message: adding ? '添加成功' : '修改成功'
          })
          this.updated = true
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
    }
  }
}
</script>

<template>
  <div id="page-productType">
    <search-table
      ref="searchTable"
      :table-attrs="tableAttrs"
      :column-data="columnData"
      :list-api="listApi"
      :api-keys-map="apiKeysMap">
      <div class="table-tools flex--vcenter" slot="table-tools">
        <!-- <div class="search-wrap flex--vcenter">
          <div class="tool-item">
          <span class="search-label">搜索关键字：</span>
            <el-input
              class="inline-block search-input"
              placeholder="请在此输入关键字"
              v-model="searchKeyword"
              @keyup.enter.native="handleSearch">
            </el-input>
          </div>
          <div class="tool-item">
            <el-button
              class="tool-item"
              type="primary"
              @click="handleSearch">搜索
            </el-button>
          </div>
        </div> -->
        <div class="btn-wrap">
          <el-button
            class="btn--add"
            type="primary"
            @click="openEditDialog(null, true)">
            新增 <i class="el-icon-plus"></i>
          </el-button>
          <el-button
            :disabled="!multipleSelection.length">
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
        slot="column-operate"
        align="center"
        label="操作"
        width="200">
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
          </div>     
        </template>
      </el-table-column>
    </search-table>
    <edit-dialog
      v-model="editDialogVisible"
      :data="editData"
      @cancel="handleEditCancel"
      @submit="handleEditSubmit">
    </edit-dialog>
  </div>
</template>

<style lang="scss">
  @import "~@/assets/style/variables/index";

  #page-productType {
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
