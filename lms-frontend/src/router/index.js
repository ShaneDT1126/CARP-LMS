import { createRouter, createWebHistory } from 'vue-router'
import LandingPageView from "@/views/LandingPageView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: LandingPageView
    },
  ]
})

export default router
