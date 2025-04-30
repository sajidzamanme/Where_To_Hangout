<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import { useMediaQuery } from "@vueuse/core/index.mjs";

let clicked = ref(false);
const isLargeScreen = useMediaQuery("(min-width: 1024px)");

const menuClicked = () => {
  clicked.value = !clicked.value;
};
</script>

<template>
  <nav v-if="!isLargeScreen" class="flex flex-col">
    <div
      class="z-50 flex flex-row items-center justify-start p-5 shadow bg-white"
    >
      <!-- Need to stick it to top -->
      <button
        v-if="!isLargeScreen"
        @click="menuClicked"
        class="flex flex-col gap-[6px]"
      >
        <div class="w-10 h-1 bg-black"></div>
        <div class="w-10 h-1 bg-black"></div>
        <div class="w-10 h-1 bg-black"></div>
      </button>

      <div class="flex w-full justify-center">
        <a
          href="/"
          class="text-[clamp(1.875rem,6dvw,2.25rem)] leading-[1.3] font-extrabold"
          >Where To Hangout</a
        >
      </div>
    </div>

    <div
      v-if="clicked && !isLargeScreen"
      @click="menuClicked"
      class="fixed inset-0 z-40 bg-black opacity-20"
    ></div>

    <div
      v-if="clicked && !isLargeScreen"
      @click.stop
      class="fixed z-49 h-dvh bg-white p-5 pr-[50px] border-r-2 border-gray-400 md:pr-[100px] lg:pr-[150px] lg:grid-cols-4"
    >
      <div
        class="flex flex-col col-span-2 justify-center h-[90vh] gap-5 text-left tracking-widest md:col-span-1"
      >
        <RouterLink to="/" class="text-4xl font-extrabold hover:text-gray-600"
          >Home</RouterLink
        >
        <RouterLink
          to="/login"
          class="text-4xl font-extrabold hover:text-gray-600"
          >Login/Signup</RouterLink
        >
        <RouterLink
          to="/settings"
          class="text-4xl font-extrabold hover:text-gray-600"
          >Settings</RouterLink
        >
        <RouterLink
          to="/support"
          class="text-4xl font-extrabold hover:text-gray-600"
          >Support</RouterLink
        >
        <RouterLink
          to="/aboutUs"
          class="text-4xl font-extrabold hover:text-gray-600"
          >About Us</RouterLink
        >
        <div class="flex flex-row gap-4 pl-1 self-start">
          <a href="https://www.facebook.com/">
            <img
              src="../img/facebookIcon.png"
              alt=""
              class="h[35px] w-[35px]"
            />
          </a>
          <a href="https://www.instagram.com/">
            <img
              src="../img/instagramIcon.png"
              alt=""
              class="h[35px] w-[35px]"
            />
          </a>
        </div>
      </div>
    </div>
  </nav>

  <nav v-else class="fixed h-dvh bg-white p-10 border-r-2 border-gray-300">
    <a
      href="/"
      class="text-[clamp(1.875rem,6dvw,2.25rem)] leading-[1.3] font-extrabold"
      >Where To Hangout</a
    >
    <div
      class="flex flex-col justify-center h-[90vh] gap-5 text-left tracking-widest"
    >
      <RouterLink to="/" class="text-4xl font-extrabold hover:text-gray-600"
        >Home</RouterLink
      >
      <RouterLink
        to="/login"
        class="text-4xl font-extrabold hover:text-gray-600"
        >Login/Signup</RouterLink
      >
      <RouterLink
        to="/settings"
        class="text-4xl font-extrabold hover:text-gray-600"
        >Settings</RouterLink
      >
      <RouterLink
        to="/support"
        class="text-4xl font-extrabold hover:text-gray-600"
        >Support</RouterLink
      >
      <RouterLink
        to="/aboutUs"
        class="text-4xl font-extrabold hover:text-gray-600"
        >About Us</RouterLink
      >
      <div class="flex flex-row gap-4 pl-1 self-start">
        <a href="https://www.facebook.com/">
          <img src="../img/facebookIcon.png" alt="" class="h[35px] w-[35px]" />
        </a>
        <a href="https://www.instagram.com/">
          <img src="../img/instagramIcon.png" alt="" class="h[35px] w-[35px]" />
        </a>
      </div>
    </div>
  </nav>
</template>
