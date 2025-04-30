<script setup>
    import HomeBar from '@/components/HomeBar.vue';
    import CardList from '@/components/CardList.vue';

    import { useMediaQuery } from "@vueuse/core/index.mjs";
    const isLargeScreen = useMediaQuery("(min-width: 1024px)");
</script>

<template>
    <div class="grid grid-cols-1 lg:grid-cols-[minmax(380px,0.72fr)_1fr_1fr] h-dvh">
        <div v-if="isLargeScreen"></div>
        <section class="lg:col-span-2">
            <div>
                <HomeBar />
            </div>
            <div class="">
                <CardList />
            </div>
        </section>
    </div>
</template>