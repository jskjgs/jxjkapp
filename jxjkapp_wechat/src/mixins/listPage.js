import wepy from 'wepy'

export default class ListPageMixin extends wepy.mixin {
  data = {
    current: 1,
    isLastPage: false, // 是否最后一页
    listData: []
  }

  // 下拉刷新
  onPullDownRefresh () {
    if (this.current === 1) {
      this.initData()
    } else {
      this.current = 1
    }
  }
  // 页面上拉触底加载更多
  onReachBottom () {
    if (this.isLastPage === false) {
      this.current++
    }
  }

  watch = {
    current (newVal) {
      wx.stopPullDownRefresh()
      this.initData()
    }
  }

  initData (reqParams, resCb, toLoginFn = 'redirectTo') {
    if (reqParams) { // 暂存传入的参数
      this.initFnAgrs = {
        reqParams,
        resCb
      }
    }
    reqParams = reqParams || this.initFnAgrs.reqParams
    resCb = resCb || this.initFnAgrs.resCb
    const current = this.current || 1
    reqParams.data.current = current
    console.log('reqParams', reqParams, 'toLoginFn', toLoginFn)
    if (current === 1) {
      this.$invoke('CustomPage', 'initPage', {
        noData: false,
        dataInited: false,
        noServer: false
      })
    }
    return this.$_request(reqParams, {toLoginFn}).then(content => {
      content = content || {}
      this.isLastPage = !!content.isLastPage
      const list = content.records || []
      if (current > 1) { // 下滑翻页
        this.listData = this.listData.concat(list.map((item, index) => {
          return resCb(item, index, content)
        }))
      } else { // 加载第一页数据
        this.listData = list.map((item, index) => {
          return resCb(item, index, content)
        })
        if (list.length === 0) { // 无数据
          this.$invoke('CustomPage', 'initPage', {
            noData: true
          })
        }
      }
      this.$invoke('CustomPage', 'initPage', {
        dataInited: true
      })
    }).catch(() => {
      if (current > 1) {
        wx.showToast({
          image: '../assets/images/error.png',
          title: '加载失败'
        })
      } else {
        this.$invoke('CustomPage', 'initPage', {
          noServer: true
        })
      }
    }).finally(() => {
      this.$apply()
      wx.stopPullDownRefresh()
    })
  }
}
