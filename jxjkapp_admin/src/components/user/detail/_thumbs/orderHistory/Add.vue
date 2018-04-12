<script>
import OrderAdd from '@/components/order/orderAdd/Index'
import {
  INDEX as USER_DETAIL_INDEX
} from '@/components/user/detail/_consts/routers'
export default {
  name: 'Add',
  components: {
    OrderAdd
  },
  data () {
    this.USER_DETAIL_INDEX = USER_DETAIL_INDEX
    return {}
  }
}
</script>

<template>
  <div id="user-order-add-wrap">
    <OrderAdd :submitToPath="USER_DETAIL_INDEX" :patientId="$route.params.patientId"/>
  </div>
</template>

<style>
#user-order-add-wrap {
}
</style>
