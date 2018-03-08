<script>
  import { Cookie } from '@/utils/index'
  import { mapState, mapMutations } from 'vuex'
  import {
    UPDATE_ACCOUNTINFO,
    UPDATE_AREA
  } from '@/store/global'
  
  import ResetPsdDialog from './ResetPsdDialog'

  import {
    logoutApi,
    modifyPsdApi
  } from './api'

  export default {
    name: 'TopBar',
    components: {
      ResetPsdDialog
    },
    data () {
      return {
        resetPsdDialogVisible: false
      }
    },
    computed: {
      ...mapState({
        // 用户名
        userName: state => (state.accountInfo || {}).account,
        areaList: 'areaList'
      }),
      pickedAreaId: {
        get () {
          return (this.$store.state.pickedArea || {}).id
        },
        set (val) {
          this.$store.commit(UPDATE_AREA, this.areaList.find(item => item.id === val))
        }
      }
    },
    created () {
    },
    methods: {
      ...mapMutations({
        updateAccountInfo: UPDATE_ACCOUNTINFO // 更新vuex中的accountInfo和auth
      }),
      // 清除用户信息
      clearUserInfo () {
        Cookie.remove('login')
        localStorage.removeItem('accountInfo')
        this.updateAccountInfo({})
      },
      // 退出登录
      logout () {
        logoutApi().then(() => {
          this.clearUserInfo()
          this.$router.replace('/login')
          this.$message({
            type: 'success',
            message: '退出成功'
          })
        })
      },
      // 打开重置密码弹框
      openResetPsdDialog () {
        this.resetPsdDialogVisible = true
      },
      submitResetPsd (formData, resolveDialog) {
        return modifyPsdApi({
          passwordOld: formData.oldPsd,
          passwordNew: formData.psd
        }).then(() => {
          this.resetPsdDialogVisible = false
          this.$message({
            type: 'success',
            message: '密码修改成功！请重新登录'
          })
          setTimeout(() => {
            this.clearUserInfo()
            this.$router.replace('/login')
          }, 1000)
        }).finally(() => {
          resolveDialog()
        })
      }
    }
  }
</script>

<template>
  <div id="top-bar" class="flex--vcenter--sb">
    <div class="page-title">
      {{ $route.meta.label }}
    </div>
    <div class="flex--vcenter">
      <div class="tool-item" v-if="$store.state.accountInfo.author === 3">
        院区：
        <el-select 
          v-model="pickedAreaId" 
          placeholder="选择院区">
          <el-option
            v-for="item in areaList"
            :key="item.id"
            :label="item.name"
            :value="item.id">
          </el-option>
        </el-select>
      </div>
      <div class="user flex--vcenter" style="margin-left: 20px;">
        <i class="icon-user2"></i>
        <el-dropdown>
          <span class="el-dropdown-link">
            {{ userName }}
            <i class="el-icon-caret-bottom el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="openResetPsdDialog">修改密码</el-dropdown-item>
            <el-dropdown-item @click.native="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <ResetPsdDialog 
      v-model="resetPsdDialogVisible"
      @submit="submitResetPsd"></ResetPsdDialog>
  </div>
</template>

<style lang="scss">
  @import "../../../assets/style/variables/index";

  #top-bar {
    width: 100%;
    height: $topBar_h;

    .icon-user2 {
      font-size: 18px;
      margin-right: 6px;
      color: $color6;
    }
    .el-dropdown-link {
      cursor: pointer;
    }
  }
</style>
