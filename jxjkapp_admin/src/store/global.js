export const STASH = 'global/stash'
export const CLEAR_STASH = 'global/clear_stash'

export const KEEPALIVE = 'global/keepAlive'
export const CLEAR_KEEPALIVE = 'global/clear_keepAlive'

export const GET_AUTH = 'global/get_auth'

export const UPDATE_ACCOUNTINFO = 'global/update_accountInfo'

export const UPDATE_HOSPAREALIST = 'global/UPDATE_HOSPAREALIST'

export const UPDATE_PRODUCT_TYPE_LIST = 'global/UPDATE_PRODUCT_TYPE_LIST'

import {
  getHospAreaApi,
  getProductTypeApi
} from '@/globalApi'

import {
  getAccountInfo
} from '@/utils/index'

const state = {
  // 暂存的数据
  stash: {
    from: '', // 路由
    data: {
    }
  },
  // 保持状态的组件 (多个之间用','分隔)
  keepAlive: 'no-match',
  // todo: 删除`Array.from({length: 8 - 1 + 1}).map((item, index) => `m_0${index + 1}`) &&`
  auth: Array.from({length: 8 - 1 + 1}).map((item, index) => `m_0${index + 1}`),
  accountInfo: getAccountInfo() || {},
  hospAreaList: null, // 院区列表
  productTypeList: null // 服务分类（分类下挂载了商品列表）
}

const mutations = {
  [STASH] (state, payload) {
    state.stash = payload
  },
  [CLEAR_STASH] (state) {
    state.stash = {}
  },
  [KEEPALIVE] (state, componentName) {
    state.keepAlive = componentName
  },
  [CLEAR_KEEPALIVE] (state, componentName) {
    state.keepAlive = 'no-match'
  },
  [GET_AUTH] (state, auth) {
    state.auth = auth
  },
  [UPDATE_ACCOUNTINFO] (state, accountInfo) {
    accountInfo = accountInfo || {}
    state.accountInfo = accountInfo
    state.auth = accountInfo.permissionList || Array.from({length: 8 - 1 + 1}).map((item, index) => `m_0${index + 1}`)
  },
  [UPDATE_HOSPAREALIST] (state, list) {
    state.hospAreaList = list
  },
  [UPDATE_PRODUCT_TYPE_LIST] (state, list) {
    state.productTypeList = list
  }
}
const actions = {
  [UPDATE_HOSPAREALIST] ({commit}) {
    return getHospAreaApi({
      'current': 1,
      'size': 1000
    }).then(res => {
      const content = res.content || {}
      let list = content.records || []
      list = list.map(item => {
        return {
          label: item.name,
          value: item.id
        }
      })
      commit(UPDATE_HOSPAREALIST, list)
    })
  },
  [UPDATE_PRODUCT_TYPE_LIST] ({commit}) {
    return getProductTypeApi({
      'current': 1,
      'size': 1000
    }).then(res => {
      let list = res.content.records || []
      list = list.map(item => {
        return {
          label: item.name,
          value: item.id,
          list: (item.productVO || item.product || []).map(product => {
            return {
              label: product.name,
              value: product.id
            }
          })
        }
      })
      commit(UPDATE_PRODUCT_TYPE_LIST, list)
    })
  }
}

export default {
  state,
  mutations,
  actions
}
