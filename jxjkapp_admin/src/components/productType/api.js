import { fetchApi } from '@/utils/index'

// 获取服务分类列表
export const GET_LIST_URL = '/category/list'
export const getListApi = (params) => {
  return fetchApi({
    url: GET_LIST_URL,
    type: 'get',
    params
  })
}

// 添加分类
export const CREATE_TYPE_URL = '/category/create'
export const createTypeApi = (data) => {
  return fetchApi({
    url: CREATE_TYPE_URL,
    type: 'post',
    data
  })
}

// 更新分类
export const UPDATE_TYPE_URL = '/category/update'
export const updateTypeApi = (data) => {
  return fetchApi({
    url: UPDATE_TYPE_URL,
    type: 'post',
    data
  })
}

// 删除分类
export const DEL_TYPE_URL = '/category/delete'
export const delTypeApi = (data) => {
  return fetchApi({
    url: DEL_TYPE_URL,
    type: 'post',
    data
  })
}
