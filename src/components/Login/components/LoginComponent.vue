<template>
    <div class="container">
        <div id="card-login">
            <div class="card-items" style="margin-top: -150px; margin-bottom: 40px;">
                <h1>TAREFAS</h1>
            </div>
            <div class="card-items">
                <p>login</p>
                <input type="text" v-model="user">
            </div>            
            <div class="card-items">
                <p>password</p>
                <input type="password" v-model="password">
            </div>
            <div  class="card-items">
                <button class="" @click="login" @keypress.enter="login">entrar</button><br>
                <a @click="cadastro">cadastrar</a>
            </div>
        </div>
    </div>
</template>
<script>
    import Login from "../controllers/LoginController.js";
    export default Login;
</script>
