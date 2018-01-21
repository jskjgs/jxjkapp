import { fetchApi } from '@/utils/index'

// 获取员工账号信息
export const GET_EMPLOYEE_INFO = '/doctorUser/add'
export const getEmployee = (data) => {
  return fetchApi({
    url: ADD_EMPLOYEE,
    type: 'post',
    data
  })
}

// 新增员工账号
export const ADD_EMPLOYEE = '/admin/add'
export const addEmployee = (data) => {
  return fetchApi({
    url: ADD_EMPLOYEE,
    type: 'post',
    data
  })
}

// 修改医生信息
export const UPDATE_DOCTOR_URL = '/doctor_i/modifyDoctor'
export const updateEmployeeApi = (params, data) => {
  return fetchApi({
    url: UPDATE_DOCTOR_URL,
    type: 'post',
    params,
    data
  })
}

// 修改医生信息
export const HOSPITAL_LIST = '/hospArea/admin/all'
export const getHospList = (params, data) => {
  return fetchApi({
    url: HOSPITAL_LIST,
    type: 'post',
    params,
    data
  })
}
