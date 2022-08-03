import { useRoute , useRouter } from "vue-router";
import { useLogin } from "../store/useLoginStore"
import { ref } from 'vue'

export default {
    setup () {
        const loginStore = useLogin()
        const route = useRoute()
        const router = useRouter()

        let user = ref('')
        let password = ref('')
        const isLoged = JSON.parse(localStorage.getItem('user'))
        const created = async () => {
            if(isLoged?.user_id) {
                router.push({path: '/todos'})
                return
            }
            user.value = ''
            password.value = ''
            
        }
        created()

        const login = async () => {
            let log = {
                user_name: user.value,
                passwd:   password.value
            }

            await loginStore.login(log)
            loginStore.user.passwd = ''
            localStorage.setItem('user',JSON.stringify(loginStore.user) )
            router.push({path: '/todos'})
        }

        return {
            login,
            loginStore,
            user,
            password,
        }
    }
}