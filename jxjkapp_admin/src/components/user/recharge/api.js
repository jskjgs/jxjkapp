import { fetchApi } from '@/utils/index'

// 获取用户充值记录
export const GET_LIST_URL = '/log/query'
export const getListApi = (data) => {
  return fetchApi({
    url: GET_LIST_URL,
    type: 'post',
    data: {
      module: 'BALANCE_RECHARGE',
      ...data
    }
  })
}

// 充值
export const RECHARGE_URL = '/user/recharge'
export const rechargeApi = (data) => {
  return fetchApi({
    url: RECHARGE_URL,
    type: 'post',
    data
  })
}
