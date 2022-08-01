import { usePokemon } from "../store/usePokemonStore";
import { useRoute , useRouter } from "vue-router";

export default {
    setup () {
        const route = useRoute()
        const router = useRouter()
        const pokemonStore = usePokemon()
        const created = async () => { 
            
            await pokemonStore.getPokemon(route.params.id)
        }
        
        const voltar = async () => {
            await pokemonStore.iniciarPokemon()
            router.push({path: '/pokemons'})
        }
        useRouter
        created()
        return {
            pokemonStore,
            voltar
        }
    }
}