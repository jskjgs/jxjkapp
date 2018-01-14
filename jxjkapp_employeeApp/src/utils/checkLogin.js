export default () => {
  const userInfo = wx.getStorageSync('userInfo')
  if (!userInfo) {
    wx.navigateTo('/pages/account')
  }
}