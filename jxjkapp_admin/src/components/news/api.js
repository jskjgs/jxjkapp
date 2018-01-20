import { fetchApi } from '@/utils/index'

// 获取banner列表
export const GET_LIST_URL = '/news/admin/query'
export const getListApi = (data) => {
  return fetchApi({
    url: GET_LIST_URL,
    type: 'post',
    data
  })
}

// 修改新闻
export const MODIFY_NEWS_URL = '/news/'
export const modifyNewsApi = (data) => {
  return fetchApi({
    url: MODIFY_NEWS_URL,
    type: 'put',
    data
  })
}

// 增加新闻
export const ADD_NEWS_URL = '/news/'
export const addNewsApi = (data) => {
  return fetchApi({
    url: ADD_NEWS_URL,
    type: 'post',
    data
  })
}

// 删除banner (单个)
export const DELETE_BANNER_URL = '/home/deleteBanner'
export const deleteBannerApi = (params) => {
  return fetchApi({
    url: DELETE_BANNER_URL,
    type: 'delete',
    params
  })
}

// 删除banner (批量)
export const DELETE_BANNER_BATCH_URL = '/home/deleteBannerBatch'
export const deleteBannerBatchApi = (params) => {
  return fetchApi({
    url: DELETE_BANNER_BATCH_URL,
    type: 'delete',
    params
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
export const SWITCH_VISIBLE_URL = '/home/hideOrShowBanner'
export const switchVisibleApi = (data) => {
  return fetchApi({
    url: SWITCH_VISIBLE_URL,
    type: 'post',
    data
  })
}
