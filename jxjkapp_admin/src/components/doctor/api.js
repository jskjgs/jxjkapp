import { fetchApi } from '@/utils/index'

// 获取医生列表
export const GET_LIST_URL = '/doctorInfo/admin/query'
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

// 删除医生
export const DEL_DOCTOR_URL = '/doctorInfo/'
export const delDoctorApi = (id) => {
  return fetchApi({
    url: DEL_DOCTOR_URL,
    type: 'delete',
    params: {
      id
    }
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

//  查询医生类别
export const GET_DOCTOR_TYPE_LIST_URL = '/doctorType/all'
export const getDoctorTypeListApi = () => {
  return fetchApi({
    url: GET_DOCTOR_TYPE_LIST_URL,
    type: 'post',
    data: {
      pageNum: '1',
      pageSize: 10000
    }
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
