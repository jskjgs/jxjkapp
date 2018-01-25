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
        const content = res.content || {}
        const list = content || []
        console.log(res)
        this.tableData = (list || {}).map((item) => {
          return {
            id: item.id,
            queueNum: item.number,
            userName: item.userInfo.name,
            phone: item.userInfo.phone,
            serviceName: item.orderProduct.productSkuName
          }
        })
      }
    }

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
    getCurrentApi
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
      this.$confirm('确定执行过号操作？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        beforeClose: (action, instance, done) => {
          if (action === 'confirm') {
            console.log(rowData)
            JumpQueue({callNumber: rowData.queueNum}).then((res) => {
              this.$message({
                type: 'success',
                message: '插队成功'
              })
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
      getCurrentApi({areaId: 1}).then((res) => {
        let data = res.content
        this.userName = data.userInfo.name
        this.userId = data.userInfo.id
        this.userPhone = data.userInfo.phone
        this.serviceName = data.productSku.name
        this.number = data.number
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
    <el-row :gutter="20" style="margin-top: 20px;">
      <el-col :span="8">
        <div class="info-item">
          <span class="info-item__label">当前号码</span>：
          <span class="info-item__content">{{currentInfo.number}}</span>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="info-item">
          <span class="info-item__label">用户姓名</span>：
          <span class="info-item__content">{{currentInfo.userName}}</span>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="info-item">
          <span class="info-item__label">用户ID</span>：
          <span class="info-item__content">{{currentInfo.userId}}</span>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="info-item">
          <span class="info-item__label">用户电话</span>：
          <span class="info-item__content">{{currentInfo.number}}</span>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="info-item">
          <span class="info-item__label">当前号码</span>：
          <span class="info-item__content">{{currentInfo.userPhone}}</span>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="info-item">
          <span class="info-item__label">项目名称</span>：
          <span class="info-item__content">{{currentInfo.serviceName}}</span>
        </div>
      </el-col>
    </el-row>
    <div class="top-box flex--vcenter">
      <div class="top-box flex--vcenter">
        <div class="btn-wrap flex-item--none">
          <el-button type="primary" @click="add"  style="width: 120px;border-radius: 4px;">用户排号</el-button>
        </div>
      </div>
      <div class="btn-wrap flex-item--none" style="margin-left: 20px;">
        <el-button type="primary" @click="next">叫号</el-button>
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
