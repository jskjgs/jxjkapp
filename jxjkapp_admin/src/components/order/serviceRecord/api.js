import { fetchApi } from '@/utils/index'

// 获取当前订单的服务记录列表
export const QUERY_SERVICE_URL = '/orderService/admin/queryByOrderId'
export const queryServiceRecordApi = (params) => {
  return fetchApi({
    url: QUERY_SERVICE_URL,
    type: 'post',
    params
  })
}
