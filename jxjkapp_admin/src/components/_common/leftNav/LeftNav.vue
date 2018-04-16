<script>
  // 一级导航
  import NAVS from './NAVS'

  export default {
    name: 'LeftNav',
    data () {
      return {
        show: false
      }
    },
    created () {
      console.log(this.$route.path.match(/\/\w+((?=\/)|$)/)[0])
      this.NAVS = NAVS
      this.$eventBus.$on('left-nav-show', (visible) => {
        this.show = visible
      })
    },
    computed: {
      userType () {
        return (this.$store.state.accountInfo || {}).author
      }
    },
    methods: {
      handleSelect (index) {
        if (!this.activePath || this.activePath !== index) {
          this.$refs.elMenu.openedMenus = [] // 关闭打开的子菜单
          this.activePath = index
        }
      },
      hideLeftNav () {
        this.$eventBus.$emit('left-nav-show', false)
      }
    }
  }
</script>

<template>
  <div id="left-nav" :class="{'on': show}">
    <el-menu
      theme="dark"
      ref="elMenu"
      :unique-opened="true"
      :default-active="$route.path.match(/\/\w+((?=\/)|$)/)[0]"
      @select="handleSelect"
      router>
      <div class="menu-index flex--vcenter--sb" style="color: #c0ccda;padding: 0 20px;font-size: 18px;">
        <span>后台管理系统</span>
        <i 
          class="el-icon-arrow-left hide-nav-btn"
          style="font-size: 16px;border-radius: 50%;border: 2px solid #c0ccda;padding: 4px;"
          @click="hideLeftNav"/>
      </div>
      <template v-for="nav in NAVS">
        <el-submenu
          v-if="nav.children && nav.children.find(subNav => (!subNav.authValidator) || subNav.authValidator(userType))"
          :key="nav.label"
          index="nav">
          <template slot="title">
            <i v-if="nav.icon" class="nav-icon" :class="nav.icon"></i>{{ nav.label }}
          </template>
          <template v-for="subNav in nav.children">
            <el-menu-item
              v-if="(!subNav.authValidator) || subNav.authValidator(userType)"
              :key="subNav.label"
              :index="subNav.path">
              {{ subNav.label }}
            </el-menu-item>
          </template>
        </el-submenu>
        <el-menu-item
          v-else-if="(!nav.authValidator) || nav.authValidator(userType)"
          :index="nav.path">
          <i v-if="nav.icon" class="nav-icon" :class="nav.icon"></i>{{ nav.label }}
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<style lang="scss">
  @import '~@/assets/style/variables/index.scss';

  #left-nav {
    overflow-y: auto;
    border-radius: 2px;
    width: 200px;
    height: 100%;

    background: $bg1;

    .menu-index {
      height: 72px;
      line-height: 72px;
      
      .hide-nav-btn {
        display: none;
      }
    }
    .el-menu--dark {
      background: transparent;

      .el-submenu .el-menu {
        background: $bg2;
      }
      .el-menu-item, .el-submenu__title {
        color: $color1;

        &.is-active {
          background: $bg4;
          color: #fff;
        }
      }
    }

    .nav-icon {
      display: inline-block;
      transform: scale(1.4);
      margin-right: 6px;
    }
  }

  @media screen and (max-width: 1366px) {
    #left-nav {
      position: fixed;
      z-index: 99999;
      left: -200px;
      top: 0;
      transition: left 500ms;

      &.on {
        left: 0;
        .menu-index {
          .hide-nav-btn {
            display: block;
          }
        }
      }
    }
  }
</style>
