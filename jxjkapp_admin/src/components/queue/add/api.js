import { fetchApi } from '@/utils/index'

// 订单管理

// 查询用户信息
export const QUERY_USER_URL = '/order/admin/all'
export const getUserInfoApi = (data) => {
  return fetchApi({
    url: QUERY_USER_URL,
    type: 'post',
    data
  })
}

// 查询用户订单信息
export const QUERY_ORDER_URL = '/order/admin/all'
export const getUserOrdersApi = (data) => {
  return fetchApi({
    url: QUERY_ORDER_URL,
    type: 'post',
    data
  })
}
