import { useRoute , useRouter } from "vue-router";
import { useLogin } from "../store/useLoginStore"

export default {
    setup () {
        const loginStore = useLogin()
        const route = useRoute()
        const router = useRouter()

        const login = async () => {
            await loginStore.login()
            loginStore.user.passwd = await ''
            localStorage.setItem('user',JSON.stringify(loginStore.user) )
            router.push({path: '/todos'})
        }

        return {
            login,
            loginStore
        }
    }
}