import Vue from 'vue'

import {
  fetchApi
} from './index'

// 上传文件（图片）
Object.defineProperties(Vue.prototype, {
  '$uploadFile': {
    value: function (formData) {
      return new Promise(function (resolve, reject) {
        fetchApi({
          url: '/fileUpload/image',
          type: 'post',
          data: formData
        }).then(res => {
          resolve(res)
        }).catch(error => {
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

