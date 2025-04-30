<script setup>
    import { ref, onMounted } from 'vue';
    import axios from 'axios';
    import SingleCard from './SingleCard.vue';

    const places = ref([]);

    onMounted(async () => {
        try {
            const response = await axios.get('/api/places.json')
            console.log(response);
            places.value = response.data.places;
        } catch (error) {
            console.error('Error fetching places', error);
        }
    });
</script>

<template>
    <section class="grid grid-cols-1 m-8 mt-6 gap-10 md:grid-cols-2 2xl:grid-cols-3 2xl:gap-12 2xl:m-14">
        <SingleCard v-for="place in places" :key="place.id" :place="place" />
    </section>

    <h6 class="col-span-full text-center font-bold text-gray-800 mb-6">
        Showing {{ places.length }} of {{ places.length }}
    </h6>
</template>