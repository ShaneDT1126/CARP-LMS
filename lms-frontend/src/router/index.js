import { createRouter, createWebHistory } from 'vue-router'
import LandingPageView from "@/views/landing_page/LandingPageView.vue";
import AboutView from "@/views/landing_page/AboutView.vue";
import SignupView from "@/views/landing_page/SignupView.vue";
import LoginView from "@/views/landing_page/LoginView.vue";
import StudentDashboardView from "@/views/student/StudentDashboardView.vue";
import StudentSignupView from "@/views/student/StudentSignupView.vue";
import TeacherSignupView from "@/views/teacher/TeacherSignupView.vue";
import TeacherDashboardView from "@/views/teacher/TeacherDashboardView.vue";

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
      name: 'signup-page',
      component: SignupView
    },
    {
      path: '/student-signup',
      name: 'student-signup',
      component:StudentSignupView
    },
    {
      path: '/teacher-signup',
      name: 'teacher-signup',
      component:TeacherSignupView
    },
    {
      path: '/login',
      name: 'login-page',
      component: LoginView
    },
    {
      path: '/student-dashboard',
      name: 'student-dashboard',
      component: StudentDashboardView
    },
    {
      path: '/teacher-dashboard',
      name: 'teacher-dashboard',
      component: TeacherDashboardView
    }
  ]
})

export default router
