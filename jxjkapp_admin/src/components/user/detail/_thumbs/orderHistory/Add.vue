<script>
import OrderAdd from '@/components/order/orderAdd/Index'
import {
  INDEX as ORDER_INDEX
} from '@/components/order/list/_consts/routers'
import {
  INDEX as USER_DETAIL_INDEX
} from '@/components/user/detail/_consts/routers'
export default {
  name: 'Add',
  components: {
    OrderAdd
  },
  beforeRouteLeave (to, from, next) {
    if (to.name === ORDER_INDEX.name) {
      next({
        ...this.$route,
        name: USER_DETAIL_INDEX.name
      })
    } else {
      next()
    }
  },
  data () {
    return {}
  }
}
</script>

<template>
  <div id="user-order-add-wrap">
    <OrderAdd></OrderAdd>
  </div>
</template>

<style>
#user-order-add-wrap {
}
</style>
