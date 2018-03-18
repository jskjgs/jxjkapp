<script>
  // 顶部bar
  import TopBar from '@/components/_common/topBar/TopBar'
  // 左侧导航
  import LeftNav from '@/components/_common/leftNav/LeftNav'
  import { mapState } from 'vuex'
  import {
    UPDATE_AREALIST
  } from '@/store/global'
  export default {
    name: 'App',
    components: {
      TopBar,
      LeftNav
    },
    data () {
      return {
      }
    },
    computed: {
      ...mapState({
        author: (state) => state.accountInfo.author
      }),
      showFixedBar () {
        let route = this.$route
        return route.path !== '/' && route.name !== 'Login' && route.name !== 'NotFound'
      }
    },
    created () {
      // 超级管理员获取院区列表
      if (this.author === 3) {
        this.$store.dispatch(UPDATE_AREALIST)
      }
    }
  }
</script>

<template>
  <div id="app">
    <template v-if="showFixedBar">
      <div class="flex body-wrap">
        <left-nav class="flex-item--none"></left-nav>
        <div class="flex-item" id="content-wrap">
          <top-bar id="top-bar"></top-bar>
          <div id="page-content">
            <keep-alive :include="$store.state.keepAlive">
              <router-view></router-view>
            </keep-alive>
          </div>
        </div>
      </div>
    </template>

    <template v-else>
      <router-view></router-view>
    </template>
  </div>
</template>

<style lang="scss">
  /* 全局样式 */
  @import '~@/assets/style/index';
  @import "~@/assets/style/variables/index";

  #app {
    min-width: 1200px;
    height: calc(100vh - #{ $scollbar_w });

    .body-wrap {
      width: 100%;
      height: 100%;

      @at-root {
        #content-wrap {
          overflow: hidden;
          height: 100%;
        }
        #top-bar {
        }
        #page-content {
          overflow-y: auto;
          padding: 30px;
          height: calc(100vh - #{$topBar_h});
        }
      }
    }
  }
</style>
