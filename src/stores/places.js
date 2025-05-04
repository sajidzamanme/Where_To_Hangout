import { defineStore } from "pinia";
import { ref, onMounted } from "vue";
import axios from "axios";

export const usePlacesStore = defineStore("places", () => {
  const places = ref([]);
  const selectedPlace = ref(null);

  const fetchPlaces = async () => {
    if (places.value.length > 0) {
      return;
    }
    
    try {
      const response = await axios.get('/api/places.json');
      places.value = response.data.places;
    } catch (error) {
      console.error("Error fetching places", error);
    }
  };

  const addPlace = (newPlace) => {
    const id = places.value.length ? (parseInt(places.value[places.value.length - 1].id) + 1).toString() : "1";
    places.value.push({ ...newPlace, id });
  };

  const removePlace = (id) => {
    places.value = places.value.filter((place) => place.id !== id);
  };

  const setSelectedPlace = (plc) => {
    selectedPlace.value = plc;
  };

  onMounted(fetchPlaces);

  return {
    places,
    addPlace,
    removePlace,
    selectedPlace,
    setSelectedPlace,
  };
});