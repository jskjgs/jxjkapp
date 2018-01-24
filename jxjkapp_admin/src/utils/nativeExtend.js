import Vue from 'vue'
import {
  fetchApi
} from './index'
import store from '@/store'
import {
  convertDate
} from '@/utils/index'

import {
  UPDATE_HOSPAREALIST,
  UPDATE_PRODUCT_TYPE_LIST
} from '../store/global'

Object.defineProperties(Vue.prototype, {
  '$_convertDate': {
    value: convertDate
  },
  '$_hospAreaList': {
    get () {
      if (!store.state.hospAreaList || !store.state.hospAreaList.length) {
        store.dispatch(UPDATE_HOSPAREALIST)
      } else {
        return store.state.hospAreaList
      }
    }
  },
  '$_productTypeList': {
    get () {
      if (!store.state.productTypeList || !store.state.productTypeList.length) {
        store.dispatch(UPDATE_PRODUCT_TYPE_LIST)
      } else {
        return store.state.productTypeList
      }
    }
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
  '$api': {
    value: function ({success = true, duration = 1000, res} = {}) {
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
  }
})
