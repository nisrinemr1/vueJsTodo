<template>
    <div id="sign-in-page">

        <header>

            <h1>Jobii</h1>

        </header>


        <div class="sing-in-container">

            <div class="sing-in">
                <h1>Se connecter</h1>

                <button @click.prevent="GoogleSingIn"> Google </button>

                <p>ou</p>

                <input v-model="emailSignIn" type="email" placeholder="Email">
                <input v-model="passwordSignIn" type="password" placeholder="Mot de passe">

                <div class="connection">

                    <p>Mot de passe oublié?</p>
                    <button @click.prevent="signIn">Se connecter</button>

                </div>

                <p>Vous n'avez pas de compte? <router-link class="nav-link" :to="{ name : 'signUp' }">Inscrivez-vous maintenant!</router-link> </p>

            </div>
        </div>
    </div>
</template>

<script>
    import { auth } from "../../firebase/init"
    import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
    export default {
        name: 'singIn',

        data(){
            return{
                emailSignIn: "",
                passwordSignIn: ""
            }
        },

        methods:{
            signIn(){
                signInWithEmailAndPassword(auth, this.emailSignIn, this.passwordSignIn).then(
                    function(user){
                        alert('Vous êtes connecté!')
                        console.log(user)
                    },
                    function(err){
                        alert('Oops. '+ err.message)
                    }
                )
            },
            GoogleSingIn() {
                const provider = new GoogleAuthProvider();
                    signInWithPopup(auth, provider).then((result) => {
                        let token = result.credential.accessToken;
                        let user = result.user;
                        console.log(token) // Token
                        console.log(user) // User that was authenticated
                    })
                    .catch((err) => {
                        console.log(
                        err); // This will give you all the information needed to further debug any errors
                    });
            }
        }

    }
</script>

<style lang="scss">
    #sign-in-page {

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
                justify-content: space-between;
            }

        }

    }
</style>