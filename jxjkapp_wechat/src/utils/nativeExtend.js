import wepy from 'wepy'
import convertDate from '@/utils/convertDate'

const $_getApp = (target) => {
  let app = target
  while (!(app instanceof wepy.app)) {
    app = app.$parent
  }
  return app
}

Promise.prototype.finally = function (callback) {
  let P = this.constructor
  return this.then(
    value => P.resolve(callback()).then(() => value),
    reason => P.resolve(callback()).then(() => { throw reason })
  )
}
;(['app', 'page', 'component']).forEach(function (item) {
  Object.defineProperties(wepy[item].prototype, {
    // 同步用户信息（储存 / 删除 / 获取）
    '$_syncUserData': {
      value (newData) {
        if (newData) {
          const {token, userInfo} = newData
          let globalData = $_getApp(this).globalData
          if (token && userInfo) {
            Object.assign(globalData, {
              token,
              userInfo
            })
            wx.setStorageSync('token', token)
            wx.setStorageSync('userInfo', JSON.stringify(userInfo))
          } else {
            globalData.token = null
            globalData.userInfo = null
            wx.removeStorageSync('token')
            wx.removeStorageSync('userInfo')
          }
        } else {
          return {
            token: wx.getStorageSync('token'),
            userInfo: wx.getStorageSync('userInfo') ? JSON.parse(wx.getStorageSync('userInfo')) : null
          }
        }
      }
    },
    // 获取wepy.app实例
    '$_getApp': {
      value (target) {
        return $_getApp(target)
      }
    },
    // 核对是否登陆
    '$_checkLogin': {
      value (routeFn = 'redirectTo', toLogin = true) {
        const userInfo = wx.getStorageSync('userInfo')
        const token = wx.getStorageSync('token')
        if (!(userInfo && token)) {
          if (toLogin) {
            wx[routeFn]({
              url: '/pages/login'
            })
          }
          return false
        }
        return true
      }
    },
    // api请求
    '$_request': {
      value (cfg, {showLoading = true, toLoginFn = 'redirectTo'} = {}) {
        cfg = Object.assign({}, {
          header: {
            Authorization: wx.getStorageSync('token')
          }
        }, cfg)
        if (showLoading) {
          wx.showLoading({
            title: '加载中..',
            mask: true
          })
        }
        cfg.url = 'http://182.92.78.118:9001/hospHealth' + cfg.url
        return new Promise(function (resolve, reject) {
          wepy.request(cfg).then(res => {
            console.log('res1', res, typeof res, typeof res.data)
            let data = res.data || {}
            if (typeof data === 'string') {
              data = JSON.parse(data)
              console.log('data', data)
            }
            console.log('typeof data', typeof data, data)
            let code = +data.code
            let errMsg = ''
            switch (code) {
              case 200:
                const content = data.content
                resolve(content, data)
                break
              case 400:
                errMsg = '操作失败'
                break
              case 401:
                errMsg = '未登陆'
                wx[toLoginFn]({
                  url: '/pages/login'
                })
                break
              default:
                errMsg = '发生未知错误'
            }
            if (errMsg !== '') {
              wx.showToast({
                image: '../assets/images/error.png',
                title: errMsg
              })
              throw new Error({
                message: errMsg,
                error: data
              })
            }
          }).catch((e) => {
            console.log('$_request:catch1', JSON.stringify(e))
            console.dir(e)
            reject(e)
          })
        }).catch((e) => {
          console.log('$_request:catch2', JSON.stringify(e))
          throw e
        }).finally(() => {
          this.$apply()
          wx.hideLoading()
        })
      }
    },
    '$_getPage': {
      value () {
        return this.getCurrentPages().slice(-1)[0]
      }
    },
    '$_getRoute': {
      value () {
        return this.getCurrentPages().slice(-1)[0].route
      }
    },
    // 转换时间
    '$_convertDate': {
      value (timeStamp) {
        return convertDate(timeStamp)
      }
    }
  })
})
