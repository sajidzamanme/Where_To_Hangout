<script setup>
import { usePlacesStore } from "@/stores/places";
import { useMediaQuery } from "@vueuse/core/index.mjs";
import router from "@/router";
const isLargeScreen = useMediaQuery("(min-width: 1024px)");

const placesStore = usePlacesStore();
const place = placesStore.selectedPlace;

const goBack = () => {
  router.back();
};
</script>

<template>
  <div class="grid grid-cols-1 lg:grid-cols-[minmax(380px,0.72fr)_1fr_1fr]">
    <div v-if="isLargeScreen"></div>

    <div class="flex flex-row p-8 h-[90vh] mb-2 lg:col-span-2 items-start justify-center">
      <div
        class="grid grid-cols-1 bg-gray-300 rounded-2xl p-6 gap-2"
        style="width: clamp(10rem, 100%, 40rem)"
      >
        <button @click="goBack" class="text-left hover:text-gray-600">
          < Press to go back
        </button>

        <img
          :src="place.imageLocation"
          @error="(e) => (e.target.src = '/img/default.jpeg')"
          class="rounded-2xl w-full aspect-[2.34/1] object-cover m-0 place-self-center"
        />

        <div class="mt-2">
          <h1 class="text-5xl font-medium">{{ place.name }}</h1>
          <p class="text-xl font-medium ml-0.5 self-end">{{ place.type }}</p>
        </div>
        <div>
          <h1 class="text-2xl font-medium ml-0.5">Description:</h1>
          <p class="ml-0.5">{{ place.description }}</p>
        </div>

        <div>
          <h1 class="text-2xl font-medium ml-0.5">Comments:</h1>
          <ul class="list-disc ml-6">
            <li v-for="(comment, index) in place.comments" :key="index">
              {{ comment }}
            </li>
          </ul>
        </div>

        <div class="flex flex-row gap-2">
          <h1>Review:</h1>
          <div class="flex flex-row">
            <img
              src="/img/starIcon.png"
              alt=""
              v-for="n in place.review"
              class="h-[20px] w-[20px]"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
