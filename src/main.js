import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'

import Input from './components/Input.vue'
import Output from './components/Output.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueAxios, axios)

const router = new VueRouter({
  routes: [
    { path: '/', name: 'main', component: App, 
      children: [
      { path: '', name: 'input', component: Input, props: true,
        children: [
          { path: '', name: 'output', component: Output, props: true }
        ]
      }
    ]},
    // this route will need separate component, now it redirects but does not render anything
    { path: '*', redirect: { name: 'main' }}
  ]
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
