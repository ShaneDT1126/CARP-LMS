<template>
  <div class="flex h-screen bg-gray-100">
    <!-- Sidebar -->
    <div class="w-64 bg-blue-700 text-white p-6">
      <div class="text-2xl font-bold mb-8">CARP:ED</div>
      <nav class="space-y-2">
        <button class="w-full text-left py-2 px-4 rounded bg-blue-600">Dashboard</button>
        <button class="w-full text-left py-2 px-4 rounded hover:bg-blue-600">Classes</button>
        <button class="w-full text-left py-2 px-4 rounded hover:bg-blue-600">Preferences</button>
        <button class="w-full text-left py-2 px-4 rounded hover:bg-blue-600">CARP</button>
      </nav>
    </div>

    <!-- Main Content -->
    <div class="flex-1 flex flex-col">
      <!-- Header -->
      <header class="bg-blue-700 p-4 flex justify-between items-center">
        <div class="relative">
          <input type="text" placeholder="Search..." class="py-1 px-3 rounded">
        </div>
        <button class="bg-green-500 text-white py-2 px-4 rounded">+ ENROLL A CLASS</button>
      </header>

      <!-- Course Content -->
      <div class="flex-1 p-6 overflow-auto">
        <div class="mb-6">
          <button class="text-2xl mr-4">&larr;</button>
          <h1 class="text-2xl font-bold inline-block">CSIT243 Computer Systems Architecture - F1</h1>
        </div>

        <!-- Tabs -->
        <div class="flex border-b mb-6">
          <button class="py-2 px-4 border-b-2 border-blue-500 text-blue-500">Posts</button>
          <button class="py-2 px-4">Lessons</button>
          <button class="py-2 px-4">Quizzes</button>
        </div>

        <!-- Posts -->
        <div class="bg-white rounded-lg shadow p-6 mb-6">
          <div class="flex items-start mb-4">
            <img src="path_to_avatar.jpg" alt="Avatar" class="w-12 h-12 rounded-full mr-4">
            <div>
              <h3 class="font-bold">Jun Cyric Shane S. Dela Torre</h3>
              <p class="text-sm text-gray-500">Monday, 5:00 AM</p>
              <div class="mt-2">
                <p class="mb-2">Welcome Class!</p>
                <p class="mb-2">For today, please make sure to open and study the lessons I provided. We will have our quiz this coming Wednesday.</p>
                <p class="mb-2">React to this post for me to check your attendance.</p>
                <p class="mb-2">If you have any questions or concerns, please send me a PM directly.</p>
                <p>Thanks and God Bless!</p>
              </div>
            </div>
          </div>

          <!-- Reaction Buttons -->
          <div class="flex justify-between border-t border-b py-2 mb-4">
            <button class="text-xl">👍</button>
            <button class="text-xl">➕</button>
            <button class="text-xl">❤️</button>
            <button class="text-xl">🤔</button>
            <button class="text-xl">👏</button>
            <button class="text-xl">👎</button>
          </div>

          <!-- Comments -->
          <div class="space-y-4">
            <div class="flex items-start">
              <img src="path_to_avatar.jpg" alt="Avatar" class="w-8 h-8 rounded-full mr-3">
              <div>
                <h4 class="font-bold">Jose Elijah Fernandez</h4>
                <p class="text-sm text-gray-500">Monday, 5:14 AM</p>
                <p>May quiz nng Wednesday sir?</p>
              </div>
            </div>
            <div class="flex items-start">
              <img src="path_to_avatar.jpg" alt="Avatar" class="w-8 h-8 rounded-full mr-3">
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
export default {
  name: 'CourseView',
  // Add any necessary component logic here
}
</script>



<script>
export default {
  name: "StudentClassView.vue"
}
</script>