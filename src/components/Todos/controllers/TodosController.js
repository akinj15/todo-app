import { useRoute , useRouter } from "vue-router";
import { useTodo } from "../store/useTodoStore"

export default {
    setup () {
        const todoStore = useTodo()
        const route = useRoute()
        const router = useRouter()

        const user = JSON.parse(localStorage.getItem('user'))
        const created = async () => { 
            await todoStore.getTodos(user)
        }

        const adcionarTodo = async () => {
            await todoStore.postTodo(user)
        }
        const concluirTodo = async (item) => {
            
            await todoStore.putTodo()
        }
        created()
        return {
            todoStore,
            adcionarTodo,
        }
    }
}