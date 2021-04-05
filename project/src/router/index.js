import Vue from 'vue'
import Router from 'vue-router'
import LoginChart from "../views/LoginChart";
import registe from "../views/registe";

Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: '/',
  routes: [
    {
      path:'/',
        redirect:'/LoginChart'
    },
    {
      path: '/LoginChart',
      name: 'LoginChart',
      meta:{title:'登录页面'},
      component: LoginChart
    },
    {
      path: '/registe',
      name: 'registe',
      meta:{title:'注册页面'},
      component: registe
    },
    {
      path: '/homepage',
      component: () => import('../views/common/Home'),
      meta: {title: '系统首页'},
      children: [
        {
          path:'/employeeSearch',
          component:()=>import('../views/pages/infSearch/employeeSearch'),
          meta:{title:'员工查询'}
        },
        {
          path:'/personnelSearch',
          component:()=>import('../views/pages/infSearch/personnelSearch'),
          meta:{title:'人才查询'}
        },
        {
          path:'/employeeFile',
          component:()=>import('../views/pages/informationEntry/employeeFile'),
          meta:{title:'员工档案'}
        },
        {
          path:'/employeeComments',
          component:()=>import('../views/pages/informationEntry/employeeComments'),
          meta:{title:'员工评价'}
        },
        {
          path:'/infSearch',
          component:()=>import('../views/pages/infCheack/comentsCheak'),
          meta:{title:'信息审核'}
        },
      ]
    }
    ]
});

// // 导航守卫
// // 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
// router.beforeEach((to, from, next) => {
//   if (to.path === '/login') {
//     next();
//   } else {
//     let token = localStorage.getItem('Authorization');
//
//     if (token === 'null' || token === '') {
//       next('/login');
//     } else {
//       next();
//     }
//   }
// });


