import { createRouter, createWebHistory } from 'vue-router'
import LandingPageView from "@/views/landing_page/LandingPageView.vue";
import AboutView from "@/views/landing_page/AboutView.vue";
import SignupView from "@/views/landing_page/SignupView.vue";
import LoginView from "@/views/landing_page/LoginView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: LandingPageView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignupView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
  ]
})

export default router
