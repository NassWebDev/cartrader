<script setup>
definePageMeta({
  layout: "custom"
});

const route = useRoute();

const {id} = route.params;

const {data: messages} = useFetch(`/api/car/listings/${id}/message`)
</script>

<template>
  <div class="rounded shadow mt-20">
    <CarMessageCard v-for="message in messages" :key="message.id" :message="message"/>
  </div>
  <p v-if="!messages.length">Il n'y a aucun message pour le moment.</p>
</template>