import { defineStore } from 'pinia'
import http from '../../../HTTP/axios.js'

export const useTodo = defineStore('Todo', {
    state: () => ({ 
        todo: {
            title: '',
            todo_description: '',
            todo_done : false
        },
        teste: null,
        todos: []
    }),
    getters: {
        // double: (state) => state.count * 2,
    },
    actions: {
        async getTodos (obj) {
            let url = `/todo/${obj.user_id}` 
            console.log(url)
            http.getData(url).then( response => {
                this.todos = response.data
            }).catch(e => console.log(e))
            return
        },
        async postTodo (obj) {
            let url = `/todo/${obj.user_id}` 
            console.log(url)
            http.postData(url, this.todo).then( response => {
                this.todos.push(response.data[0])
            }).catch(e => console.log(e))
            return
        },
        async putTodo (obj) {
            let url = `/todo/${obj.user_id}/${obj.todo_id}` 
            let todo = {
                title: obj.title,
                todo_description: obj.todo_description,
                todo_done : obj.todo_done
            }
            console.log(url)
            http.putData(url, todo).then( response => {
                let item = this.todos.find(item => item.todo_id == response.data[0].todo_is)
                console.log(item)
                // this.todos.push(response.data[0])
            }).catch(e => console.log(e))
            return
        },
    },
})

