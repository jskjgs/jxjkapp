import {
  getListApi
} from '../api'
import { convertDate } from '@/utils/index'

export default function () {
  return {
    listApi: {
      requestFn: getListApi,
      responseFn (data) {
        const content = data.content || {}
        const list = content.records || []
        this.tableData = list.map((item) => {
          const itemContent = JSON.parse(item.content || '{}')
          return {
            id: item.id,
            createDate: item.createDate,
            amount: itemContent.amount,
            remark: item.remark
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
        'prop': 'createDate',
        'label': '充值时间',
        'min-width': '100',
        'formatter' (row) {
          return convertDate(row.createDate, 'Y-M-D h:m') || '--'
        }
      }
    }, {
      attrs: {
        'prop': 'amount',
        'label': '充值金额',
        'min-width': '140',
        'show-overflow-tooltip': true,
        'formatter' (row) {
          return row.amount ? `¥${row.amount}` : '--'
        }
      }
    }, {
      attrs: {
        'prop': 'remark',
        'label': '备注',
        'formatter' (row) {
          return row.remark || '--'
        }
      }
    }]
  }
}
