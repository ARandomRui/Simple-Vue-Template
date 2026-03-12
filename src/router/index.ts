import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../views/MainPage.vue'
import StorePage from '../views/StorePage.vue'
import TestPage from '../views/TestPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainPage,
    },
    {
      path: '/store',
      name: 'store',
      component: StorePage,
    },
    {
      path: '/test',
      name: 'test',
      component: TestPage,
    },
  ],
})

export default router
