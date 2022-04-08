<template>
  <div class="content">
    <!-- ******** TITLE ******** -->
    <!-- ******** TITLE ******** -->
    <!-- ******** TITLE ******** -->
      <h1 class="title"> 할 수 있어! </h1>


    <!-- ******** SEARCH TASK ******** -->
    <!-- ******** SEARCH TASK ******** -->
    <!-- ******** SEARCH TASK ******** -->
    <input 
    v-on:input="search" 
    v-model.trim="input" 
    ref="input" 
    class="searchBar" 
    type="text" 
    placeholder="Recherche d'une tâche">


    <!-- ******** CATEGORY BTN  ******** -->
    <!-- ******** CATEGORY BTN  ******** -->
    <!-- ******** CATEGORY BTN  ******** -->
    <div class="categories">
      <button>Toutes les tâches</button>
      <button>Urgent</button>
      <button>Important</button>
      <button>Pas urgent</button>
    </div>


    <!-- ******** LIST  ******** -->
    <!-- ******** LIST  ******** -->
    <!-- ******** LIST  ******** -->
    <div v-for="(item, index) in list" 
    :key="item">

      <div class="task-items">
        <!-- ******** CHECKBOX AND INDEX OF TASK ******** -->
        <div>
          <input type="checkbox">
          <p>{{index+1}}</p>
        </div>

        <!-- ******** TASK NAME  ******** -->
        <h3> {{item.name}} </h3>

        <!-- ******** TASK IMPORTANCE  ******** -->
        <p>{{item.category}}</p>

        <!-- ******** DELETE TASK BTN  ******** -->
        <button @click="remove(index)" 
        class="btn">Supprimer</button>
      </div>
    </div>
    


    <!-- ******** ADD TASK ******** -->
    <!-- ******** ADD TASK ******** -->
    <!-- ******** ADD TASK ******** -->
      <div v-if="show_form" class="form">

        <!-- ******** HIDE FORM BTN ******** -->
        <button @click="closeForm" 
        class="close-form-btn">X</button>
        
        <!-- ******** TASK FORM ******** -->
        <form @submit.prevent="add">

          <!-- ******** LABEL ******** -->
          <label> Ajout de tâche:</label>
          
          <!-- ******** INPUT TASK ******** -->
          <input v-model="todo.name" 
          type="text">


          <!-- ******** SELECT CATEGORY ******** -->
          <select v-model="todo.category">

            <!-- ******** OPTION CATEGORY OF IMPORTANCE ******** -->
            <option value="urgent">Urgent</option>
            <option value="important">Important</option>
            <option value="pasimportant">Pas important</option>

          </select>


          <!-- ******** ADD TASK BTN ******** -->
          <button type="submit">Ajouter</button>
        </form>
      </div>


        <!-- ******** ADD TASK BTN ******** -->
        <!-- ******** ADD TASK BTN ******** -->
        <!-- ******** ADD TASK BTN ******** -->
        <button class="show-form-btn" 
        v-else 
        @click="show_form = true">+</button>


  </div>
</template>

<script>
export default {
  name: 'simpleTodo',
  data(){
    return{
      show_form: false,

      /* **** TODO OBJECT **** */
      todo: {
        name: "",
        category: ""
      },

      /* **** LIST DATA **** */
      list: [
        {
          name: "Kimbap",
          category: "urgent"
        },
        {
          name: "Bibimbap",
          category: "important"
        },
        {
          name: "Ttoekbokki",
          category: "pas important"
        }
      ],

      /* **** SHOW CATEGORY OBJECT **** */
      show_category: "",

      /* **** SEARCH INPUT OBJECT **** */
      input: ""

    }
  },

  methods:{
    closeForm(){
      this.show_form = false
    },

    /* **** REMOVE TASK **** */
    remove(index){
      this.list.splice(index, 1)
    },

    /* **** ADD TASK **** */
    add(){
      this.list.push({
        name: this.todo.name,
        category: this.todo.category
      })
    },

    /* **** SEARCH TASK **** */
    search(){
      console.log(this.input)
    }

  },

  computed:{
    
  }

}
</script>


<style lang="scss">
.content{
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  flex: 1;
  font-family: Avenir, Helvetica, Arial, sans-serif;


  /* ****** TITLE ****** */
  /* ****** TITLE ****** */
  /* ****** TITLE ****** */
  .title{
    padding-top: 50px;
    padding-bottom: 30px;
  }


  /* ****** SEARCH BAR ****** */
  /* ****** SEARCH BAR ****** */
  /* ****** SEARCH BAR ****** */
  .searchBar{
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
  div{
    width: 100%;
    display: flex;
    justify-content: space-around;
    &.categories{
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
  .task-items{
    margin-top: 30px;
    width: 90%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border: 1px solid rgb(253, 197, 207);
    border-radius: 10px;
    padding: 5px;

    & div{
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
    position: absolute;
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
  .form {
    overflow: hidden;
    position: fixed;
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