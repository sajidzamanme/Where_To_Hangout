<script setup>
    import { defineProps } from 'vue';

    const props = defineProps({
        place: Object,
    });

</script>

<template>
    <a href="#" class="bg-gray-300 flex flex-col pb-4 rounded-2xl 
    border border-gray-300 group hover:bg-gray-200">
        <img :src="props.place.imageLocation" class="rounded-t-2xl group-hover:opacity-90">

        <div class="flex flex-col p-6 pb-3 gap-2">
            <h1 class="text-2xl font-medium">
                {{ props.place.name }}
            </h1>

            <ul class="ml-6 list-disc">
                <li>{{ props.place.comments.one }}</li>
                <li>{{ props.place.comments.two }}</li>
                <li>{{ props.place.comments.three }}</li>
            </ul>
        </div>

        <div class="flex flex-row gap-1 ml-6">
            <div v-for="n in props.place.review" :key="n">
                <img src="../img/starIcon.png" alt="" class="h-[20px] w-[20px]">
            </div>
        </div>
    </a>
</template>