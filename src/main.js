import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'
import App from './App.vue'

import Input from './components/Input.vue'
import Output from './components/Output.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueAxios, axios)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: App, 
      children: [
      { path: '', component: Input, props: true,
        children: [
          { path: '', component: Output, props: true }
        ]
      }
    ]},
    // this route will need separate component, now it redirects but does not render anything
    { path: '*', redirect: { name: 'main' }}
  ]
})

console.log('client server started')

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
