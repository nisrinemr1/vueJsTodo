<template>
    <div class="test">
        <h1>I'm a test page ☺️</h1>


        <div>
            <router-link :to="{ name : 'home' }"> &#8604; </router-link>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>

    .test{
        height: 100vh;
        width: 100vw;
        padding-bottom: 400px;
        display: flex;
        align-items: center;
        flex-direction: column;
        flex: 1;
        font-family: Avenir, Helvetica, Arial, sans-serif;
        overflow-y: inherit;

            div{
                font-size: 4rem;
                color: #FFFFFF;
                text-decoration: none;
            }
        }

</style>