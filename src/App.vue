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


<style lang="scss">

body{
  margin: 0;
  padding: 0;
}

@font-face {
      font-family: "como-bold";
      src: url('./assets/font/Como-Bold.ttf');
    }

    @font-face {
      font-family: "como-bold-extra";
      src: url('./assets/font/Como-ExtraBold.ttf');
    }

    @font-face {
      font-family: "como";
      src: url('./assets/font/Como-Light.ttf');
    }

    h1{
      font-family: "como-bold-extra";
    }

    h2, h3, h4{
      font-family: "como-bold";
    }

    p{
      font-family: "como";
    }

    input{
      font-family: "como";

      border-radius: 10px;
      border: 1px solid #b5b5b5;
      
      padding-top: 10px;
      padding-bottom: 10px;

      padding-left: 10px;
      padding-right: 10px;

      margin-bottom: 10px;

    }

    button{
      font-family: "como-bold";

      border-radius: 15px;
      border: none;

      background-color: black;

      color: white;

      padding-top: 10px;
      padding-bottom: 10px;

      padding-left: 20px;
      padding-right: 20px;
    }
</style>