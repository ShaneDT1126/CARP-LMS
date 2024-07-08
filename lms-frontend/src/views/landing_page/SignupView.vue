<template>
  <div class="flex min-h-screen bg-white">
    <!-- Left side (empty) -->
    <div class="hidden lg:block lg:w-1/2"></div>

    <!-- Right side with login form -->
    <div class="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12">
      <div class="w-full max-w-md space-y-8">
        <!-- Logo and title -->
        <div class="text-center">
          <h2 class="mt-2 text-xl3 font-bold text-blue-600">CARP.ED</h2>
        </div>

        <!-- Login form -->
        <form class="mt-8 space-y-6" @submit.prevent="submitForm">
          <div class="space-y-4">
            <div>
              <label class="text-vsm text-black">First name</label>
              <input type="text" v-model="form.first_name" required
                  class="appearance-none relative block w-full px-3 py-2 border border-blue-600 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Enter your First Name">
            </div>
            <div>
              <label class="text-vsm text-black">Last name</label>
              <input type="text" v-model="form.last_name" required
                  class="appearance-none relative block w-full px-3 py-2 border border-blue-600 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Enter your Last Name">
            </div>
            <div>
              <label class="text-vsm text-black">Email</label>
              <input type="email" v-model="form.email" required
                  class="appearance-none relative block w-full px-3 py-2 border border-blue-600 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Enter your Email">
            </div>
            <div>
              <label class="text-vsm text-black">Password</label>
              <input type="password" v-model="form.password1" required
                  class="appearance-none relative block w-full px-3 py-2 border border-blue-600 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Enter your Username">
            </div>
            <div>
              <label class="text-vsm text-black">Re-type Password</label>
              <input type="password" v-model="form.password2" required
                     class="appearance-none relative block w-full px-3 py-2 border border-blue-600 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                     placeholder="Enter your Password">
            </div>
          </div>
          <div>
            <button type="submit"
                    class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out shadow-xl">
              SIGN UP
            </button>
          </div>
        </form>

        <p class="mt-2 text-center text-sm text-gray-600">
          Already have an account?
          <router-link :to="{name: 'login-page'}" class="font-medium text-blue-600 hover:text-blue-500">
            Login here
          </router-link>
        </p>



      </div>
    </div>
  </div>
</template>

<script>
import {authAPI} from "@/services/api.js";
export default {
  name: 'SignupView',

  setup(){

  },

  data(){
    return {
      form: {
        email: '',
        first_name: '',
        last_name: '',
        password1: '',
        password2: ''
      },
      errors: [],
    }
  },

  methods: {
    submitForm(){
      this.errors = []

      if (this.form.first_name === ''){
        this.errors.push('First name field required!')
      }

      if (this.form.last_name === ''){
        this.errors.push('Last name field required!')
      }

      if (this.form.email === ''){
        this.errors.push('Email field required!')
      }

      if (this.form.password1 === ''){
        this.errors.push('Password field required!')
      }

      if (this.form.password1 !== this.form.password2){
        this.errors.push('Password does not match')
      }

      if (this.errors.length === 0){
        authAPI.register(this.form)
            .then(res => {
              if (res.data.message === 'Success'){
                this.$toast.add({ severity: 'success', summary: 'Success!', detail: 'Account Created Successfully', life: 3000 });

                this.form.email = ''
                this.form.first_name = ''
                this.form.last_name = ''
                this.form.password1 = ''
                this.form.password2 = ''

                this.$router.push({name: 'login-page'})

              }else{
                this.$toast.add({ severity: 'error', summary: 'Error Occurred!', detail: 'Account Created Unsuccessfully', life: 3000 });
              }
            })
            .catch(err =>{
              console.log('error', err)
            })
      }

    }
  }

}
</script>