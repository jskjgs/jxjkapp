// 验证密码
export const validPsd = function (psd) {
  return new Promise(function (resolve, reject) {
    psd = psd.trim()
    if (psd.test(/^[a-zA-Z0-9!@#$%^&*()_]{6, 16}$/)) {
      resolve()
    } else {
      reject()
    }
  })
}
