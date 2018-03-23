import Vue from 'vue'
import {
  fetchApi,
  convertDate
} from '@/utils/index'
import {
  getHospAreaApi,
  getProductTypeApi,
  getProductListApi
} from '@/globalApi'

import getters from './getters'

Object.defineProperties(Vue.prototype, {
  '$_getters': {
    value: getters
  },
  '$_utils': {
  },
  '$_convertDate': {
    value: convertDate
  },
  '$uploadFile': {
    value (data) {
      return new Promise(function (resolve, reject) {
        if (!(data instanceof FormData)) {
          const formData = new FormData()
          formData.append('file', data)
          data = formData
        }
        fetchApi({
          url: '/fileUpload/image',
          type: 'post',
          data: data
        }).then(res => {
          resolve(res)
        }).catch(error => {
          this.$message({
            type: 'error',
            message: '图片上传失败'
          })
          reject(error)
        })
      })
    }
  },
  '$_api': {
    value ({success = true, duration = 1000, res} = {}) {
      return new Promise(function (resolve, reject) {
        setTimeout(() => {
          if (success) {
            resolve(res)
          } else {
            reject()
          }
        }, duration)
      })
    }
  },
  '$_getAreaList': {
    value () {
      return getHospAreaApi({
        'current': 1,
        'size': 1000
      }).then(res => {
        const content = res.content || {}
        const list = content.records || []
        return list.map(item => {
          return {
            label: item.name,
            value: item.id
          }
        })
      })
    }
  },
  '$_getProductTypeList': {
    value () {
      return getProductTypeApi({
        'current': 1,
        'size': 1000
      }).then(res => {
        const content = res.content || {}
        const list = content.records || []
        return list.map(item => {
          return {
            label: item.name,
            value: item.id,
            list: (item.productList || []).map(product => {
              return {
                label: product.name,
                value: product.id
              }
            })
          }
        })
      })
    }
  },
  '$_getProductList': {
    value (args) {
      const params = typeof args === 'object' ? args : {
        categoryId: args
      }
      return getProductListApi(params).then(res => {
        const content = res.content || {}
        const list = content.records || []
        return list
      })
    }
  }
})
