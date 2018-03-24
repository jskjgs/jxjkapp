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
      },
      'on': {
        'selection-change': this.handleSelectionChange.bind(this)
      }
    },
    columnData: [{
      attrs: {
        'type': 'selection',
        'width': '90',
        'align': 'left'
      }
    }, {
      attrs: {
        'prop': 'name',
        'label': '项目名称',
        'min-width': '140',
        'show-overflow-tooltip': true
      }
    }, {
      attrs: {
        'prop': 'cover',
        'min-width': '120',
        'label': '展示图片'
      },
      slotName: 'column-cover'
    }, {
      attrs: {
        'prop': 'type',
        'min-width': '120',
        'label': '分类名称'
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
