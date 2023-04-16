<template>
  <a
    :href="href"
    target="_blank"
    class="px-3 py-2 rounded border-red-600-2 bg-red-600 hover:bg-red-500 text-white transition-colors cursor-pointer"
  >
    <slot> </slot>
  </a>
</template>

<script setup>
import { string } from "prop-types";

const props = defineProps({
  href: string,
});
</script>
