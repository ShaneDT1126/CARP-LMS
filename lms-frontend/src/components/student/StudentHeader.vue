<template>
  <header class="bg-blue-700 p-4 flex justify-end items-center space-x-4 border-l-2">
    <div class="relative flex items-center">
      <input type="text" placeholder="Search... " class="p-2 mr-2 w-48 h-8">
      <button class="absolute right-3 text-gray-400">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </button>
    </div>
    <button class="bg-white text-blue-600 px-2.5 py-1 rounded-md hover:bg-blue-50 transition duration-150 ease-in-out">
      + ENROLL A CLASS
    </button>
  </header>
</template>

<script>

export default {
  name: 'StudentHeader'
}
</script>