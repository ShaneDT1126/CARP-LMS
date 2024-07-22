<template>
  <div class="flex h-screen">
    <!-- Sidebar -->
     <NavbarComponent/>


    <!-- Main Content -->
    <main class="flex-1 flex flex-col">
      <!-- Header -->
      <StudentHeader/>

      <!-- Classes Section -->
      <div class="flex-1 p-6">
      <section>
        <h2 class="text-2xl font-bold mb-6 text-blue-600">Your Classes</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="(classItem, index) in classes" :key="index"
               class="rounded-lg shadow-md overflow-hidden">
            <div class="h-24" :class="[index === 1 ? 'bg-blue-200' : 'bg-blue-600']"></div>
            <div class="p-4 bg-white">
              <div class="flex justify-between items-center">
                <span class="font-semibold">{{ classItem.code }}</span>
                <div class="relative">
                  <button @click="classItem.showMenu = !classItem.showMenu" class="text-gray-600 hover:text-gray-800">•••</button>
                  <div v-if="classItem.showMenu" class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Leave class</a>
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">About</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </main>
  </div>
</template>



<script>
import StudentHeader from "@/components/student/StudentHeader.vue";
import NavbarComponent from "@/components/common/NavbarComponent.vue";

export default {
  name: 'StudentClassesView',

  components: {
    StudentHeader,
    NavbarComponent,
  },

  data(){
    return{
      classes: [
        { code: 'CSIT243 - F1' },
        { code: 'CSIT244 - F1' },
        { code: 'CSIT243 - F1' },
      ]
    }
  },

  mounted() {
    document.title = 'Classes | CARP.ED'
  }

}

</script>