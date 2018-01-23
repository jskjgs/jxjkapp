import { fetchApi } from '@/utils/index'

// 获取服务分类列表
export const GET_LIST_URL = '/productType/admin/query'
export const getListApi = (data) => {
  return fetchApi({
    url: GET_LIST_URL,
    type: 'post',
    data
  })
}

// 添加分类
export const CREATE_TYPE_URL = '/productType/'
export const createTypeApi = (data) => {
  return fetchApi({
    url: CREATE_TYPE_URL,
    type: 'post',
    data
  })
}

// 更新分类
export const UPDATE_TYPE_URL = '/productType/'
export const updateTypeApi = (data) => {
  return fetchApi({
    url: UPDATE_TYPE_URL,
    type: 'put',
    data
  })
}

// 删除分类
export const DEL_TYPE_URL = '/productType/'
export const delTypeApi = (id) => {
  return fetchApi({
    url: DEL_TYPE_URL,
    type: 'delete',
    params: {
      id
    }
  })
}
