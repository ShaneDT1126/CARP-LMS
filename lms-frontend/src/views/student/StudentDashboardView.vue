<template>
  <div class="flex flex-col lg:flex-row h-screen bg-gray-100">
    <!-- Sidebar -->
    <NavbarComponent />

    <!-- Main Content -->
    <div class="flex-1 flex flex-col overflow-hidden">
      <!-- Header -->
      <header class="bg-blue-600 p-4 h-20 border-l-2">
        <div class="flex justify-end items-center h-full">
          <input type="text" placeholder="Search..." class="p-2 mr-2 w-48 h-8">
          <button class="bg-blue-400 text-white w-48 h-8 mr-12">+ ENROLL A CLASS</button>
        </div>
      </header>

      <!-- Content -->
      <main class="flex-1 overflow-y-auto p-6">
        <h1 class="text-2xl font-bold mb-6 text-blue-600">Hello There!</h1>

        <!-- Profile Card -->
        <div class="bg-white rounded-t-lg shadow p-6 mb-8 outline outline-blue-600 outline-1 relative">
          <div class="absolute top-2 right-2"></div>
          <div class="flex items-center">
            <div class="w-16 h-16 bg-gray-300 rounded-full mr-4"></div>
            <div>
              <h2 class="text-xl font-bold text-black">{{ userStore.user.first_name }} {{ userStore.user.last_name }}</h2>
              <p class="text-gray-600">{{ studentInfo }}</p>
            </div>
          </div>
        </div>

        <hr class="bg-blue-100 h-px my-16">

        <!-- Recent Lessons -->
        <h2 class="text-xl font-semibold mb-8 text-blue-600">Your Recent Lessons</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="lesson in recentLessons" :key="lesson.id" class="bg-white rounded-t-lg shadow p-6 mb-8 outline outline-blue-600 outline-1">
            <div>
              <div class="mb-2">Progress: {{ lesson.progress }}%</div>
            </div>
            <div>
              <h3 class="font-semibold text-blue-600">{{ lesson.title }}</h3>
              <p class="text-gray-600">{{ lesson.course }}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>


<script>
import Dialog from "primevue/dialog";
import {useUserStore} from "@/stores/userStore.js";
import NavbarComponent from "@/components/common/NavbarComponent.vue";

export default {
  name: 'StudentDashboardView',

  components: {
    Dialog,
    NavbarComponent
  },

  setup(){
    const userStore = useUserStore()

    return {
      userStore
    }
  },

  data() {
    return {
      visible: false,
      studentInfo: 'Student || Computer Science',
      recentLessons: [
        { id: 1, title: 'I. Introduction To Computer Organization And Architecture', course: 'CSIT243 - F1', progress: 75 },
        { id: 2, title: 'II. Data Representation', course: 'CSIT243 - F1', progress: 1 },
        { id: 3, title: 'III. Boolean Algebra And Logic Gates', course: 'CSIT243 - F1', progress: 0 },
      ]
    }
  },

  methods:{

  },

  mounted() {
    document.title = "Dashboard | CARP.ED"
  },
}
</script>

<style scoped>
/* Custom styling */
.nav a {
  padding: 0.5rem;
  display: block;
  text-decoration: none;
}
</style>
