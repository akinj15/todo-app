import { useRoute , useRouter } from "vue-router";
import { ref } from 'vue'
import { useLogin } from '../../Login/store/useLoginStore'
export default {
    setup () {
        const route = useRoute()
        const router = useRouter()
        const loginStore = useLogin()
        let usuario = ref('');
        let email = ref('')
        let passwd1 = ref('')
        let passwd2 = ref('')

        const cadastrarUsuario = async () => {
            if( passwd1.value == passwd2.value) {
                let user = { 
                    user_name : usuario.value,
                    user_email : email.value,
                    passwd : passwd1.value
                }
                await loginStore.criarUsuario({...user})
                router.push({path:'/'})
            }
        }
                
        const voltar = () => router.push({path:'/'})

        return {
            cadastrarUsuario,
            voltar,
            usuario,
            email,
            passwd1,
            passwd2,
        }
    }
}