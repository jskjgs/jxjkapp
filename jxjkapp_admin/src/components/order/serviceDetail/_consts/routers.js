/*
 * Created by zhengji
 * Date: 2017/7/31
 */
import {
  INDEX as ORDER_INDEX
} from '@/components/order/list/_consts/routers'
import {
  INDEX as RECORD_INDEX
} from '@/components/order/serviceRecord/_consts/routers'

// 当前模块名（路由名前缀）
export const MOUDLE_PREDIX = 'order/serviceDetail'
const MOUDLE_ROOT = `/${MOUDLE_PREDIX}`

// 当前模块首页：模块入口
export const INDEX = {
  path: `${MOUDLE_ROOT}/:orderId/:id`,
  name: `${MOUDLE_PREDIX}_root`,
  meta: {
    label: '服务详情',
    crumbsMaker ($route) {
      return [ORDER_INDEX, RECORD_INDEX]
    }
  }
}
