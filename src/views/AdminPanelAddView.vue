<script setup>
import { reactive } from "vue";
import { usePlacesStore } from "@/stores/places";
import router from "@/router";
import { useMediaQuery } from "@vueuse/core/index.mjs";
const isLargeScreen = useMediaQuery("(min-width: 1024px)");

const placesStore = usePlacesStore();

const placeObject = reactive({
  name: "",
  type: "",
  imageLocation: "",
  comments: ["", "", ""],
  review: "",
});

const addNewCommentBox = () => {
  placeObject.comments.push("");
};

const deleteLastCommentBox = () => {
  placeObject.comments.pop();
};

const handleSubmit = () => {
  const newPlace = { ...placeObject };
  placesStore.addPlace(newPlace);
  router.push('/admin-panel')
};
</script>

<template>
  <div class="grid grid-cols-1 lg:grid-cols-[minmax(380px,0.72fr)_1fr_1fr]">
    <div v-if="isLargeScreen"></div>

    <div class="flex flex-col items-center my-12 lg:col-span-2">
      <form
        @submit.prevent="handleSubmit"
        class="flex flex-col w-3/4 2xl:w-3/5 gap-4 bg-gray-300 py-7 px-6 rounded-2xl"
      >
        <h1 class="text-center font-medium text-4xl">Add Place:</h1>
        <div class="flex flex-col items-start">
          <label for="Name" class="font-medium">Name: </label>
          <input
            v-model="placeObject.name"
            type="text"
            placeholder="Name of the Place"
            class="border bg-white w-full rounded h-8"
            required
          />
        </div>
        <div class="flex flex-col items-start">
          <label for="Name" class="font-medium">Type: </label>
          <input
            v-model="placeObject.type"
            type="text"
            placeholder="Type of the Place (eg. Cafe, Resturant, Food Court)"
            class="border bg-white w-full rounded h-8"
            required
          />
        </div>
        <div class="flex flex-col items-start">
          <label for="Name" class="font-medium">Image Location: </label>
          <input
            v-model="placeObject.imageLocation"
            type="text"
            placeholder="You can leave this empty for no image"
            class="border bg-white w-full rounded h-8"
          />
        </div>
        <div class="flex flex-col items-start">
          <label for="Name" class="font-medium">Review: </label>
          <input
            v-model="placeObject.review"
            type="number"
            placeholder="Number of stars"
            class="border bg-white w-full rounded h-8"
            required
          />
        </div>

        <div class="flex flex-col justify-start border p-2 gap-2">
          <h1 class="text-xl font-medium">Comments:</h1>

          <div v-for="(cmnt, index) in placeObject.comments" :key="cmnt.id">
            <label :for="`Name` + index">Comment {{ index + 1 }}</label>
            <input
              v-model="placeObject.comments[index]"
              :id="`name` + index"
              type="text"
              class="border bg-white w-full rounded h-8"
              required
            />
          </div>

          <div class="flex flex-row items-start">
            <button
              type="button"
              @click="addNewCommentBox"
              class="bg-white text-red-600 border border-black py-1 px-2 rounded-lg hover:bg-gray-100"
            >
              🞦
            </button>
            <button
              type="button"
              @click="deleteLastCommentBox"
              class="bg-white text-red-600 border border-black py-1 px-2 rounded-lg hover:bg-gray-100"
            >
              ---
            </button>
          </div>
        </div>

        <button
          type="submit"
          class="bg-white border p-2 text-2xl font-medium self-center w-fit rounded-lg hover:bg-gray-100"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</template>
