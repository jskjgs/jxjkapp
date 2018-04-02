import {
  INDEX
} from './_consts/routers'

export default [{
  ...INDEX,
  component: resolve => require(['./Index'], resolve)
}]

