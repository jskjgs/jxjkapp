import { fetchApi } from '@/utils/index'

// 获取排队列表
export const LIST_URL = '/department/queryAllDepartment'
export const getListApi = (params) => {
  return fetchApi({
    url: LIST_URL,
    type: 'get',
    params
  })
}
