import {
  getListApi
} from '../api'

export default function () {
  return {
    listApi: {
      requestFn: getListApi,
      responseFn (data) {
        const content = data.content || {}
        const list = content.records || []
        this.tableData = list.map(item => {
          return {
            id: item.id,
            categoryId: item.categoryId,
            categoryName: item.categoryName,
            userId: item.userId,
            userName: item.userName,
            areaName: item.areaName,
            productName: item.skuName,
            reserveDate: item.precontractDate,
            phone: item.phone
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
        'prop': 'categoryName',
        'label': '服务分类',
        'min-width': '120'
      }
    }, {
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
        'prop': 'userId',
        'label': '用户ID',
        'min-width': '100'
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
        'min-width': '200',
        'label': '操作'
      },
      slotName: 'column-operate'
    }]
  }
}
