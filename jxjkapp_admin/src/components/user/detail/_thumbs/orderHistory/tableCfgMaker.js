import {
  getOrderListApi
} from '../../api'

export default function () {
  return {
    listApi: {
      requestFn: getOrderListApi,
      responseFn (data) {
        let content = data.content || {}
        this.tableData = (content.list || []).map((item) => {
          const orderProductList = item.orderProductList || {}
          const orderProduct = orderProductList[0] || {}
          return {
            id: item.id,
            orderPayPrice: item.orderPayPrice,
            productName: orderProduct.productSkuName,
            quantity: orderProduct.serviceQuantity,
            usedQuantity: orderProduct.serviceQuantity - orderProduct.remainingServiceNumber,
            payState: item.payState
          }
        })
        this.total = content.total || 0
      }
    },
    tableAttrs: {
      'props': {
        'tooltip-effect': 'dark',
        'style': 'width: 100%',
        'align': 'center'
      }
    },
    columnData: [{
      attrs: {
        'prop': 'id',
        'label': '订单ID',
        'min-width': '100'
      }
    }, {
      attrs: {
        'prop': 'orderPayPrice',
        'label': '订单金额',
        'min-width': '100'
      }
    }, {
      attrs: {
        'prop': 'productName',
        'min-width': '120',
        'label': '项目名称'
      }
    }, {
      attrs: {
        'prop': 'quantity',
        'label': '购买次数',
        'min-width': '160'
      }
    }, {
      attrs: {
        'prop': 'usedQuantity',
        'label': '已用次数',
        'min-width': '160'
      }
    }, {
      attrs: {
        'prop': 'payState',
        'label': '状态',
        'min-width': '160',
        'formatter' (row) {
          const dict = {
            0: '未支付订单',
            1: '已支付订单',
            2: '退款申请中',
            3: '退款完毕'
          }
          const payState = row.payState
          return payState === undefined ? '--' : dict[payState]
        }
      }
    }, {
      attrs: {
        'min-width': '180',
        'label': '操作'
      },
      slotName: 'column-operate'
    }]
  }
}
