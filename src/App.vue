<script setup>
import UploadFiles from "./components/UploadFiles.vue"
import ByteArrayImage from "./components/ByteArrayImage.vue";
</script>

<template>
    <div>
        <div class="container" style="width:600px">
            <div class="title">
                <h3>bezkoder.com</h3>
                <h4>Vue.js upload Files</h4>
            </div>
            <UploadFiles />

            <div>
                <ByteArrayImage />
            </div>

        </div>
    </div>
</template>

<style scoped>

h3{
    font-size: 1.75rem;
    font-weight: bold;
}

h4{
    font-size: 1.25rem;
}

.title{
    text-align: center;
    margin: 20px 0px;
}

.container {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}

@media (min-width: 1200px){
.container, .container-lg, .container-md, .container-sm, .container-xl {
    max-width: 1140px;
    }
}

@media (min-width: 992px){
    .container, .container-lg, .container-md, .container-sm {
        max-width: 960px;
    }
}

@media (min-width: 768px){
    .container, .container-md, .container-sm {
        max-width: 720px;
    }
}

@media (min-width: 576px){
    .container, .container-sm {
        max-width: 540px;
    }
}

@media (min-width: 1200px){
    .container {
        max-width: 1140px;
    }
}

@media (min-width: 992px){
    .container {
        max-width: 960px;
    }
}
@media (min-width: 768px){
    .container {
        max-width: 720px;
    }
}

@media (min-width: 576px){
    .container {
        max-width: 540px;
    }
}


</style>