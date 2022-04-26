<template>
    <div id="todo-page">
        <div class="user">
            <h2>{{userName}}</h2>
            <button @click="deco">Déconnection</button>
        </div>
        <todo />
    </div>
</template>

<script>
    import todo from '@/components/todo.vue'
    import {
        onAuthStateChanged,
        signOut
    } from "firebase/auth"
    import {// pour initialiser
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

        .user {

            display: flex;
            flex-direction: column;

            align-items: flex-end;

            margin-right: 40px;
        }

    }
</style>