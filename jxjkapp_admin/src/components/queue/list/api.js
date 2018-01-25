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
    url: CALL_NEXT,
    type: 'post',
    data
  })
}

// 呼叫下一位
export const JUMP_QUEUE = '/call/admin/put'
export const JumpQueue = (data) => {
  return fetchApi({
    url: JUMP_QUEUE,
    type: 'post',
    data
  })
}

// 获取排队列表
export const CURRENT_CALL = '/call/admin/selecCurrentt'
export const getCurrentApi = (data) => {
  return fetchApi({
    url: CURRENT_CALL,
    type: 'post',
    data
  })
}
