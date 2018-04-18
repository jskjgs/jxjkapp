import {
  getListApi
} from '../api'

export default function () {
  return {
    listApi: {
      requestFn: getListApi,
      responseFn (data) {
        let content = data.content || {}
        this.tableData = (content.records || []).map((item) => {
          return {
            id: item.id,
            productId: item.productId,
            name: item.name,
            cover: item.images,
            type: item.categoryName,
            typeId: item.categoryId + '',
            description: item.description,
            showPrice: item.showPrice,
            salesPrice: item.salesPrice,
            areaId: item.areaId
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
        'prop': 'name',
        'label': '规格名称',
        'min-width': '140',
        'show-overflow-tooltip': true
      }
    }, {
      attrs: {
        'prop': 'discount',
        'min-width': '120',
        'label': '折扣'
      }
    }, {
      attrs: {
        'prop': 'type',
        'min-width': '120',
        'label': '折后单价'
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
