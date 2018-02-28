import { fetchApi } from '@/utils/index'

// 获取医生列表
export const GET_LIST_URL = '/doctor/list'
export const getListApi = (params) => {
  return fetchApi({
    url: GET_LIST_URL,
    type: 'get',
    params
  })
}

// 修改医生信息
export const MODIFY_DOCTOR_URL = '/doctor/update'
export const modifyDoctorApi = (data) => {
  return fetchApi({
    url: MODIFY_DOCTOR_URL,
    type: 'post',
    data
  })
}

// 删除医生
export const DEL_DOCTOR_URL = '/doctor/delete'
export const delDoctorApi = (data) => {
  return fetchApi({
    url: DEL_DOCTOR_URL,
    type: 'post',
    data
  })
}

// 新增医生信息
export const ADD_DOCTOR_URL = '/doctor/create'
export const addDoctorApi = (data) => {
  return fetchApi({
    url: ADD_DOCTOR_URL,
    type: 'post',
    data
  })
}

//  查询医生类别
export const GET_DOCTOR_TYPE_LIST_URL = '/doctorType/list'
export const getDoctorTypeListApi = () => {
  return fetchApi({
    url: GET_DOCTOR_TYPE_LIST_URL,
    type: 'get',
    params: {
      current: '1',
      size: 10000
    }
  })
}
