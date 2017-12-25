import wepy from 'wepy'

export default class PageMixin extends wepy.mixin {
  data = {
    pageNum: 1,
    isLastPage: false, // 是否最后一页
    listData: []
  }

  // 下拉刷新
  onPullDownRefresh () {
    if (this.pageNum === 1) {
      this.initData()
    } else {
      this.pageNum = 1
    }
  }
  // 页面上拉触底加载更多
  onReachBottom () {
    if (this.isLastPage === false) {
      this.pageNum++
    }
  }

  watch = {
    pageNum (newVal) {
      wx.stopPullDownRefresh()
      this.initData()
    }
  }

  initData (reqParams, resCb) {
    if (!this.initFnAgrs) {
      this.initFnAgrs = {
        reqParams,
        resCb
      }
    } else {
      reqParams = this.initFnAgrs.reqParams
      resCb = this.initFnAgrs.resCb
    }
    const pageNum = this.pageNum || 1
    reqParams.data.pageNum = pageNum
    return this.$_request(reqParams).then(res => {
      const content = res.content || {}
      this.isLastPage = !!content.isLastPage
      const list = content.list || []
      if (pageNum > 1) {
        if (list.length === 0) {
          this.$invoke('CustomPage', 'initPage', {
            noData: true
          })
        } else {
          this.listData = this.listData.concat(list.map(item => {
            return resCb(item, res)
          }))
        }
      } else {
        this.listData = list.map(item => {
          return resCb(item, res)
        })
      }
      this.$apply()
      this.$invoke('CustomPage', 'initPage', {
        dataInited: true
      })
    }).catch(() => {
      if (pageNum > 1) {
        wx.showToast({
          title: '加载失败'
        })
      } else {
        this.$invoke('CustomPage', 'initPage', {
          noServer: true
        })
      }
    }).finally(() => {
      wx.stopPullDownRefresh()
    })
  }
}
