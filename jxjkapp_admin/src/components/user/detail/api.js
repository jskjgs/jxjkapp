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
export const USER_INFO_URL = '/userInfo/admin/'
export const userInfoApi = (params) => {
  return fetchApi({
    url: USER_INFO_URL,
    type: 'get',
    params
  })
}

// 更新个人信息
export const UPDATE_INFO_URL = '/userInfo/'
export const updateInfoApi = (data) => {
  return fetchApi({
    url: UPDATE_INFO_URL,
    type: 'put',
    data
  })
}

// 更新用户vip信息
export const UPDATE_VIP_URL = '/userInfo/vip'
export const updateVipApi = (id) => {
  return fetchApi({
    url: UPDATE_VIP_URL,
    type: 'put',
    params: {
      id
    }
  })
}
