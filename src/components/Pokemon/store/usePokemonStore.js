import { defineStore } from 'pinia'
import http from '../../../HTTP/axios.js'

export const usePokemon = defineStore('Pokemon', {
    state: () => ({ 
        next: '',
        previous: '',
        pokemon: null,
        list_pokemon : [] ,
        baseURL: `https://pokeapi.co/api/v2/`
    }),
    getters: {
        // double: (state) => state.count * 2,
    },
    actions: {
        async getlistPokemon (proximo) {

            let url = this.baseURL + 'pokemon' 
            if ( proximo?.next) {
                console.log(this.next)
                let uri = this.next
                http.getData(uri).then( response => {
                    this.list_pokemon = response.data.results
                    this.next = response.data.next
                    this.previous = response.data.previous
                }).catch(e => console.log(e))
                return
            }
            if ( proximo?.previous) {
                console.log(this.next)
                let uri = this.previous
                http.getData(uri).then( response => {
                    this.list_pokemon = response.data.results
                    this.next = response.data.next
                    this.previous = response.data.previous
                }).catch(e => console.log(e))
                return
            }
            http.getData(url).then( response => {
                this.list_pokemon = response.data.results
                this.next = response.data.next
                this.previous = response.data.previous
            }).catch(e => console.log(e))
        },


        
        async getPokemon (id) {
            if(id){
                let url = this.baseURL + `pokemon/${id}`
                http.getData(url).then( response => {
                    this.pokemon = response.data
                }).catch(e => console.log(e))
                return
            }
            console.log('pokemon sem id')
        },   
        async iniciarPokemon (id) {
            this.pokemon = {}
        },   
    },
})

