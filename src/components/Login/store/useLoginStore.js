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
            await http.getData(url).then( response => {
                this.user = response.data[0]
            }).catch(e => console.log(e))
            return
        },
        async criarUsuario (obj) {
            let user = obj ?? this.user
            let url = `/user` 
            await http.postData(url, user).then( response => {
                this.user = response.data[0]
            }).catch(e => console.log(e))
            return
        },
   
    },
})

