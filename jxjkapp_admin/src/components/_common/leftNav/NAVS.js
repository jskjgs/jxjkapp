import {
  INDEX as bannerCfg
} from '@/components/banner/_consts/routers'
import {
  INDEX as employeeCfg
} from '@/components/employee/list/_consts/routers'
import {
  INDEX as doctorCfg
} from '@/components/doctor/_consts/routers'
import {
  INDEX as userCfg
} from '@/components/user/list/_consts/routers'
import {
  INDEX as newsCfg
} from '@/components/news/_consts/routers'
import {
  INDEX as productTypeCfg
} from '@/components/productType/_consts/routers'
import {
  INDEX as productCfg
} from '@/components/product/_consts/routers'
import {
  INDEX as reserveCfg
} from '@/components/reserve/_consts/routers'
import {
  INDEX as orderCfg
} from '@/components/order/list/_consts/routers'
import {
  INDEX as queueCfg
} from '@/components/queue/list/_consts/routers'

export default [{
  label: '运营管理',
  children: [{
    label: bannerCfg.meta.label,
    path: bannerCfg.path,
    authValidator: bannerCfg.meta.authValidator
  }, {
    label: newsCfg.meta.label,
    path: newsCfg.path,
    authValidator: newsCfg.meta.authValidator
  }, {
    label: doctorCfg.meta.label,
    path: doctorCfg.path,
    authValidator: doctorCfg.meta.authValidator
  }, {
    label: productTypeCfg.meta.label,
    path: productTypeCfg.path,
    authValidator: productTypeCfg.meta.authValidator
  }, {
    label: productCfg.meta.label,
    path: productCfg.path,
    authValidator: productCfg.meta.authValidator
  }]
}, {
  label: orderCfg.meta.label,
  path: orderCfg.path,
  authValidator: orderCfg.meta.authValidator
}, {
  label: reserveCfg.meta.label,
  path: reserveCfg.path,
  authValidator: reserveCfg.meta.authValidator
}, {
  label: queueCfg.meta.label,
  path: queueCfg.path,
  authValidator: queueCfg.meta.authValidator
}, {
  label: employeeCfg.meta.label,
  path: employeeCfg.path,
  authValidator: employeeCfg.meta.authValidator
}, {
  label: userCfg.meta.label,
  path: userCfg.path,
  authValidator: userCfg.meta.authValidator
}]
