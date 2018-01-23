import { fetchApi } from '@/utils/index'

// 获取当前服务记录详情
export const QUERY_SERVICE_URL = '/orderService/admin/query'
export const queryServiceRecordApi = (data) => {
  return fetchApi({
    url: QUERY_SERVICE_URL,
    type: 'post',
    data
  })
}

// 服务作废
export const REJCET_SERVICE_URL = '/orderService/admin/cancellation'
export const rejcetServiceApi = (params) => {
  return fetchApi({
    url: REJCET_SERVICE_URL,
    type: 'post',
    params
  })
}
