import Main from '@/views/main/Main.vue'

const isProd = process.env.NODE_ENV === 'production'

const routes = [
    {
        name: 'menu1',
        path: '/menu1',
        component: Main,
        meta: { title: '菜单1' },
        children: [
            {
                name: 'menu1-1',
                path: 'menu1-1',
                meta: { title: '菜单1-1' },
                component: () => import('@/views/HomeView.vue')
            }
        ]
    }
]

// 开发环境下添加 UI Demo 路由
if (!isProd) {
    routes.push({
        name: 'ui-demo',
        path: '/ui-demo',
        meta: { title: 'UI Demo' },
        component: Main,
        children: [
            {
                name: 'form',
                path: 'form',
                meta: { title: '表单' },
                component: () => import('@/views/ui-demo/FormDemo.vue')
            }
        ]
    })
}

export default routes
