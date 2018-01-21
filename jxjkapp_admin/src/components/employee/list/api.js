import { fetchApi } from '@/utils/index'

// 获取医生列表
export const GET_LIST_URL = '/doctorInfo/admin/all'
export const getListApi = (data) => {
  return fetchApi({
    url: GET_LIST_URL,
    type: 'post',
    data
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
