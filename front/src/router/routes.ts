import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('pages/HomePage.vue')
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  },
  {
    path: '/reg',
    component: () => import('pages/RegisterPage.vue')
  },
  {
    path: '/login',
    component: () => import('pages/LoginPage.vue')
  }
]

export default routes
