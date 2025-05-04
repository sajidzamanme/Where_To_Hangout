<script setup>
import NavBar from "@/components/NavBar.vue";
import { RouterView } from "vue-router";

import { useMediaQuery } from "@vueuse/core/index.mjs";
const isLargeScreen = useMediaQuery("(min-width: 1024px)");
</script>

<template>
  <body class="h-[80vh]">
    <NavBar />
    <RouterView />
  </body>
</template>
