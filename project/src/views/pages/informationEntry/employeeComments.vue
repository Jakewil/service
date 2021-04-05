<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <span style="color: #0f0f0f;margin-left: 5px;left: 550px;position: relative;font-size: 20px">员工评价录入</span>

        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="container">
      <div class="handle-box">
        <el-row style="width: 500px;left: 300px;position: relative;">
          <el-form ref="ruleForm" :rules="cm_rules" :model="cm_info" label-width="80px">
          <el-form-item label="员工编号" prop="workerid">
            <el-input v-model="cm_info.workerid"></el-input>
          </el-form-item>

          <el-form-item label="公司编号" prop="phonenum">
            <el-input v-model="cm_info.companyid"></el-input>
          </el-form-item>

            <el-form-item label="hr编号" prop="hrid">
              <el-input v-model="cm_info.hrid"></el-input>
            </el-form-item>

            <el-form-item label="hr姓名" prop="hename">
              <el-input v-model="cm_info.hrname"></el-input>
            </el-form-item>


          <el-form-item label="录入时间" required>
            <el-col :span="24">
              <el-form-item prop="date">
                <el-date-picker type="date" placeholder="选择日期" v-model="cm_info.date1"
                                style="width: 100%;"></el-date-picker>
              </el-form-item>
            </el-col>
          </el-form-item>
          <el-form-item label="奖惩" prop="rwd_psh">
            <el-radio-group v-model="cm_info.rwd_psh" class="radio_s">
              <el-radio label="奖励"></el-radio>
              <el-radio label="惩罚"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="详情" prop="content">
            <el-input type="textarea" v-model="cm_info.desc"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "employeeComents",
  data(){
    return {
      cm_info: {
        workerid:'',
        companyid:'',
        hrid:'',
        hrname:'',
        date: '',
        rwd_psh: '',
        content: ''
      },
      cm_rules: {
        workerid: [
          {required: true, message: '请输入员工id', trigger: 'blur'}
          ],
        sex: [
          { required: true, message: '请选择性别', trigger: 'blur' }
        ],
        phonenum: [
          { required: true, message: '请输入电话号码', trigger: 'blur' },
          { min: 11, max: 11, message: '请输入11位有效电话号码', trigger: 'blur' }
        ],
        hrid: [
          { required: true, message: '请输入hrid', trigger: 'blur' }
        ],
        hrname: [
          { required: true, message: '请输入hr姓名', trigger: 'blur' }
        ],
        companyid: [{required: true, message: '请输入公司id', trigger: 'blur'}],
        rwd_psh: [
          { required: true, message: '请选择性别', trigger: 'blur' }
        ],
        content: [
          { required: true, message: '请输入详情', trigger: 'blur' }
        ]
      },
    }


  },

  methods: {
    Selct(index,indexpath) {
      console.log('------------------')
      console.log(index);
    },
    onSubmit() {
      console.log('submit!');
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>

<style>
.el-form-item__label{
  color: white;
  font-size: 14px;
}
</style>

