<script setup>
import useFetchCar from '@/composables/useFetchCar';

const route = useRoute();
const { toTitleCase } = useUtilities();
useHead({
  title: toTitleCase(route.params.name),
});

const { data: car } = useFetchCar(route.params.id)

definePageMeta({
  layout: "custom",
});
</script>

<template>
  <div>
    <CarDetailHero :car="car" />
    <CarDetailAttributes :features="car.features" />
    <CarDetailDescription :description="car.description" />
    <CarDetailContact />
  </div>
</template>