import { useRoute , useRouter } from "vue-router";
import Todos from "..";
import { useTodo } from "../store/useTodoStore"

export default {
    setup () {
        const todoStore = useTodo()
        const route = useRoute()
        const router = useRouter()

        const user = JSON.parse(localStorage.getItem('user'))
        const created = async () => { 
            if(!user?.user_id){
                router.push({path: '/'})
                return
            }
            await todoStore.getTodos(user)
        }
        created()

        const adcionarTodo = async () => {
            await todoStore.postTodo(user)
            todoStore.todo.title = ''
            todoStore.todo.todo_description = ''
            todoStore.todo.todo_done = false
        }
        const concluirTodo = async (item) => {
            let obj = {
                todo_id: item.todo_id,
                user_id: JSON.parse(localStorage.getItem('user')).user_id,
                title: item.title,
                todo_description: item.todo_description,
                todo_done : !item.todo_done
            }
            await todoStore.putTodo(obj)
            created()
        }
        const deletarTodo = async (item) => {
            if(await todoStore.deleteTodo(item)){
                await created()
            }
        }
        const logout = async () => {
            localStorage.removeItem('user')
            router.push({path: '/'})
        }
        return {
            todoStore,
            adcionarTodo,
            deletarTodo,
            concluirTodo,
            logout,
        }
    }
}