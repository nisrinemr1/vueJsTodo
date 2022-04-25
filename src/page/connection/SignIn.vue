<template>
    <div id="sign-in-page">

        <header>

            <h1>Jobii</h1>

        </header>


        <div class="sing-in-container">

            <div class="sing-in">
                <h1>Se connecter</h1>

                <button> Google </button>

                <p>ou</p>

                <input type="email" placeholder="Email">
                <input type="text" placeholder="Mot de passe">

                <div class="connection">

                    <p>Mot de passe oublié?</p>
                    <button>Se connecter</button>

                </div>

            </div>


        </div>


    </div>
</template>

<script>
    export default {
        name: 'singIn'

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