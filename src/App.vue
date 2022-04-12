<template>
  <div id="app">

    <!-- <router-link :to="{ name:'home' }">Home</router-link>
    <router-link :to="{ name:'test' }">Test</router-link> -->

    <!-- to show the home page -->
    <router-view></router-view>

  </div>
</template>

<script>
import Todo from './components/todo.vue'

export default {
  name: 'App',
  components: {
    Todo
  }
}
</script>

