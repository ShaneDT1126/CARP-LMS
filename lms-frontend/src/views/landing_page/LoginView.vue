<template>
  <div class="flex min-h-screen bg-white">
    <!-- Left side (empty) -->
    <div class="hidden lg:block lg:w-1/2"></div>

    <!-- Right side with login form -->
    <div class="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12">
      <div class="w-full max-w-md space-y-8">
        <!-- Logo and title -->
        <div class="text-center">
          <h2 class="mt-6 text-xl3 font-bold text-blue-600">CARP.ED</h2>
        </div>

        <!-- Login form -->
        <form class="mt-8 space-y-6" @submit.prevent="submitForm">
          <div class="space-y-4">
            <div>
              <label class="text-vsm text-black">Email</label>
              <input type="email" v-model="form.email" required
                     class="appearance-none relative block w-full px-3 py-2 border border-blue-600 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                     placeholder="Enter your Email">
            </div>
            <div>
              <label class="text-vsm text-black">Password</label>
              <input type="password" v-model="form.password" required
                     class="appearance-none relative block w-full px-3 py-2 border border-blue-600 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                     placeholder="Enter your Password">
            </div>
          </div>
          <p class="mt-2 text-right underline underline-offset-2 text-sm text-blue-600">
            <router-link :to="{name: 'signup-page'}" class="font-medium text-blue-600 hover:text-blue-500">
              Forgor Password?
            </router-link>
          </p>


          <div>
            <button type="submit"
                    class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out shadow-xl">
              LOGIN
            </button>
          </div>
        </form>

        <p class="mt-2 text-center text-sm text-gray-600">
          Don't have an account yet?
          <router-link :to="{name: 'signup-page'}" class="font-medium text-blue-600 hover:text-blue-500">
            Sign up here
          </router-link>
        </p>



      </div>
    </div>
  </div>
</template>

<script>
import {authAPI} from "@/services/api.js";
import {useUserStore} from "@/stores/userStore.js";
import axios from "axios";
export default {
  name: 'LoginPage',

  data(){
    return{
      form: {
        email: '',
        password: ''
      },
    }
  },

  setup(){
    const userStore = useUserStore()

    return {
      userStore
    }

  },

  methods: {
    async submitForm(){
      await authAPI.login(this.form)
          .then(res => {
            this.userStore.setToken(res.data)
            this.$toast.add({ severity: 'success', summary: 'Success!', detail: 'Login Successfully', life: 3000 });

            axios.defaults.headers.common["Authorization"] = "Bearer " + res.data.access
          })
          .catch(err => {
            this.$toast.add({ severity: 'error', summary: 'Error Occurred!', detail: 'Recheck your email or password', life: 3000 });
            console.log('Error: ',err)
          })

      await authAPI.me()
          .then(res => {
            this.userStore.setUserInfo(res.data)
            this.$router.push({name: 'student-dashboard'})
          })
          .catch(err => {
            console.log('Error: ', err)
          })
    },
  }
}
</script>