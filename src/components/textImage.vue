<template>
    <div class="container text-image-component">
        <h2 class="text-center" v-if="tic.headline !== ''">{{ tic.headline }}</h2>
        <div class="row">
            <div class="col-sm-12 col-lg-6">
                <div class="image-container">
                    <b-img v-if="tic.image.src !== ''" :src="tic.image.src" fluid :alt="tic.image.alt"></b-img>
                </div>
            </div>
            <div class="col-sm-12 col-lg-6">
                <h3 class="text-center" v-if="tic.text.heading !== ''">{{ tic.text.heading }}</h3>
                <p v-if="tic.text.paragraph !== ''">{{ tic.text.paragraph }}</p>
                <b-button v-if="tic.text.button.href !== '' && tic.text.button.label !== ''"
                          :href="tic.text.button.href">{{ tic.text.button.label }}
                </b-button>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "text-image",
        props: ['tic'],
    }
</script>