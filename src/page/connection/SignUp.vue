<template>

    <!-- ******************************  SING UP PAGE  ****************************** -->
    <!-- ******************************  SING UP PAGE  ****************************** -->
    <!-- ******************************  SING UP PAGE  ****************************** -->
    <div id="sign-up-page">

        <!-- *************************  HEADER  ************************* -->
        <!-- *************************  HEADER  ************************* -->
        <!-- *************************  HEADER  ************************* -->
        <header>
            <h1>Jobii</h1>
        </header>

        
        <!-- *************************  SIGN UP CONTAINER  ************************* -->
        <!-- *************************  SIGN UP CONTAINER  ************************* -->
        <!-- *************************  SIGN UP CONTAINER  ************************* -->
        <div class="sing-up-container">

            <div class="sing-up">

                <!-- ******************** TITLE ******************** -->
                <!-- ******************** TITLE ******************** -->
                <!-- ******************** TITLE ******************** -->
                <h1>S'inscrire</h1>

                <!-- ******************** SIGN UP WITH GOOGLE ******************** -->
                <!-- ******************** SIGN UP WITH GOOGLE ******************** -->
                <!-- ******************** SIGN UP WITH GOOGLE ******************** -->
                <button @click.prevent="GoogleSingUp"> Google </button>


                <!-- ******************** OR ******************** -->
                <!-- ******************** OR ******************** -->
                <!-- ******************** OR ******************** -->
                <p>ou</p>


                <!-- ******************** FIRST NAME ******************** -->
                <!-- ******************** FIRST NAME ******************** -->
                <!-- ******************** FIRST NAME ******************** -->
                <input v-model="firstNameSignUp" type="text" placeholder="Prénom">


                <!-- ******************** LAST NAME ******************** -->
                <!-- ******************** LAST NAME ******************** -->
                <!-- ******************** LAST NAME ******************** -->
                <input v-model="lastNameSingUp" type="text" placeholder="Nom de famille">


                <!-- ******************** EMAIL ******************** -->
                <!-- ******************** EMAIL ******************** -->
                <!-- ******************** EMAIL ******************** -->
                <input v-model="emailSignUp" type="email" placeholder="Email">


                <!-- ******************** PASSWORD ******************** -->
                <!-- ******************** PASSWORD ******************** -->
                <!-- ******************** PASSWORD ******************** -->
                <input v-model="passwordSignUp" type="password" placeholder="Mot de passe">


                <!-- ******************** CONNECTION BTN ******************** -->
                <!-- ******************** CONNECTION BTN ******************** -->
                <!-- ******************** CONNECTION BTN ******************** -->
                <div class="connection">
                    <button @click.prevent="signUp">S'inscrire</button>
                </div>


                <!-- ******************** ALREADY HAVE AN ACCOUNT? ******************** -->
                <!-- ******************** ALREADY HAVE AN ACCOUNT? ******************** -->
                <!-- ******************** ALREADY HAVE AN ACCOUNT? ******************** -->
                <p>Vous avez déjà un compte? <router-link class="nav-link" :to="{ name : 'signIn' }">Se connecter
                    </router-link>
                </p>

            </div>

        </div>


    </div>
</template>



<script>

    //******************** IMPORT AUTHENTIFICATIONS FROM INI.JS ********************
    //******************** IMPORT AUTHENTIFICATIONS FROM INI.JS ********************
    import {
        auth,
        db
    } from "../../firebase/init"


    //******************** IMPORT FROM AUTH (EMAIL, GOOGLE) ********************
    //******************** IMPORT FROM AUTH (EMAIL, GOOGLE) ********************
    import {
        createUserWithEmailAndPassword,
        signInWithPopup,
        GoogleAuthProvider
    } from "firebase/auth"


    //******************** IMPORT FIRESTORE ********************
    //******************** IMPORT FIRESTORE ********************
    import {
        doc,
        setDoc
    } from "firebase/firestore"


    export default {
        name: 'singUn',

        data() {
            return {
                emailSignUp: "",
                passwordSignUp: "",
                firstNameSignUp: "",
                lastNameSingUp: ""
            }
        },

        methods: {

            //******************** CREATING USER DATA TO FIRESTORE ********************
            //******************** CREATING USER DATA TO FIRESTORE ********************
            async createUser(uid, email, firstname, lastname) {
                
                await setDoc(doc(db, "users", uid), {
                    firstname: firstname,
                    lastname: lastname,
                    email: email
                })

            },


            //******************** ADDING USER TO FIREBASE AUTH WITH EMAIL ********************
            //******************** ADDING USER TO FIREBASE AUTH WITH EMAIL ********************
            signUp() {
                
                createUserWithEmailAndPassword(auth, this.emailSignUp, this.passwordSignUp)
                    //PROMISE
                    .then((data) => {
                        // GET THE USER ID FROM THE INSPECTOR : console.log(user)
                        let uid = data.user.uid

                        alert('Votre compte à été créer!')

                        //TO SEND THE USER IN DATA
                        this.createUser(uid, this.emailSignUp, this.firstNameSignUp, this.lastNameSingUp)

                    }).catch((error) => { //IF ERROR
                        const errorCode = error.code;
                        const errorMessage = error.message;
                    })
            },
            
            
            //******************** ADDING INFORMATIONS TO FIRESTORE WITH GOOGLE ********************
            //******************** ADDING INFORMATIONS TO FIRESTORE WITH GOOGLE ********************
            GoogleSingUp() {
                
                const provider = new GoogleAuthProvider();
                
                signInWithPopup(auth, provider).then((result) => {
                        //GETTING THE USER INFORMATION FROM THE DATA: console.log(user)
                        let uid = result.user.uid
                        let email = result.user.email
                        let firstname = result.user.displayName.split(' ')[0]
                        let lastname = result.user.displayName.split(' ')[1]
                        
                        // TO ADD THE USER TO THE FIRESOTRE
                        this.createUser(uid, email, firstname, lastname)
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message; // This will give you all the information needed to further debug any errors
                    });
            },

        }

    }
</script>

<style lang="scss">

    //******************************  SING UP PAGE  ******************************
    //******************************  SING UP PAGE  ******************************
    #sign-up-page {

        width: 100%;
        height: 100vw;


        //*************************  HEADER  *************************
        //*************************  HEADER  *************************
        header {

            border-left: 2px solid black;

            width: 100%;

            margin-left: 50px;

            margin-top: 0;
            
            //******************** TITLE ******************** 
            //******************** TITLE ******************** 
            h1 {
                margin-top: 0;
                margin-bottom: 0;

                padding-top: 20px;

                font-family: "como-bold";
                font-size: 2rem;
            }

        }


        //*************************  SIGN UP CONTAINER  *************************
        //*************************  SIGN UP CONTAINER  *************************
        .sing-up-container {

            width: 100%;

            padding-top: 113px;

            display: flex;
            justify-content: center;

            padding-top: 113px;
            padding-bottom: 133px;

            .sing-up {
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

            //******************** ALREADY HAVE AN ACCOUNT? ********************
            //******************** ALREADY HAVE AN ACCOUNT? ********************
            p {
                text-align: center;
            }
            
            //******************** CONNECTION BTN ********************
            //******************** CONNECTION BTN ********************
            .connection {
                padding-top: 20px;

                display: flex;
                justify-content: flex-end;
            }

        }

    }
</style>