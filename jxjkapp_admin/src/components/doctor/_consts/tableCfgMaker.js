import {
  getListApi
} from '../api'
export default function () {
  return {
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
        'label': '姓名',
        'min-width': '100'
      }
    }, {
      attrs: {
        'prop': 'avatar',
        'min-width': '120',
        'label': '照片'
      },
      slotName: 'column-avatar'
    }, {
      attrs: {
        'prop': 'hospAreaName',
        'label': '院区',
        'min-width': '160'
      }
    }, {
      attrs: {
        'prop': 'doctorType',
        'label': '类别',
        'min-width': '160'
      }
    }, {
      attrs: {
        'min-width': '180',
        'label': '操作'
      },
      slotName: 'column-operate'
    }],
    listApi: {
      requestFn: getListApi,
      responseFn (data) {
        let content = data.content || {}
        this.tableData = (content.records || []).map((item) => {
          return {
            id: item.id,
            doctorTypeId: (item.doctorType || {}).id,
            doctorType: item.doctorTypeName,
            name: item.name,
            avatar: item.headPortrait,
            areaId: item.hospArea,
            hospAreaName: item.areaName,
            description: item.description
          }
        })
        this.total = content.total || 0
      }
    }
  }
}
