<template>
    <header>
        <div class="titulo">
            <h2>TAREFAS</h2>
        </div>
        <div class="logout">
            <button @click="logout">logout</button>
        </div>
    </header>
    <div class="container">
        <div id="adcionar-todo" >
            <div>
                <p>titulo</p>
                <input type="text" v-model="todoStore.todo.title">
            </div>
            <div>
                <p>descição</p>
                <input type="text" v-model="todoStore.todo.todo_description">
            </div>
            <button class="" @click="adcionarTodo">Adicionar todo</button>
        </div>
        <main>
            <div class="todos"  v-for="item in todoStore.todo_pendentes" key="item.todo_id">
                <div class="todo-text">
                    <h4>
                        {{item.title}}
                    </h4>
                    <p>
                        {{item.todo_description}}
                    </p>
                </div>
                <div class="">
                    <input disable type="checkbox" v-model="item.todo_done" name="" id="">
                    <button class="" @click="deletarTodo(item)">deletar</button>
                    <button class="" @click="concluirTodo(item)">{{!item.todo_done ? 'concluir' : 'refazer'}}</button>
                </div>
            </div>
            <div class="todos"  v-for="item in todoStore.todo_concluidas" key="item.todo_id">
                <div class="todo-text">
                    <h4>
                        {{item.title}}
                    </h4>
                    <p>
                        {{item.todo_description}}
                    </p>
                </div>
                <div class="">
                    <input disable type="checkbox" v-model="item.todo_done" name="" id="">
                    <button class="" @click="deletarTodo(item)">deletar</button>
                    <button class="" @click="concluirTodo(item)">{{!item.todo_done ? 'concluir' : 'refazer'}}</button>
                </div>
            </div>            
        </main>
    </div>
</template>
<script>
    import Todos from "../controllers/TodosController.js";
    export default Todos;
</script>
