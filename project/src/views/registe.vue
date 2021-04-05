<template>
  <div class="registe">
    <!-- 标题 -->
      <div class="title">
        跨企业人才管理系统
      </div>
      <div class="each_info" size="medium">
        <el-form class="apply-form first-form" :model="formData" :rules="rule" ref="form">
          <el-form-item label="真实姓名" prop="Name" style="font-size: 15px">
            <el-input class="el-input" v-model="formData.Name" placeholder="请输入姓名" clearable></el-input>
          </el-form-item>
          <el-form-item label="用户账号" prop="account">
            <el-input v-model="formData.account" placeholder="请输入账号" clearable></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="formData.password" :type="formData.typePwd1" :maxlength="18" placeholder="请输入密码(6-18位)" clearable>
              <i slot="suffix" class="el-icon-view" v-bind:class="{changethecolor1:changecolor1}" @click="showPwd1"/>
            </el-input>
          </el-form-item>
          <el-form-item label="再次输入密码" prop="againpassword">
            <el-input v-model="formData.againpassword" :type="formData.typePwd2" :maxlength="18" placeholder="请再次输入密码" clearable>
              <i slot="suffix" class="el-icon-view" v-bind:class="{changethecolor2:changecolor2}" @click="showPwd2"/>
            </el-input>
          </el-form-item>
          <el-form-item label="公司" prop="company">
            <el-input v-model="formData.company"  placeholder="请输入公司名称" clearable></el-input>
          </el-form-item>
          <el-form-item label="性别:" prop="choice">
            <el-radio-group v-model="formData.choice" fill="#ffff">
              <el-radio  label="1" border >男</el-radio>
              <el-radio  label="2" border>女</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="邮箱" prop="mail">
            <el-input v-model="formData.mail"  placeholder="请输入邮箱" clearable></el-input>
          </el-form-item>
        </el-form>
        <el-row>
          <span>&nbsp&nbsp&nbsp&nbsp</span>
          <span>&nbsp&nbsp&nbsp&nbsp</span>
          <el-button round type="primary" style="width: 150px;">注册</el-button>
          <span>&nbsp&nbsp&nbsp&nbsp</span>
          <router-link to="/LoginChart"><el-button round type="warning" style="width: 150px;">返回</el-button></router-link>
        </el-row>
      </div>
    </div>
</template>

<script>
export default {
  name: "registe",
data() {
  var Pass2 = (rule, value, callback) => {
    if (value === '') {
      callback(new Error('请再次输入密码'))
      // password 是表单上绑定的字段
    } else if (value !== this.formData.password) {
      callback(new Error('两次输入密码不一致!'))
    } else {
      callback()
    }
  }
  return {
    changethecolor1: false,
    changecolor1:false,
    changethecolor2: false,
    changecolor2:false,
    formData: {
      Name: '',
      account:'',
      cardType: 1,
      password: '',
      againpassword:'',
      company:'',
      mail:'',
      choice:'1',
      typePwd1:'password',
      typePwd2:'password',
    },
    rule: {
      Name: [
        { required: true, message: '请输入姓名', trigger: 'blur' },
        { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' },
        {
          required: true,
          pattern: /^[\u4e00-\u9fa5_a-zA-Z0-9.·-]+$/,
          message: '姓名不支持特殊字符',
          trigger: 'blur'
        }
      ],
      account: [
        { required: true, message: '请输入账户', trigger: 'blur' },
        { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' },
        {
          required: true,
          pattern: /^[\u4e00-\u9fa5_a-zA-Z0-9.·-]+$/,
          message: '账户不支持特殊字符',
          trigger: 'blur'
        }
      ],
      password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { min: 6, max: 18, message: '请填写6-18位密码', trigger: 'blur' },
        {
          required: true,
          pattern: /^[a-zA-Z0-9]+$/,
          message: '请输入正确的字母或数字组合',
          trigger: 'blur'
        }
      ],
      againpassword: [
        { required: true, message: '请再次输入密码', trigger: 'blur' },
        { min: 6, max: 18, message: '请填写6-18位密码', trigger: 'blur' },
        { required: true,
          validator: Pass2,
          trigger: 'blur' }
      ],
      company: [
        { required: true, message: '请输入公司名称', trigger: 'blur' },
        {
          required: true,
          pattern: /^[\u4e00-\u9fa5_a-zA-Z0-9.·-]+$/,
          message: '请输入正确的公司名称',
          trigger: 'blur'
        }
        ],
        mail: [
        { required: true, message: '请输入邮箱', trigger: 'blur' },
        {
          required: true,
          pattern: /^([a-zA-Z0-9]+[-_\.]?)+@[a-zA-Z0-9]+\.[a-z]+$/,
          message: '请输入正确的邮箱',
          trigger: 'blur'
        },
        ]
    }
  }
},
  methods:{
    showPwd1 (){
      this.formData.typePwd1 = this.formData.typePwd1 === 'password' ? 'text' : 'password';
      this.changecolor1=!this.changecolor1
    },
    showPwd2 (){
      this.formData.typePwd2 = this.formData.typePwd2 === 'password' ? 'text' : 'password';
      this.changecolor2=!this.changecolor2
    },
  },
  computed:{
    showColoer1: function (){
      this.changethecolor1=this.changecolor1
    },
    showColoer2: function (){
      this.changethecolor2=this.changecolor2
    }
  }
}
</script>

<style>
.title {
  display: flex;
  justify-content: center;
  align-self: center;
  margin-top: 150px;
  font-size: 70px;
  font-family: 'SimSun';
  color: #FFF;
  text-shadow: 5px 5px 10px black;
  z-index: 1;
}
.registe {
  width: 900px;
  height: 400px;
  margin: 60px auto 0;
  position: relative;
}
.each_info {
  justify-content: center;
  margin: 60px auto 0;
  position: relative;
  margin-left: 15px;
  width: 500px;
  height: 50px;
  left: 180px;
}
.el-input{
  outline: none;
  border: none;
  background: none;
  color: #fff;
  font-size: 18px;
}

.el-form-item__label{
  font-size: 20px;
  color: black;
}
</style>
