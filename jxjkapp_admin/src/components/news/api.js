import { fetchApi } from '@/utils/index'

// 获取新闻列表
export const GET_LIST_URL = '/news/list'
export const getListApi = (params) => {
  return fetchApi({
    url: GET_LIST_URL,
    type: 'get',
    params
  })
}

// 修改新闻
export const MODIFY_NEWS_URL = '/news/update'
export const modifyNewsApi = (data) => {
  return fetchApi({
    url: MODIFY_NEWS_URL,
    type: 'post',
    data
  })
}

// 增加新闻
export const ADD_NEWS_URL = '/news/create'
export const addNewsApi = (data) => {
  return fetchApi({
    url: ADD_NEWS_URL,
    type: 'post',
    data
  })
}

// 删除news (批量)
export const DELETE_NEWS_URL = '/news/delete'
export const deleteNewsApi = (data) => {
  return fetchApi({
    url: DELETE_NEWS_URL,
    type: 'post',
    data
  })
}

// 切换banner状态
export const SWITCH_VISIBLE_URL = '/news/update'
export const switchVisibleApi = (data) => {
  console.log(data)
  return fetchApi({
    url: SWITCH_VISIBLE_URL,
    type: 'post',
    data
  })
}

