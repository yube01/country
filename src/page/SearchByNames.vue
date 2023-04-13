<template>
  <div class="p-8">
    <input type="text" 
    v-model="keyword"
    @change="searchMeals"
    class="rounded border-2 border-gray-200 w-full" placeholder="Search for meals">
  </div>
  <div>
    <pre>{{ meals }}</pre>
  </div>
</template>

<script setup>
import { ref } from 'vue';

import store from "../store"
import { computed } from '@vue/reactivity';


const meals = computed(()=> store.state.searchedMeals)


const keyword = ref('')
store.dispatch("searchedMeals",keyword.value)
</script>