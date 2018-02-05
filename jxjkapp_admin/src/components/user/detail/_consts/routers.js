/*
 * Created by zhengji
 * Date: 2017/7/31
 */
// 当前模块名（路由名前缀）
export const MOUDLE_PREDIX = 'user/detail'
const MOUDLE_ROOT = `/${MOUDLE_PREDIX}`

// 当前模块首页：模块入口
export const INDEX = {
  path: `${MOUDLE_ROOT}/:id`,
  name: `${MOUDLE_PREDIX}_root`,
  meta: {
    permissionId: 'm_01',
    label: '用户详情'
  }
}

// 订单记录：新增订单
export const ORDER_ADD = {
  path: `${MOUDLE_ROOT}/:id/orderAdd`,
  name: `${MOUDLE_PREDIX}_orderAdd`,
  meta: {
    permissionId: 'm_01',
    label: '添加订单'
  }
}

// 订单记录：详情
export const ORDER_DETAIL = {
  path: `${MOUDLE_ROOT}/:id/:orderId`,
  name: `${MOUDLE_PREDIX}_orderDetail`,
  meta: {
    permissionId: 'm_01',
    label: '订单详情'
  }
}

// 订单记录：记录
export const ORDER_RECORD = {
  path: `${MOUDLE_ROOT}/:id/serviceRecord/:orderId`,
  name: `${MOUDLE_PREDIX}_orderRecord`,
  meta: {
    permissionId: 'm_01',
    label: '服务记录'
  }
}
