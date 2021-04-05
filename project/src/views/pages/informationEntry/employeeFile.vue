<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <span style="color: #0f0f0f;margin-left: 5px;left: 550px;position: relative;font-size: 20px">员工档案录入</span>

        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="container">
      <div class="handle-box">
        <el-row style="width: 500px;left: 300px;position: relative;">
          <el-form ref="ruleForm" :rules="rules" :model="worker_form" label-width="80px">
            <el-form-item label="员工编号" prop="id">
              <el-input v-model="worker_form.id"></el-input>
            </el-form-item>
            <el-form-item label="员工姓名" prop="name">
              <el-input v-model="worker_form.name"></el-input>
            </el-form-item>
            <el-form-item label="性别" prop="sex">
              <el-radio-group v-model="worker_form.sex" class="radio_s">
                <el-radio  label="男"></el-radio>
                <el-radio  label="女"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="电话号码" prop="phonenum">
              <el-input v-model="worker_form.phonenum"></el-input>
            </el-form-item>

            <el-form-item label="身份证号" prop="idc">
            <el-input v-model="worker_form.idc"></el-input>
            </el-form-item>

            <el-form-item label="家庭住址" prop="address">
              <el-input v-model="worker_form.address"></el-input>
            </el-form-item>

            <el-form-item label="公司id" prop="companyid">
              <el-input v-model="worker_form.companyid"></el-input>
            </el-form-item>

            <el-form-item label="邮箱" prop="email">
              <el-input v-model="worker_form.email"></el-input>
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
  name: "employeeFile",
  data(){
      return {
        worker_form: {
          id:'',
          name: '',
          sex: '',
          phonenum: '',
          idc: '',
          address: '',
          companyid: '',
          email: ''
        },
        rules: {
          id: [{required: true, message: '请输入员工id', trigger: 'blur'}],
          name: [
            { required: true, message: '请输入员工姓名', trigger: 'blur' }
          ],
          sex: [
            { required: true, message: '请选择性别', trigger: 'blur' }
          ],
          phonenum: [
            { required: true, message: '请输入电话号码', trigger: 'blur' },
            { min: 11, max: 11, message: '请输入11位有效电话号码', trigger: 'blur' }
          ],
          address: [
            { required: true, message: '请输入家庭住址', trigger: 'blur' }
          ],
          idc: [
            { required: true, message: '请输入身份证号', trigger: 'blur' },
            { min: 18, max: 18, message: '请输入18位有效身份证号码', trigger: 'blur' }
          ],
          companyid: [{required: true, message: '请输入公司id', trigger: 'blur'}],
          email: [
            { required: true, message: '请输入邮箱地址', trigger: 'blur' }
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
