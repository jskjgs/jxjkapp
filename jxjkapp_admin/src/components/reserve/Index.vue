<script>
  /*
   * Created by zhengji
   * Date: 2017/10/21
   */
  import SearchTable from '@/components/_common/searchTable/SearchTable'
  import { Loading } from 'element-ui'

  import {
    getListApi as getDoctorListApi
  } from '@/components/doctor/api'
  import {
    getListApi
  } from './api'

  import {
    convertDate
  } from '@/utils/index'

  export default {
    name: 'Diary',
    components: {
      SearchTable
    },
    data () {
      // const vm = this
      // const statusOptions = [{
      //   label: '全部',
      //   value: undefined
      // }, {
      //   label: '过期未到诊',
      //   value: 1
      // }, {
      //   label: '正常就诊',
      //   value: 0
      // }, {
      //   label: '预约就诊',
      //   value: 2
      // }]
      // const statusDict = {
      //   0: '正常就诊',
      //   1: '过期未到诊',
      //   2: '预约就诊'
      // }
      this.tableAttrs = {
        'props': {
          'tooltip-effect': 'dark',
          'style': 'width: 100%',
          'align': 'center'
        }
      }
      this.columnData = [{
        attrs: {
          'prop': 'patientName',
          'label': '项目名称',
          'min-width': '120'
        }
      }, {
        attrs: {
          'prop': 'patientName',
          'label': '院区',
          'min-width': '120'
        }
      }, {
        attrs: {
          'prop': 'registerTime',
          'label': '预约时间',
          'min-width': '180',
          'formatter' (row, col) {
            return row.registerTime ? convertDate(row.registerTime, 'Y-M-D h:m') : '--'
          }
        }
      }, {
        attrs: {
          'prop': 'patientName',
          'label': '用户姓名',
          'min-width': '120'
        }
      }, {
        attrs: {
          'prop': 'phone',
          'label': '手机号',
          'min-width': '120'
        }
      }, {
        attrs: {
          'prop': 'idCard',
          'label': '就诊卡号',
          'min-width': '120'
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
                <el-button
                  class="operate-item"
                  type="text"
                  onClick={() => this.cancelReserve(scope.row)}>取消预约</el-button>
              </div>
            )
          }
        }
      }]
      this.listApi = {
        requestFn: getListApi,
        responseFn (data) {
          let content = data.content || {}
          this.tableData = content.list || []
          this.total = content.total || 0
        }
      }
      this.checkOptions = [{
        label: '审核通过',
        value: '0'
      }, {
        label: '审核拒绝',
        value: '2'
      }]
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
          currentPage: 'startPage'
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
      this.getDoctorList()
    },
    methods: {
      selectStatus (status) {
        this.apiKeysMap.status.value = status.value
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
      getDoctorList () {
        return getDoctorListApi().then(res => {
          const content = res.content || {}
          const list = (content.list || []).map(item => {
            const doctor = item.doctor || {}
            return {
              label: doctor.name,
              value: doctor.id
            }
          })
          this.doctorList = [{
            label: '全部',
            value: undefined
          }].concat(list)
        })
      },
      openCreateDialog () {},
      openEditDialog () {},
      // 取消预约
      cancelReserve (rowData) {
        this.$confirm(`确定取消本次预约？`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          beforeClose: (action, instance, done) => {
            if (action === 'confirm') {
              const loading = Loading.service({ fullscreen: true })
              loading.close()
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
            @click="openCreateDialog(null, true)">
            新增 <i class="el-icon-plus"></i>
          </el-button>
        </div>
      </div>
    </search-table>
  </div>
</template>

<style lang="scss">
  #reverse-manage {
    .status-label {
      display: inline-block;
      width: 60px;
      height: 24px;
      border-radius: 4px;
      font-size: 12px;

      &.status-pass {
        color: #10ad57;
        background: rgba(19,206,102,0.10);
        border: 1px solid rgba(19,206,102,0.20);
      }
      &.status-wait {
        color: #20a0ff;
        background: rgba(32,160,255,0.10);
        border: 1px solid rgba(32,160,255,0.20);
      }
      &.status-refuse {
        color: #ff4949;
        background: rgba(255,73,73,0.10);
        border: 1px solid rgba(255,73,73,0.20);
      }
    }

    .operations {
    }
  }
  .filter-dropdown-menu {
    &__scroller {
      height: 200px;
    }
    .el-scrollbar__wrap {
      overflow: auto;
    }
    
    .el-dropdown-menu__item {
      &.status-active {
        background: #20a0ff;
        color: #fff;
      }
    }
  }
</style>
