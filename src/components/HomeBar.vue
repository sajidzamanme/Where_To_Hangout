<script setup>
    import HomeBarButton from './HomeBarButton.vue';

    const buttonNames = ["Popular", "Favorites", "Cafes", "Resturants", "Food Court"]
</script>

<template>
        <section class="flex flex-row justify-center p-5 lg:mt-8 lg:m-8">
            <div class="flex flex-row bg-gray-100 p-2 w-fit rounded-2xl gap-4 items-center justify-start overflow-x-auto 
            whitespace-nowrap no-scrollbar">
                <HomeBarButton v-for="buttonName in buttonNames" :key="buttonName.id" :buttonName=buttonName />
            </div>
        </section>
</template>