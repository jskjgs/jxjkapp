<script>
  /*
   * Created by zhengji
   * Date: 2017/10/20
   */
  import UserDetails from './_thumbs/Details'
  import OrderHistory from './_thumbs/orderHistory/Index'
  import RechargeRecord from './_thumbs/Recharge'

  export default {
    name: 'UserDetail',
    components: {
      UserDetails,
      OrderHistory,
      RechargeRecord
    },
    data () {
      this.tabs = {
        UserDetails,
        OrderHistory,
        RechargeRecord
      }
      return {
        activeTab: 'UserDetails'
      }
    },
    methods: {
    }
  }
</script>
<template>
  <div id="user-detail-wrap">
    <!-- <div class="user-summary">
      <div class="summary-item">
        <span class="summary-item__label">用户姓名</span>:
        <span class="summary-item__content"></span>
      </div>
    </div> -->
    <div class="user-info-wrap">
      <el-tabs v-model="activeTab">
        <el-tab-pane label="详细资料" name="UserDetails"></el-tab-pane>
        <el-tab-pane label="订单记录" name="OrderHistory"></el-tab-pane>
        <el-tab-pane label="充值记录" name="RechargeRecord"></el-tab-pane>
      </el-tabs>
      <div class="activeTab-wrap">
        <keep-alive>
          <component :is="activeTab"></component>
        </keep-alive>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
#user-detail-wrap {
  .user-info-wrap {
    margin-top: 20px;
    border: 1px solid #ccc;
    padding: 20px;
    min-height: 500px;
  }
}
</style>

