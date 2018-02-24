<script>
/*
 * Created by zhengji
 * Date: 2017/8/29
 */
import {
  addEmployee, updateEmployeeApi, getEmployee, getHospList
} from './api'

export default {
  name: 'addEmployee',
  components: {
  },
  data () {
    return {
      fromData: {
        id: this.$route.params.id,
        phone: 123,
        account: null,
        password: null,
        areaId: null,
        author: null,
        title: null,
        sex: null,
        nickname: null
      },
      hospitalList: []
    }
  },
  created () {
    // 包装医院列表
    getHospList().then((res) => {
      let list = res.content.list
      list.forEach((value) => {
        let data = Object.create(null)
        data.id = value.id
        data.name = value.name
        this.hospitalList.push(data)
      })
    })
    if (this.$route.params.id) {
      console.log(1)
      getEmployee({id: this.$route.params.id}).then((res) => {
        let info = res.content
        this.fromData.phone = info.phone
        this.fromData.account = info.account
        this.fromData.areaId = info.area.id
        this.fromData.author = info.authorId
        this.fromData.sex = info.sex
        this.fromData.title = info.title
        this.fromData.nickname = info.nickname
        console.log(res)
      })
    }
  },
  watch: {
  },
  methods: {
    handleCancel () {
      this.$router.push({name: 'employee_root'})
    },
    handleUpdate () {
      if (!this.fromData.id) {
        addEmployee(this.fromData).then((res) => {
          console.log(res)
          this.$message({
            type: 'success',
            message: '创建成功'
          })
          this.$router.push({name: 'employee_root'})
        }).finally(() => {
          this.loginLoading = false
        })
      } else {
        updateEmployeeApi(this.fromData).then((res) => {
          this.$message({
            type: 'success',
            message: '更新成功'
          })
        }).finally(() => {
          this.loginLoading = false
        })
      }
    }
  }
}
</script>

<template>
  <div id="doctor">
    <div class="flex--vcenter page-top">
      <div class="page-title">
        添加新员工
      </div>
    </div>
    <div class="flex--vcenter" style="margin-top: 20px; justify-content: space-between;">
      <div class="tool-item">
        登录账号
        <el-input
          v-model.trim="fromData.account"
          placeholder="请输就员工姓名"
          style="width: 230px;">
        </el-input>
      </div>
      <div class="tool-item">
        登录密码
        <el-input
          v-model.trim="fromData.password"
          type="password"
          :placeholder="fromData.id ? '请填入新密码' : '请输初始密码'"
          style="width: 230px;">
        </el-input>
      </div>
      <div class="tool-item">
        员工姓名
        <el-input
          v-model.trim="fromData.nickname"
          placeholder="请输就员工姓名"
          style="width: 230px;">
        </el-input>
      </div>
    </div>
    <div class="flex--vcenter" style="margin-top: 20px; justify-content: space-between;">
      <div class="tool-item">
        所在院区
        <el-select v-model="fromData.areaId" placeholder="请选择" style="width: 230px;">
          <el-option
            v-for="item in hospitalList"
            :key="item.id"
            :label="item.name"
            :value="item.id">
          </el-option>
        </el-select>
      </div>
      <div class="tool-item">
        账号权限
        <el-select v-model="fromData.author" placeholder="请选择" style="width: 230px;">
          <el-option
            v-for="(item, key, value) in {'医生': 0, '医院主管': 1, '集团主管': 2}"
            :key="key"
            :label="key"
            :value="value">
          </el-option>
        </el-select>
      </div>
      <div class="tool-item">
        员工性别
        <el-select v-model="fromData.sex" placeholder="请选择" style="width: 230px;">
          <el-option
            v-for="(item, key, value) in {'男': 1, '女': 0}"
            :key="key"
            :label="key"
            :value="value">
          </el-option>
        </el-select>
      </div>
    </div>
    <div class="flex--vcenter"  style="margin-top: 20px;">
        <el-button
          class="tool-item"
          @click="handleCancel">取消
        </el-button>
        <el-button
          class="tool-item"
          type="primary"
          @click="handleUpdate">保存
        </el-button>
    </div>
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
