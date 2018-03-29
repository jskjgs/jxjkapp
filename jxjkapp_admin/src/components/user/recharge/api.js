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

// 查询用户余额
export const QUERY_BALANCE_URL = '/user/queryBalance'
export const queryBalanceApi = (userId) => {
  console.log('userId', userId)
  return fetchApi({
    url: QUERY_BALANCE_URL,
    type: 'get',
    params: {
      userId
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
