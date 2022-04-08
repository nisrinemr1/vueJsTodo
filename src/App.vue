<template>
  <div id="app">
    <simpleTodo msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import simpleTodo from './components/simpleTodo.vue'

export default {
  name: 'App',
  components: {
    simpleTodo
  }
}
</script>

