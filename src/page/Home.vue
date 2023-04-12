<template>
<div class="flex flex-col p-8">
  <input type="text" class="rounded border-2 border-gray-200 w-full" placeholder="Search for country">
  <div class="flex justify-center mt-2 gap-5">
    <router-link :to="{name:'byLetter', params:{ letter }}" v-for="letter of letters" :key="letter" >
      {{ letter }}

    </router-link>

  </div>
  <!-- <pre>{{ ingredients }}</pre> -->
</div>

</template>

<script setup>
import { onMounted, ref } from 'vue';

import axiosClient from '../axiosClient';

const ingredients = ref([])

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("")
onMounted(async() => {
  const response = await axiosClient.get('/list.php?i=list')
  
  console.log(response.data)

  ingredients.value = response.data

  

})
</script>