import Vue from 'vue'
import App from './App.vue'

/* START GLOBAL REGISTRATION */
// import Ninjas from '@/components/Ninjas.vue' // import to use globally
// Vue.component('ninjas', Ninjas) // register Ninjas component as ninjas (global registration)
/* END GLOBAL REGISTRATION */

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
