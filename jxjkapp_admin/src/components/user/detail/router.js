import {
  INDEX,
  ORDER_ADD,
  ORDER_DETAIL,
  ORDER_RECORD,
  ORDER_RECORD_DETAIL
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
},
{
  ...ORDER_RECORD_DETAIL,
  component: resolve => require(['./_thumbs/orderHistory/RecordDetail'], resolve)
}]
