import { fetchApi } from '@/utils/index'

// 订单管理

// 查询用户信息
export const QUERY_USER_URL = '/userInfo/admin/query'
export const getUserInfoApi = (data) => {
  return fetchApi({
    url: QUERY_USER_URL,
    type: 'post',
    data
  })
}

// 查询用户订单信息
export const QUERY_ORDER_URL = '/call/admin/add'
export const addToQueueApi = (data) => {
  return fetchApi({
    url: QUERY_ORDER_URL,
    type: 'post',
    data
  })
}
