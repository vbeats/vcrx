import {createRouter, createWebHashHistory, Router, RouteRecordRaw} from 'vue-router'

const Index = import.meta.glob('../views/index/index.vue')['../views/index/index.vue']

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'index',
        component: Index,
    },
    {
        path: '/:pathMatch(.*)*', // 404
        name: 'NotFound',
        redirect: '/index'
    },
]
const router: Router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router