import { fetchApi } from '@/utils/index'

// 退出登录
export const LOG_OUT_URL = '/admin/logout'
export const logoutApi = () => {
  return fetchApi({
    url: LOG_OUT_URL,
    type: 'post'
  })
}

// 更新admin账号信息
export const MODIFY_PSD_URL = '/admin/update/password'
export const modifyPsdApi = (data) => {
  return fetchApi({
    url: MODIFY_PSD_URL,
    type: 'post',
    params: data
  })
}
