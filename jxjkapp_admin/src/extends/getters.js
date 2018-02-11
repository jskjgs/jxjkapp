import store from '@/store'
import {
  UPDATE_HOSPAREALIST,
  UPDATE_PRODUCT_TYPE_LIST
} from '@/store/global'

// 依赖store的getter的构造方法
const asyncGetterMaker = ({ store = {}, stateKey = '', dispatchFn = '' }) => {
  let fetching = false
  return {
    get () {
      if (!fetching && !store.state[stateKey]) {
        fetching = true
        store.dispatch(dispatchFn).finally(() => {
          fetching = false
        })
      }
      let result = store.state[stateKey]
      if (result && typeof result === 'object') {
        result.update = () => { // 挂载更新数据方法
          return store.dispatch(dispatchFn)
        }
      }
      return result
    }
  }
}

export default Object.defineProperties({}, {
  hospAreaList: asyncGetterMaker({
    store,
    stateKey: 'hospAreaList',
    dispatchFn: UPDATE_HOSPAREALIST
  }),
  productTypeList: asyncGetterMaker({
    store,
    stateKey: 'productTypeList',
    dispatchFn: UPDATE_PRODUCT_TYPE_LIST
  })
})
