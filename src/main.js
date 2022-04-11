import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"

/* To specify to use the VueRouter in vue */
Vue.use(VueRouter);

/* To create our rout */
const router = new VueRouter({
  routes:[
    
  ]
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
