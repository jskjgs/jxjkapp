import { fetchApi } from '@/utils/index'

// 获取排队列表
export const LIST_URL = '/call/admin/selectAll'
export const getListApi = (data) => {
  return fetchApi({
    url: LIST_URL,
    type: 'post',
    data
  })
}

// 呼叫下一位
export const CALL_NEXT = '/call/admin/next'
export const callNext = (data) => {
  return fetchApi({
    url: LIST_URL,
    type: 'post',
    data
  })
}

