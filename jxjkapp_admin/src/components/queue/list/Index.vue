<script>
/*
 * Created by zhengji
 * Date: 2017/8/29
 */
import SearchTable from '@/components/_common/searchTable/SearchTable'
import tableCfgMaker from './_consts/tableCfg'
import {
  getCurrentApi,
  getListApi,
  callNextApi,
  cutQueueApi,
  missQueueApi
} from './api'
// import { Loading } from 'element-ui'
export default {
  name: 'Queue',
  components: {
    SearchTable
  },
  data () {
    const tableCfg = tableCfgMaker.call(this)
    this.tableAttrs = tableCfg.tableAttrs
    this.columnData = tableCfg.columnData
    this.listApi = {
      requestFn: getListApi,
      responseFn (res) {
        const list = res.content.records || []
        this.tableData = list.map((item) => {
          return {
            id: item.id,
            queueNum: item.number,
            userName: item.userName,
            userId: item.userId,
            phone: item.phone,
            serviceName: item.skuName,
            serviceId: item.skuId
          }
        })
      }
    }

    this.currentInfoList = [{
      label: '用户姓名',
      valueKey: 'userName'
    }, {
      label: '手机号',
      valueKey: 'userPhone'
    }, {
      label: '项目名称',
      valueKey: 'serviceName'
    }, {
      label: '备注',
      valueKey: ''
    }]

    return {
      currentInfo: null,
      apiKeysMap: {
        departmentId: {
          value: undefined
        },
        doctorName: {
          value: ''
        },
        orderBy: {
          value: 'order_number'
        },
        desc: {
          value: true
        }
      }
    }
  },
  created () {
    this.getCurrent()
  },
  methods: {
    getCurrent () {
      return getCurrentApi().then((res) => {
        const data = res.content
        if (data) {
          this.currentInfo = {
            id: data.id,
            userName: data.userName,
            userId: data.id,
            userPhone: data.userPhone,
            serviceName: data.serviceName,
            number: data.number
          }
        } else {
          this.currentInfo = null
        }
      })
    },
    actionHanler (type, id) {
      const DICT = {
        'callNext': {
          apiFn: callNextApi,
          label: '呼叫下一位'
        },
        'cutQueue': {
          apiFn: cutQueueApi,
          label: '插队'
        },
        'missQueue': {
          apiFn: missQueueApi,
          label: '过号'
        }
      }
      this.$confirm(`确定执行${DICT[type].label}操作？`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        beforeClose: (action, instance, done) => {
          if (action === 'confirm') {
            DICT[type].apiFn(id).then((res) => {
              this.$message({
                type: 'success',
                message: `${DICT[type].label}成功`
              })
              this.$refs.searchTable.getList()
              this.getCurrent()
            }).finally(() => {
              done()
            })
          } else {
            done()
          }
        }
      })
    },
    callNext (id) {
      this.actionHanler('callNext', id)
    },
    // 插队
    cutQueue (id) {
      this.actionHanler('cutQueue', id)
    },
    // 过号
    missQueue (id) {
      this.actionHanler('missQueue', id)
    },
    add () {
      this.$router.push({name: 'queue/add_root'})
    }
  }
}
</script>

<template>
  <div id="page-queue">
    <div class="top-box flex--vcenter">
      <div class="btn-wrap flex-item--none">
        <el-button type="primary" @click="add"  style="width: 120px;border-radius: 4px;margin-top: 20px;">新增排队</el-button>
      </div>
    </div>
    <div class="current-queue flex" v-if="currentInfo">
      <div class="current-queue__num flex-item--none flex--center">
        <div class="text-center">
          排队号:<div class="num">{{currentInfo.number}}</div>
        </div>
      </div>
      <div class="current-queue__info flex-item">
        <div class="info-item flex" v-for="item in currentInfoList">
          <span class="info-item__label flex-item--none">{{ item.label }}</span>:
          <span class="info-item__content flex-item">{{ currentInfo[item.valueKey] }}</span>
        </div>
      </div>
      <div class="btn-wrap flex-item--none flex--center" style="margin-left: 20px; width: 150px;">
        <el-button type="primary" @click="callNext(currentInfo.id)">下一位</el-button>
      </div>
    </div>
    <search-table
      ref="searchTable"
      :table-attrs="tableAttrs"
      :column-data="columnData"
      :list-api="listApi"
      :api-keys-map="apiKeysMap">
    </search-table>
  </div>
</template>

<style lang="scss">
  @import "~@/assets/style/variables/index";

  #page-queue {
    .current-queue {
      margin: 20px 0;
      border: 1px solid #dfe6ec;
      border-radius: 2px;
      align-items: stretch;

      &__num {
        width: 200px;
        border-right: 1px solid #dfe6ec;
        .num {
          font-size: 26px;
        }
      }

      &__info {
        padding: 20px;

        .info-item {
          &__label {
            color: #888;
            width: 60px;
          }
          &__content {
            margin-left: 20px;
          }
        }
      }
    }

    .info-item {
      margin-bottom: 20px;
    }
    

    .top-box {
      .input-items {
        padding: 10px;
      }
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
