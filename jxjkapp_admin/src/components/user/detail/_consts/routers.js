/*
 * Created by zhengji
 * Date: 2017/7/31
 */
import {
  INDEX as USER_INDEX
} from '@/components/user/list/_consts/routers'
// 当前模块名（路由名前缀）
export const MOUDLE_PREDIX = 'user/detail'
const MOUDLE_ROOT = `/${MOUDLE_PREDIX}`

// 当前模块首页：模块入口
export const INDEX = {
  path: `${MOUDLE_ROOT}/:id`,
  name: `${MOUDLE_PREDIX}_root`,
  meta: {
    label: '用户详情',
    crumbsMaker () {
      return [USER_INDEX]
    }
  }
}

// 订单记录：新增订单
export const ORDER_ADD = {
  path: `${MOUDLE_ROOT}/:id/orderAdd`,
  name: `${MOUDLE_PREDIX}_orderAdd`,
  meta: {
    label: '添加订单'
  }
}

// 订单记录：详情
export const ORDER_DETAIL = {
  path: `${MOUDLE_ROOT}/:id/:orderId`,
  name: `${MOUDLE_PREDIX}_orderDetail`,
  meta: {
    label: '订单详情'
  }
}

// 订单记录：记录
export const ORDER_RECORD = {
  path: `${MOUDLE_ROOT}/:id/serviceRecord/:orderId`,
  name: `${MOUDLE_PREDIX}_orderRecord`,
  meta: {
    label: '服务记录'
  }
}
