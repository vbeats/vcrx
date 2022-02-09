import {createRouter, createWebHashHistory, Router, RouteRecordRaw} from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    component: () => import(/* webpackChunkName: "index" */ '../views/index/Index.vue'),
  },
]
const router: Router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
