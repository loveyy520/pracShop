import Vue from 'vue';
import App from './App';
import router from './router';
import store from "@/store";
import toast from '@/components/common/toast'
import vlazyload from 'vue-lazyload';
import fastclick from 'fastclick'

Vue.config.productionTip = false

Vue.prototype.$bus=new Vue()
/* eslint-disable no-new */

Vue.use(toast)
Vue.use(vlazyload)

fastclick.attach(document.body)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})