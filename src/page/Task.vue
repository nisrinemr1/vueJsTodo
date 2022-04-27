<template>
    <div class="task-info">

        <!-- ******** TITLE ******** -->
        <!-- ******** TITLE ******** -->
        <!-- ******** TITLE ******** -->
        <h2>MODIFIER LA TÂCHE</h2>

        
        <!-- ******** TASK INFO ******** -->
        <!-- ******** TASK INFO ******** -->
        <!-- ******** TASK INFO ******** -->
        <div class="taskInfo-card">

            <div>
                <h3>Nom de la tâche:</h3>
                <input v-model="name" type="text">
            </div>

            <div>
                <h3>Importance de la tâche:</h3>

                <select v-model="category">

                    <!-- ******** OPTION CATEGORY OF IMPORTANCE ******** -->
                    <option value="urgent">Urgent</option>
                    <option value="important">Important</option>
                    <option value="pasimportant">Pas important</option>

                </select>

            </div>

            <div>

                <h3>Description de la tâche:</h3>
                <textarea v-model="description" class="textarea"  cols="60" rows="20"></textarea>
                
            </div>

            <button @click="update">Modifier</button>
        </div>


        <!-- ******** NAV LINKS ******** -->
        <!-- ******** NAV LINKS ******** -->
        <!-- ******** NAV LINKS ******** -->
        <div class="test-link">
            <router-link class="nav-link" :to="{ name : 'home' }">Accueil</router-link>
            <router-link class="nav-link" :to="{ name:'todo' }">Todo</router-link>
            <router-link class="nav-link" :to="{ name : 'test' }">Test</router-link>
        </div>

    </div>
</template>

<script>
import { doc, updateDoc } from "./../firebase/init"
export default {

    data(){
        return{

            id: this.$route.params.id,

            name: null,
            category: null,
            description: null,

        }
    },

    methods:{
        
    }
}
</script>

<style lang="scss" scoped>
    .task-info{
        height: 100vh;
        width: 100vw;
        padding-top: 40px;
        text-align: center;
        font-family: Avenir, Helvetica, Arial, sans-serif;
        overflow-y: inherit;
        display: flex;
        flex-direction: column;
        align-items: center;
        h2{
            padding-bottom: 30px;
        }

        .taskInfo-card{
            padding-top: 40px;
            width: 70%;
            height: 300px;
            display: flex;
            flex-direction: column;
            column-gap: 40px;
            & div{
                display: flex;
                flex-direction: row;
                align-items: baseline;

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

                h3{
                    width: 40%;
                    text-align: start;
                }

                p{
                    width: 60%;
                    text-align: start;
                }

                .textarea{
                    border-radius: 10px;
                    border: 1px solid #b5b5b5; 

                    padding-top: 10px;
                    padding-bottom: 10px;

                    padding-left: 10px;
                    padding-right: 10px; 

                    resize: none;
                }
            }
        }

        /* ****** NAV ROUT LINK  ****** */
        /* ****** NAV ROUT LINK  ****** */
        /* ****** NAV ROUT LINK  ****** */
        .test-link{
            position: fixed;
            padding-bottom: 85px;
            bottom: 0;
            color: black;
            .nav-link{
                margin-left: 50px;
                margin-right: 50px;
                color: black;
                text-decoration: none;
                border-bottom: 3px solid transparent;
                transition: border-bottom .2s ease-in-out;
            }
            .nav-link:hover{
                border-bottom: 3px solid rgb(253, 197, 207);
            }
        }
    }

</style>