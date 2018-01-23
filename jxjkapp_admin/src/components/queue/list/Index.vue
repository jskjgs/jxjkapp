<script>
/*
 * Created by zhengji
 * Date: 2017/8/29
 */
import SearchTable from '@/components/_common/searchTable/SearchTable'
import tableCfgMaker from './_consts/tableCfg'
import {
  getListApi, callNext
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
      responseFn (data) {
        let content = data.content || {}
        this.tableData = (content.list || []).map((item) => {
          return {
            id: item.id,
            queueNum: item.queueNum,
            type: item.type,
            userName: item.userName,
            phone: item.phone,
            status: item.status,
            remark: item.remark
          }
        })
        this.total = content.total || 0
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
          } else {
            done()
          }
        }
      })
    },
    next () {
      callNext().then((res) => {
        console.log(res)
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
