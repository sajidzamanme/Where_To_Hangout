<script setup>
import { defineProps } from "vue";
import { usePlacesStore } from "@/stores/places";

const props = defineProps({
  place: Object,
});

const placesStore = usePlacesStore();

const handleRemove = () => {
  const placeId = props.place.id;
  placesStore.removePlace(placeId);
};
</script>

<template>
  <div
    class="flex flex-row justify-between items-center p-4 bg-gray-300 rounded-xl"
  >
    <h1 class="font-medium">
      {{ props.place.name }}
    </h1>

    <button @click="handleRemove" class="bg-red-300 p-1.5 rounded-xl">
      Remove
    </button>
  </div>
</template>
