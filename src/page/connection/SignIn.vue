<template>


    <!-- ******************************  SING IN PAGE  ****************************** -->
    <!-- ******************************  SING IN PAGE  ****************************** -->
    <!-- ******************************  SING IN PAGE  ****************************** -->
    <div id="sign-in-page">


        <!-- *************************  HEADER  ************************* -->
        <!-- *************************  HEADER  ************************* -->
        <!-- *************************  HEADER  ************************* -->
        <header>

            <h1>Jobii</h1>

        </header>


        <!-- *************************  SIGN IN CONTAINER  ************************* -->
        <!-- *************************  SIGN IN CONTAINER  ************************* -->
        <!-- *************************  SIGN IN CONTAINER  ************************* -->
        <div class="sing-in-container">

            <div class="sing-in">

                <!-- ******************** TITLE ******************** -->
                <!-- ******************** TITLE ******************** -->
                <!-- ******************** TITLE ******************** -->
                <h1>Se connecter</h1>


                <!-- ******************** SIGN IN WITH GOOGLE ******************** -->
                <!-- ******************** SIGN IN WITH GOOGLE ******************** -->
                <!-- ******************** SIGN IN WITH GOOGLE ******************** -->
                <button @click.prevent="GoogleSingIn"> Google </button>


                <!-- ******************** OR ******************** -->
                <!-- ******************** OR ******************** -->
                <!-- ******************** OR ******************** -->
                <p>ou</p>


                <!-- ******************** EMAIL ******************** -->
                <!-- ******************** EMAIL ******************** -->
                <!-- ******************** EMAIL ******************** -->
                <input v-model="emailSignIn" type="email" placeholder="Email">


                <!-- ******************** PASSWORD ******************** -->
                <!-- ******************** PASSWORD ******************** -->
                <!-- ******************** PASSWORD ******************** -->
                <input v-model="passwordSignIn" type="password" placeholder="Mot de passe">


                <!-- ******************** CONNECTION BTN ******************** -->
                <!-- ******************** CONNECTION BTN ******************** -->
                <!-- ******************** CONNECTION BTN ******************** -->
                <div class="connection">

                     <!-- *************** FORGOT PASSWORD *************** -->
                     <!-- *************** FORGOT PASSWORD *************** -->
                     <!-- *************** FORGOT PASSWORD *************** -->
                    <p>Mot de passe oublié?</p>


                    <!-- *************** SIGN-IN BTN *************** -->
                    <!-- *************** SIGN-IN BTN *************** -->
                    <!-- *************** SIGN-IN BTN *************** -->
                    <button @click.prevent="signIn">Se connecter</button>

                </div>

                <!-- ******************** DON'T HAVE AN ACCOUNT YET? ******************** -->
                <!-- ******************** DON'T HAVE AN ACCOUNT YET? ******************** -->
                <!-- ******************** DON'T HAVE AN ACCOUNT YET? ******************** -->
                <p>Vous n'avez pas de compte? <router-link class="nav-link" :to="{ name : 'signUp' }">Inscrivez-vous maintenant!</router-link> </p>

            </div>
        </div>
    </div>
</template>

<script>
    //IMPORT AUTH AND FUNCTIONS FROM INIT.JS
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

            //TO SIGN IN WITH THE CREATED AUTHENTIFICATION (EMAIL)
            //TO SIGN IN WITH THE CREATED AUTHENTIFICATION (EMAIL)
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


            //TO SIGN IN WITH THE CREATED AUTHENTIFICATION (GMAIL)
            //TO SIGN IN WITH THE CREATED AUTHENTIFICATION (GMAIL)
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

        //*************************  HEADER  *************************
        //*************************  HEADER  *************************
        header {

            border-left: 2px solid black;

            width: 100%;

            margin-left: 50px;

            margin-top: 0;


            //********************  LOGO JOBII  ********************
            //********************  LOGO JOBII  ********************
            h1 {
                margin-top: 0;
                margin-bottom: 0;

                padding-top: 20px;

                font-family: "como-bold";
                font-size: 2rem;
            }

        }


        //*************************  SIGN IN CONTAINER  *************************
        //*************************  SIGN IN CONTAINER  *************************
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
                
                //******************** TITLE ********************
                //******************** TITLE ********************
                h1 {
                    width: 100%;
                }
            }
            
            //*************** SIGN-IN BTN ***************
            //*************** SIGN-IN BTN ***************
            .connection{
                padding-top: 20px;

                display: flex;
                justify-content: space-between;
            }

            //******************** DON'T HAVE AN ACCOUNT YET? ********************
            //******************** DON'T HAVE AN ACCOUNT YET? ********************
            p{
                text-align: center;
            }
        }

    }
</style>