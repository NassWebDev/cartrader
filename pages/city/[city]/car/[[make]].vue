<script setup>
import useFetchCars from '@/composables/useFetchCars';

const route = useRoute();
const { data: cars, refresh} = useFetchCars(route.params.city, {
  make: route.params.make,
  minPrice: route.query.minPrice,
  maxPrice: route.query.maxPrice,
})

watch(() => route.query, () => window.location.reload(true))
</script>

<template>
  <div>
    <CarCards v-if="cars?.length" :cars=" cars" />
    <h1 v-else class="text-red-600">No Cars Found With Filters</h1>
  </div>
</template>
