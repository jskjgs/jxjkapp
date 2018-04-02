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
  modifyDoctorApi,
  addDoctorApi,
  delDoctorApi
} from './api'
import tableCfgMaker from './_consts/tableCfgMaker'

let adding = false
export default {
  name: 'Doctor',
  components: {
    EditDialog,
    ImgZoom,
    SearchTable
  },
  data () {
    const tableCfg = tableCfgMaker.call(this)
    this.tableAttrs = tableCfg.tableAttrs
    this.columnData = tableCfg.columnData
    this.listApi = tableCfg.listApi

    return {
      multipleSelection: [],
      hospAreaList: [],
      pickedHospAreaId: this.$store.state.pickedArea.id, // 选择的院区id
      doctorName: '',
      editDialogVisible: false,
      editData: {},
      apiKeysMap: {
        hospAreaId: {
          value: undefined
        },
        name: {
          value: undefined
        }
      }
    }
  },
  created () {
    if (this.userType !== 3) {
      this.$_getAreaList().then(list => {
        this.hospAreaList = list.map(item => ({
          id: item.value,
          name: item.label
        }))
      })
    }
  },
  computed: {
    userType () {
      return this.$store.state.accountInfo.author
    },
    currentPage () {
      return this.$refs.searchTable.currentPage
    },
    areaList () {
      const state = this.$store.state
      return this.userType === 3 ? state.areaList : this.hospAreaList
    }
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
    // 搜索
    handleSearch () {
      this.apiKeysMap = Object.assign({}, this.apiKeysMap, {
        areaId: {
          value: this.pickedHospAreaId || undefined
        },
        name: {
          value: this.doctorName || undefined
        }
      })
    },
    // 多选
    handleSelectionChange (val) {
      console.log('handleSelectionChange')
      this.multipleSelection = val
    },
    // 打开编辑／新增弹框
    openEditDialog (rowData, isAdd) {
      this.editDialogVisible = true
      adding = !!isAdd
      this.editData = rowData
    },
    // 删除医生
    delRow (ids) {
      this.$confirm('是否删除该人员？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        beforeClose: (action, instance, done) => {
          if (action === 'confirm') {
            delDoctorApi({ids}).then(() => {
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
      this.delRow(this.multipleSelection.map(item => item.id).join(','))
    },
    // 置顶
    toTop ({id}) {
    },
    // 修改／新增信息提交
    handleEditSubmit (data, respondCb) {
      const uploadForm = (imageUrl) => {
        const sendData = {
          name: data.name,
          headPortrait: imageUrl || data.avatar,
          id: data.id,
          description: data.description
          // doctorTypeId: data.doctorTypeId
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
      modifyDoctorApi({
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
  <div id="page-doctor">
    <search-table
      ref="searchTable"
      :table-attrs="tableAttrs"
      :column-data="columnData"
      :list-api="listApi"
      :api-keys-map="apiKeysMap">
      <div class="table-tools flex--vcenter" slot="table-tools">
        <div class="search-wrap flex--vcenter">
          <!-- <div class="tool-item" v-if="userType !== 3">
            院区：
            <el-select v-model="pickedHospAreaId" placeholder="选择院区">
              <el-option
                v-for="item in areaList"
                :key="item.id"
                :label="item.name"
                :value="item.id">
              </el-option>
            </el-select>
          </div> -->
          <div class="tool-item">
            医生姓名：
            <el-input 
              v-model="doctorName" 
              style="width: auto;"
              @keyup.enter.native="handleSearch" />
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
      <el-table-column
        slot="column-avatar"
        align="center"
        prop="avatar"
        label="照片"
        min-width="140">
        <template scope="scope">
          <img-zoom
            :src="scope.row.avatar"
            style="width: 80px;height: 60px;">
          </img-zoom>
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
                @click="delRow(scope.row.id)">
                删除
              </el-button>
            </span>
            <!-- <span
              class="operate-item">
              <el-button 
                type="text" 
                :disabled="currentPage === 1 && scope.$index === 0"
                @click="toTop(scope.row)">
                置顶
              </el-button>
            </span> -->
          </div>     
        </template>
      </el-table-column>
    </search-table>
    <edit-dialog
      v-model="editDialogVisible"
      :areaList="hospAreaList"
      :data="editData"
      @submit="handleEditSubmit" />
  </div>
</template>

<style lang="scss">
  @import "~@/assets/style/variables/index";
  #page-doctor {
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
    }
    .search-label {
      color: $color3;
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
  }
</style>
