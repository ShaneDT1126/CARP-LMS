<template>
  <div>
    <router-link :to="{name: 'login-page'}">Login</router-link>
    <br>
    <button @click="visibleToggle">Get Started</button>
    <Dialog v-model:visible="visible" modal header="Account Type" :style="{ width: '25rem' }">
      <router-link :to="{name: 'student-signup'}">Student</router-link>
      <router-link :to="{name: 'teacher-signup'}">Teacher</router-link>
    </Dialog>
  </div>
</template>



<script>
import Dialog from "primevue/dialog";

export default {
  name: 'landing-page',

  data() {
    return{
      visible: false,
    }
  },

  methods: {
    visibleToggle(){
      this.visible = !this.visible
      console.log('visible',this.visible)
    }
  },

  components: {Dialog}

}

</script>