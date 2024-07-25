<template>
  <nav class="w-full lg:w-56 bg-blue-700 text-white p-3 flex flex-col justify-between">
    <div>
      <div class="mb-8">
        <h6 class="text-xl font-bold">CARP.ED</h6>
      </div>
      <ul class="mt-8 lg:mt-24 space-y-4">
        <li>
          <router-link :to="{name: 'student-dashboard'}" class="block mb-5 pl-2 hover:bg-blue-700 rounded-md text-white outline outline-offset-2 outline-1">Dashboard</router-link>
        </li>
        <li>
          <router-link :to="{name: 'student-classes'}" class="block mb-5 pl-2 hover:bg-blue-700 rounded-md text-white outline outline-offset-2 outline-1">Classes</router-link>
        </li>
        <li>
          <router-link to="" class="block pl-2 hover:bg-blue-700 rounded-md text-white outline outline-offset-2 outline-1">CARP</router-link>
        </li>
      </ul>
    </div>
    <div class="mt-auto">
      <button @click="logoutModalToggle" class="block pl-2 underline underline-offset-2 text-white">Logout</button>
      <Dialog v-model:visible="visible" modal header="Are you sure you want to logout?" :style="{ width: '25rem' }">
        <button @click="logout">Yes</button>
        <button @click="logoutModalToggle">No</button>
      </Dialog>
    </div>
  </nav>
</template>


<script>
import Dialog  from "primevue/dialog";
import {useUserStore} from "@/stores/userStore.js";
import {useStudentStore} from "@/stores/studentStore.js";

export default {
  name: 'NavbarComponent',

  components: {
   Dialog,
  },

  setup(){
    const userStore = useUserStore()
    const studentStore = useStudentStore()

    return {
      userStore, studentStore
    }
  },

  data(){
    return {
      visible: false
    }
  },

  methods:{
    logoutModalToggle(){
      this.visible = !this.visible
    },
    logout(){
      this.userStore.removeToken()
      this.studentStore.removeStudentInfo()

      this.$router.push({name: 'login-page'})
    },
  }
}
</script>