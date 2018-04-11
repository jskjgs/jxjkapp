<script>
import OrderRecordDetail from '@/components/order/serviceDetail/Index'
export default {
  name: 'Detail',
  components: {
    OrderRecordDetail
  },
  data () {
    return {
    }
  }
}
</script>

<template>
  <div id="user-record-detail-wrap">
    <div class="content-wrap">
      <OrderRecordDetail/>
    </div>
  </div>
</template>

<style lang="scss">
#user-record-detail-wrap {
}
</style>
