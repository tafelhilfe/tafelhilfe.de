<template>
    <div class="container text-image-component">
        <h2 class="text-center" v-if="tic.headline !== ''" v-html="tic.headline" />
        <div class="row">
            <div class="col-sm-12 col-lg-6" v-if="tic.image && tic.image.src !== ''">
                <div class="image-container">
                    <b-img fluid :src="tic.image.src" :alt="tic.image.alt" />
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
        name: "textImage",
        props: ['tic'],
    }
</script>