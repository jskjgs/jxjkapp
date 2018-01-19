import {
  getListApi
} from '../api'
import {
  convertDate
} from '@/utils/index'

export default function () {
  return {
    listApi: {
      requestFn: getListApi,
      responseFn (data) {
        let content = data.content || {}
        this.tableData = (content.list || []).map((item) => ({
          id: item.id,
          title: item.title, // 标题
          cover: item.images, // 封面图
          createDate: item.createDate, // 创建日期
          sortNumber: item.sortNumber,
          content: item.content
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
        'prop': 'title',
        'label': '新闻标题',
        'min-width': '140',
        'show-overflow-tooltip': true
      }
    }, {
      attrs: {
        'prop': 'cover',
        'min-width': '120',
        'label': '封面图'
      },
      slotName: 'column-cover'
    }, {
      attrs: {
        'prop': 'createDate',
        'label': '创建时间',
        'min-width': '160',
        'show-overflow-tooltip': true,
        'formatter' (row, col) {
          return convertDate(row.createDate) || '--'
        }
      }
    }, {
      attrs: {
        'prop': 'jumpUrl',
        'min-width': '120',
        'label': '新闻链接'
      },
      slotName: 'column-jumpUrl'
    }, {
      attrs: {
        'min-width': '200',
        'label': '操作'
      },
      slotName: 'column-operate'
    }]
  }
}
