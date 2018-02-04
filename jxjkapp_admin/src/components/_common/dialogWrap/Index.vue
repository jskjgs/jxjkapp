<script>
export default {
  name: 'DialogWrap',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    attrs: {
      type: Object,
      default () {
        return {}
      }
    },
    cancelBtnText: {
      type: String,
      default: ''
    },
    submitBtnText: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
    }
  },
  computed: {
    dialogVisible: {
      get () {
        return this.visible
      },
      set (val) {
        this.$emit('update:visible', val)
      }
    }
  },
  methods: {
    handleUpdateVisible (val) {
      this.dialogVisible = val
    },
    cancel () {
      this.$emit('cancel')
      this.dialogVisible = false
    },
    submit () {
      this.$emit('submit', () => {
        this.dialogVisible = false
      })
    }
  },
  render (h) {
    return (
      <el-dialog
        title="提示"
        visible={this.dialogVisible}
        class="dialog--center"
        {...{on: { 'update:visible': val => this.handleUpdateVisible(val) }}}
        size="tiny"
        {...{props: this.attrs}}>
        { this.$slots.default }
        <span slot="footer" class="dialog-footer">
          <el-button
            onClick={ () => this.cancel() }>
            { this.cancelBtnText || '取 消' }
          </el-button>
          <el-button
            type="primary"
            onClick={ () => this.submit() }>
            { this.submitBtnText || '确 定' }
          </el-button>
        </span>
      </el-dialog>
    )
  }
}
</script>

<style lang="scss">
</style>
