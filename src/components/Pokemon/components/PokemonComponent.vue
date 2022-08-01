<template>
    <div class="container">
        <div class="pokemon">
            <h2 v-if="pokemonStore.pokemon">{{pokemonStore.pokemon.name}}</h2>
            <img class="img-pokemon" v-if="pokemonStore.pokemon" :src="pokemonStore.pokemon.sprites.other.dream_world.front_default" alt="">
        </div> 
        <div class="buttons">
            <button class="button" @click="voltar">voltar</button>
        </div>
    </div>
</template>
<script>
    import Pokemon from "../controllers/PokemonController.js";
    export default Pokemon;
</script>
