import { route } from 'quasar/wrappers'
import {
  createRouter,
  createWebHistory,
  createWebHashHistory, createMemoryHistory
} from 'vue-router'

export default route(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : (process.env.VUE_ROUTER_MODE === 'history' ? createWebHistory : createWebHashHistory)

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes: [
      { path: '/', component: () => import('pages/HomePage.vue') },
      { path: '/login', component: () => import('pages/LoginPage.vue') },
      { path: '/reg', component: () => import('pages/RegisterPage.vue') }
    ],
    history: createHistory(process.env.VUE_ROUTER_BASE)
  })

  return Router
})
