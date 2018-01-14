// 验证手机号
export const validTel = function (tel) {
  return /^\d{11}$/.test(tel)
}

// 验证身份证
export const validCardId = function (cardId) {
  return /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/.test(cardId)
}

// 验证用户账号
export const validUserName = function (username) {
  return /^.{5,10}$/.test(username)
}

// 验证密码
export const validPwd = function (pwd) {
  return /^.{5,10}$/.test(pwd)
}

// 判断用户是否登录
export const isLogin = function (isShowPage) {
  var hasToken = wx.getStorage({
    key: 'userInfo'
  }) == null ? false : true
  if (!hasToken && isShowPage) {
    wx.reLaunch({
      url: '/pages/account'
    })
  }
  return hasToken
}

// 保存用户登录token
export const storageUserData = function (userInfo) {
  wx.setStorage({
    key: 'userInfo',
    data: userInfo
  })
}

// 删除用户登录token
export const userLogout = function () {
  wx.removeStorage({
    key: 'userInfo',
    success: function(res) {
      console.log(res.data)
    }
  })
}
