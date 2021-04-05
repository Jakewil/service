// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './app'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/icon.css';
import './assets/css/main.css';

Vue.use(ElementUI);

new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>',
  router,
  render: h => h(App)
})
