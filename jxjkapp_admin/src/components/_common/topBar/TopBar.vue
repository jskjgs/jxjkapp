<script>
  import { Cookie } from '@/utils/index'
  import { mapState, mapMutations } from 'vuex'
  import {
    UPDATE_ACCOUNTINFO,
    UPDATE_AREA,
    UPDATE_AREALIST
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
        userName: state => (state.accountInfo || {}).account
      }),
      areaList () {
        const areaList = this.$store.state.areaList
        if (areaList && areaList.length > 0) {
          return areaList
        } else {
          this.$store.dispatch(UPDATE_AREALIST)
          return []
        }
      },
      pickedArea () {
        return this.$store.state.pickedArea
      },
      pickedAreaId: {
        get () {
          return (this.pickedArea || {}).id
        },
        set (val) {
          this.$store.commit(UPDATE_AREA, this.areaList.find(item => item.id === val))
        }
      },
      routeCrumbs () {
        return this.$route.meta.crumbsMaker ? this.$route.meta.crumbsMaker(this.$route) : []
      }
    },
    created () {
    },
    methods: {
      ...mapMutations({
        updateAccountInfo: UPDATE_ACCOUNTINFO // 更新vuex中的accountInfo和auth
      }),
      handleNavBtnClick () {
        this.$eventBus.$emit('left-nav-show', true)
      },
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
    <div class="page-title route-crumbs flex--vcenter">
      <i 
        class="el-icon-menu left-nav-btn" 
        @click="handleNavBtnClick"/>
      <template v-for="crumb in routeCrumbs">
        <router-link :to="crumb">{{ crumb.meta.label }}</router-link>&nbsp;&gt;
      </template>
      {{ $route.meta.label }}
    </div>
    <div class="flex--vcenter">
      <div class="tool-item">
        院区：
        <el-select
          v-if="$store.state.accountInfo.author === 3" 
          v-model="pickedAreaId" 
          placeholder="选择院区">
          <el-option
            v-for="item in areaList"
            :key="item.id"
            :label="item.name"
            :value="item.id">
          </el-option>
        </el-select>
        <div v-else style="display: inline-block;">
          {{ (pickedArea || {}).name }}
        </div>
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
    padding: 0 20px;
    width: 100%;
    height: $topBar_h;
    box-shadow: 0 8px 16px 0 rgba(7, 17, 27, 0.2);

    .left-nav-btn {
      display: none;
      margin-right: 20px;
      font-size: 1.2em;
    }

    .icon-user2 {
      font-size: 18px;
      margin-right: 6px;
      color: $color6;
    }
    .el-dropdown-link {
      cursor: pointer;
    }

    .route-crumbs {
      a {
        color: #20a0ff;
      }
    }
  }

  @media screen and (max-width: 1366px) {
    #top-bar {
      .left-nav-btn {
        display: block;
        color: #242e42;
      }
    }
  }
</style>
