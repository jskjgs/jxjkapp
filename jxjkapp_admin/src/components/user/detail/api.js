import { fetchApi } from '@/utils/index'

// 获取用户订单列表
export const GET_ORDER_LIST_URL = '/order/lis'
export const getOrderListApi = (params) => {
  return fetchApi({
    url: GET_ORDER_LIST_URL,
    type: 'get',
    params
  })
}

// 获取个人信息
export const USER_INFO_URL = '/user/detail'
export const userInfoApi = (params) => {
  return fetchApi({
    url: USER_INFO_URL,
    type: 'get',
    params
  })
}

// 更新个人信息
export const UPDATE_INFO_URL = '/user/update'
export const updateInfoApi = (data) => {
  return fetchApi({
    url: UPDATE_INFO_URL,
    type: 'post',
    data
  })
}

// 更新用户vip信息
export const UPDATE_VIP_URL = '/userInfo/vip'
export const updateVipApi = (id) => {
  return fetchApi({
    url: UPDATE_VIP_URL,
    type: 'post',
    params: {
      id
    }
  })
}

// 充值
export const RECHARGE_URL = '/userInfo/vip'
export const rechargeApi = (amount) => {
  return fetchApi({
    url: RECHARGE_URL,
    type: 'post',
    params: {
      amount
    }
  })
}
