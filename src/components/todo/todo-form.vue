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
                <input v-model="todo.name" type="text">


                <!-- ******** SELECT CATEGORY ******** -->
                <select v-model="todo.category">

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
            list: Array
        },

        data(){
            return{
                /* **** HIDE FORM **** */
                hide:"",

                /* **** TODO OBJECT **** */
                todo: {
                    name: "",
                    category: ""
                },
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

            add(e) {
                /*  TO CANCEL THE SUBMIT EVENT  */
                e.preventDefault()

                /*  ALERT WHEN THE INPUT IS EMPTY  */
                if(!this.todo.name){
                    alert('Ajouter une tâche')
                    /* TODO a demanader  */
                    return
                }

                /*  TO PUSH THE OBJECT TO THE LIST  */
                this.list.push({
                    name: this.todo.name,
                    category: this.todo.category
                })

                /* TO SEND THE LIST UPDATE TO THE PARENT */
                this.$emit('listUpdate', {...this.list})

                /* TO CLEAR THE FORM */
                this.todo.name = ''
                this.todo.category = ''
            },
        }
    }
</script>

<style lang="scss" scoped>

</style>