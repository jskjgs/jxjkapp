import Vue from 'vue'
import {
  fetchApi
} from './index'
import {
  convertDate
} from '@/utils/index'

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
