import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//vant引入  引入button field配置  就可以直接用vant的东西了
import        './until/vant.config.js'
//引入http请求方法
import http from './until/request'

//在vue实例上挂载http
//http是一个函数   在request中抛出的一个函数
Vue.prototype.http=http
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
