import { fetchApi } from '@/utils/index'

// 获取员工列表
export const GET_LIST_URL = '/employee/list'
export const getListApi = (params) => {
  return fetchApi({
    url: GET_LIST_URL,
    type: 'get',
    params
  })
}

// 删除员工账号
export const DELETE_EMPLOYEE_URL = '/employee/delete'
export const delEmployeeApi = (data) => {
  return fetchApi({
    url: DELETE_EMPLOYEE_URL,
    type: 'post',
    data
  })
}

// 修改员工信息
export const MODIFY_EMPLOYEE_URL = '/employee/update'
export const modifyEmployeeApi = (data) => {
  return fetchApi({
    url: MODIFY_EMPLOYEE_URL,
    type: 'post',
    data
  })
}

// 新增员工
export const CREATE_EMPLOYEE_URL = '/employee/create'
export const createEmployeeApi = (data) => {
  return fetchApi({
    url: CREATE_EMPLOYEE_URL,
    type: 'post',
    data
  })
}
