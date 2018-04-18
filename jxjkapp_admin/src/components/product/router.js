import {
  INDEX,
  DISCOUNT
} from './_consts/routers'

export default [{
  ...INDEX,
  component: require('./Index')
}, {
  ...DISCOUNT,
  component: require('./discount/Index')
}]
