<template>
  <div>
    <pre>{{ meal }}</pre>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import axiosClient from '../axiosClient';

const meal = ref({})
const route = useRoute()

onMounted(() => {
  axiosClient.get(`/lookup.php?i=${route.params.id}`)
    .then(({ data }) => {
      debugger
    meal.value =data.meals[0] || {} })
})

</script>