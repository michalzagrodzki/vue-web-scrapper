import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import Input from './components/Input.vue'
import Output from './components/Output.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)

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
    { path: '*', redirect: { name: 'main' }}
  ]
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
