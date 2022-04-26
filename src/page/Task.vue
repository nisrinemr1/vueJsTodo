<template>
    <div class="task-info">

        <!-- ******** TITLE ******** -->
        <!-- ******** TITLE ******** -->
        <!-- ******** TITLE ******** -->
        <h2>TASK INFORMATIONS</h2>

        
        <!-- ******** TASK INFO ******** -->
        <!-- ******** TASK INFO ******** -->
        <!-- ******** TASK INFO ******** -->
        <card>
            <div>
                <h3>Name of the task:</h3>
                <p>{{name}}</p>
            </div>
            <div>
                <h3>Importance of the task:</h3>
                <p>{{ category }}</p>
            </div>
            <div>
                <h3>Description of the task:</h3>
                <p>{{ description }}</p>
            </div>
        </card>


        <!-- ******** NAV LINKS ******** -->
        <!-- ******** NAV LINKS ******** -->
        <!-- ******** NAV LINKS ******** -->
        <div class="test-link">
            <router-link class="nav-link" :to="{ name : 'home' }">Home</router-link>
            <router-link class="nav-link" :to="{ name:'todo' }">Todo</router-link>
            <router-link class="nav-link" :to="{ name : 'test' }">Test</router-link>
        </div>

    </div>
</template>

<script>
export default {
    /* mounted(){
        console.log(this.$route.params)
    }, */

    data(){
        return{
            name: this.$route.params.task.name,
            category: this.$route.params.task.category,
            description: this.$route.params.task.description
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

        card{
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

                h3{
                    width: 40%;
                    text-align: start;
                }

                p{
                    width: 60%;
                    text-align: start;
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