import {
  getListApi
} from '../api'
import { authorFormat } from '@/utils/index'
export default function () {
  return {
    listApi: {
      requestFn: getListApi,
      responseFn (data) {
        let content = data.content || {}
        console.log(content.list)
        this.tableData = (content.list || []).map((item) => {
          const area = item.area || {}
          return {
            id: item.id,
            account: item.account,
            no: item.id,
            name: item.nickname,
            area: area.name,
            areaId: area.id,
            phone: item.phone,
            title: item.title,
            author: authorFormat(item.authorId),
            authorId: item.authorId,
            sex: item.sex
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
        'prop': 'no',
        'label': '员工编号',
        'min-width': '100',
        'show-overflow-tooltip': true
      }
    }, {
      attrs: {
        'prop': 'name',
        'label': '姓名',
        'min-width': '100',
        'show-overflow-tooltip': true
      }
    }, {
      attrs: {
        'prop': 'area',
        'label': '院区',
        'min-width': '100',
        'show-overflow-tooltip': true
      }
    }, {
      attrs: {
        'prop': 'title',
        'label': '职位',
        'min-width': '160',
        'show-overflow-tooltip': true
      }
    }, {
      attrs: {
        'prop': 'sex',
        'label': '性别',
        'min-width': '160',
        'show-overflow-tooltip': true,
        'formatter' (row) {
          return row.sex === 0 ? '女' : '男'
        }
      }
    }, {
      attrs: {
        'prop': 'author',
        'label': '权限',
        'min-width': '160',
        'show-overflow-tooltip': true
      }
    }, {
      attrs: {
        'min-width': '140',
        'label': '操作'
      },
      slotName: 'column-operate'
    }]
  }
}
