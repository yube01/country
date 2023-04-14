<template>
  <div class="p-8">
    <input type="text" 
    v-model="keyword"
    @change="searchMeals"
    class="rounded border-2 border-gray-200 w-full" placeholder="Search for meals">
  </div>
  <div class="grid grid-cols-1 md:grid-cols-4 gap-5 p-5">
    <div v-for="meal of meals" :key="meal.idMeal" class="bg-white shadow rounded-xl">
      <router-link to="">
        <img :src="meal.strMealThumb" :alt="strMeal" class="rounded-t-xl w-full h-48 object-cover">
      </router-link>
      <div class="p-5">
        <h3 class=" font-semibold">{{ meal.strMeal }}</h3>
        <p class="mb-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod, modi.
        </p>
        <div class="flex items-center justify-between">
          <a :href="meal.strYoutube" target="_blank" class="px-3 py-2 rounded border-red-600-2 bg-red-600 hover:bg-red-500 text-white transition-colors"> Youtube</a>
         
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

import store from "../store"
import { computed } from '@vue/reactivity';


const meals = computed(()=> store.state.searchedMeals)


const keyword = ref('')
function searchMeals() {
  if (keyword.value) {
    store.dispatch("searchMeals", keyword.value);
  } else {
    store.commit("setSearchedMeals", []);
  }
}
</script>