<script>
import OrderRecord from '@/components/order/serviceRecord/Index'
import {
  ORDER_RECORD_DETAIL
} from '@/components/user/detail/_consts/routers'
export default {
  name: 'Detail',
  components: {
    OrderRecord
  },
  data () {
    this.detailPath = (recordId) => {
      return {
        name: ORDER_RECORD_DETAIL.name,
        params: {
          recordId
        }
      }
    }
    return {
    }
  }
}
</script>

<template>
  <div id="user-order-record-wrap">
    <div class="content-wrap">
      <OrderRecord :detailPath="detailPath"/>
    </div>
  </div>
</template>

<style lang="scss">
#user-order-record-wrap {
}
</style>
