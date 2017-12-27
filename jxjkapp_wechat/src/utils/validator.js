// 验证手机号
export const validTel = function (tel) {
  return /^\d{11}$/.test(tel)
}

// 验证身份证
export const validCardId = function (cardId) {
  return /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/.test(cardId)
}
