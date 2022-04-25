<template>
    <div id="sign-up-page">

        <header>

            <h1>Jobii</h1>

        </header>


        <div class="sing-in-container">

            <div class="sing-in">
                <h1>S'inscrire</h1>

                <button> Google </button>

                <p>ou</p>

                <input v-model="email" type="email" placeholder="Email">
                <input v-model="password" type="password" placeholder="Mot de passe">

                <div class="connection">

                    <button @click="signUp">S'inscrire</button>

                </div>

                <p>Vous avez déjà un compte? <router-link class="nav-link" :to="{ name : 'signIn' }">Se connecter</router-link> </p>


            </div>


        </div>


    </div>
</template>

<script>
    import { auth } from "../../firebase/init"
    import { createUserWithEmailAndPassword } from "firebase/auth"
    export default {
        name: 'singIn',

        data(){
            return{
                email:"",
                password:""
            }
        },

        methods:{

            signUp(){
                createUserWithEmailAndPassword(auth, this.email, this.password).then(
                    function(user){
                        alert('Votre compte à été créer!')
                        console.log(user)
                    },
                    function(err){
                        alert('Oops.' + err.message)
                    }
                )
            }
        }

    }
</script>

<style lang="scss">
    #sign-up-page {

        width: 100%;
        height: 100vw;

        header {

            border-left: 2px solid black;

            width: 100%;

            margin-left: 50px;

            margin-top: 0;

            h1 {
                margin-top: 0;
                margin-bottom: 0;

                padding-top: 20px;

                font-family: "como-bold";
                font-size: 2rem;
            }
            
        }



        .sing-in-container {

            width: 100%;

            padding-top: 113px;

            display: flex;
            justify-content: center;

            padding-top: 113px;
            padding-bottom: 133px;

            .sing-in {
                width: 100%;
                max-width: 513px;
                display: flex;
                flex-direction: column;
                padding-top: 113px;
                padding-bottom: 133px;

                h1 {
                    width: 100%;
                }
            }

            p{
                text-align: center;
            }

            .connection{
                padding-top: 20px;

                display: flex;
                justify-content: flex-end;
            }

        }

    }
</style>