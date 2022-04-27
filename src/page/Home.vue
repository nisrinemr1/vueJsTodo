<template>
    <div class="home-page">
        <h1>Bienvenue dans la page d'accueil!</h1>

        <div class="home-card">

            <h2>Aller sur la  <router-link :to="{ name:'todo' }">todo: </router-link></h2>

        </div>

    </div>
</template>

<script>

    export default {
        data(){
            return{

                userName:""

            }
        }
    }
</script>

<style lang="scss" scoped>

    .home-page{
        display: flex;
        flex-direction: column;
        align-items: center;

        h1 {
            padding-top: 70px;
            padding-bottom: 70px;
            text-align: center;
        }
        .home-card {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            width: 320px;
            height: 306px;
            background-color: #fac9df95;
            border-radius: 15px;
            box-shadow: -3px -3px 3px 0 rgba(#26e6f7, 0.3), 3px 3px 3px 0 rgba(#f759e4, 0.3), 0px 0px 6px 2px rgba(#ffe759, 0.3), 0px 35px 25px -15px rgba(0, 0, 0, 0.3);
        }
    }
</style>