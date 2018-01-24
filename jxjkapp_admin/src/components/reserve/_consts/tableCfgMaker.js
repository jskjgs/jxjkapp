import {
  getListApi
} from '../api'

export default function () {
  return {
    listApi: {
      requestFn: getListApi,
      responseFn (data) {
        const content = data.content || {}
        const list = content.list || []
        this.tableData = list.map(item => {
          const sku = item.sku || {}
          const area = item.area || {}
          const user = item.userInfoVO || item.userInfo || {}
          return {
            areaName: area.name,
            productName: sku.name,
            reserveDate: item.precontractDate,
            userName: user.name,
            phone: user.phone,
            idCard: user.idCard
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
        'prop': 'productName',
        'label': '项目名称',
        'min-width': '120'
      }
    }, {
      attrs: {
        'prop': 'areaName',
        'label': '院区',
        'min-width': '120'
      }
    }, {
      attrs: {
        'prop': 'reserveDate',
        'label': '预约时间',
        'min-width': '180',
        'formatter': (row, col) => {
          return row.reserveDate ? this.$_convertDate(row.reserveDate, 'Y-M-D h:m') : '--'
        }
      }
    }, {
      attrs: {
        'prop': 'userName',
        'label': '用户姓名',
        'min-width': '120'
      }
    }, {
      attrs: {
        'prop': 'phone',
        'label': '手机号',
        'min-width': '120'
      }
    }, {
      attrs: {
        'prop': 'idCard',
        'label': '就诊卡号',
        'min-width': '120'
      }
    }, {
      attrs: {
        'min-width': '200',
        'label': '操作'
      },
      slotName: 'column-operate'
    }]
  }
}
