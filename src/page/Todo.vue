<template>
    <div id="todo-page">

        <header class="header">
            <!-- ******** NAV LINKS ******** -->
            <!-- ******** NAV LINKS ******** -->
            <!-- ******** NAV LINKS ******** -->
            <div class="test-link">
                <router-link class="nav-link" :to="{ name : 'home' }">
                    <h2> Accueil </h2>
                </router-link>
                <router-link class="nav-link" :to="{ name : 'test' }">
                    <h2> Test </h2>
                </router-link>
            </div>


            <!-- ******** USER ******** -->
            <div class="user">
                <h2>{{userName}}</h2>
                <button @click="deco">Déconnection</button>
            </div>

        </header>

        <hr/>
        <todo />
    </div>
</template>

<script>
    import todo from '@/components/todo.vue'
    import {
        onAuthStateChanged,
        signOut
    } from "firebase/auth"
    import { // pour initialiser
        auth // parametre le projet
    } from "./../firebase/init"

    export default {
        components: {
            todo
        },

        data() {
            return {
                userName: ""
            }
        },

        methods: {
            deco() {
                signOut(auth).then(() => {
                    alert("Tu es déconnecté!")
                    this.$router.push('/')
                }).catch((error) => {
                    const errorMessage = error.message;
                    alert(errorMessage)
                })
            }
        },

        created() { //avant meme que l'html soit affiché on reg si il est enregistrer 

            onAuthStateChanged(auth, (user) => {

                if (user) {

                    /*  const displayName = user.displayName */

                    const displayName = user.displayName

                    this.userName = displayName

                } else {

                    this.$router.push('/')

                }

            })
        }
    }
</script>

<style lang="scss" scoped>
    #todo-page {


        .header {
            display: flex;
            

            /* ****** NAV ROUT LINK  ****** */
            /* ****** NAV ROUT LINK  ****** */
            /* ****** NAV ROUT LINK  ****** */
            .test-link {
                width: 50%;

                padding-top: 20px;
                
                top: 0;

                color: black;

                display: flex;

                justify-content: space-around;

                .nav-link {
                    color: black;

                    text-decoration: none;

                    border-bottom: 3px solid transparent;

                    transition: border-bottom .2s ease-in-out;
                }

                .nav-link:hover {
                    border-bottom: 3px solid rgb(253, 197, 207);
                }
            }

            .user {
                width: 50%;
                display: flex;
                flex-direction: column;

                align-items: flex-end;

                margin-right: 40px;
            }

        }

    }
</style>