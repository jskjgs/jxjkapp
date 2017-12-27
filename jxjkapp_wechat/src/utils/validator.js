// 验证密码
export const validPsd = function (psd) {
  return new Promise(function (resolve, reject) {
    psd = psd.trim()
    if (/^[a-zA-Z0-9!@#$%^&*()_]{6, 16}$/.test(psd)) {
      resolve()
    } else {
      reject(new Error('密码格式错误'))
    }
  })
}

// 验证手机号
export const validTel = function (tel) {
  return new Promise(function (resolve, reject) {
    tel = tel.trim()
    if (/^\d{11}$/.test(tel)) {
      resolve()
    } else {
      reject(new Error('手机格式错误'))
    }
  })
}

// 验证身份证
export const validCardId = function (cardId) {
  return /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/.test(cardId)
}
