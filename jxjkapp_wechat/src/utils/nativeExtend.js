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
    '$_request': {
      value (cfg, showLoading = true) {
        cfg = Object.assign({}, {
          header: {
            Authorization: (this.$parent.globalData.userInfo || {}).token
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
            if (data.code + '' === '200') {
              const content = data.content
              resolve(content, data)
            } else {
              throw new Error(data)
            }
          }).catch((e) => {
            reject(e)
          })
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
    '$_convertDate': {
      value (timeStamp) {
        return convertDate(timeStamp)
      }
    }
  })
})
