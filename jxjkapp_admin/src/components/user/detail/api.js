import { fetchApi } from '@/utils/index'

// 获取就诊人列表
export const GET_PATIENTS_URL = '/patient/list'
export const getPaientsApi = (userId) => {
  return fetchApi({
    url: GET_PATIENTS_URL,
    type: 'get',
    params: {
      userId
    }
  })
}

// 获取就诊人信息
export const GET_PATIENT_INFO_URL = '/patient/detail'
export const getPaientInfoApi = (id) => {
  return fetchApi({
    url: GET_PATIENT_INFO_URL,
    type: 'get',
    params: {
      id
    }
  })
}

// 获取用户订单列表
export const GET_ORDER_LIST_URL = '/order/list'
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

// 充值
export const RECHARGE_LIST_URL = '/userInfo/vip'
export const getRechargeListApi = (params) => {
  return fetchApi({
    url: RECHARGE_LIST_URL,
    type: 'get',
    params
  })
}
