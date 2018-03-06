import {
  getOrderListApi
} from '../../api'

import {
  convertDate, payStateFormat
} from '@/utils/index'

export default function () {
  return {
    listApi: {
      requestFn: getOrderListApi,
      responseFn (data) {
        let content = data.content || {}
        this.tableData = (content.records || []).map((item) => {
          return {
            id: item.code,
            orderPayPrice: item.price,
            createDate: item.createDate,
            payState: payStateFormat(item.paymentState),
            employeeName: item.employeeName
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
        'prop': 'createDate',
        'min-width': '120',
        'label': '创建时间',
        'formatter' (row, col) {
          return convertDate(row.createDate) || '--'
        }
      }
    }, {
      attrs: {
        'prop': 'employeeName',
        'label': '操作人员',
        'min-width': '160'
      }
    }, {
      attrs: {
        'prop': 'payState',
        'label': '状态',
        'min-width': '160'
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
