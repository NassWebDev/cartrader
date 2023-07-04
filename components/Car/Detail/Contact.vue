<template>
  <div class="mt-10">
    <div class="flex w-[600px] justify-between">
      <input v-model="message.name" type="text" class="border p-1" placeholder="Name" />
      <input v-model="message.email" type="text" class="border p-1" placeholder="Email" />
      <input v-model="message.phone" type="text" class="border p-1" placeholder="Phone" />
    </div>
    <div class="flex mt-4 w-[600px]">
      <textarea v-model="message.message" class="border p-1 w-full" placeholder="Message"></textarea>
    </div>
    <button :disabled="isButtonDisabled" @click="handleSubmit" class="bg-blue-400 text-white px-10 py-3 rounded mt-4">
      Submit
    </button>
    <p v-if="errorMessage" class="mt-3 text-red-400">{{ errorMessage }}</p>
    <p v-if="successMessage" class="mt-3 text-green-400">{{ successMessage }}</p>
  </div>
</template>

<script setup>
const route = useRoute();

const errorMessage = ref("");

const successMessage = ref("")

const message = ref({
  name: "",
  email:"",
  phone:"",
  message:""
})

const isButtonDisabled = computed(() => {
  for(let key in message.value){
    if(!message.value[key]){
      return true
    }
    return false
  }
});

const {id} = route.params

const handleSubmit = (async() => {
  try{
    await $fetch(`/api/car/listings/${id}/message`,{
      method: "POST",
      body: message.value
    });
    message.value= {
      name: "",
      email:"",
      phone:"",
      message:""
    };
    successMessage.value = "Message sent."
  } catch(error){
    errorMessage.value = error.statusMessage;
    successMessage.value = ""
  }
})
</script>