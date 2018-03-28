import { fetchApi } from '@/utils/index'

// 添加排队

// 查询用户信息
export const QUERY_USER_URL = '/user/list'
export const getUserInfoApi = (params) => {
  return fetchApi({
    url: QUERY_USER_URL,
    type: 'get',
    params
  })
}

// 添加排队
export const ADD_QUEUE_URL = '/queue/add'
export const addToQueueApi = (data) => {
  return fetchApi({
    url: ADD_QUEUE_URL,
    type: 'post',
    data
  })
}

// 查询用户订单信息
export const QUERY_ORDER_URL = '/service/list'
export const getServiceListApi = (params) => {
  return fetchApi({
    url: QUERY_ORDER_URL,
    type: 'get',
    params
  })
}
