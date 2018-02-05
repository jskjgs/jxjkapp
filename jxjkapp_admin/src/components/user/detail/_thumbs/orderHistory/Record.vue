<script>
import OrderRecord from '@/components/order/serviceRecord/Index'
import {
  INDEX as ORDER_INDEX
} from '@/components/order/list/_consts/routers'
import {
  INDEX as USER_DETAIL_INDEX
} from '@/components/user/detail/_consts/routers'
export default {
  name: 'Detail',
  components: {
    OrderRecord
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
  <div id="user-order-record-wrap">
    <div class="flex--vcenter page-top" style="margin-bottom: 20px;">
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
    </div>
    <div class="content-wrap">
      <OrderRecord/>
    </div>
  </div>
</template>

<style lang="scss">
#user-order-record-wrap {
  .content-wrap {
    .page-title {
      display: none;
    }
  }
}
</style>
