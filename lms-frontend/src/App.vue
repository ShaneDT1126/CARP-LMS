<template>
  <router-view/>
  <Toast/>
</template>


<script>
import Toast from 'primevue/toast';
import {useUserStore} from "@/stores/userStore.js";
import axios from "axios";
export default {
  name: 'App',

  components: {
    Toast,
  },

  setup(){
    const userStore = useUserStore()

    return {
      userStore
    }
  },


  beforeCreate() {
    this.userStore.initStore()

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
