import { createRouter, createWebHistory } from 'vue-router'
import MainView from '@/pages/MainView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'planets',
      component: MainView,
    },
  ],
})

export default router
