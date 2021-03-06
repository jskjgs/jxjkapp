import {
  getAccountInfo
} from '@/utils/index'
import {
  getHospAreaApi
} from '@/globalApi'

export const STASH = 'global/stash'
export const CLEAR_STASH = 'global/clear_stash'

export const KEEPALIVE = 'global/keepAlive'
export const CLEAR_KEEPALIVE = 'global/clear_keepAlive'

export const GET_AUTH = 'global/get_auth'

export const UPDATE_ACCOUNTINFO = 'global/update_accountInfo'

export const UPDATE_HOSPAREALIST = 'global/UPDATE_HOSPAREALIST'

export const UPDATE_PRODUCT_TYPE_LIST = 'global/UPDATE_PRODUCT_TYPE_LIST'

export const UPDATE_AREALIST = 'global/UPDATE_AREALIST'
export const UPDATE_AREA = 'global/UPDATE_AREA'

const initAccountInfo = getAccountInfo() || {}
const state = {
  // 暂存的数据
  stash: {
    from: '', // 路由
    data: {
    }
  },
  // 保持状态的组件 (多个之间用','分隔)
  keepAlive: 'no-match',
  accountInfo: initAccountInfo,
  areaList: [],
  pickedArea: {
    id: initAccountInfo.areaId,
    name: initAccountInfo.areaName
  }
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
    state.accountInfo = accountInfo || {}
    state.auth = accountInfo.permissionList || Array.from({length: 8 - 1 + 1}).map((item, index) => `m_0${index + 1}`)
  },
  [UPDATE_AREALIST] (state, areaList) {
    state.areaList = areaList || []
  },
  [UPDATE_AREA] (state, area) {
    state.pickedArea = area || {}
  }
}
const actions = {
  [UPDATE_AREALIST] ({ commit }) {
    return getHospAreaApi({
      current: 1,
      size: 100
    }).then(res => {
      const content = res.content || {}
      const list = content.records || []
      commit(UPDATE_AREALIST, list)
    })
  }
}

export default {
  state,
  mutations,
  actions
}
