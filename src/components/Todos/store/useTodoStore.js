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
            http.getData(url).then( response => {
                this.todos = response.data
            }).catch(e => console.log(e))
            return
        },
        async postTodo (obj) {
            let url = `/todo/${obj.user_id}` 
            http.postData(url, this.todo).then( response => {
                this.todos.push(response.data[0])
            }).catch(e => console.log(e))
            return
        },
        async putTodo (obj) {
            let url = `/todo/${obj.user_id}/${obj.todo_id}` 
            let todo = {
                todo_id: obj.todo_id,
                title: obj.title,
                todo_description: obj.todo_description,
                todo_done : obj.todo_done
            }
            http.putData(url, todo).then( response => {
                console.log(response.data[0])
                let index = -1
                index = this.todos.findIndex(item => item.todo_id == response.data[0].todo_id);
                console.log(index)
                this.todos[index] = response.data[0]
                // this.todos.push(response.data[0])
            }).catch(e => console.log(e))
            return
        },
        async deleteTodo (obj) {
            let url = `/todo/${obj.user_id}/${obj.todo_id}` 
            console.log(url)
            http.deleteData(url).then( response => {
                let index = -1
                index = this.todos.findIndex(item => item.todo_id == response.data[0].todo_id);
                console.log(index)
                if (index > -1) {
                    this.todos.splice(index, 1);
                }

            }).catch(e => console.log(e))
            return
        },
    },
})

