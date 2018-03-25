import { fetchApi } from '@/utils/index'

// 获取用户列表
export const GET_LIST_URL = '/user/list'
export const getListApi = (params) => {
  return fetchApi({
    url: GET_LIST_URL,
    type: 'get',
    params
  })
}

// 更改用户信息
export const UPDATE_URL = '/user/update'
export const updateApi = (params) => {
  return fetchApi({
    url: UPDATE_URL,
    type: 'get',
    params
  })
}
