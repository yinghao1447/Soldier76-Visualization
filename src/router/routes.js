import Main from '@/views/main/Main.vue'

const isProd = process.env.NODE_ENV === 'production'

const routes = [
    {
        name: 'config',
        path: '/config',
        component: Main,
        meta: { title: '脚本配置' },
        children: [
            {
                name: 'baseConfig',
                path: 'base-config',
                meta: { title: '基础配置' },
                component: () => import('@/views/config/BaseConfig.vue')
            },
            {
                name: 'gunLibrary',
                path: 'gun-library',
                meta: { title: '枪械库' },
                component: () => import('@/views/config/GunLibrary.vue')
            },
            {
                name: 'viewSourceCode',
                path: 'view-source-code',
                meta: { title: '查看源码' },
                component: () => import('@/views/config/ViewSourceCode.vue')
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
