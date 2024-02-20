import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes.js'

const router = createRouter({
    history: createWebHashHistory(),

    routes: [
        {
            path: '/',
            redirect: routes[0].path
        },
        ...routes
    ]
})

export default router
