<script>
  /*
   * Created by zhengji
   * Date: 2017/10/21
   */
  import SearchTable from '@/components/_common/searchTable/SearchTable'
  import EditDialog from './_thumbs/EditDialog'
  import { Loading } from 'element-ui'
  import tableCfgMaker from './_consts/tableCfgMaker'
  import {
    delReserveApi,
    createReserveApi,
    modifyReserveApi
  } from './api'

  let adding = false

  export default {
    name: 'Diary',
    components: {
      SearchTable,
      EditDialog
    },
    data () {
      const tableCfg = tableCfgMaker.call(this)
      this.tableAttrs = tableCfg.tableAttrs
      this.columnData = tableCfg.columnData
      this.listApi = tableCfg.listApi

      return {
        editDialogVisible: false,
        editData: null,
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
        projectId: undefined,
        projects: [],
        createTimeRange: [],
        searchKeyword: '',
        doctorList: [], // 医生列表
        departmentList: [] // 科室列表
      }
    },
    created () {
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
      // 打开编辑／新增弹框
      openEditDialog (rowData, isAdd) {
        this.editDialogVisible = true
        adding = !!isAdd
        this.editData = rowData
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
              }).finally(() => {
                loading.close()
              })
            } else {
              done()
            }
          }
        })
      },
      // 新增／修改预约信息
      handleEditSubmit (data, respondCb) {
        const uploadForm = (imageUrl) => {
          const sendData = {
            name: data.name,
            headPortrait: imageUrl || data.avatar,
            id: data.id,
            description: data.description,
            hospAreaId: data.hospAreaId,
            doctorTypeId: data.doctorTypeId
          }
          const requestFn = adding ? createReserveApi : modifyReserveApi
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
        <div class="flex--vcenter">
          <div class="tool-item">
            预约时间：
            <el-date-picker
              v-model="createTimeRange"
              type="daterange"
              style="width: 230px;"
              placeholder="选择日期范围">
            </el-date-picker>
          </div>
          <div class="tool-item">
            项目名称：
            <el-select v-model="projectId" placeholder="选择项目">
              <el-option
                v-for="item in projects"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
        </div>
        <div class="flex--vcenter" style="margin-top: 20px;justify-content: space-between;">
          <div class="flex--vcenter">
            <div class="tool-item">
              搜索关键字：
              <el-input
                v-model="searchKeyword"
                placeholder="请输入客户姓名／卡号..."
                style="width: 290px;">
              </el-input>
            </div>
            <div class="tool-item">
              <el-button type="primary" @click="handleSearch">搜索</el-button>
            </div>
          </div>
          <el-button
            class="btn--add"
            type="primary"
            @click="openEditDialog(null, true)">
            新增 <i class="el-icon-plus"></i>
          </el-button>
        </div>
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
                @click="openEditDialog(scope.row)">
                编辑
              </el-button>
            </span>
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
    <edit-dialog
      v-model="editDialogVisible"
      :data="editData"
      @submit="handleEditSubmit" />
  </div>
</template>

<style lang="scss">
  #reverse-manage {
  }
</style>
