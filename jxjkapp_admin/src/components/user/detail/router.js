import {
  INDEX,
  ORDER_ADD,
  ORDER_DETAIL,
  ORDER_RECORD
} from './_consts/routers'

export default [{
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
}]
