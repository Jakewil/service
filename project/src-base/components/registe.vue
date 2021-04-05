<template>
  <div class="ss11">

    <!-- 标题 -->

    <div class="position">
      <div class="title">
        跨企业人才管理系统
      </div>
      <div class="registe">
        <form action="" class="el_form">
          <!-- 姓名 -->
          <div class="each_info">
              <span class="in_icon">
              <img src="../icon/user.svg" alt="">
              </span>
            <input type="text" class="username" placeholder="姓名">
          </div>
          <span class="rg_tip">
              <img src="../icon/jinti.svg" alt="">
              姓名不能为空！
            </span>
          <!-- 密码 -->
          <div class="each_info">

              <span class="in_icon">
                <img src="../icon/mima.svg" alt="">
                </span>
            <input type="text" class="pwd" placeholder="密码">
            <span class="show_pwd">
                <img src="../icon/yanjing_kai.svg" id ="kai1" alt="">
                <img src="../icon/yanjing_bi.svg" id = "bi1" alt="" >
              </span>
          </div>
          <span class="rg_tip">
              <img src="../icon/jinti.svg" alt="">
              密码不能为空！
            </span>
          <!-- 再次输入密码 -->
          <div class="each_info">
              <span class="in_icon">
                <img src="../icon/mima.svg" alt="">
                </span>
            <input type="text" class="pwd" placeholder="再次输入密码">
            <span class="show_pwd">
                <img src="../icon/yanjing_kai.svg" id ="kai2" alt="">
                <img src="../icon/yanjing_bi.svg" id = "bi2" alt="" >
              </span>
          </div>
          <span class="rg_tip" >
              <img src="../icon/jinti.svg" alt="">
              两次密码不一致！
            </span>

          <div class="each_info">

              <span class="in_icon">
                <img src="../icon/mima.svg" alt="">
                </span>
            <input type="text" class="pwd" placeholder="所在公司">
          </div>
          <span class="rg_tip">
              <img src="../icon/jinti.svg" alt="">
              公司不能为空！
            </span>

          <div class="each_info">

              <span class="in_icon">
                <img src="../icon/mima.svg" alt="">
                </span>
            <span class="xb"> 性别</span>
            <input type="checkbox" value="男" name="sexy" class="sexy">男
            <span>&nbsp&nbsp&nbsp&nbsp</span>
            <input type="checkbox" value="女" name="sexy" class="sexy">女
          </div>
          <span class="rg_tip">
              <img src="../icon/jinti.svg" alt="">
              性别不能为空！
            </span>

        </form>

      </div>
    </div>

  </div>

</template>

<script>
export default {
  name: "registe"
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
  z-index: 1;
}
.registe {
  justify-content: center;
  width: 900px;
  height: 400px;
  margin: 60px auto 0;
  position: relative;
}
.el_form .each_info {
  position: relative;
  margin-left: 15px;
  border-bottom: 0.5px solid #fff;
  width: 500px;
  height: 50px;
  left: 180px;
}
.el_form .each_info .in_icon img {
  display:inline-block ;
  width: 33px;
  height: 36px;
  left: 180px;
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
  right: 0;
  top: 15px;
  display: inline-block;
  width: 33px;
  height: 36px;
}
.el_form .registe .each_info {
  float: none;
}
.registe .rg_tip {
  margin: 15px;
  color: #cf0909;
  left: 180px;
  position: relative;
}
.registe .rg_tip img {
  display: inline-block;
  width: 20px;
  height: 20px;
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
.sexy{
  width: 15px;
  height: 15px;
  font-size: 30px;
}
.xb{
  font-size: 18px;
  margin-left: 10px;
  color: #FFFFFF;
}
.shadow{
  overflow: auto;
  display: block;
  width: 800px;
  height: 550px;
  filter: blur(10px);
  background-color: rgba(0,0,0,0.1);
  top:-600px;
  left: 180px;
  position: relative;
  z-index: -1;
}
</style>
