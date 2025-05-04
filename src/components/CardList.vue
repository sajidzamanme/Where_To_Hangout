<script setup>
import { usePlacesStore } from "@/stores/places";
import SingleCard from "./SingleCard.vue";

const placesStore = usePlacesStore();
</script>

<template>
  <section
    class="grid grid-cols-1 m-8 mt-6 gap-10 md:grid-cols-2 2xl:grid-cols-3 2xl:gap-12 2xl:m-14"
  >
    <SingleCard v-for="place in placesStore.places" :key="place.id" :place="place" />
  </section>

  <h6 class="col-span-full text-center font-bold text-gray-800 mb-6">
    Showing {{ placesStore.places.length }} of {{ placesStore.places.length }}
  </h6>
</template>
