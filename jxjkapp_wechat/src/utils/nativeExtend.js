import wepy from 'wepy'
import convertDate from '@/utils/convertDate'

Promise.prototype.finally = function (callback) {
  let P = this.constructor
  return this.then(
    value => P.resolve(callback()).then(() => value),
    reason => P.resolve(callback()).then(() => { throw reason })
  )
}
;(['page', 'component']).forEach(function (item) {
  Object.defineProperties(wepy[item].prototype, {
    // 核对是否登陆
    '$_checkLogin': {
      value (routeFn = 'redirectTo', toLogin = true) {
        return true
        const userInfo = wx.getStorageSync('userInfo')
        if (!userInfo) {
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
      value (cfg, showLoading = true, toLoginFn = 'redirectTo') {
        cfg = Object.assign({}, {
          header: {
            Authorization: this.$parent.globalData.token
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
            const data = res.data || {}
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
              case 406:
                errMsg = data.message
                break
              case 401:
                errMsg = '未登陆'
                wx[toLoginFn]({
                  url: '/pages/login'
                })
                break
              case 500:
                errMsg = '发生未知错误'
                break
              default:
                errMsg = data.message || '发生未知错误'
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
            reject(e)
          })
        }).catch((e) => {
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
