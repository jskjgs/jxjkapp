<script>
  /*
   * Created by zhengji
   * Date: 2017/10/20
   */
  import {
    userInfoApi,
    updateInfoApi,
    updateVipApi
  } from '../api'

  export default {
    name: 'UserDetails',
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
        userInfo: {},
        patientInfo: {},
        datePickerOptions: {
          disabledDate (time) {
            return time.getTime() >= Date.now() - 8.64e7
          }
        }
      }
    },
    created () {
      this.getUserInfo()
    },
    watch: {
    },
    methods: {
      getUserInfo () {
        const params = this.$route.params
        const id = params.id
        return userInfoApi({
          id
        }).then(res => {
          const content = res.content || {}
          const { patientInfoList, ...userInfo } = content
          this.userInfo = userInfo
          this.patientInfo = (patientInfoList || [])[0] || {}
          if (this.unwatchVip) {
            this.unwatchVip()
          }
          this.unwatchVip = this.$watch('userInfo.isVip', (newVal) => {
            this.updateVipStatus(newVal)
          })
        })
      },
      updateVipStatus (isVip) {
        const params = this.$route.params
        const id = params.id
        return updateVipApi(id).then(res => {
          this.$message({
            type: 'success',
            message: `当前用户改为${isVip === 0 ? '普通用户' : 'VIP用户'}`
          })
        })
      },
      updateInfo () {
        return updateInfoApi({
          ...this.userInfo,
          patientInfoList: [{
            ...this.patientInfo
          }]
        }).then(res => {
          this.$message({
            type: 'success',
            message: '更新成功'
          })
        })
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
            <span class="info-item__label">用户姓名</span>
            <span class="info-item__content">{{ userInfo.name }}</span>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="info-item">
            <span class="info-item__label">手机号</span>
            <span class="info-item__content">{{ userInfo.phone }}</span>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="8">
          <div class="info-item">
            <span class="info-item__label">用户性别</span>
            <span class="info-item__content">{{ userInfo.sex === 0 ? '女' : '男' }}</span>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="info-item">
            <span class="info-item__label">用户ID</span>
            <span class="info-item__content">{{ userInfo.id }}</span>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="8">
          <div class="info-item">
            <span class="info-item__label">就诊卡号</span>
            <span class="info-item__content">{{ patientInfo.patientCard }}</span>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="block-item auth-block flex--vcenter">
      <div class="info-item">
        <span class="info-item__label">权限</span>
        <span class="info-item__content">
          <el-radio class="radio" v-model="userInfo.isVip" :label="0">普通用户</el-radio>
          <el-radio class="radio" v-model="userInfo.isVip" :label="1">VIP</el-radio>
        </span>
      </div>
    </div>
    <div class="block-item form-block">
      <el-form 
        :model="patientInfo" 
        ref="ruleForm" 
        label-position="left"
        label-width="90px">
        <el-row :gutter="20">
          <el-col :span="10">
            <el-form-item 
              label="联系地址" 
              prop="address">
              <el-input v-model="patientInfo.address"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="10">
            <el-form-item 
              label="有无过敏史" 
              prop="allergies">
              <el-input 
                v-model="patientInfo.allergies"
                placeholder="没有则不填写"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="10">
            <el-form-item 
              label="有无疾病史" 
              prop="disease">
              <el-input 
                v-model="patientInfo.disease"
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
                v-model="patientInfo.deliveryDate"
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
                  v-model="patientInfo.deliveryInfo" 
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
                  v-model="patientInfo.babySex" 
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
                v-model="patientInfo.disease"
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
                v-model="patientInfo.userSource" 
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
    .el-row {
      & + .el-row {
        margin-top: 0px;
      }
    }
  }
}
</style>

