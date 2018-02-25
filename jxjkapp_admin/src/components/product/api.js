import { fetchApi } from '@/utils/index'

// 获取商品列表
export const GET_LIST_URL = '/product/list'
export const getListApi = (params) => {
  return fetchApi({
    url: GET_LIST_URL,
    type: 'get',
    params
  })
}

// 修改商品信息
export const UPDATE_PRODUCT_URL = '/product/update'
export const updateProductApi = (data) => {
  return fetchApi({
    url: UPDATE_PRODUCT_URL,
    type: 'post',
    data
  })
}

// 新增商品信息
export const CREATE_PRODUCT_URL = '/product/create'
export const createProductApi = (data) => {
  return fetchApi({
    url: CREATE_PRODUCT_URL,
    type: 'post',
    data
  })
}

// 删除商品
export const DEL_PRODUCT_URL = '/product/delete'
export const delProductApi = (data) => {
  return fetchApi({
    url: DEL_PRODUCT_URL,
    type: 'post',
    data
  })
}
