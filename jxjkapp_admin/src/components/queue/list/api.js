import { fetchApi } from '@/utils/index'

// 获取排队列表
export const LIST_URL = '/queue/today'
export const getListApi = (params) => {
  return fetchApi({
    url: LIST_URL,
    type: 'get',
    params
  })
}

// 呼叫下一位
export const CALL_NEXT = '/queue/complete'
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
export const CURRENT_CALL = '/queue/current'
export const getCurrentApi = (params) => {
  return fetchApi({
    url: CURRENT_CALL,
    type: 'get',
    params
  })
}
