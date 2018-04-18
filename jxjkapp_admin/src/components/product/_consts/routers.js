/*
 * Created by zhengji
 * Date: 2017/7/31
 */
// 当前模块名（路由名前缀）
export const MOUDLE_PREDIX = 'product'
const MOUDLE_ROOT = `/${MOUDLE_PREDIX}`

// 当前模块首页：模块入口
export const INDEX = {
  path: MOUDLE_ROOT,
  name: `${MOUDLE_PREDIX}_root`,
  meta: {
    label: '项目管理'
  }
}

// 折扣规格
export const DISCOUNT = {
  path: `${MOUDLE_ROOT}/discount/:id`,
  name: `${MOUDLE_PREDIX}_discount`,
  meta: {
    label: '规格管理',
    crumbsMaker ($route) {
      return [INDEX]
    }
  }
}
