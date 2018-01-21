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
export const delEmployee = (params, data) => {
  return fetchApi({
    url: DELETE_EMPLOYEE_URL,
    type: 'post',
    params,
    data
  })
}
