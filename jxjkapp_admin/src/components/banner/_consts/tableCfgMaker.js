import {
  getListApi
} from '../api'

export default function () {
  return {
    listApi: {
      requestFn: getListApi,
      responseFn (data) {
        let content = data.content || {}
        this.tableData = (content.records || []).map((item) => ({
          no: item.sort,
          id: item.id,
          name: item.name,
          cover: item.imageUrl,
          bannerUrl: item.bannerUrl,
          visible: !item.isDisplay  // display: 0表示显示 1表示隐藏
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
        'width': '80'
      }
    }, {
      attrs: {
        'prop': 'name',
        'label': '名称',
        'min-width': '140',
        'show-overflow-tooltip': true
      }
    }, {
      attrs: {
        'prop': 'cover',
        'label': '封面图'
      },
      slotName: 'column-cover'
    }, /* {
      attrs: {
        'prop': 'bannerUrl',
        'min-width': '120',
        'label': '跳转链接'
      },
      slotName: 'column-bannerUrl'
    }, */ {
      attrs: {
        'label': '操作'
      },
      slotName: 'column-operate'
    }]
  }
}
