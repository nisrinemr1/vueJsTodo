import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import Home from './page/Home.vue'
import Test from './page/Test.vue'
import Todo from './page/Todo.vue'
import NotFound from './page/NotFound.vue'
import Task from './page/Task.vue'

/* To specify to use the VueRouter in vue */
Vue.use(VueRouter);

/* To create our rout */
const router = new VueRouter({
  routes:[
    {
      path:'/',
      component: Home,
      name: 'home'
    },
    {
      path:'/todo',
      component: Todo,
      name: 'todo'
    },
    {
      path:'/test',
      component: Test,
      name: 'test'
    },
    {
      /* :slug est dynamique! */
      path:"/todo/:slug",
      component: Task,
      name:'TaskName',
      category:'Category',
      description:'Description'
    },
    {
      path:"*",
      component: NotFound
    }
  ],
  mode:'history'
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
