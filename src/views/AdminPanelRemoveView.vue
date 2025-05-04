<script setup>
import SlimCard from "@/components/SlimCard.vue";
import { usePlacesStore } from "@/stores/places";

import { useMediaQuery } from "@vueuse/core/index.mjs";
const isLargeScreen = useMediaQuery("(min-width: 1024px)");

const placesStore = usePlacesStore();
</script>

<template>
  <div class="grid grid-cols-1 lg:grid-cols-[minmax(380px,0.72fr)_1fr_1fr]">
    <div v-if="isLargeScreen"></div>

    <div class="flex flex-col gap-4 mt-4 px-8 lg:col-span-2">
      <SlimCard
        v-for="place in placesStore.places"
        :key="place.id"
        :place="place"
      />
    </div>
  </div>
</template>
