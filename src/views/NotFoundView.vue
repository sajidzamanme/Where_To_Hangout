<script setup>
    import { useMediaQuery } from "@vueuse/core/index.mjs";
    const isLargeScreen = useMediaQuery("(min-width: 1024px)");
</script>

<template>
  <div
    class="grid grid-cols-1 lg:grid-cols-[minmax(380px,0.72fr)_1fr_1fr]"
  >
  <div v-if="isLargeScreen"></div>  
  <section class="lg:col-span-2 mt-10">
      <div class="flex flex-col items-center gap-3">
        <h1 class="text-7xl font-bold">Error : 404</h1>
        <h2 class="text-3xl font-medium">Page Not Found</h2>
      </div>
    </section>
  </div>
</template>
