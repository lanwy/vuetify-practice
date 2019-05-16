import Vue from 'vue'
import './plugins'
import i18n from './i18n'
import App from './App.vue'
import router from './router'


Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  i18n,
  render: h => h(App)
})
