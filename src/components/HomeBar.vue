<script setup>
    import HomeBarButton from './HomeBarButton.vue';

    const buttonNames = ["Popular", "Favorites", "Cafes", "Resturants", "Food Court"]
</script>

<template>
        <section class="p-5 lg:mt-8 lg:m-8">
            <div class="flex flex-row bg-gray-100 p-2 rounded-2xl gap-4 items-center justify-start overflow-x-auto 
            whitespace-nowrap no-scrollbar md:justify-center lg:justify-start xl:justify-center">
                <HomeBarButton v-for="buttonName in buttonNames" :key="buttonName.id" :buttonName=buttonName />
            </div>
        </section>
</template>