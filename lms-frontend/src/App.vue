<template>
  <router-view/>
  <Toast/>
</template>


<script>
import Toast from 'primevue/toast';
import {useUserStore} from "@/stores/userStore.js";
import {useStudentStore} from "@/stores/studentStore.js";
import axios from "axios";
export default {
  name: 'App',

  components: {
    Toast,
  },

  setup(){
    const userStore = useUserStore()
    const studentStore = useStudentStore()

    return {
      userStore, studentStore
    }
  },


  beforeCreate() {
    this.userStore.initStore()
    this.studentStore.studentInitStore()

    const token = this.userStore.user.access

    if (token) {
      axios.defaults.headers.common["Authorization"] = "Bearer " + token
    } else {
      axios.defaults.headers.common["Authorization"] = ""
    }

  }
}
</script>

<style lang="scss">
@import '../node_modules/bulma';
</style>
