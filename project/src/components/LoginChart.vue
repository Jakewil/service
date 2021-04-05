<template>

  <div>
    <!-- 标题 -->
      <div class="title">
        跨企业人才管理系统
      </div>
    <div  class="singin">
    <form action="" class="el_form">
      <!-- 登录信息 -->
      <div class="info_content"  >
        <!-- 用户名 -->
        <div class="each_info">
              <span class="in_icon">
              <img src="../icon/user.svg" alt="">
              </span>
          <input type="text" class="username" placeholder="用户名">
        </div>
        <!-- 密码 -->
        <div class="each_info">
              <span class="in_icon">
                <img src="../icon/mima.svg" alt="">
                </span>
          <input :type="pwdType" class="pwd" placeholder="密码">
          <span class="show_pwd">
                <img src="../icon/yanjing_kai.svg" id ="kai" alt="" v-show="!eyeShow" @click="eyeStatus" >
                <img src="../icon/yanjing_bi.svg" id = "bi" alt="" v-show="eyeShow"  @click="eyeStatus" >
              </span>
          <span class="ftpwd">
                <a href="javascript:" style="color: black; font-weight: bold">忘记密码?</a>
              </span>
        </div>
        <div class="errtip" v-show="isShow">
          <img src="../icon/error.svg" alt="">
          用户名或密码错误！
        </div>
        <div class="log_btn_box">
          <button type="button" class="login_btn">登录</button>
          <router-link to="/regist"><button type="button" class="login_btn rg_btn" @click="go">注册</button></router-link>
        </div>
      </div>
    </form>
  </div>

  </div>


</template>

<script>
import registe from "./registe";
export default {
  name: "LoginChart",
  components:{
    registe
  },
  data(){
    return{
      isShow:true,
      eyeShow:true,
      pwdType: "password",
    }
  },
  methods: {
    eyeStatus() {
      this.eyeShow = !this.eyeShow
      this.changeType()
    },
    changeType() {
      this.pwdType = this.pwdType === 'password' ? 'text' : 'password';
    }
  }
}
</script>

<style scoped>
.title {
  display: flex;
  justify-content: center;
  align-self: center;
  margin-top: 150px;
  font-size: 70px;
  font-family: 'SimSun';
  color: #FFF;
  text-shadow: 5px 5px 10px black;
}
.singin {
  justify-content: center;
  padding-top: 50px;
  width: 900px;
  height: 400px;
  margin: 60px auto 0;
  position: relative;
}
 .el_form .info_content {
  height: 90px;
   width: 500px;
   left: 180px;
   position: relative;
}
 .el_form .each_info {
  position: relative;
  margin-left: 15px;
  border-bottom: 0.5px solid #fff;padding-top: 50px;
}
 .el_form .each_info .in_icon img {
  display:inline-block ;
  width: 33px;
  height: 36px;
}
 .el_form .each_info input {
  outline: none;
  border: none;
  background: none;
  color: #fff;
  font-size: 18px;
  margin-left: 10px;
}
 .el_form .each_info input::-webkit-input-placeholder {
  color: #FFF;
}
 .el_form .each_info .ftpwd {
  position: absolute;
  right: -88px;
  top:65px;
  color: #fff;
}
 .el_form .each_info .show_pwd img {
  position: absolute;
  right: 0px;
  top: 55px;
  display: inline-block;
  width: 33px;
  height: 36px;
}
 .el_form .rginfo_content .each_info {
  float: none;
}
 .el_form .rginfo_content .rg_tip {
  margin: 15px;
  color: #cf0909;
}
 .el_form .rginfo_content .rg_tip img {
  display: inline-block;
  width: 20px;
  height: 20px;
}
.el_form .errtip {
  width: 300px;
  height: auto;
  color: #eb1717;
  margin-left: 10px;
}
 .el_form .errtip img {
  display: inline-block;
  width: 25px;
  height: 25px;
}
 .el_form .log_btn_box {
  display: flex;
  align-items: center;
  width: 600px;
  height: 50px;
  margin: 10px auto;
  padding-left: 140px;
}
 .el_form .log_btn_box .login_btn {
  display: inline-block;
  padding: 10px 35px;
  margin-left: 10px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42857143;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  touch-action: manipulation;
  cursor: pointer;
  user-select: none;
  background-image: none;
  border: 1px solid transparent;
  border-radius: 4px;
  color: #fff;
  background-color: #337ab7;
  border-color: #2e6da4;
}
 .el_form .log_btn_box .rg_btn {
  margin-left: 50px;
  background-color: #337dbe;
  border-color: #337dbe;
}
/*.shadow{*/
/*  overflow: auto;*/
/*  display: block;*/
/*  width: 800px;*/
/*  height: 550px;*/
/*  filter: blur(10px);*/
/*  background-color: rgba(0,0,0,0.1);*/
/*  top:-650px;*/
/*  left: 360px;*/
/*  position: relative;*/
/*  z-index: -1;*/
/*}*/
</style>
