/*
 * Created by zhengji
 * Date: 2017/7/31
 */
import {
  INDEX as ORDER_INDEX
} from '@/components/order/list/_consts/routers'

// 当前模块名（路由名前缀）
export const MOUDLE_PREDIX = 'order/add'
const MOUDLE_ROOT = `/${MOUDLE_PREDIX}`

// 当前模块首页：模块入口
export const INDEX = {
  path: MOUDLE_ROOT,
  name: `${MOUDLE_PREDIX}_root`,
  meta: {
    label: '新增订单',
    crumbsMaker ($route) {
      return [ORDER_INDEX]
    }
  }
}
