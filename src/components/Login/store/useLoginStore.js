import { defineStore } from 'pinia'
import http from '../../../HTTP/axios.js'

export const useLogin = defineStore('Login', {
    state: () => ({ 
        user: {
            user_name: '',
            passwd: ''
        },
    }),
    getters: {
        // double: (state) => state.count * 2,
    },
    actions: {
        async login (obj) {
            let user = obj ?? this.user
            let url = `/user/${user.user_name}/${user.passwd}` 
            console.log(url)
            await http.getData(url).then( response => {
                this.user = response.data[0]
                console.log(this.user)
            }).catch(e => console.log(e))
            return
        },
        // async getlistPokemon (proximo) {

        //     let url = this.baseURL 
        //     console.log(this.next)
        //     let uri = this.next
        //     http.getData(uri).then( response => {
        //         this.list_pokemon = response.data.results
        //         this.next = response.data.next
        //         this.previous = response.data.previous
        //     }).catch(e => console.log(e))
        //     return
        // },


        
        // async getPokemon (id) {
        //     if(id){
        //         let url = this.baseURL + `pokemon/${id}`
        //         http.getData(url).then( response => {
        //             this.pokemon = response.data
        //         }).catch(e => console.log(e))
        //         return
        //     }
        //     console.log('pokemon sem id')
        // },   
        // async iniciarPokemon (id) {
        //     this.pokemon = {}
        // },   
    },
})

