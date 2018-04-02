/*
 * Created by max.wang
 * Date: 2018/1/14
 */
import {
  INDEX as QUEUE_INDEX
} from '@/components/queue/list/_consts/routers'
// 当前模块名（路由名前缀）
export const MOUDLE_PREDIX = 'queue/add'
const MOUDLE_ROOT = `/${MOUDLE_PREDIX}`

// 当前模块首页：模块入口
export const INDEX = {
  path: MOUDLE_ROOT,
  name: `${MOUDLE_PREDIX}_root`,
  meta: {
    label: '新增排队',
    crumbsMaker ($route) {
      return [QUEUE_INDEX]
    }
  }
}
