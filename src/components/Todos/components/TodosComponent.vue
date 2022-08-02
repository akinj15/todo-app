<template>
    <div class="container">
        <div class="div-button-logout">
            <button class="button button-logout">logout</button>
        </div>
        <div class="todo" >
            <input type="text" v-model="todoStore.todo.title">
            <input type="text" v-model="todoStore.todo.todo_description">
            <input  type="checkbox" v-model="todoStore.todo.todo_done" name="" id="">
            <button class="button button-logout" @click="adcionarTodo">Adicionar todo</button>

        </div>
        <div class="container-lista">
            <div class="card-todo"  v-for="item in todoStore.todos" key="item.todo_id">
                <div class="card-header">
                    {{item.title}}
                </div>
                <div class="card-body">
                    {{item.todo_description}}
                </div>
                <div class="card-footer">
                    <input  type="checkbox" v-model="item.todo_done" name="" id="">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Todos from "../controllers/TodosController.js";
    export default Todos;
</script>
