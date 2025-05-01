<script setup>
    import { defineProps } from 'vue';

    defineProps({
        buttonName: {
            type: String,
        }
    });
</script>

<template>
    <button class="flex flex-row min-w-[120px] h-[50px] bg-gray-300 
    rounded-2xl items-center justify-center select-none hover:bg-gray-200">
        <h2 class="text-[18px] font-bold">{{ buttonName }}</h2>
    </button>
</template>