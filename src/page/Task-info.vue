<template>
    <div class="task-info">

        <header class="header-task">
            <!-- ******** NAV LINKS ******** -->
            <!-- ******** NAV LINKS ******** -->
            <!-- ******** NAV LINKS ******** -->
            <div class="nav-bar">
                <router-link class="nav-link" :to="{ name : 'home' }">
                    <h2> Accueil </h2>
                </router-link>
                <router-link class="nav-link" :to="{ name : 'test' }">
                    <h2> Test </h2>
                </router-link>
                <router-link class="nav-link" :to="{ name : 'todo' }">
                    <h2> Todo </h2>
                </router-link>
            </div>


            <!-- ******** USER ******** -->
            <div class="user">
                <h2>{{userName}}</h2>
                <button @click="deco">Déconnection</button>
            </div>

        </header>

        <hr />

        <!-- ******** TITLE ******** -->
        <!-- ******** TITLE ******** -->
        <!-- ******** TITLE ******** -->
        <h2 class="title">MODIFIER LA TÂCHE</h2>


        <!-- ******** TASK INFO ******** -->
        <!-- ******** TASK INFO ******** -->
        <!-- ******** TASK INFO ******** -->
        <div class="taskInfo-card">

            <div class="row">
                <h3 class="h3">Nom de la tâche:</h3>
                <input v-model="name" type="text">
            </div>

            <div class="row">
                <h3 class="h3">Importance de la tâche:</h3>

                <select v-model="category">

                    <!-- ******** OPTION CATEGORY OF IMPORTANCE ******** -->
                    <option value="urgent">Urgent</option>
                    <option value="important">Important</option>
                    <option value="pasimportant">Pas important</option>

                </select>

            </div>

            <div class="row">

                <h3 class="h3">Description de la tâche:</h3>
                <textarea v-model="description" class="textarea" cols="60" rows="20"></textarea>

            </div>

            <div class="update-task-btn">
                <button @click="update">Modifier</button>
            </div>
        </div>


    </div>
</template>

<script>
    import {
        onAuthStateChanged,
        signOut
    } from "firebase/auth"

    import { // pour initialiser
        auth, // parametre le projet
        db
    } from "./../firebase/init"

    import {
        doc,
        getDoc,
        updateDoc
    } from "firebase/firestore";


    export default {

        data() {
            return {

                id: this.$route.params.slug,

                name: null,
                category: null,
                description: null,

                userName: "",

                task: [],

                taskId: null

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
            },

            async showTask() {

                const docRef = doc(db, "todos", this.id);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    console.log("Document data:", docSnap.data())

                    console.log(this.id)

                    this.name = docSnap.data().name
                    this.category = docSnap.data().category
                    this.description = docSnap.data().description


                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }

            },

            async update() {
                const updateTask = doc(db, "todos", this.id);

                // Set the "capital" field of the city 'DC'
                await updateDoc(updateTask, {
                    name: this.name,
                    category: this.category,
                    description: this.description
                });

                alert("Votre tâche à bien été modifiée!")

                this.$router.push("/todo")

            }
        },

        created() { //avant meme que l'html soit affiché on reg si il est enregistrer 


            onAuthStateChanged(auth, (user) => { // regarder si il est co et on y recupère le uid

                if (user) {

                    const displayName = user.displayName
                    this.userName = displayName

                    this.uid = user.uid


                    this.showTask()

                } else {
                    this.$router.push('/')
                }

            })
        }
    }
</script>

<style lang="scss" scoped>
    .task-info {

        height: 100vh;
        width: 100vw;

        text-align: center;

        overflow-y: inherit;

        display: flex;
        flex-direction: column;
        align-items: center;


        .header-task {
            width: 100%;

            top: 0;

            display: flex;


            .nav-bar {
                width: 50%;

                display: flex;
                flex-direction: row;

                align-items: center;
                justify-content: space-around;

                .nav-link {
                    color: black;

                    text-decoration: none;

                }

            }

            .user {
                width: 50%;

                display: flex;

                flex-direction: column;
                align-items: flex-end;

                padding-right: 50px;

                padding-bottom: 20px;

            }
        }

        hr {
            width: 100%;
        }


        .title {
            padding-top: 10px;
            padding-bottom: 30px;
        }

        .taskInfo-card {
            padding-top: 20px;
            padding-bottom: 100px;


            width: 100%;

            display: flex;
            align-items: center;
            flex-direction: column;
            column-gap: 40px;

            .row {

                width: 70%;

                display: flex;

                align-items: flex-start;

                padding-bottom: 40px;
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

            h3 {
                width: 40%;
                text-align: start;

                margin: 0;
            }

            p {
                width: 60%;
                text-align: start;
            }

            .textarea {
                border-radius: 10px;
                border: 1px solid #b5b5b5;

                padding-top: 10px;
                padding-bottom: 10px;

                padding-left: 10px;
                padding-right: 10px;

                resize: none;
            }

            .update-task-btn {

                width: 100%;

                padding-top: 30px;

                display: flex;

                justify-content: center;

            }
        }
    }
</style>