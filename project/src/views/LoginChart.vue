<template>
  <div class="registe">
    <!-- 标题 -->
    <div class="title">
      跨企业人才管理系统
    </div>
    <div class="each_info" size="medium">
      <el-form class="apply-form first-form" :model="formData" :rules="rule" ref="form">
        <el-form-item label="用户账号" prop="account">
          <el-input v-model="formData.account" placeholder="请输入账号" clearable></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="formData.password" :type="formData.typePwd" :maxlength="18" placeholder="请输入密码" clearable>
         <i slot="suffix" class="el-icon-view" v-bind:class="{changethecolor:changecolor}" @click="showPwd"/>
          </el-input>
        </el-form-item>
      </el-form>
      <el-row>
        <router-link to="/homepage"> <el-button round  type="success" style="width: 150px;" @click="login">hr登录</el-button></router-link>
        <el-button round type="primary" style="width: 150px;">部门主管登录</el-button>
        <el-button round type="primary" style="width: 150px;">超级管理员登录</el-button>
        <span>&nbsp&nbsp&nbsp&nbsp</span>
        <div style="left: 155px;top:15px;position: relative;">
          <router-link to="/registe"><el-button round type="warning" style="width: 150px;">注册</el-button></router-link>
        </div>

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
      changethecolor: false,
      changecolor:false,
      formData: {
        account:'',
        password: '',
        choice:'1',
        typePwd:'password',

      },
      rule: {
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
      }
    }
  },
  methods: {
    showPwd() {
      this.formData.typePwd = this.formData.typePwd === 'password' ? 'text' : 'password';
      this.changecolor = !this.changecolor
    },
    },
    computed: {
      showColoer: function () {
        this.changethecolor = this.changecolor
      }
    }

}
</script>

<style>
.changethecolor{
  color: red;
}
.title {
  display: flex;
  justify-content: center;
  align-self: center;
  margin-top: 150px;
  font-size: 70px;
  font-family: STKaiti;
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
