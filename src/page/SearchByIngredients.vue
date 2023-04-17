<template>
  <div class="grid grid-cols-1 md:grid-cols-4 gap-5 p-5">
    <MealItems v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

import { computed } from "@vue/reactivity";
import store from "../store";
import { useRoute } from "vue-router";

const route = useRoute();
const meals = computed(() => {
  store.state.mealsByIngredient;
});

onMounted(() => {
  store.dispatch("searchMealsByIngredient", route.params.ingredient);
});
</script>
