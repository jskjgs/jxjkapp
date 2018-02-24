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
