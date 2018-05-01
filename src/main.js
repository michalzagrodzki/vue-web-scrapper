import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import Input from './components/Input.vue'
import Output from './components/Output.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', component: Input,
      children: [
        { path: '', component: Output }
      ]
    }
  ]
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
