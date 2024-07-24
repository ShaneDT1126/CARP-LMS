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
          <Card style="width: 20rem; overflow: hidden">
            <template #header>
              <figure class="image is-2by1">
                <img src="https://bulma.io/assets/images/placeholders/640x320.png" />
              </figure>
            </template>
            <template #title>
              <div class="text-black">{{class_code}}</div>
            </template>
            <template #subtitle>{{class_title}}</template>
          </Card>
        </div>
      </section>
      </div>
    </main>
  </div>
</template>



<script>
import StudentHeader from "@/components/student/StudentHeader.vue";
import NavbarComponent from "@/components/common/NavbarComponent.vue";
import {useStudentStore} from "@/stores/studentStore.js";
import Card from 'primevue/card'

export default {
  name: 'StudentClassesView',

  components: {
    StudentHeader,
    NavbarComponent,
    Card
  },

  setup(){
    const studentStore = useStudentStore()
    const class_code = studentStore.student.class_code
    const class_title = studentStore.student.class_title
    return {
      studentStore, class_code, class_title
    }
  },

  data(){
    return{
      showMenu: false,
      classes: [
        { code: 'CSIT243 - F1' },
      ]
    }
  },

  mounted() {
    document.title = 'Classes | CARP.ED'
  }

}

</script>