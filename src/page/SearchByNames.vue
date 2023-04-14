<template>
  <div class="p-8">
    <input type="text" 
    v-model="keyword"
    @change="searchMeals"
    class="rounded border-2 border-gray-200 w-full" placeholder="Search for meals">
  </div>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-5">
    <div v-for="meal of meals" :key="meal.idMeal">
      <img :src="meal.strMealThumb" :alt="strMeal">
      <h3>{{ meal.strMeal }}</h3>
      <div>
        <a :href="meal.strYoutube" target="_blank"> Youtube</a>
        <router-link to="/" >
          view
        </router-link>
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