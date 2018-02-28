import Vue from 'vue'
import {
  getHospAreaApi,
  getProductTypeApi
} from '@/globalApi'

const getterMaker = function (getVal, defaultVal) {
  return {
    get: (() => {
      let vm = new Vue({
        data: {
          data: null
        }
      })
      return () => {
        if (vm.data === null) {
          getVal((val) => {
            vm.data = val
          })
        }
        return vm.data === null ? defaultVal : vm.data
      }
    })()
  }
}

export default Object.defineProperties({}, {
  hospAreaList: getterMaker((syncData) => {
    getHospAreaApi({
      'current': 1,
      'size': 1000
    }).then(res => {
      const content = res.content || {}
      let list = content.records || []
      list = list.map(item => {
        return {
          label: item.name,
          value: item.id
        }
      })
      syncData(list)
    })
  }, []),
  productTypeList: getterMaker((syncData) => {
    getProductTypeApi({
      'current': 1,
      'size': 1000
    }).then(res => {
      const content = res.content || {}
      let list = content.records || []
      list = list.map(item => {
        return {
          label: item.name,
          value: item.id,
          list: (item.productVO || item.product || []).map(product => {
            return {
              label: product.name,
              value: product.id
            }
          })
        }
      })
      syncData(list)
    })
  }, [])
})
