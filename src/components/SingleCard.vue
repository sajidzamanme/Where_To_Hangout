<script setup>
import { defineProps } from "vue";

const props = defineProps({
  place: Object,
});
</script>

<template>
  <RouterLink
    to="/"
    class="bg-gray-300 flex flex-col pb-4 rounded-2xl border border-gray-300 group hover:bg-gray-200"
  >
    <img
      :src="props.place.imageLocation"
      @error="(e) => (e.target.src = '/img/default.jpeg')"
      class="rounded-t-2xl aspect-[2.34/1] object-cover group-hover:opacity-90"
    />

    <div class="flex flex-col p-6 pb-3 gap-2">
      <h1 class="text-2xl font-medium">
        {{ props.place.name }}
      </h1>

      <ul class="ml-6 list-disc">
        <li
          v-for="cmnt in props.place.comments.slice(
            0,
            3 || props.place.comments.length
          )"
          :key="cmnt.id"
        >
          {{ cmnt }}
        </li>
      </ul>
    </div>

    <div class="flex flex-row justify-between gap-1 ml-6">
      <div class="flex flex-row">
        <div v-for="n in props.place.review" :key="n">
          <img src="/img/starIcon.png" alt="" class="h-[20px] w-[20px]" />
        </div>
      </div>

      <p class="mr-4 text-blue-900 hover:text-blue-400">Press for more Info</p>
    </div>
  </RouterLink>
</template>
