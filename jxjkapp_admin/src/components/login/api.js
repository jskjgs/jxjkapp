import { fetchApi } from '@/utils/index'
import { Message } from 'element-ui'

export const LOGIN_URL = '/admin/login'

export default (data) => {
  return fetchApi({
    url: LOGIN_URL,
    type: 'post',
    params: data,
    success (data) {
      if (data.code === 200) {
        console.log(data.content.token)
        // 标识已登陆
        document.cookie = ('login=' + data.content.token)
        Message({
          type: 'success',
          message: '登录成功'
        })
        return data
      } else {
        Message({
          type: 'error',
          message: data.message || '登录失败'
        })
        return new Error(data.message)
      }
    },
    error (err) {
      console.log(err)
    }
  })
}
