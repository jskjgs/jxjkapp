import { fetchApi } from '@/utils/index'

// 修改roder
export const MODIFY_BANNER_URL = '/home/modifyBanner'
export const modifyOrderApi = (params, data) => {
  return fetchApi({
    url: MODIFY_BANNER_URL,
    type: 'post',
    params,
    data
  })
}

// 增加order
export const ADD_BANNER_URL = '/banner/'
export const addOrderApi = (data) => {
  return fetchApi({
    url: ADD_BANNER_URL,
    type: 'post',
    data
  })
}
