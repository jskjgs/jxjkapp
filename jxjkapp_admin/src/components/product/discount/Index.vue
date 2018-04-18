<script>
import SearchTable from '@/components/_common/searchTable/SearchTable'
import DialogWrap from '@/components/_common/dialogWrap/Index'

import tableCfgMaker from './tableCfgMaker'

export default {
  name: 'Product_Discount',
  components: {
    SearchTable,
    DialogWrap
  },
  data () {
    const tableCfg = tableCfgMaker.call(this)
    this.tableAttrs = tableCfg.tableAttrs
    this.columnData = tableCfg.columnData
    this.listApi = tableCfg.listApi

    return {
      createForm: {},
      apiKeysMap: {},
      createDialogVisible: false
    }
  },
  methods: {
    // 下架
    dropOff (rowData) {
    },
    validateNum (rule, value, cb) {
      if (Number.isNaN(Number(value))) {
        cb(new Error('请填写数字'))
      } else {
        cb()
      }
    },
    validDiscount (rule, value, cb) {
      if (value > 0 && value <= 1) {
        cb()
      } else {
        cb(new Error('折扣范围0~1'))
      }
    },
    handleCreateSubmit () {
      this.$refs.createForm.validate((valid) => {
        if (valid) {
        }
      })
    }
  }
}
</script>

<template>
  <div id="product-discount">
    <div class="clr">
      <el-button 
        class="rt"
        type="primary"
        @click="createDialogVisible = true">新增</el-button>
    </div>
    <search-table
      ref="searchTable"
      :table-attrs="tableAttrs"
      :column-data="columnData"
      :list-api="listApi"
      :api-keys-map="apiKeysMap">
      <el-table-column
        slot="column-operate"
        align="center"
        label="操作"
        width="220">
        <template scope="scope">
          <div class="flex--center operate-items">
            <span
              class="operate-item">
              <el-button 
                type="text" 
                @click="dropOff(scope.row)">
                下架
              </el-button>
            </span>
          </div>     
        </template>
      </el-table-column>
    </search-table>
    <dialog-wrap 
      :visible.sync="createDialogVisible"
      :attrs="{size: 'normal'}"
      submitBtnText="提 交"
      @submit="handleCreateSubmit">
      <el-form
        ref="createForm"
        :model="createForm"
        label-position="top">
        <el-row :gutter="20">
          <el-col :span="16">
            <el-form-item
              label="规格名称"
              prop="name"
              required
              :rules="[
                { required: true, message: '名称不能为空'},
                { pattern: /^\s*\S{0,30}$/, message: '字体长度不能大于30', trigger: 'change, blur'}
              ]">
              <el-input v-model="createForm.name" auto-complete="off"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item
              label="折扣"
              prop="no"
              required
              :rules="[
                { required: true, message: '排序不能为空'},
                { validator: validateNum, trigger: 'change, blur'},
                { validator: validDiscount, trigger: 'change, blur'}
              ]">
              <el-input
                v-model="createForm.no"
                auto-complete="off"
                placeholder="折扣范围0～1">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="16">
            <el-form-item
              label="单价"
              prop="name"
              required
              :rules="[
                { required: true, message: '单价不能为空'},
                { validator: validateNum, trigger: 'change, blur'}
              ]">
              <el-input v-model="createForm.name" auto-complete="off"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item
              label="折后价格"
              prop="no"
              required
              :rules="[
                { required: true, message: '折后价格不能为空'},
                { validator: validateNum, trigger: 'change, blur'}
              ]">
              <el-input
                v-model="createForm.no"
                auto-complete="off">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </dialog-wrap>
  </div>
</template>

<style>
#product-discount {
}
</style>
