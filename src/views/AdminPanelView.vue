<script setup>
import { RouterLink } from "vue-router";

import { useMediaQuery } from "@vueuse/core/index.mjs";
const isLargeScreen = useMediaQuery("(min-width: 1024px)");
</script>

<template>
  <div class="grid grid-cols-1 lg:grid-cols-[minmax(380px,0.72fr)_1fr_1fr]">
    <div v-if="isLargeScreen"></div>

    <div
      class="flex flex-col justify-center items-center gap-6 mt-16 lg:col-span-2"
    >
      <RouterLink
        to="/admin-panel/add"
        class="bg-gray-300 p-8 rounded-2xl text-2xl font-bold"
      >
        Add Place
      </RouterLink>
      <RouterLink
        to="/admin-panel/remove"
        class="bg-gray-300 p-8 rounded-2xl text-2xl font-bold"
      >
        Remove Place
      </RouterLink>
    </div>
  </div>
</template>
