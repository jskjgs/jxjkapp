import {
  getListApi
} from '../api'

export default function () {
  return {
    listApi: {
      requestFn: getListApi,
      responseFn (data) {
        let content = data.content || {}
        this.tableData = (content.list || []).map((item) => {
          const productType = item.productType || {}
          const defaultSku = item.defaultSku || {}
          return {
            no: item.sortNumber,
            id: item.id,
            name: defaultSku.name,
            cover: defaultSku.images,
            type: productType.name,
            typeId: productType.id + '',
            description: defaultSku.description,
            showPrice: defaultSku.showPrice,
            salesPrice: defaultSku.salesPrice,
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
        'prop': 'no',
        'label': '排序',
        'min-width': '80'
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
