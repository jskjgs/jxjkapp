<script>
import OrderDetail from '@/components/order/orderDetail/Index'
import {
  INDEX as ORDER_INDEX
} from '@/components/order/list/_consts/routers'
import {
  INDEX as USER_DETAIL_INDEX
} from '@/components/user/detail/_consts/routers'
export default {
  name: 'Detail',
  components: {
    OrderDetail
  },
  beforeRouteLeave (to, from, next) {
    if (to.name === ORDER_INDEX.name) {
      next({
        ...this.$route,
        name: USER_DETAIL_INDEX.name,
        query: {
          ...this.$route.query,
          tab: 'OrderHistory'
        }
      })
    } else {
      next()
    }
  },
  data () {
    this.USER_DETAIL_INDEX = USER_DETAIL_INDEX
    return {}
  }
}
</script>

<template>
  <div id="user-order-detail-wrap">
    <!-- <div class="flex--vcenter page-top" style="margin-bottom: 20px;">
      <div class="page-title">
        <router-link 
          :to="{
            name: USER_DETAIL_INDEX.name,
            params: $route.params,
            query: {
              tab: 'OrderHistory'
            }
          }"> 订单记录 </router-link> &gt; 订单详情
      </div>
    </div> -->
    <div class="content-wrap">
      <OrderDetail></OrderDetail>
    </div>
  </div>
</template>

<style lang="scss">
#user-order-detail-wrap {
  .content-wrap {
    .page-title {
      display: none;
    }
  }
}
</style>
