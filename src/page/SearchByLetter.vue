<template>
  <div class="flex justify-center mt-2 gap-5">
    <router-link
      :to="{ name: 'byLetter', params: { letter } }"
      v-for="letter of letters"
      :key="letter"
    >
      {{ letter }}
    </router-link>
  </div>
  {{ meals }}
</template>

<script setup>
import { computed } from "@vue/reactivity";
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import store from "../store";
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const route = useRoute();
const meals = computed(() => {
  store.store.searchMealsByLetter;
});
onMounted(() => {
  store.dispatch("searchMealsByLetter", route.params.letter);
});
</script>
