import Vue from 'vue'
import App from './App.vue'
import './quasar'
import VueRouter from 'vue-router'
import VueRouterDefine from './router'

Vue.config.productionTip = false
Vue.use(VueRouter)
const router = new VueRouter({
  routes:VueRouterDefine
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
