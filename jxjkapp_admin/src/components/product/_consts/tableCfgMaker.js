import {
  getListApi
} from '../api'

export default function () {
  return {
    listApi: {
      requestFn: getListApi,
      responseFn (data) {
        let content = data.content || {}
        this.tableData = (content.list || []).map((item) => ({
          no: item.sortNumber,
          id: item.id,
          name: item.name,
          cover: item.images,
          type: (item.productType || {}).name,
          typeId: (item.productType || {}).id + '',
          description: item.description
        }))
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
