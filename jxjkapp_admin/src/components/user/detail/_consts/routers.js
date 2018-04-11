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
  path: `${MOUDLE_ROOT}/:id/:patientId?`,
  name: `${MOUDLE_PREDIX}_root`,
  meta: {
    label: '用户详情',
    crumbsMaker () {
      return [USER_INDEX]
    }
  }
}
const indexRouteMaker = ($route) => {
  return {
    ...INDEX,
    query: {
      tab: 'orderHistory'
    },
    params: {
      patientId: $route.params.patientId
    }
  }
}

// 订单记录：新增订单
export const ORDER_ADD = {
  path: `${MOUDLE_ROOT}/:id/:patientId/orderAdd`,
  name: `${MOUDLE_PREDIX}_orderAdd`,
  meta: {
    label: '添加订单',
    crumbsMaker ($route) {
      return [USER_INDEX, indexRouteMaker($route)]
    }
  }
}

// 订单记录：详情
export const ORDER_DETAIL = {
  path: `${MOUDLE_ROOT}/:id/:patientId/:orderId`,
  name: `${MOUDLE_PREDIX}_orderDetail`,
  meta: {
    label: '订单详情',
    crumbsMaker ($route) {
      return [USER_INDEX, indexRouteMaker($route)]
    }
  }
}

// 订单服务记录列表
export const ORDER_RECORD = {
  path: `${MOUDLE_ROOT}/:id/:patientId/serviceRecord/:orderId`,
  name: `${MOUDLE_PREDIX}_orderRecord`,
  meta: {
    label: '服务记录',
    crumbsMaker ($route) {
      return [USER_INDEX, indexRouteMaker($route)]
    }
  }
}

// 服务记录详情
export const ORDER_RECORD_DETAIL = {
  path: `${MOUDLE_ROOT}/:id/:patientId/serviceRecord/:orderId/:recordId`,
  name: `${MOUDLE_PREDIX}_orderRecordDetail`,
  meta: {
    label: '服务详情',
    crumbsMaker ($route) {
      return [USER_INDEX, indexRouteMaker($route), ORDER_RECORD]
    }
  }
}
