<template>
    <div id="sign-up-page">

        <header>

            <h1>Jobii</h1>

        </header>


        <div class="sing-in-container">

            <div class="sing-in">
                <h1>S'inscrire</h1>

                <button @click.prevent="GoogleSingUp"> Google </button>

                <p>ou</p>

                <input v-model="firstNameSignUp" type="text" placeholder="Prénom">
                <input v-model="lastNameSingUp" type="text" placeholder="Nom de famille">

                <input v-model="emailSignUp" type="email" placeholder="Email">
                <input v-model="passwordSignUp" type="password" placeholder="Mot de passe">


                <div class="connection">

                    <button @click.prevent="signUp">S'inscrire</button>

                </div>

                <p>Vous avez déjà un compte? <router-link class="nav-link" :to="{ name : 'signIn' }">Se connecter
                    </router-link>
                </p>


            </div>


        </div>


    </div>
</template>

<script>
    import {
        auth,
        db
    } from "../../firebase/init"
    import {
        createUserWithEmailAndPassword,
        signInWithPopup,
        GoogleAuthProvider
    } from "firebase/auth"
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

            signUp() {
                createUserWithEmailAndPassword(auth, this.emailSignUp, this.passwordSignUp)
                    .then((data) => {
                        let uid = data.user.uid
                        alert('Votre compte à été créer!')
                        console.log(data.user.uid)
                        this.createUser(uid, this.emailSignUp, this.firstNameSignUp, this.lastNameSingUp)
                    }).catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                    })
            },

            async createUser(uid, email, firstname, lastname) {
                await setDoc(doc(db, "users", uid), {
                    firstname: firstname,
                    lastname: lastname,
                    email: email
                })
            },

            GoogleSingUp() {
                const provider = new GoogleAuthProvider();

                signInWithPopup(auth, provider).then((result) => {
                        let uid = result.user.uid
                        let email = result.user.email
                        let firstname = result.user.displayName.split(' ')[0]
                        let lastname = result.user.displayName.split(' ')[1]

                        this.createUser(uid, email, firstname, lastname)

                        console.log(uid, email, firstname, lastname)
                        console.log(result)
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

            p {
                text-align: center;
            }

            .connection {
                padding-top: 20px;

                display: flex;
                justify-content: flex-end;
            }

        }

    }
</style>