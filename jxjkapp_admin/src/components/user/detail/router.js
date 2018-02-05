import injectPermissionId from '@/utils/injectPermissionId'
import {
  INDEX,
  ORDER_ADD,
  ORDER_DETAIL,
  ORDER_RECORD
} from './_consts/routers'
// 该模块的权限ID
const permissionId = INDEX.meta.permissionId

export default injectPermissionId([
  {
    ...INDEX,
    component: resolve => require(['./Index'], resolve)
  },
  {
    ...ORDER_ADD,
    component: resolve => require(['./_thumbs/orderHistory/Add'], resolve)
  },
  {
    ...ORDER_DETAIL,
    component: resolve => require(['./_thumbs/orderHistory/Detail'], resolve)
  },
  {
    ...ORDER_RECORD,
    component: resolve => require(['./_thumbs/orderHistory/Record'], resolve)
  }
], permissionId)
