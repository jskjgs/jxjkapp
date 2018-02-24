import { fetchApi } from '@/utils/index'

// 获取预约列表
export const GET_LIST_URL = '/precontract/list'
export const getListApi = (params) => {
  return fetchApi({
    url: GET_LIST_URL,
    type: 'get',
    params
  })
}

// 删除／取消预约
export const DEL_RESERVE_URL = '/precontract/'
export const delReserveApi = (id) => {
  return fetchApi({
    url: DEL_RESERVE_URL,
    type: 'delete',
    params: {
      id
    }
  })
}

// 新增预约
export const CREATE_RESERVE_URL = '/precontract/'
export const createReserveApi = (data) => {
  return fetchApi({
    url: CREATE_RESERVE_URL,
    type: 'post',
    data
  })
}

// 修改预约信息
export const MODIFY_RESERVE_URL = '/precontract/'
export const modifyReserveApi = (data) => {
  return fetchApi({
    url: MODIFY_RESERVE_URL,
    type: 'put',
    data
  })
}
