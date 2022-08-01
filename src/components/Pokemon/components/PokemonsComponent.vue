<template>
    <div class="container">
        <header>
            <h2>lista de pokemons</h2>
        </header>
        <div class="list-pokemon ">
            <div v-for="item in pokemonStore.list_pokemon" :key="item.name" >
                <div class="item-pokemon" @click="carregarPokemon(item)">
                     {{ item.name }} 
                </div>
            </div>
        </div>
        <div class="buttons">
            <button class="button" @click="previous()">voltar</button>
            <button class="button" @click="next()">next</button>
        </div>
    </div>
</template>
<script>
    import Pokemons from "../controllers/PokemonsController.js";
    export default Pokemons;
</script>
