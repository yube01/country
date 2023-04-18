<template>
  <div class="p-8">
    <input
      type="text"
      v-model="keyword"
      @change="searchMeals"
      class="rounded border-2 border-gray-200 w-full"
      placeholder="Search for meals"
    />
  </div>

  <Meals :meals="meals" />
</template>

<script setup>
import { ref, onMounted } from "vue";

import store from "../store";
import { computed } from "@vue/reactivity";
import { useRoute } from "vue-router";
import Meals from "../components/Meals.vue";

const meals = computed(() => store.state.searchedMeals);
const route = useRoute();

const keyword = ref("");
function searchMeals() {
  if (keyword.value) {
    store.dispatch("searchMeals", keyword.value);
  } else {
    store.commit("setSearchedMeals", []);
  }
}
onMounted(() => {
  keyword.value = route.params.name;
  if (keyword.value) {
    searchMeals();
  }
});
</script>
