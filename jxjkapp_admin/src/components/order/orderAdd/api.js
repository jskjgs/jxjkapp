import { fetchApi } from '@/utils/index'

// 增加order
export const ADD_ORDER_URL = '/order/create'
export const addOrderApi = (data) => {
  return fetchApi({
    url: ADD_ORDER_URL,
    type: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
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
    headers: {
      'Content-Type': 'application/json'
    },
    data
  })
}

// 查询用户就诊人列表
export const PATIENT_LIST = '/patient/list'
export const getPatientListApi = (params) => {
  return fetchApi({
    url: PATIENT_LIST,
    type: 'get',
    params
  })
}

// 查询就诊人详情
export const PATIENT_INFO = '/patient/detail'
export const getPatientInfoApi = (id) => {
  return fetchApi({
    url: PATIENT_INFO,
    type: 'get',
    params: {
      id
    }
  })
}

