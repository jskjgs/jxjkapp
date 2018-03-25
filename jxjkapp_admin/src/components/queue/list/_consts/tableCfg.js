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
        'prop': 'userName',
        'label': '用户姓名',
        'min-width': '160'
      }
    }, {
      attrs: {
        'prop': 'phone',
        'label': '手机号',
        'min-width': '160'
      }
    }, {
      attrs: {
        'prop': 'serviceName',
        'label': '项目名称',
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
                  onClick={() => this.cutQueue(scope.row.id)}>
                  插队
              </el-button>
              <el-button
                  type="text"
                  class="operate-item"
                  onClick={() => this.missQueue(scope.row.id)}>
                  过号
              </el-button>
            </div>
          )
        }
      }
    }]
  }
}
