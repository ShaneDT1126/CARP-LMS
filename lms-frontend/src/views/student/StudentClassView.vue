<template>
  <div class="flex h-screen bg-gray-100">
    <!-- Sidebar -->
    <NavbarComponent/>

    <!-- Main Content -->
    <div class="flex-1 flex flex-col">
      <!-- Header -->
      <StudentHeader/>

      <!-- Course Content -->
      <div class="flex-1 p-6 overflow-auto bg-gray-200">
        <!-- Back button and course title -->
        <div class="flex items-center mb-4 pb-5">
          <button class="text-gray-600 mr-4">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
          </button>
          <div class="flex items-center">
            <div class="bg-blue-600 p-2 rounded-lg mr-3">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
              </svg>
            </div>
            <h1 class="text-xl font-bold text-black">CSIT243 Computer Systems Architecture - F1</h1>
          </div>
        </div>

        <!-- Tabs -->
        <div class="flex mb-4 border-b border-blue-600">
          <button class="py-2 px-4 text-white bg-blue-600 rounded-t-lg font-medium">Posts</button>
          <button class="py-2 px-4 text-blue-600 hover:text-blue-800 font-medium">Lessons</button>
          <button class="py-2 px-4 text-blue-600 hover:text-blue-800 font-medium">Quizzes</button>
        </div>

        <!-- Posts -->
        <div class="space-y-4">
          <!-- Instructor's post -->
          <div class="bg-white rounded-lg shadow">
            <div class="p-4">
              <div class="flex items-start">
                <div class="mr-3 pt-1">
                  <figure class="image is-32x32">
                    <img class="is-rounded" src="https://bulma.io/assets/images/placeholders/32x32.png" alt="profile_picture"/>
                  </figure>
                </div>
                <div>
                  <h3 class="font-bold">Jun Cyric Shane S. Dela Torre</h3>
                  <p class="text-sm text-gray-500">Monday, 5:00 AM</p>
                </div>
              </div>
              <div class="mt-3">
                <p class="mb-2">Welcome Class!</p>
                <p class="mb-2">For today, please make sure to open and study the lessons I provided. We will have our quiz this coming Wednesday.</p>
                <p class="mb-2">React to this post for me to check your attendance.</p>
                <p class="mb-2">If you have any questions or concerns, please send me a PM directly.</p>
                <p>Thanks and God Bless!</p>
              </div>
            </div>
            <div class="flex justify-between px-4 py-2 border-t border-gray-200">
              <button class="text-gray-500">👍</button>
              <button class="text-gray-500">❤️</button>
              <button class="text-gray-500">🤔</button>
              <button class="text-gray-500">👏</button>
              <button class="text-gray-500">👎</button>
              <input type="text" placeholder="Add a comment..." class="flex-grow mx-2 px-2 border-b border-gray-300 focus:outline-none focus:border-blue-500">
              <button class="text-blue-600">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                </svg>
              </button>
            </div>
          </div>

          <!-- Comments -->
          <div class="bg-gray-100 rounded-lg p-4">
            <div class="flex items-start mb-4">
              <div class="mr-3 pt-1">
                <figure class="image is-32x32">
                  <img class="is-rounded" src="https://bulma.io/assets/images/placeholders/32x32.png" alt="profile_picture"/>
                </figure>
              </div>
              <div>
                <h4 class="font-bold">Jose Elijah Fernandez</h4>
                <p class="text-sm text-gray-500">Monday, 5:14 AM</p>
                <p>Mag quiz inig Wednesday sir?</p>
              </div>
            </div>
            <div class="flex items-start">
              <div class="mr-3 pt-1">
                <figure class="image is-32x32">
                  <img class="is-rounded" src="https://bulma.io/assets/images/placeholders/32x32.png" alt="profile_picture"/>
                </figure>
              </div>
              <div>
                <h4 class="font-bold">Sheer Jay Pioitos</h4>
                <p class="text-sm text-gray-500">Monday, 6:18 AM</p>
                <p>Thank you sir!</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>



<script>
import NavbarComponent from "@/components/common/NavbarComponent.vue";
import StudentHeader from "@/components/student/StudentHeader.vue";

export default {
  name: "StudentClassView.vue",

  components:{
    NavbarComponent,
    StudentHeader,
  }
}
</script>