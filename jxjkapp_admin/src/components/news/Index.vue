<script>
/*
 * Created by zhengji
 * Date: 2017/8/29
 */
import placeholderImg from '@/assets/images/placeholder.png'

import SearchTable from '@/components/_common/searchTable/SearchTable'

import {
  getListApi,
  deleteBannerBatchApi,
  addBanenrApi,
  modifyBannerApi,
  switchVisibleApi
} from './api'

// import { Loading } from 'element-ui'
import EditDialog from './_thumbs/EditDialog.vue'
import ImgZoom from '@/components/_common/imgZoom/ImgZoom.vue'

import {
  convertDate
} from '@/utils/index'

let adding = false
export default {
  name: 'Banner',
  components: {
    EditDialog,
    ImgZoom,
    SearchTable
  },
  data () {
    this.tableAttrs = {
      'props': {
        'tooltip-effect': 'dark',
        'style': 'width: 100%',
        'align': 'center'
      },
      'on': {
        'selection-change': this.handleSelectionChange.bind(this)
      }
    }
    this.columnData = [{
      attrs: {
        'type': 'selection',
        'width': '90',
        'align': 'left'
      }
    }, {
      attrs: {
        'prop': 'name',
        'label': '新闻标题',
        'min-width': '140',
        'show-overflow-tooltip': true
      }
    }, {
      attrs: {
        'prop': 'cover',
        'min-width': '120',
        'label': '封面图'
      },
      scopedSlots: {
        default: (scope) => {
          return (
            <img-zoom
              src={scope.row.cover}
              style="width: 80px;height: 60px;">
            </img-zoom>
          )
        }
      }
    }, {
      attrs: {
        'prop': 'createTime',
        'label': '创建时间',
        'min-width': '160',
        'show-overflow-tooltip': true,
        'formatter' (row, col) {
          return convertDate(row.createTime) || '--'
        }
      }
    }, {
      attrs: {
        'min-width': '200',
        'label': '操作'
      },
      scopedSlots: {
        default: (scope) => {
          return (
            <div class="flex--center operations">
              <span
                class="operate-item el-icon-edit"
                onClick={() => this.openEditDialog(scope.row)}>
              </span>
              <span
                class="operate-item el-icon-delete"
                onClick={() => this.delRow(scope.row)}>
              </span>
              <span class="operate-item top-switch flex--vcenter">
                <el-switch
                  value={scope.row.top}
                  onInput={(top) => (scope.row.top = top)}
                  onChange={() => this.switchTop(scope.row)}
                  {...{props: { 'on-text': '', 'off-text': '' }}}>
                </el-switch>
                { scope.row.top ? '置顶' : '取消置顶' }
              </span>
            </div>
          )
        }
      }
    }]
    this.listApi = {
      requestFn: getListApi,
      responseFn (data) {
        let content = data.content || {}
        this.tableData = (content.list || []).map((item) => ({
          no: item.orderNumber,
          id: item.id,
          name: item.name,
          cover: item.bannerUrl,
          link: item.jumpUrl,
          visible: !item.display  // display: 0表示显示 1表示隐藏
        }))
        this.total = content.total || 0
      }
    }
    return {
      searchKeyword: '',
      currentPage: 1,
      pageSize: 10,
      total: 0,
      multipleSelection: [],
      editDialogVisible: false,
      editData: null,
      createTimeRange: undefined,
      apiKeysMap: {
        pageSize: {
          value: 10,
          innerKey: 'pageSize' // searchTable组件内部映射的key
        },
        name: {
          value: undefined
        },
        createTimeRange: {
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
    // 搜索banner
    handleSearch (e) {
      this.apiKeysMap = Object.assign({}, this.apiKeysMap, {
        name: {
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
      this.editData = rowData
      adding = !!isAdd
    },
    // 删除单个banner
    delRow (row) {
      this.$confirm('是否删除该信息？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        beforeClose: (action, instance, done) => {
          if (action === 'confirm') {
            deleteBannerBatchApi({
              bannerIdList: row.id
            }).then(res => {
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
      deleteBannerBatchApi({
        bannerIdList: this.multipleSelection.map(item => item.id).join(',')
      }).then(res => {
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
      if (data.file) {
        formData = new FormData()
        formData.append('file', data.file)
      }
      let sendData = {
        name: data.name,
        jumpUrl: data.link,
        orderNumber: data.no,
        bannerId: data.id
      }
      let requestFn = adding ? addBanenrApi : modifyBannerApi
      requestFn(sendData, formData).then(res => {
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
    // 切换置顶状态
    switchTop (rowData) {
      const topDoctorApi = ''
      topDoctorApi({
        doctorId: rowData.id
      }).then(res => {
        this.$message({
          type: 'success',
          message: rowData.top ? '置顶成功' : '取消置顶成功'
        })
      }).finally(() => {
        this.$refs.searchTable.init()
      })
    }
  }
}
</script>

<template>
  <div id="banner">
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

  #banner {
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
    .btn-wrap {
      .el-button {
        border-radius: 18px;
      }
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
