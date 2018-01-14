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
  modifyBannerApi
} from './api'

// import { Loading } from 'element-ui'
import EditDialog from './_thumbs/EditDialog.vue'
import ReserveTimeDialog from './_thumbs/ReserveTimeDialog.vue'
import ImgZoom from '@/components/_common/imgZoom/ImgZoom.vue'

let adding = false
export default {
  name: 'Banner',
  components: {
    EditDialog,
    ReserveTimeDialog,
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
        'prop': 'no',
        'label': '排序',
        'min-width': '80'
      }
    }, {
      attrs: {
        'prop': 'name',
        'label': '项目名称',
        'min-width': '140',
        'show-overflow-tooltip': true
      }
    }, {
      attrs: {
        'prop': 'cover',
        'min-width': '120',
        'label': '展示图片'
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
        'prop': 'type',
        'min-width': '120',
        'label': '分类名称'
      }
    }, {
      attrs: {
        'prop': 'type',
        'min-width': '120',
        'label': '预约时间'
      },
      scopedSlots: {
        default: (scope) => {
          return (
            <el-button
              type="text"
              onClick={ () => this.openReserveTimeDialog(scope.row) }>
              查看
            </el-button>
          )
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
      reverseInfoDialogVisible: false,
      editData: null,
      reverseInfoData: null,
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
      if (isAdd) {
        this.reverseInfoDialogVisible = true
      } else {
        this.editDialogVisible = true
        this.editData = rowData
        adding = !!isAdd
      }
    },
    openReserveInfoDialog (rowData) {
      this.reverseInfoDialogVisible = true
      this.reverseInfoData = rowData
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
    handleInfoEditSubmit () {
    }
  }
}
</script>

<template>
  <div id="banner">
    <div class="flex--vcenter page-top">
      <div class="page-title">
        项目管理
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
            项目名称：
            <el-input v-model="searchKeyword" style="width: auto;"></el-input>
          </div>
          <div class="tool-item">
            分类名称：
            <el-select v-model="searchKeyword" placeholder="选择分类">
              <el-option
                v-for="item in []"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <el-button
            class="tool-item"
            type="primary"
            @click="handleSearch">搜索
          </el-button>
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
      @submit="handleEditSubmit">
    </edit-dialog>
    <reserve-info-dialog
      v-model="reverseInfoDialogVisible"
      :data="reverseInfoData"
      @submit="handleInfoEditSubmit">
    </reserve-info-dialog>
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
