<script>
  /*
   * Created by zhengji
   * Date: 2017/10/20
   */
  import {
    getPaientInfoApi
  } from '../api'

  export default {
    name: 'UserDetails',
    props: {
      patientId: null
    },
    components: {
    },
    data () {
      //  分娩情况
      this.laborCases = [{
        label: '单顺',
        value: 0
      }, {
        label: '单剖',
        value: 1
      }, {
        label: '多顺',
        value: 2
      }, {
        label: '多剖',
        value: 3
      }]
      this.genderList = [{
        label: '女',
        value: 0
      }, {
        label: '男',
        value: 1
      }]
      this.userSourceList = [{
        label: '网络推广',
        value: 0
      }, {
        label: '朋友推荐',
        value: 1
      }]

      return {
        basicInfo: {},
        formInfo: {},
        datePickerOptions: {
          disabledDate (time) {
            return time.getTime() >= Date.now() - 8.64e7
          }
        }
      }
    },
    created () {
      if (+this.patientId) {
        this.getPatientInfo()
      }
    },
    watch: {
      patientId (newId) {
        if (+newId) {
          this.getPatientInfo(newId)
        }
      }
    },
    methods: {
      getPatientInfo (id) {
        return getPaientInfoApi(id || this.patientId).then((res) => {
          const content = res.content || {}
          const {phone, sex, patientCard, ...formInfo} = content
          this.basicInfo = {
            phone,
            sex,
            patientCard
          }
          this.formInfo = formInfo
        })
      },
      updateInfo () {
      }
    }
  }
</script>
<template>
  <div id="user-details">
    <div class="block-item">
      <el-row :gutter="20">
        <el-col :span="8">
          <div class="info-item">
            <span class="info-item__label">手机号</span>
            <span class="info-item__content">{{ basicInfo.phone }}</span>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="info-item">
            <span class="info-item__label">性别</span>
            <span class="info-item__content">{{ basicInfo.sex === 0 ? '女' : '男' }}</span>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="8">
          <div class="info-item">
            <span class="info-item__label">就诊卡号</span>
            <span class="info-item__content">{{ basicInfo.patientCard }}</span>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="block-item form-block">
      <el-form 
        :model="formInfo" 
        ref="ruleForm" 
        label-position="left"
        label-width="90px">
        <el-row :gutter="20">
          <el-col :span="10">
            <el-form-item 
              label="联系地址" 
              prop="address">
              <el-input v-model="formInfo.address"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="10">
            <el-form-item 
              label="有无过敏史" 
              prop="allergies">
              <el-input 
                v-model="formInfo.allergies"
                placeholder="没有则不填写"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="10">
            <el-form-item 
              label="有无疾病史" 
              prop="disease">
              <el-input 
                v-model="formInfo.disease"
                placeholder="没有则不填写"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="10">
            <el-form-item 
              label="分娩日期" 
              prop="deliveryDate">
              <el-date-picker
                v-model="formInfo.deliveryDate"
                type="date"
                placeholder="选择日期"
                :picker-options="datePickerOptions">
              </el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="10">
            <el-form-item 
              label="分娩情况" 
              prop="deliveryInfo">
              <div class="flex--vcenter">
                <el-select 
                  class="flex-item"
                  style="margin-right: 20px;"
                  v-model="formInfo.deliveryInfo" 
                  placeholder="请选择">
                  <el-option
                    v-for="item in laborCases"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
                <el-select 
                  class="flex-item"
                  v-model="formInfo.babySex" 
                  placeholder="婴儿性别">
                  <el-option
                    v-for="item in genderList"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="10">
            <el-form-item 
              label="传染病" 
              prop="type">
              <el-input 
                v-model="formInfo.disease"
                placeholder="没有则不填写"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="10">
            <el-form-item 
              label="客户来源" 
              prop="type">
              <el-select 
                class="flex-item"
                v-model="formInfo.userSource" 
                placeholder="请选择">
                <el-option
                  v-for="item in userSourceList"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div class="flex--center">
        <el-button 
          type="primary" 
          style="width: 120px;"
          @click="updateInfo">保存</el-button>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
#user-details {
  .block-item {
    padding-top: 20px;
  }
  .el-row {
    & + .el-row {
      margin-top: 20px;
    }
  }

  .info-item {
    &__label {
      width: 90px;
    }
  }

  .auth-block {
    border: 1px solid #ccc;
    border-width: 1px 0;
    margin-top: 20px;
    height: 60px;

    &.block-item {
      padding-top: 0;
    }
  }

  .form-block {
    margin-top: 20px;
    border-top: 1px solid #ccc;
    .el-row {
      & + .el-row {
        margin-top: 0px;
      }
    }
  }
}
</style>

