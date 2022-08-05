<template>
    <div class="container">
        <div id="card-login">
            <div class="card-items" style="margin-top: -150px; margin-bottom: 40px;">
                <h1>Cadastrar</h1>
            </div>
            <div class="card-items">
                <p>Usuário</p>
                <input type="text" v-model="usuario">
            </div>         
            <div class="card-items">
                <p>Email</p>
                <input type="text" v-model="email">
            </div>                        
            <div class="card-items">
                <p>Senha</p>
                <input type="password" v-model="passwd1">
            </div>
            <div class="card-items">
                <p>Repetir Senha</p>
                <input type="password" v-model="passwd2">
            </div>            
            <div  class="card-items">
                <button class="" @click="cadastrarUsuario">cadastrar</button><br>
                <button class="" @click="voltar">voltar</button><br>

            </div>
        </div>
    </div>
</template>
<script>
    import Cadastro from "../controllers/CadastroController.js";
    export default Cadastro;
</script>
