import { INDEX as USER_INDEX } from '@/components/user/list/_consts/routers'
// 当前模块名（路由名前缀）
export const MOUDLE_PREDIX = 'user/recharge'
const MOUDLE_ROOT = `/${MOUDLE_PREDIX}`

// 当前模块首页：模块入口
export const INDEX = {
  path: `${MOUDLE_ROOT}/:id`,
  name: `${MOUDLE_PREDIX}_root`,
  meta: {
    label: '充值记录',
    crumbsMaker ($route) {
      return [USER_INDEX]
    }
  }
}
