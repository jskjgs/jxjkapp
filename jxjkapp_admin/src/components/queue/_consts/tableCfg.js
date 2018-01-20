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
        'prop': 'queueNum',
        'label': '排队号',
        'min-width': '100'
      }
    }, {
      attrs: {
        'prop': 'type',
        'label': '状态',
        'min-width': '160'
      }
    }, {
      attrs: {
        'prop': 'userName',
        'label': '用户姓名',
        'min-width': '160'
      }
    }, {
      attrs: {
        'prop': 'type',
        'label': '手机号',
        'min-width': '160'
      }
    }, {
      attrs: {
        'prop': 'type',
        'label': '状态',
        'min-width': '160'
      }
    }, {
      attrs: {
        'prop': 'type',
        'label': '备注',
        'min-width': '160'
      }
    }, {
      attrs: {
        'min-width': '140',
        'label': '操作'
      },
      scopedSlots: {
        default: (scope) => {
          const h = this.$createElement
          console.log(h)
          return (
            <div class="flex--center operations">
              <el-button
                  type="text"
                  class="operate-item"
                  onClick={() => this.skipQueue(scope.row)}>
                  插队
              </el-button>
            </div>
          )
        }
      }
    }]
  }
}
