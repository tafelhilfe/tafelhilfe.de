<template>
    <b-container fluid>
        <b-row>
            <div class="col-12 col-sm col-md-12 col-lg d-flex align-items-center justify-content-center text-center text-white vp bg-tafeln">
                <div class="flex-row">
                    <h2 class="h1">{{home.tafeln.headline}}</h2>
                    <p v-html="home.tafeln.text"/>
                    <b-button :to="home.tafeln.href" pill variant="dark" size="lg" class="shadow-lg">{{home.tafeln.button}} <b-icon icon="chevron-right" font-scale=".99"></b-icon></b-button>
                </div>
            </div>
            <div class="col-12 col-sm col-md-12 col-lg d-flex align-items-center justify-content-center text-center text-white bg-helfer vp">
                <div class="flex-row">
                    <h2 class="h1">{{home.helfer.headline}}</h2>
                    <p v-html="home.helfer.text"/>
                    <b-button  :to="home.helfer.href" pill variant="dark" size="lg" class="shadow-lg"><b-icon icon="chevron-left" font-scale=".99"></b-icon> {{home.helfer.button}}</b-button>
                </div>
            </div>
        </b-row>
    </b-container>
</template>

<script>
  export default {
    name: "home.vue",
    props: ['home']
  }
</script>
