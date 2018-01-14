<script>
export default {
  name: 'ReserveTimeDialog',
  props: {
    value: {
      type: Boolean
    },
    data: {
      type: Object
    }
  },
  components: {
  },
  data () {
    return {
      submitLoading: false,
      hospitals: [],
      form: {
        hospitalId: ''
      }
    }
  },
  computed: {
    visible: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  },
  watch: {
    data (val) {
      if (val) {
        Object.assign(this.form, this.data)
      }
    }
  },
  methods: {
    handleCancel () {
      this.visible = false
      this.$emit('cancel')
    },
    // 验证基本信息表单
    validForm () {
      return new Promise((resolve, reject) => {
        this.$refs.ruleForm.validate((valid) => {
        })
      })
    },
    handleSubmit () {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
        }
      })
    },
    handleClose () { // 清空数据
    }
  }
}
</script>

<template>
  <div class="reserve-time-dialog">
    <el-dialog
      class="dialog--center"
      title="预约时间"
      :visible.sync="visible"
      @close="handleClose">
      <el-form
        ref="ruleForm"
        :model="form"
        label-position="left"
        label-width="80px">
        <el-form-item
          label="选择院区"
          prop="hospital"
          required
          :rules="[
            { required: true, message: '请选择院区'}
          ]">
          <el-select 
            style="width: 250px;"
            v-model="form.hospitalId" 
            placeholder="选择院区">
            <el-option
              v-for="item in hospitals"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button
          type="default"
          :disabled="submitLoading"
          v-loading="submitLoading"
          @click="visible = false">
          取消
        </el-button>
        <el-button
          type="primary"
          :disabled="submitLoading"
          v-loading="submitLoading"
          @click="handleSubmit">
          保存
        </el-button>
      </div>
    </el-dialog>
  </div>
</template>

<style lang="scss">
  @import "~@/assets/style/variables/index";
  .reserve-time-dialog {
  }
</style>
