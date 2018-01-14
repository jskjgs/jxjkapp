import { fetchApi } from '@/utils/index'

// 订单管理

// 获取所有订单
export const QUERY_ORDER_URL = '/order/admin/all'
export const queryOrderApi = (params) => {
  return fetchApi({
    url: QUERY_ORDER_URL,
    type: 'post',
    params
  })
}

// 修改医生信息
export const MODIFY_DOCTOR_URL = '/doctor_i/modifyDoctor'
export const modifyDoctorApi = (params, data) => {
  return fetchApi({
    url: MODIFY_DOCTOR_URL,
    type: 'post',
    params,
    data
  })
}

// 置顶医生
export const TOP_DOCTOR_URL = '/doctor_i/topDoctor'
export const topDoctorApi = (data) => {
  return fetchApi({
    url: TOP_DOCTOR_URL,
    type: 'post',
    data
  })
}
