<script>
import OrderDetail from '@/components/order/orderDetail/Index'
// import {
//   INDEX as ORDER_INDEX
// } from '@/components/order/list/_consts/routers'
// import {
//   INDEX as USER_DETAIL_INDEX
// } from '@/components/user/detail/_consts/routers'
export default {
  name: 'Detail',
  components: {
    OrderDetail
  },
  data () {
    return {}
  }
}
</script>

<template>
  <div id="user-order-detail-wrap">
    <div class="content-wrap">
      <OrderDetail/>
    </div>
  </div>
</template>

<style lang="scss">
#user-order-detail-wrap {
}
</style>
