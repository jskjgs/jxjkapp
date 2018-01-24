import { fetchApi } from '@/utils/index'

// 获取用户订单列表
export const GET_ORDER_LIST_URL = '/userInfo/admin/all'
export const getOrderListApi = (data) => {
  return fetchApi({
    url: GET_ORDER_LIST_URL,
    type: 'post',
    data
  })
}

// 获取个人信息
export const USER_INFO_URL = '/account/queryUserDetail'
export const userInfoApi = (accountId) => {
  return fetchApi({
    url: USER_INFO_URL,
    type: 'get',
    params: {
      accountId
    }
  })
}

