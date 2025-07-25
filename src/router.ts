import { createRouter, createWebHistory } from 'vue-router'
import PlanetsView from './views/PlanetsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'planets',
      component: PlanetsView,
    },
  ],
})

export default router
