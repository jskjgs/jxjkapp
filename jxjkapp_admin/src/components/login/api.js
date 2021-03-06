import { fetchApi } from '@/utils/index'
import { Message } from 'element-ui'

export const LOGIN_URL = '/home/login'

export default (data) => {
  return fetchApi({
    url: LOGIN_URL,
    type: 'post',
    data: data,
    success (data) {
      if (data.code === 200) {
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
