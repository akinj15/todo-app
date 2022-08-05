import { createRouter, createWebHistory } from 'vue-router';

// import de view 
import index from '../views/IndexView.vue' 
import Login from '../views/LoginView.vue' 

//import de components
import login from '../components/Login'
import Cadastro from '../components/Cadastro';

import todos from '../components/Todos'

const listRoutes = [
    ...todos.routes
] 
const routes = [
    {
        path: '/',
        component: Login,
        children: [
            ...login.routes,
            ...Cadastro.routes,
        ]
    },
    {
        path: '/sys',
        component: index,
        children: [
            ...listRoutes,
        ]
    },
];

const router = createRouter({
    history : createWebHistory(),
    routes : routes
})



export default router;
