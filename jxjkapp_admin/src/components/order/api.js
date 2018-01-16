import { fetchApi } from '@/utils/index'

// 订单管理

// 获取所有订单
export const QUERY_ORDER_URL = '/order/admin/all'
export const queryOrderApi = (data) => {
  return fetchApi({
    url: QUERY_ORDER_URL,
    type: 'post',
    data
  })
}
