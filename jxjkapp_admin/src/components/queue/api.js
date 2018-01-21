import { fetchApi } from '@/utils/index'

// 获取排队列表
export const LIST_URL = '/call/selectAll'
export const getListApi = (data) => {
  return fetchApi({
    url: LIST_URL,
    type: 'post',
    data
  })
}
