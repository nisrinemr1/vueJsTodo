<template>
  <div class="content">
    <!-- ******** TITLE ******** -->
    <!-- ******** TITLE ******** -->
    <!-- ******** TITLE ******** -->
    <h1 class="title"> 할 수 있어! </h1>


    <!-- ******** SEARCH TASK ******** -->
    <!-- ******** SEARCH TASK ******** -->
    <!-- ******** SEARCH TASK ******** -->
    <input  v-model="input" class="searchBar" type="text" placeholder="Recherche d'une tâche">


    <!-- ******** CATEGORY BTN  ******** -->
    <!-- ******** CATEGORY BTN  ******** -->
    <!-- ******** CATEGORY BTN  ******** -->
    <div class="categories">
      <button @click="changeCategory(null)">Toutes les tâches</button>
      <button @click="changeCategory('urgent')">Urgent</button>
      <button @click="changeCategory('important')">Important</button>
      <button @click="changeCategory('pasimportant')">Pas important</button>
    </div>


    <!-- ******** LIST  ******** -->
    <!-- ******** LIST  ******** -->
    <!-- ******** LIST  ******** -->
    <div v-for="(task, index) in filterList" :key="index">

      <div class="task-items">
        <!-- ******** CHECKBOX AND INDEX OF TASK ******** -->
        <div>
          <input type="checkbox">
          <p>{{index+1}}</p>
        </div>

        <!-- ******** TASK NAME  ******** -->
        <h3> {{task.name}} </h3>

        <!-- ******** TASK IMPORTANCE  ******** -->
        <p>{{task.category}}</p>

        <!-- ******** DELETE TASK BTN  ******** -->
        <button @click="remove(index)" class="btn">Supprimer</button>
      </div>
    </div>



    <!-- ******** ADD TASK FORM ******** -->
    <!-- ******** ADD TASK FORM ******** -->
    <!-- ******** ADD TASK FORM ******** -->
    <todoForm :class='"form-appears " + show_form' v-if="show_form" :close.sync="show_form" :newTask.sync="list" :list="list"/>


    <!-- ******** ADD TASK BTN ******** -->
    <!-- ******** ADD TASK BTN ******** -->
    <!-- ******** ADD TASK BTN ******** -->
    <button class="show-form-btn " v-else @click="show_form = true">+</button>
    <!-- <button class="show-form-btn" v-else @click="show_form = true">+</button> -->



  </div>
</template>

<script>
import todoForm from './todo/todo-form.vue'

  export default {

    components: { todoForm },

    name: 'todo',
    
    data() {
      return {
        show_form: false,

        /* **** LIST DATA **** */
        list: [{
            name: "Kimbap",
            category: "urgent"
          },
          {
            name: "Bibimbap",
            category: "important"
          },
          {
            name: "Ttoekbokki",
            category: "pasimportant"
          }
        ],

        /* **** SHOW CATEGORY OBJECT **** */
        show_category: "",

        /* **** SEARCH INPUT OBJECT **** */
        input: ""
      }
    },

    methods: {

      /*  REMOVE TASK  */
      remove(index) {
        this.list.splice(index, 1)
      },

      /*  SEARCH TASK  */
      search() {
        console.log(this.input)
      },

      /*  TO SHOW ONLY THE SPECIFIC CATEGORY CLICKED BY THE USER  */
      changeCategory(value){
        this.show_category = value
      }
    },

    computed:{
      
      filterList(){
        var search = this.list

        if(this.input){
          search = search.filter(item => item.name.toUpperCase().includes(this.input.toUpperCase()))
        }

        if(this.show_category){
          search = search.filter(item => item.category === this.show_category)
        }

        return search
      }
    }
  }
</script>


<style lang="scss">
  .content {
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    flex-direction: column;
    flex: 1;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    overflow-y: inherit;


    /* ****** TITLE ****** */
    /* ****** TITLE ****** */
    /* ****** TITLE ****** */
    .title {
      padding-top: 50px;
      padding-bottom: 30px;
    }


    /* ****** SEARCH BAR ****** */
    /* ****** SEARCH BAR ****** */
    /* ****** SEARCH BAR ****** */
    .searchBar {
      margin-bottom: 50px;
      width: 90%;
      padding-top: 20px;
      padding-bottom: 20px;
      padding-left: 20px;
      border-radius: 40px;
      background-color: rgb(253, 197, 207);
      border: none;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }


    /* ****** CATEGORY ****** */
    /* ****** CATEGORY ****** */
    /* ****** CATEGORY ****** */
    div {
      width: 100%;
      display: flex;
      justify-content: space-around;

      &.categories {
        border: 0;
        margin-bottom: 20px;

        & button {
          border-radius: 20px;
          background-color: rgba(250, 195, 205, 0.394);
          box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
          border: none;
          padding: 10px 10px 10px 10px;
        }

        button:hover {
          background-color: rgb(254, 212, 220);
        }
      }
    }


    /* ****** TASK LIST ****** */
    /* ****** TASK LIST ****** */
    /* ****** TASK LIST ****** */
    .task-items {
      margin-top: 30px;
      width: 90%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border: 1px solid rgb(253, 197, 207);
      border-radius: 10px;
      padding: 5px;

      & div {
        width: 50px;
        justify-content: start;
      }

      & button {
        border-radius: 20px;
        background-color: rgba(250, 195, 205, 0.394);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        border: none;
        padding: 10px 10px 10px 10px;
      }

      button:hover {
        background-color: rgb(254, 212, 220);
      }

    }


    /* ****** SHOW FORM BTN (+) ****** */
    /* ****** SHOW FORM BTN (+) ****** */
    /* ****** SHOW FORM BTN (+) ****** */
    .show-form-btn {
      position: fixed;
      overflow-y: scroll;
      margin-bottom: 70px;
      margin-right: 20px;
      padding-left: 20px;
      padding-right: 20px;
      padding-top: 5px;
      padding-bottom: 10px;
      border-radius: 50%;
      font-size: 2rem;
      border: none;
      background-color: rgba(255, 255, 255, 0.845);
      bottom: 0;
      right: 0;
    }


    /* ****** FORM ****** */
    /* ****** FORM ****** */
    /* ****** FORM ****** */
    .form-appears{
      transition: all .7s ease-in-out;
      &.true{
        height: 600px;
      }

      &.false{
        height: 0;
      }
    }
    .form {
      overflow: hidden;
      position: fixed;
      overflow-y: scroll;
      bottom: 0;
      left: 0;
      width: 100vw;
      display: flex;
      justify-content: end;
      flex-direction: row-reverse;
      background-color: white;
      padding-top: 20px;
      padding-bottom: 30px;

      .close-form-btn {
        margin-bottom: 60px;
        margin-right: 40px;
        border: none;
        font-size: 1.1rem;
        background-color: white;
      }

      form {
        padding-top: 40px;

        label {
          padding-right: 15px;
        }

        input {
          margin-right: 15px;
          border-radius: 20px;
          background-color: rgb(253, 197, 207);
          border: none;
          padding-top: 5px;
          padding-bottom: 5px;
          padding-left: 15px;
          box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        }

        select {
          margin-right: 15px;
          padding-top: 5px;
          padding-bottom: 5px;
          padding-left: 5px;
          padding-right: 5px;
          background-color: rgb(253, 197, 207);
          border: none;
          border-radius: 20px;
          box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        }

        button {
          padding-top: 10px;
          padding-bottom: 10px;
          padding-left: 10px;
          padding-right: 10px;
          background-color: rgb(253, 197, 207);
          border: none;
          border-radius: 20px;
          box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        }

        button:hover {
          background-color: rgb(254, 212, 220);
        }
      }
    }
  }
</style>