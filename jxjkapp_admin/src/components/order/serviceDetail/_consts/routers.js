/*
 * Created by zhengji
 * Date: 2017/7/31
 */
// 当前模块名（路由名前缀）
export const MOUDLE_PREDIX = 'order/serviceDetail'
const MOUDLE_ROOT = `/${MOUDLE_PREDIX}`

// 当前模块首页：模块入口
export const INDEX = {
  path: `${MOUDLE_ROOT}/:id`,
  name: `${MOUDLE_PREDIX}_root`,
  meta: {
    permissionId: 'm_01',
    label: '服务详情'
  }
}
