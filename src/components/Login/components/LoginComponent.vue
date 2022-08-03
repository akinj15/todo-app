<template>
    <div class="container-login-page">
        <div class="container-login">
            <p>login</p>
            <input type="text" v-model="user">
            <p>password</p>
            <input type="password" v-model="password">
            <button class="button" @click="login">entrar</button>
        </div>
    </div>
</template>
<script>
    import Login from "../controllers/LoginController.js";
    export default Login;
</script>
