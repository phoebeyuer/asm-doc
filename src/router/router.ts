import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Helloword',
    component: () => import('@/pages/index/index.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/pages/login/login.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
