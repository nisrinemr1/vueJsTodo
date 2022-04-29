<template>
  <div class="content">

    <!-- ******** TITLE ******** -->
    <!-- ******** TITLE ******** -->
    <!-- ******** TITLE ******** -->
    <h1 class="title"> Todo liste</h1>
    <h2>{{userName}}</h2>


    <!-- ******** SEARCH TASK ******** -->
    <!-- ******** SEARCH TASK ******** -->
    <!-- ******** SEARCH TASK ******** -->
    <input v-model="input" class="searchBar" type="text" placeholder="Recherche d'une tâche">


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
    <div v-for="(todo, index) in filterList" :key="index">

      <div class="task-items">
        <!-- ******** CHECKBOX AND INDEX OF TASK ******** -->
        <div>
          <input @click="remove(todo.id)" type="checkbox">
          <p>{{todo.id}}</p>
          <p>{{index+1}}</p>
        </div>

        <!-- ******** TASK NAME + ROUTE TO THE TASK  ******** -->
        <router-link class="task-link" :to="{ name:'TaskName', params:{id: todo.id , slug:todo.id} }">{{todo.data.name}}
        </router-link>

        <!-- ******** TASK IMPORTANCE  ******** -->
        <p>{{todo.data.category}}</p>

      </div>
    </div>


    <!-- ******** ADD TASK FORM ******** -->
    <!-- ******** ADD TASK FORM ******** -->
    <!-- ******** ADD TASK FORM ******** -->
    <todoForm :class='"form-appears " + show_form' v-if="show_form" :close.sync="show_form" @add="test"
      @added="showTodo()" />


    <!-- ******** ADD TASK BTN ******** -->
    <!-- ******** ADD TASK BTN ******** -->
    <!-- ******** ADD TASK BTN ******** -->
    <button class="show-form-btn " v-else @click="show_form = true">+</button>
    <!-- <button class="show-form-btn" v-else @click="show_form = true">+</button> -->


  </div>
</template>

<script>
  import todoForm from './todo/todo-form.vue'
  import {
    collection,
    query,
    where,
    onSnapshot,
    doc,
    deleteDoc
  } from "firebase/firestore"

  import {
    db,
    auth
  } from "./../firebase/init"

  import {
    onAuthStateChanged
  } from "firebase/auth"

  export default {

    components: {
      todoForm
    },

    name: 'todo',

    data() {
      return {
        show_form: false,

        list: [],

        /* **** SHOW CATEGORY OBJECT **** */
        show_category: "",

        /* **** SEARCH INPUT OBJECT **** */
        input: "",

        userName: "",

        uid: null
      }
    },

    methods: {

      /*  REMOVE TASK  */
      async remove(id) {


        await deleteDoc(doc(db, "todos", id)).then((id) => {
          this.list = []

          //notre requet pour recup tous les todo du user_id
          const request = query(collection(db, "todos"), where("user_id", "==", this.uid))

          onSnapshot(request, (querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.list
            .push({ //création d'un objet pour avoir et la data et l'id de la data en question. 
                id: doc.id,
                data: doc.data()
              })
            })
          })
        })

      },

      /*  SEARCH TASK  */
      search() {
        console.log(this.input)
      },

      /*  TO SHOW ONLY THE SPECIFIC CATEGORY CLICKED BY THE USER  */
      changeCategory(value) {
        this.show_category = value
      },

      test(newTodo) {
        this.list.push(newTodo)
      },


      showTodo() {

        // Remettre la liste a zéro pour ne pas ré afficher les précédents
        this.list = []

        //notre requet pour recup tous les todo du user_id
        const request = query(collection(db, "todos"), where("user_id", "==", this.uid))

        onSnapshot(request, (querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.list.push({ //création d'un objet pour avoir et la data et l'id de la data en question. 
              id: doc.id,
              data: doc.data()
            })
          })
        })
      }

    },

    computed: {

      filterList() {
        var search = this.list

        /* console.log(this.list) pour voir ce qu'il affiche lorsqu'on ecrit dans l'input/ */

        if (this.input) {

          console.log(this.input)
          search = search.filter(item => item.data.name.toUpperCase().includes(this.input.toUpperCase()))
        }

        if (this.show_category) {

          search = search.filter(item => item.data.category === this
              .show_category
              ) //car quand on voit dans la console, on remarque les infos ne sont pas dans category, mais plutot dans data

        }

        return search
      }
    },

    created() { //avant meme que l'html soit affiché on reg si il est enregistrer 

      onAuthStateChanged(auth, (user) => { // regarder si il est co et on y recupère le uid

        if (user) {

          this.uid = user.uid

          this.showTodo() //bonne pratique

        }
      })
    }

  }
</script>


<style lang="scss">
  .content {
    padding-top: 40px;
    height: 100vh;
    width: 100vw;
    padding-bottom: 400px;
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
          color: black;
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

      .task-link {
        color: black;
        font-size: 1.3rem;
        font-weight: bolder;
        text-decoration: none;
      }

      .task-link:hover {
        color: rgb(254, 212, 220);
      }

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
      color: black;
      bottom: 0;
      right: 0;
      z-index: 10;
    }


    /* ****** FORM ****** */
    /* ****** FORM ****** */
    /* ****** FORM ****** */
    .form-appears {
      transition: all .7s ease-in-out;
      z-index: 10;

      &.true {
        height: 600px;
      }

      &.false {
        height: 0;
      }
    }
  }
</style>