import { fetchApi } from '@/utils/index'

// 获取商品列表
export const GET_LIST_URL = '/product/admin/query'
export const getListApi = (data) => {
  return fetchApi({
    url: GET_LIST_URL,
    type: 'post',
    data
  })
}

// 修改商品信息
export const UPDATE_PRODUCT_URL = '/product/'
export const updateProductApi = (data) => {
  return fetchApi({
    url: UPDATE_PRODUCT_URL,
    type: 'put',
    data
  })
}

// 新增商品信息
export const CREATE_PRODUCT_URL = '/product/'
export const createProductApi = (data) => {
  return fetchApi({
    url: CREATE_PRODUCT_URL,
    type: 'post',
    data
  })
}

// 删除商品
export const DEL_PRODUCT_URL = '/product/'
export const delProductApi = (id) => {
  return fetchApi({
    url: DEL_PRODUCT_URL,
    type: 'delete',
    params: {
      id
    }
  })
}
