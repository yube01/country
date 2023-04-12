<script setup>

</script>

<template>
  
<div class="bg-gray-100 h-full">
  <header class="bg-white shadow h-16 flex justify-between ">

    <router-link :to="{name:'home'} " class="inline-flex px-5 items-center h-full">
        Home
    </router-link>
   <div class="flex justify-center gap-1 items-center">
     <router-link to="/" class="  inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100 "  >
        Search Meal
      </router-link>

      <router-link to="/" class=" inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100">
        Search Meals by letters
      </router-link>
      <router-link to="/" class=" inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100">
        Meals by Ingredients
      </router-link>
   </div>
  </header>
  <main>
    <router-view />
  </main>
</div>

</template>

<style scoped>

</style>
