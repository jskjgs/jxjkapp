<script>
/*
 * Created by zhengji
 * Date: 2017/8/30
 */
let fileObj = ''
let initData = {
  submitLoading: false,
  fileInputValid: true, // 上传的文件有效性
  activePanelIndex: 0 // 当前激活的栏目（banner基本信息 / banner内容）
}

import ImgUploader from '@/components/_common/imgUploader/ImgUploader.vue'
import RichText from '@/components/_common/richText/RichText'

export default {
  name: 'EditDialog',
  props: {
    value: {
      type: Boolean
    },
    data: {
      type: Object
    }
  },
  components: {
    ImgUploader,
    RichText
  },
  data () {
    return Object.assign({}, {
      form: {
        name: '',
        no: '',
        type: []
      },
      typeOptions: [{
        label: '类型1',
        value: 1
      }, {
        label: '类型2',
        value: 2
      }]
    }, initData)
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
          // 验证上传图片
          let checkFileExist = this.$refs.imgUploader.checkFileExist(fileObj)
          if (valid) {
            checkFileExist.then(resolve).catch(reject)
          } else {
            reject()
          }
        })
      })
    },
    handleSubmit () {
      this.$refs.ruleForm.validate((valid) => {
        let checkFileExist = this.$refs.imgUploader.checkFileExist(fileObj)
        if (valid) {
          checkFileExist.then(() => {
            this.submitLoading = true
            this.$emit('submit', Object.assign({}, this.form, {
              file: fileObj
            }), (success) => {
              this.submitLoading = false
              if (success) {
                this.visible = false
              }
            })
          })
        }
      })
    },
    handleClose () { // 清空数据
      fileObj = ''
      Object.keys(initData).forEach(key => {
        this[key] = initData[key]
      })
      this.$refs.ruleForm.resetFields()
      this.form = {
        name: '',
        no: '',
        type: []
      }
      this.$refs.imgUploader.clearFileInput()
    },
    handleFileChange (newFile) {
      fileObj = newFile
    },
    // 下一步
    toNext () {
      // this.validForm().then(() => {
      //   this.activePanelIndex = 1
      // })
      this.activePanelIndex = 1
    }
  }
}
</script>

<template>
  <div class="edit-dialog">
    <el-dialog
      class="dialog--center"
      :title="`${data ? '修改' : '新增'}商品类型`"
      :visible.sync="visible"
      @close="handleClose">
      <el-form
        ref="ruleForm"
        :model="form"
        label-position="top">
        <el-row :gutter="20">
          <el-col :span="16">
            <el-form-item
              label="项目名称"
              prop="name"
              class="banner-name"
              required
              :rules="[
                { required: true, message: '名称不能为空'},
                { pattern: /^\s*\S{0,30}$/, message: '字体长度不能大于30', trigger: 'change, blur'}
              ]">
              <el-input v-model="form.name" auto-complete="off"></el-input>
              <span class="text-length">{{ form.name ? form.name.length : 0 }}/30</span>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item
              label="分类名称"
              prop="type"
              :rules="[
                { required: true, message: '请选择类型', trigger: 'blur' }
              ]">
              <el-select v-model="form.type" multiple placeholder="请选择">
                <el-option
                  v-for="item in typeOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item
          label="描述"
          prop="describe"
          required
          :rules="[
            { required: true, message: '描述不能为空'},
            { pattern: /^\s*.{0,30}\s*$/, message: '字数不能超30', trigger: 'blur'}
          ]">
          <rich-text 
            v-model="form.describe"
            upload-img-server="/upload">
          </rich-text>
        </el-form-item>
        <el-form-item
          label="商品类型图片"
          required>
          <img-uploader
            ref="imgUploader"
            :img-src="form.cover"
            @file-change="handleFileChange"></img-uploader>
        </el-form-item>
        <el-form-item
          label="价格设置">
          <el-row :gutter="20">
            <el-col :span="8">
              <el-form-item>
                价格：<el-input style="width: calc(100% - 60px);" v-model="form.name" auto-complete="off"/>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item>
                名称：<el-input style="width: calc(100% - 60px);" v-model="form.name1" auto-complete="off"/>
              </el-form-item>
            </el-col>
            <el-col :span="2">
              <i class="el-icon-plus plus-btn"></i>
            </el-col>
          </el-row>
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
          提交
        </el-button>
      </div>
    </el-dialog>
  </div>
</template>

<style lang="scss">
  @import "~@/assets/style/variables/index";
  .edit-dialog {
    .el-dialog {
      min-width: 720px;
    }

    .upload-box {
      position: relative;
      border: 1px dashed #c0ccda;
      width: 118px;
      height: 118px;
      overflow: hidden;
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;

      &.miss-file {
        border-color: #ff4949;
      }

      .el-icon-plus {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        font-size: 18px;
        color: $color1;
      }

      .el-icon-close {
        position: absolute;
        top: 5px;
        right: 5px;
        color: #b2b2b2;
        cursor: pointer;
      }
    }
    .upload-input {
      position: absolute;
      opacity: 0;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      cursor: pointer;
    }
    .upload-notice {
      line-height: 1.4;
      color: $color5;
      & + .upload-notice {
        margin-top: 5px;
      }
    }

    .banner-name {
      .el-input__inner {
        padding-right: 50px;
      }
    }

    .plus-btn {
      cursor: pointer;
      border-radius: 50%;
      border: 2px solid #b2b2b2;
      color: #b2b2b2;
    }
  }
</style>
