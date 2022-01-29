import {createRouter, createWebHashHistory, Router, RouteRecordRaw} from 'vue-router'
import Index from '../views/index/Index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    component: Index,
  },
]
const router: Router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
