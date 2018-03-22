import injectPermissionId from '@/utils/injectPermissionId'
import {
  INDEX
} from './_consts/routers'
// 该模块的权限ID
const permissionId = INDEX.meta.permissionId

export default injectPermissionId([
  {
    ...INDEX,
    component: resolve => require(['./Index'], resolve)
  }
], permissionId)
