<script>
/*
 * Created by zhengji
 * Date: 2017/8/29
 */
import SearchTable from '@/components/_common/searchTable/SearchTable'
import tableCfgMaker from './_consts/tableCfg'
import {
  getListApi, callNext, getCurrentApi, JumpQueue
} from './api'

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
        const content = res.content || []
        // const list = content.list || []
        const list = content
        this.tableData = list.map((item) => {
          const userInfo = item.userInfo || {}
          const orderProduct = item.orderProduct || {}
          return {
            id: item.id,
            queueNum: item.number,
            userName: userInfo.name,
            userId: userInfo.id,
            phone: userInfo.phone,
            serviceName: orderProduct.productSkuName,
            serviceId: orderProduct.id
          }
        })
      }
    }

    this.currentInfoList = [{
      label: '用户姓名',
      valueKey: 'userName'
    }, {
      label: '用户ID',
      valueKey: 'userId'
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
      currentInfo: {
        userName: '',
        userId: '',
        userPhone: '',
        serviceName: '',
        number: ''
      },
      apiKeysMap: {
        pageSize: {
          value: 10,
          innerKey: 'pageSize' // searchTable组件内部映射的key
        },
        departmentId: {
          value: undefined
        },
        doctorName: {
          value: ''
        },
        currentPage: 'pageNum',
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
  watch: {
    currentPage (newPageNum) {
      this.getList({
        pageNum: newPageNum
      })
    }
  },
  methods: {
    // 跳过排队
    skipQueue (rowData) {
      this.$confirm('确定执行插队操作？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        beforeClose: (action, instance, done) => {
          if (action === 'confirm') {
            JumpQueue({phone: rowData.phone, number: rowData.queueNum, orderProductId: rowData.serviceId, userId: rowData.userId}).then((res) => {
              this.$message({
                type: 'success',
                message: '插队成功'
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
    getCurrent () {
      return getCurrentApi().then((res) => {
        const data = res.content || {}
        const userInfo = data.userInfo || {}
        const orderProduct = data.orderProduct || {}
        this.currentInfo = {
          userName: userInfo.name,
          userId: userInfo.id,
          userPhone: userInfo.phone,
          serviceName: orderProduct.productSkuName,
          number: data.number
        }
      })
    },
    next () {
      callNext().then((res) => {
        this.getCurrent()
        // TODO 刷新当页列表
        // this.$router.go({name: 'queue_root'})
      }).catch((err) => {
        console.log(err)
      })
    },
    add () {
      this.$router.push({name: 'queue/add_root'})
    }
  }
}
</script>

<template>
  <div id="page-queue">
    <div class="flex--vcenter page-top">
      <div class="page-title">
        排队管理
      </div>
    </div>
    <div class="top-box flex--vcenter">
      <div class="btn-wrap flex-item--none">
        <el-button type="primary" @click="add"  style="width: 120px;border-radius: 4px;margin-top: 20px;">新增排队</el-button>
      </div>
    </div>
    <div class="current-queue flex">
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
        <el-button type="primary" @click="next">下一位</el-button>
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
