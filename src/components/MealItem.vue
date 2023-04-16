<template>
  <div class="bg-white shadow rounded-xl">
    <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
      <img
        :src="meal.strMealThumb"
        :alt="strMeal"
        class="rounded-t-xl w-full h-48 object-cover"
      />
    </router-link>
    <div class="p-5">
      <h3 class="font-semibold">{{ meal.strMeal }}</h3>
      <p class="mb-4">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod, modi.
      </p>
      <div class="flex items-center justify-between">
        <YouTube :href="meal.strYouTube"> YouTube </YouTube>
      </div>
    </div>
  </div>
</template>

<script setup>
import { object } from "prop-types";
import YouTube from "./YouTube.vue";

const { meal } = defineProps({
  meal: object,
});
</script>
