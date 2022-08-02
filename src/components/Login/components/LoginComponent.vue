<template>
    <div class="container-login-page">
        <div class="container-login">
            <p>login</p>
            <input type="text" v-model="loginStore.user.user_name">
            <p>password</p>
            <input type="password" v-model="loginStore.user.passwd">
            <button class="button" @click="login">entrar</button>
        </div>
    </div>
</template>
<script>
    import Login from "../controllers/LoginController.js";
    export default Login;
</script>
