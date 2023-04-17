<template>
  <div class="p-8">
    <h1 class="text-5xl font-bold mb-6">Ingredients</h1>
    <div
      v-for="ingredient of ingredients"
      :key="ingredient.id"
      class="bg-white rounded mb-5 p-5 shadow"
    >
      <h3 class="text-2xl font-bold">
        {{ ingredient.strIngredient }}
      </h3>
      <p>{{ ingredient.strDescription }}</p>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import axiosClient from "../axiosClient";

const ingredients = ref([]);
onMounted(() => {
  axiosClient.get("/list.php?i=list").then(({ data }) => {
    ingredients.value = data.meals;
  });
});
</script>
