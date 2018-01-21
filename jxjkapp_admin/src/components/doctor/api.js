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
export const MODIFY_DOCTOR_URL = '/doctorInfo/'
export const modifyDoctorApi = (data) => {
  return fetchApi({
    url: MODIFY_DOCTOR_URL,
    type: 'put',
    data
  })
}

// 新增医生信息
export const ADD_DOCTOR_URL = '/doctorInfo/'
export const addDoctorApi = (data) => {
  return fetchApi({
    url: ADD_DOCTOR_URL,
    type: 'post',
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
