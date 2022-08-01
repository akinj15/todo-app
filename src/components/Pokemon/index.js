import pokemons from './components/PokemonsComponent.vue'
import Pokemon from './components/PokemonComponent.vue'

const routes = [
    { path: 'pokemons', name: 'Lista de pokemon', component: pokemons },
    { path: 'pokemon/:id', name: 'pokemon', component: Pokemon },
];



export default { routes }
