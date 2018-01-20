import { fetchApi } from '@/utils/index'

// 查询当前订单信息
export const GET_ORDER_INFO = '/order/admin/query'
export const getOrderInfoApi = (data) => {
  return fetchApi({
    url: GET_ORDER_INFO,
    type: 'post',
    data
  })
}

// 修改roder
export const MODIFY_BANNER_URL = '/order'
export const modifyOrderApi = (params, data) => {
  return fetchApi({
    url: MODIFY_BANNER_URL,
    type: 'get',
    params,
    data
  })
}

// 增加order
export const ADD_BANNER_URL = '/banner/'
export const addOrderApi = (data) => {
  return fetchApi({
    url: ADD_BANNER_URL,
    type: 'post',
    data
  })
}
