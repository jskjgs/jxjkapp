import { fetchApi } from '@/utils/index'

// 获取用户列表
export const GET_LIST_URL = '/user/list'
export const getListApi = (data) => {
  return fetchApi({
    url: GET_LIST_URL,
    type: 'get',
    data
  })
}

// 获取个人信息
export const USER_INFO_URL = '/user/detail'
export const userInfoApi = (params) => {
  return fetchApi({
    url: USER_INFO_URL,
    type: 'get',
    params
  })
}

// 获取关联人列表
export const RELATION_URL = '/patientInfo/queryForAdmin'
export const relationApi = (params) => {
  return fetchApi({
    url: RELATION_URL,
    type: 'get',
    params
  })
}
