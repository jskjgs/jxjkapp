import { fetchApi } from '@/utils/index'

// 获取员工列表
export const GET_LIST_URL = '/admin/all'
export const getListApi = (data) => {
  return fetchApi({
    url: GET_LIST_URL,
    type: 'post',
    data
  })
}

// 删除员工账号
export const DELETE_EMPLOYEE_URL = '/admin/setStateAsInvalid'
export const delEmployeeApi = (id) => {
  return fetchApi({
    url: DELETE_EMPLOYEE_URL,
    type: 'delete',
    params: {
      id
    }
  })
}

// 修改员工信息
export const MODIFY_EMPLOYEE_URL = '/admin/update'
export const modifyEmployeeApi = (data) => {
  return fetchApi({
    url: MODIFY_EMPLOYEE_URL,
    type: 'post',
    data
  })
}

// 新增员工
export const CREATE_EMPLOYEE_URL = '/admin/add'
export const createEmployeeApi = (data) => {
  return fetchApi({
    url: CREATE_EMPLOYEE_URL,
    type: 'post',
    data
  })
}
