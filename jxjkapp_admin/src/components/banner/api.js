import { fetchApi } from '@/utils/index'

// 获取banner列表
export const GET_LIST_URL = '/banner/list'
export const getListApi = (params) => {
  return fetchApi({
    url: GET_LIST_URL,
    type: 'get',
    params
  })
}

// 修改banner
export const MODIFY_BANNER_URL = '/banner/update'
export const modifyBannerApi = (data) => {
  return fetchApi({
    url: MODIFY_BANNER_URL,
    type: 'post',
    data
  })
}

// 增加banner
export const ADD_BANNER_URL = '/banner/create'
export const addBanenrApi = (data) => {
  return fetchApi({
    url: ADD_BANNER_URL,
    type: 'post',
    data
  })
}

// 删除banner (单个)
export const DELETE_BANNER_URL = '/banner/delete'
export const deleteBannerApi = (data) => {
  return fetchApi({
    url: DELETE_BANNER_URL,
    type: 'post',
    data
  })
}

// 删除banner (批量)
export const DELETE_BANNER_BATCH_URL = '/banner/'
export const deleteBannerBatchApi = (data) => {
  console.log(data)
  return fetchApi({
    url: DELETE_BANNER_BATCH_URL,
    type: 'post',
    data
  })
}

// 修改展示数量 (未完成)
export const MODIFY_DISPLAY_URL = '/home/deleteBanner'
export const modifyDisplayApi = (data) => {
  return fetchApi({
    url: MODIFY_DISPLAY_URL,
    type: 'post',
    data
  })
}

// 切换banner状态
export const SWITCH_VISIBLE_URL = '/banner/update'
export const switchVisibleApi = (data) => {
  return fetchApi({
    url: SWITCH_VISIBLE_URL,
    type: 'post',
    data
  })
}
