<script>
/*
 * Created by zhengji
 * Date: 2017/8/29
 */
import placeholderImg from '@/assets/images/placeholder.png'
import SearchTable from '@/components/_common/searchTable/SearchTable'
import {
  deleteNewsApi,
  modifyNewsApi,
  addNewsApi,
  switchVisibleApi
} from './api'
import tableCfgMaker from './_consts/tableCfgMaker'
import EditDialog from './_thumbs/EditDialog.vue'
import ImgZoom from '@/components/_common/imgZoom/ImgZoom.vue'
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
      createTimeRange: undefined,
      apiKeysMap: {
        title: {
          value: undefined
        },
        createTimeRange: {
          value: undefined
        }
      }
    }
  },
  computed: {
    currentPage () {
      return this.$refs.searchTable.currentPage
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
    // 搜索banner
    handleSearch (e) {
      this.apiKeysMap = Object.assign({}, this.apiKeysMap, {
        title: {
          value: this.searchKeyword || undefined
        },
        createTimeRange: {
          value: this.createTimeRange || undefined
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
          name: rowData.title,
          no: rowData.sortNumber,
          cover: rowData.cover,
          richText: rowData.content
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
            deleteNewsApi({ids: [row.id]}).then(res => {
              done()
              this.$message({
                type: 'success',
                message: '删除成功'
              })
              this.$refs.searchTable.getList()
            })
          } else {
            done()
          }
        }
      })
    },
    // 批量删除
    batchRemove () {
      deleteNewsApi(this.multipleSelection.map(item => item.id).join(',')).then(res => {
        this.$message({
          type: 'success',
          message: '删除成功'
        })
        this.editDialogVisible = false
        this.$refs.searchTable.getList()
      })
    },
    handleEditCancel () {
    },
    // 提交编辑或新增
    handleEditSubmit (data, respondCb) {
      let formData
      const uploadForm = (imageUrl) => {
        let sendData = {
          title: data.name,
          sort: data.no,
          id: data.id,
          imageUrl: imageUrl || '',
          content: data.richText // 内容
        }
        let requestFn = adding ? addNewsApi : modifyNewsApi
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
        this.$uploadFile(formData).then(res => {
          uploadForm(res.content)
        })
      } else {
        uploadForm(data.cover)
      }
    },
    // 显示／隐藏
    switchVisible (rowData) {
      switchVisibleApi({
        bannerId: rowData.id
      }).then(res => {
        this.$message({
          type: 'success',
          message: rowData.visible ? '显示成功' : '隐藏成功'
        })
      }).finally(() => {
        this.$refs.searchTable.getList()
      })
    },
    // 置顶
    toTop (rowData) {
      modifyNewsApi({
        id: rowData.id,
        sort: 1
      }).then(() => {
        this.$message({
          type: 'success',
          message: '置顶成功'
        })
        this.$refs.searchTable.getList()
      })
    }
  }
}
</script>

<template>
  <div id="page-news">
    <div class="flex--vcenter page-top">
      <div class="page-title">
        新闻管理
      </div>
    </div>
    <search-table
      ref="searchTable"
      :table-attrs="tableAttrs"
      :column-data="columnData"
      :list-api="listApi"
      :api-keys-map="apiKeysMap">
      <div class="table-tools flex--vcenter" slot="table-tools">
        <div class="search-wrap flex--vcenter">
          <div class="tool-item">
            <span class="search-label">新闻标题：</span>
            <el-input
              class="inline-block search-input"
              placeholder="请在此输入关键字"
              icon="search"
              v-model="searchKeyword"
              @keyup.enter.native="handleSearch"
              :on-icon-click="handleSearch">
            </el-input>
          </div>
          <div class="tool-item">
            创建时间：
            <el-date-picker
              v-model="createTimeRange"
              type="daterange"
              style="width: 230px;"
              placeholder="选择日期范围">
            </el-date-picker>
          </div>
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
        width="180">
        <template scope="scope">
          <img-zoom
            :src="scope.row.cover"
            style="width: 80px;height: 60px;">
          </img-zoom>
        </template>
      </el-table-column>
      <!-- <el-table-column
        slot="column-jumpUrl"
        align="center"
        label="新闻链接"
        min-width="120">
        <template scope="scope">
          <a v-if="scope.row.jumpUrl" :href="scope.row.jumpUrl" target="_blank">{{ scope.row.jumpUrl }}</a>
          <template v-else>--</template>
        </template>
      </el-table-column> -->
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
            <span
              class="operate-item">
              <el-button 
                type="text" 
                :disabled="currentPage === 1 && scope.$index === 0"
                @click="toTop(scope.row)">
                置顶
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
  #page-news {
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
