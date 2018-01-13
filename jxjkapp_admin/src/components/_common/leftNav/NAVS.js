import {
  INDEX as bannerCfg
} from '@/components/banner/_consts/routers'
import {
  INDEX as doctorTypeCfg
} from '@/components/doctorType/_consts/routers'
import {
  INDEX as doctorCfg
} from '@/components/doctor/_consts/routers'
import {
  INDEX as userCfg
} from '@/components/user/_consts/routers'
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
  INDEX as productSkuCfg
} from '@/components/productSku/_consts/routers'
import {
  INDEX as reserveCfg
} from '@/components/reserve/_consts/routers'

export default [{
  label: '运营管理',
  children: [{
    label: bannerCfg.meta.label,
    path: bannerCfg.path,
    permissionId: bannerCfg.meta.permissionId
  }, {
    label: newsCfg.meta.label,
    path: newsCfg.path,
    permissionId: newsCfg.meta.permissionId
  }, {
    label: doctorCfg.meta.label,
    path: doctorCfg.path,
    permissionId: doctorCfg.meta.permissionId
  }, {
    label: productTypeCfg.meta.label,
    path: productTypeCfg.path,
    permissionId: productTypeCfg.meta.permissionId
  }, {
    label: productCfg.meta.label,
    path: productCfg.path,
    permissionId: productCfg.meta.permissionId
  }]
}, {
  label: reserveCfg.meta.label,
  path: reserveCfg.path,
  permissionId: reserveCfg.meta.permissionId
}, {
  label: doctorTypeCfg.meta.label,
  path: doctorTypeCfg.path,
  permissionId: doctorTypeCfg.meta.permissionId
}, {
  label: userCfg.meta.label,
  path: userCfg.path,
  permissionId: userCfg.meta.permissionId
}, {
  label: productSkuCfg.meta.label,
  path: productSkuCfg.path,
  permissionId: productSkuCfg.meta.permissionId
}]
