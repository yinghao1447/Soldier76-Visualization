import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes.js'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect: routes[0].path
        },
        ...routes
    ]
})

export default router
