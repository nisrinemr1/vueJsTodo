<template>
    <div class="home-page">
        <h1>Welcome to the home page</h1>

        <card>
            <h2>Go to the todo: </h2>
            <router-link :to="{ name:'todo' }">Todo</router-link>
        </card>

    </div>
</template>

<script>
    export default {

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
            font-family: Avenir, Helvetica, Arial, sans-serif;
            text-align: center;
        }
        card {
            font-family: Avenir, Helvetica, Arial, sans-serif;
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