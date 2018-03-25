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

// 当前排队号信息
export const CURRENT_CALL = '/queue/current'
export const getCurrentApi = () => {
  return fetchApi({
    url: CURRENT_CALL,
    type: 'get'
  })
}

// 呼叫下一位
export const CALL_NEXT = '/queue/next'
export const callNextApi = (id) => {
  return fetchApi({
    url: CALL_NEXT,
    type: 'post',
    data: {
      id
    }
  })
}

// 过号
export const MISS_QUEUE = '/queue/miss'
export const missQueueApi = (id) => {
  return fetchApi({
    url: MISS_QUEUE,
    type: 'post',
    data: {
      id
    }
  })
}

// 插队
export const CUT_QUEUE = '/queue/setIndex'
export const cutQueueApi = (id, index) => {
  return fetchApi({
    url: CUT_QUEUE,
    type: 'post',
    data: {
      id,
      index
    }
  })
}
