import { useRoute , useRouter } from "vue-router";
import { useLogin } from "../store/useLoginStore"

export default {
    setup () {
        const loginStore = useLogin()
        const route = useRoute()
        const router = useRouter()

        const login = async () => {
            if(await loginStore.login()){
                
                router.push({path: '/todos'})
                return
            }
        }

        return {
            login,
            loginStore
        }
    }
}