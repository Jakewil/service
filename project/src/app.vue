<template>
  <div>
    <div>
      <router-view></router-view>
    </div>
  </div>

</template>

<script>
// import LoginChart from "./components/LoginChart";
// import Registe from "./components/registe";
export default {
  name: 'App',
  // components:{
  //   Registe,
  //   LoginChart
  // }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
body {
  overflow: auto;
  height: 100%;
  background-image: url(./image/new.png);
  background-repeat: no-repeat;
  background-position: center top;
  background-attachment: fixed;
  background-size: cover;
}
</style>
