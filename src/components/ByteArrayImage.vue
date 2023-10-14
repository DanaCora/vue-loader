<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';

const imageUrl = ref(null);

onMounted(() => {
    axios.get('http://127.0.0.1:8080/qrcode', { responseType: 'text' })
    .then(response => {
        const imageBase64 = response.data.message;
        imageUrl.value = `data:image/png;base64,${imageBase64}`;
    })
    .catch(error => {
        console.error(error);
    });
})
</script>

<template>
    <div>
        <img :src="imageUrl" alt="Image">
    </div>
</template>