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

const formInitData = {
  name: '',
  typeId: '',
  description: '',
  cover: '',
  showPrice: '',
  salePrice: '',
  areaId: ''
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
    return {
      form: {
        ...formInitData
      },
      ...initData
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
    },
    productTypeList () { // 分类列表
      return this.$_getters.productTypeList || []
    },
    hospAreaList () { // 院区列表
      return this.$_getters.hospAreaList || []
    }
  },
  watch: {
    data (val) {
      if (val) {
        Object.assign(this.form, this.data)
      } else {
        this.form = Object.assign({}, formInitData)
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
    // 提交
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
    // 关闭弹框
    handleClose () { // 清空数据
      fileObj = ''
      Object.keys(initData).forEach(key => {
        this[key] = initData[key]
      })
      this.$refs.ruleForm.resetFields()
      this.form = Object.assign({}, formInitData)
      this.$refs.imgUploader.clearFileInput()
    },
    // 监听文件变化
    handleFileChange (newFile) {
      fileObj = newFile
    },
    validNum (rule, value, cb) {
      if (Number.isNaN(+value)) {
        cb(new Error('请输入数字'))
      } else {
        cb()
      }
    }
  }
}
</script>

<template>
  <div class="edit-dialog">
    <el-dialog
      class="dialog--center"
      :title="`${data ? '修改' : '新增'}项目`"
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
        </el-row>
        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item
              label="分类"
              prop="typeId"
              :rules="[
                { require: true, message: '请选择分类', trigger: 'blur' }
              ]">
              <el-select v-model="form.typeId" placeholder="请选择">
                <el-option
                  v-for="item in productTypeList"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value + ''">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item class="doctor-hospArea" label="院区：">
              <el-select v-model="form.areaId" placeholder="选择院区">
                <el-option
                  v-for="item in hospAreaList"
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
              label="显示价格"
              prop="showPrice"
              class="banner-name"
              required
              :rules="[
                { required: true, message: '显示价格不能为空'},
                { validator: validNum, trigger: 'change, blur'}
              ]">
              <el-input v-model="form.showPrice" auto-complete="off"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item
              label="售卖价格"
              prop="salePrice"
              class="banner-name"
              required
              :rules="[
                { required: true, message: '售卖价格不能为空'},
                { validator: validNum, trigger: 'change, blur'}
              ]">
              <el-input v-model="form.salePrice" auto-complete="off"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item
          label="描述"
          prop="description"
          required
          :rules="[
            { required: true, message: '描述不能为空'}
          ]">
          <!-- <rich-text 
            v-model="form.describe"
            upload-img-server="/upload">
          </rich-text> -->
          <el-input 
            type="textarea" 
            class="description-textarea"
            v-model="form.description"/>
        </el-form-item>
        <el-form-item
          label="商品类型图片"
          required>
          <img-uploader
            ref="imgUploader"
            :img-src="form.cover"
            @file-change="handleFileChange" />
        </el-form-item>
        <!-- <el-form-item
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
        </el-form-item> -->
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button
          type="default"
          :disabled="submitLoading"
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

    .description-textarea {
      textarea {
        height: 200px;
      }
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
