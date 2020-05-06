// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import Root from '@/components/Root'
import axios from 'axios'
import router from './router'
import store from './store'
Vue.config.productionTip = false
// 所有的vue实例能够使用axios(this.$axios)
Vue.prototype.$axios = axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  // components: { Root },
  // template: '<Root/>'
  components: { App },
  template: '<App/>'
})
