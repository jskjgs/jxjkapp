import { fetchApi } from '@/utils/index'

// 获取院区列表
export const GET_HOSPAREA_URL = '/area/list'
export const getHospAreaApi = (params) => {
  return fetchApi({
    url: GET_HOSPAREA_URL,
    type: 'get',
    params
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
export const GET_PRODUCT_TYPE_URL = '/category/list'
export const getProductTypeApi = (params) => {
  return fetchApi({
    url: GET_PRODUCT_TYPE_URL,
    type: 'get',
    params
  })
}

// 获取商品列表
export const GET_PRODUCT_URL = '/product/list'
export const getProductListApi = (params) => {
  return fetchApi({
    url: GET_PRODUCT_URL,
    type: 'get',
    params
  })
}
