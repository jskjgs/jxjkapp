<script>
/*
 * Created by zhengji
 * Date: 2017/8/29
 */
// import placeholderImg from '@/assets/images/placeholder.png'

import EditDialog from './_thumbs/EditDialog.vue'
import ImgZoom from '@/components/_common/imgZoom/ImgZoom.vue'

import SearchTable from '@/components/_common/searchTable/SearchTable'

import {
  getListApi,
  modifyDoctorApi,
  addDoctorApi,
  topDoctorApi
} from './api'

import {
  getHospAreaApi
} from '@/globalApi'

let adding = false

export default {
  name: 'Doctor',
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
      }
    }
    this.columnData = [{
      attrs: {
        'prop': 'name',
        'label': '姓名',
        'min-width': '100',
        'show-overflow-tooltip': true
      }
    }, {
      attrs: {
        'prop': 'avatar',
        'min-width': '120',
        'label': '照片'
      },
      scopedSlots: {
        default: (scope) => {
          return (
            <img-zoom
              src={scope.row.avatar}
              style="width: 80px;height: 60px;">
            </img-zoom>
          )
        }
      }
    }, {
      attrs: {
        'prop': 'hospAreaName',
        'label': '院区',
        'min-width': '160',
        'show-overflow-tooltip': true
      }
    }, {
      attrs: {
        'min-width': '180',
        'label': '操作'
      },
      scopedSlots: {
        default: (scope) => {
          return (
            <div class="flex--center operations">
              <span class="operate-item flex--vcenter" style="color: inherit; font-size: inherit;">
                <el-button type="text">置顶</el-button>
              </span>
              <span class="operate-item flex--vcenter" style="color: inherit; font-size: inherit;">
                <el-button
                  type="text"
                  onClick={() => this.openEditDialog(scope.row)}>查看详情</el-button>
              </span>
              <span class="operate-item flex--vcenter" style="color: inherit; font-size: inherit;">
                <el-button
                  type="text"
                  onClick={() => this.openEditDialog(scope.row)}>编辑</el-button>
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
        this.tableData = (content.list || []).map((item) => {
          return {
            id: item.id,
            doctorTypeId: (item.doctorType || {}).id,
            name: item.name,
            avatar: item.headPortrait,
            hospAreaName: (item.hospArea || {}).name,
            description: item.description
          }
        })
        this.total = content.total || 0
      }
    }

    return {
      hospAreaList: [], // 院区列表
      pickedHospAreaId: '', // 选择的院区id
      doctorName: '',
      editDialogVisible: false,
      editData: {},
      apiKeysMap: {
        pageSize: {
          value: 10,
          innerKey: 'pageSize' // searchTable组件内部映射的key
        },
        hospAreaId: {
          value: undefined
        },
        name: {
          value: undefined
        },
        currentPage: 'pageNum'
      }
    }
  },
  created () {
    this.getHospAreaList()
  },
  watch: {
    editDialogVisible (val) {
      if (!val) {
        this.editData = null
        adding = false
      }
    },
    currentPage (newPageNum) {
      this.getList({
        pageNum: newPageNum
      })
    }
  },
  methods: {
    // 获取院区列表
    getHospAreaList () {
      return getHospAreaApi().then(res => {
        const content = res.content || {}
        const list = content.list || []
        this.hospAreaList = list.map(item => {
          return {
            label: item.name,
            value: item.id
          }
        })
      })
    },
    handleSearch () {
      this.apiKeysMap = Object.assign({}, this.apiKeysMap, {
        hospAreaId: {
          value: this.pickedHospAreaId || undefined
        },
        name: {
          value: this.doctorName || undefined
        }
      })
    },
    openEditDialog (rowData, isAdd) {
      this.editDialogVisible = true
      adding = !!isAdd
      this.editData = rowData
    },
    handleEditCancel () {
    },
    handleEditSubmit (data, respondCb) {
      const uploadForm = (imageUrl) => {
        const sendData = {
          headPortrait: imageUrl || data.avatar,
          id: data.id,
          doctorTypeId: data.doctorTypeId,
          description: data.description
        }
        const requestFn = adding ? addDoctorApi : modifyDoctorApi
        requestFn(sendData).then(res => {
          this.$message({
            type: 'success',
            message: '修改成功'
          })
          this.editDialogVisible = false
          this.$refs.searchTable.getList()
          respondCb(true)
        }).catch(() => {
          respondCb()
        })
      }
      if (data.file) {
        const formData = new FormData()
        formData.append('file', data.file)
        this.$uploadFile(formData).then(res => {
          uploadForm(res.content)
        })
      } else {
        uploadForm()
      }
    },
    // 切换置顶状态
    switchTop (rowData) {
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
  <div id="doctor">
    <div class="flex--vcenter page-top">
      <div class="page-title">
        医护人员管理
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
            院区：
            <el-select v-model="pickedHospAreaId" placeholder="选择院区">
              <el-option
                v-for="item in hospAreaList"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="tool-item">
            医生姓名：
            <el-input v-model="doctorName" style="width: auto;"></el-input>
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

  #doctor {
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
      justify-content: space-between;
    }

    .search-input {
      width: 300px;
      input {
        border-radius: 18px;
      }
    }
    .search-label {
      color: $color3;
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
      color: $color4;
      font-size: 18px;
      cursor: pointer;
      & + .operate-item {
        margin-left: 20px;
      }

      .el-switch {
        margin-right: 10px;
      }
    }
    .top-switch {
      display: inline-block;
      width: 124px;
      text-align: left;
      color: $color3;
      font-size: 14px;
    }

    .pagination-wrap {
      margin-top: 30px;
      text-align: right;
    }
  }
</style>
