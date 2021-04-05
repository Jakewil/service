import Vue from 'vue'
import Router from 'vue-router'
import LoginChart from "../views/LoginChart";
import registe from "../views/registe";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/LoginChart',
      name: 'LoginChart',
      component: LoginChart
    },
    {
      path:'/registe',
      name:'registe',
      component: registe
    },
    {
      path:'/',
      redirect:'/registe'
    }
  ]
})
