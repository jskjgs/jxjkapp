import { fetchApi } from '@/utils/index'

// 增加order
export const ADD_ORDER_URL = '/order/admin'
export const addOrderApi = (data) => {
  return fetchApi({
    url: ADD_ORDER_URL,
    type: 'post',
    data
  })
}

// 更改order
export const UPDATE_ORDER_URL = '/order/admin'
export const updateOrderApi = (data) => {
  return fetchApi({
    url: UPDATE_ORDER_URL,
    type: 'post',
    data
  })
}

// 计算订单价格
export const ORDER_CHECKOUT = '/order/computePayAmount'
export const orderCheckoutApi = (data) => {
  return fetchApi({
    url: ORDER_CHECKOUT,
    type: 'post',
    data
  })
}

// 查询用户信息
export const PATIENT_INFO = '/userInfo/admin/'
export const getPatientListApi = (params) => {
  return fetchApi({
    url: PATIENT_INFO,
    type: 'get',
    params
  })
}

