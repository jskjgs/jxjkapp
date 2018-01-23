import { fetchApi } from '@/utils/index'

// 获取院区列表
export const GET_HOSPAREA_URL = '/hospArea/admin/all'
export const getHospAreaApi = (data) => {
  return fetchApi({
    url: GET_HOSPAREA_URL,
    type: 'post',
    data
  })
}

// 查询院区列表
export const QUERY_HOSPAREA_URL = '/hospArea/admin/query'
export const queryHospAreaApi = (data) => {
  return fetchApi({
    url: QUERY_HOSPAREA_URL,
    type: 'post',
    data
  })
}

// 获取服务分类
export const GET_PRODUCT_TYPE_URL = '/productType/admin/all'
export const getProductTypeApi = (data) => {
  return fetchApi({
    url: GET_PRODUCT_TYPE_URL,
    type: 'post',
    data
  })
}
