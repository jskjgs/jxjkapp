import { fetchApi } from '@/utils/index'

// 获取当前订单的服务记录列表
export const QUERY_SERVICE_URL = '/order/admin/all'
export const queryServiceRecordApi = (data) => {
  return fetchApi({
    url: QUERY_SERVICE_URL,
    type: 'post',
    data
  })
}
