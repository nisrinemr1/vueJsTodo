<template>
    <div>
        <div class="form">

            <!-- ******** HIDE FORM BTN ******** -->
            <button @click="closeForm" class="close-form-btn">X</button>

            <!-- ******** TASK FORM ******** -->
            <form @submit.prevent="add">

                <!-- ******** LABEL ******** -->
                <label> Ajout de tâche:</label>

                <!-- ******** INPUT TASK ******** -->
                <input v-model="name" type="text">


                <!-- ******** SELECT CATEGORY ******** -->
                <select v-model="category">

                    <!-- ******** OPTION CATEGORY OF IMPORTANCE ******** -->
                    <option value="urgent">Urgent</option>
                    <option value="important">Important</option>
                    <option value="pasimportant">Pas important</option>

                </select>


                <!-- ******** ADD TASK BTN ******** -->
                <button type="submit">Ajouter</button>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "todo-form",
        props: {
            close: Boolean,
        },

        data() {
            return {
                /* **** HIDE FORM **** */
                hide: "",

                /* **** TODO OBJECT **** */
                    name: "",
                    category: ""
            }
        },


        methods: {
            /* **** CLOSE FORM METHODS ON CLICK **** */
            closeForm() {
                /*  TO CHANGE THE SHOW_FORM FROM TRUE TO FALSE  */
                this.show_form = false

                /*  TO SEND THE MODIFICATION TO THE PARENT  */
                this.$emit('update:close', !this.close)
            },

            add(){

                if (!this.name && !this.category) {
                    alert('Ajouter une tâche')
                }

                this.$emit('add', {name: this.name, category: this.category})

                /* this.todo.name = ''
                this.todo.category = '' */
                }
        }
    }
</script>

<style lang="scss" scoped>
    .form {
        overflow: hidden;
        position: fixed;
        overflow-y: scroll;
        bottom: 0;
        left: 0;
        width: 100vw;
        display: flex;
        justify-content: end;
        flex-direction: row-reverse;
        background-color: white;
        padding-top: 20px;
        padding-bottom: 30px;

        .close-form-btn {
            margin-bottom: 60px;
            margin-right: 40px;
            border: none;
            font-size: 1.1rem;
            background-color: white;
            color: black;
        }

        form {
            padding-top: 40px;

            label {
                padding-right: 15px;
            }

            input {
                margin-right: 15px;
                border-radius: 20px;
                background-color: rgb(253, 197, 207);
                border: none;
                padding-top: 5px;
                padding-bottom: 5px;
                padding-left: 15px;
                box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
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

            button {
                padding-top: 10px;
                padding-bottom: 10px;
                padding-left: 10px;
                padding-right: 10px;
                background-color: rgb(253, 197, 207);
                color: black;
                border: none;
                border-radius: 20px;
                box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
            }

            button:hover {
                background-color: rgb(254, 212, 220);
            }
        }
    }
</style>