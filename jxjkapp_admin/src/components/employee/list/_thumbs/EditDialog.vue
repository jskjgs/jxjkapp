<script>
/*
 * Created by zhengji
 * Date: 2017/8/30
 */
const initData = {
  submitLoading: false,
  fileInputValid: true
}

const formInitData = {
  account: '',
  no: '',
  name: '',
  area: '',
  areaId: '',
  phone: '',
  title: '',
  authorId: '',
  sex: '',
  newPsd: ''
}

export default {
  name: 'EditDialog',
  props: {
    value: {
      type: null
    },
    data: {
      type: Object
    }
  },
  data () {
    return {
      hospAreaList: [],
      form: {
        ...formInitData
      },
      submitLoading: false,
      fileInputValid: true
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
  created () {
    this.$_getAreaList().then(list => {
      this.hospAreaList = list
    })
  },
  watch: {
    data (val) {
      if (val) {
        Object.assign(this.form, val)
      } else {
        this.form = {
          ...formInitData
        }
      }
    }
  },
  methods: {
    handleCancel () {
      this.visible = false
      this.$emit('cancel')
    },
    handleSubmit () {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.submitLoading = true
          this.$emit('submit', Object.assign({}, this.form), (success) => {
            this.submitLoading = false
            if (success) {
              this.visible = false
            }
          })
        }
      })
    },
    handleClose () { // 清空数据
      Object.keys(initData).forEach(key => {
        this[key] = initData[key]
      })
      this.$refs.ruleForm.resetFields()
      this.form = {
        ...formInitData
      }
    }
  }
}
</script>

<template>
  <div class="edit-dialog doctor__edit-dialog">
    <el-dialog
      class="dialog--center"
      :title="`${data ? '编辑' : '新增'}员工`"
      :visible.sync="visible"
      @close="handleClose">
      <el-form
        ref="ruleForm"
        :model="form"
        label-position="top">
        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item
              label="登录账号"
              prop="account"
              required
              :rules="[
                { required: true, message: '登录账号不能为空'}
              ]">
              <el-input
                v-model="form.account"
                auto-complete="off">
              </el-input>
            </el-form-item>
          </el-col>
          <el-col 
            :span="8"
            v-if="data">
            <el-form-item
              label="新密码"
              prop="newPsd">
              <el-input
                type="password"
                v-model="form.newPsd"
                auto-complete="off">
              </el-input>
            </el-form-item>
          </el-col>
          <el-col 
            :span="8"
            v-else>
            <el-form-item
              label="新密码"
              prop="password"
              required
              :rules="[
                { required: true, message: '密码不能为空'}
              ]">
              <el-input
                type="password"
                v-model="form.password"
                auto-complete="off">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item
              label="员工姓名"
              prop="name"
              required
              :rules="[
                { required: true, message: '员工姓名不能为空'}
              ]">
              <el-input
                v-model="form.name"
                auto-complete="off">
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item
              label="性别"
              prop="sex"
              required
              :rules="[
                { required: true, message: '性别不能为空'}
              ]">
              <el-select v-model="form.sex" placeholder="选择性别">
                <el-option
                  v-for="item in [{label: '女', value: 0}, {label: '男', value: 1}]"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item
              label="职位"
              prop="title"
              :rules="[
                { required: true, message: '职位不能为空'}
              ]">
              <el-input
                v-model="form.title"
                auto-complete="off">
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item
              label="权限"
              prop="authorId"
              :rules="[
                { required: true, message: '权限不能为空'}
              ]">
              <el-select v-model="form.authorId" placeholder="选择权限">
                <el-option
                  v-for="item in [{label: '医生', value: 0}, {label: '主管', value: 1}, {label: '集团领导', value: 2}, {label: '超级管理员', value: 3}]"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button
          @click="handleCancel"
          :disabled="submitLoading">
          取 消
        </el-button>
        <el-button
          type="primary"
          :disabled="submitLoading"
          v-loading="submitLoading"
          @click="handleSubmit">
          确 定
        </el-button>
      </div>
    </el-dialog>
  </div>
</template>

<style lang="scss">
  @import "~@/assets/style/variables/index";
  .doctor__edit-dialog {
    .doctor-name {
      .el-form-item__label {
        text-align: left;
        float: left;
        padding: 11px 12px 11px 0;
      }
      .el-form-item__content {
        color: $color5;
      }
    }

    .banner-name {
      .el-input__inner {
        padding-right: 50px;
      }
    }
  }
</style>
